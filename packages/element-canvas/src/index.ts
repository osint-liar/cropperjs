import {
  ACTION_NONE,
  ACTION_ROTATE,
  ACTION_SCALE,
  ACTION_TRANSFORM,
  ATTRIBUTE_ACTION,
  CROPPER_IMAGE,
  EVENT_ACTION,
  EVENT_ACTION_END,
  EVENT_ACTION_MOVE,
  EVENT_ACTION_START,
  EVENT_POINTER_DOWN,
  EVENT_POINTER_MOVE,
  EVENT_POINTER_UP,
  EVENT_WHEEL,
  isElement,
  isFunction,
  isNumber,
  isPlainObject,
  isString,
  off,
  on,
} from '@cropper/utils';
import CropperElement from '@cropper/element';
import style from './style';

interface ActionEventData {
  action: string;
  relatedEvent: Event;
  scale?: number;
  rotate?: number;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
}

export default class CropperCanvas extends CropperElement {
  static $version = '__VERSION__';

  protected $onPointerDown: EventListener | null = null;

  protected $onPointerMove: EventListener | null = null;

  protected $onPointerUp: EventListener | null = null;

  protected $onWheel: EventListener | null = null;

  protected $wheeling = false;

  protected readonly $pointers: Map<number, any> = new Map();

  protected $style = style;

  protected $action = ACTION_NONE;

  background = false;

  disabled = false;

  scale = 0.1;

  themeColor = '#39f';

  protected static get observedAttributes(): string[] {
    return super.observedAttributes.concat([
      'background',
      'disabled',
    ]);
  }

  protected connectedCallback(): void {
    super.connectedCallback();
    on(
      this,
      EVENT_POINTER_DOWN,
      (this.$onPointerDown = this.$handlePointerDown.bind(this)),
    );
    on(
      this.ownerDocument,
      EVENT_POINTER_MOVE,
      (this.$onPointerMove = this.$handlePointerMove.bind(this)),
    );
    on(
      this.ownerDocument,
      EVENT_POINTER_UP,
      (this.$onPointerUp = this.$handlePointerUp.bind(this)),
    );
    on(
      this,
      EVENT_WHEEL,
      (this.$onWheel = this.$handleWheel.bind(this)),
      {
        passive: false,
        capture: true,
      },
    );
  }

  protected disconnectedCallback(): void {
    if (this.$onPointerDown) {
      off(this, EVENT_POINTER_DOWN, this.$onPointerDown);
    }

    if (this.$onPointerMove) {
      off(this.ownerDocument, EVENT_POINTER_MOVE, this.$onPointerMove);
    }

    if (this.$onPointerUp) {
      off(this.ownerDocument, EVENT_POINTER_UP, this.$onPointerUp);
    }

    if (this.$onWheel) {
      off(this, EVENT_WHEEL, this.$onWheel, {
        capture: true,
      });
    }

    super.disconnectedCallback();
  }

  protected $handlePointerDown(event: Event): void {
    const { buttons, button, type } = event as PointerEvent;

    if (this.disabled || (
      // Handle pointer or mouse event, and ignore touch event
      ((type === 'pointerdown' && (event as PointerEvent).pointerType === 'mouse') || type === 'mousedown') && (
        // No primary button (Usually the left button)
        (isNumber(buttons) && buttons !== 1) || (isNumber(button) && button !== 0)

        // Open context menu
        || (event as PointerEvent).ctrlKey
      ))
    ) {
      return;
    }

    const { $pointers } = this;
    let action = '';

    if ((event as TouchEvent).changedTouches) {
      Array.from((event as TouchEvent).changedTouches).forEach(({
        identifier,
        pageX,
        pageY,
      }) => {
        $pointers.set(identifier, {
          startX: pageX,
          startY: pageY,
          endX: pageX,
          endY: pageY,
        });
      });
    } else {
      const { pointerId = 0, pageX, pageY } = (event as PointerEvent);

      $pointers.set(pointerId, {
        startX: pageX,
        startY: pageY,
        endX: pageX,
        endY: pageY,
      });
    }

    if ($pointers.size > 1) {
      action = ACTION_TRANSFORM;
    } else if (isElement(event.target)) {
      action = (event.target as any).action || event.target.getAttribute(ATTRIBUTE_ACTION) || '';
    }

    if (this.$emit(EVENT_ACTION_START, {
      action,
      relatedEvent: event,
    }) === false) {
      return;
    }

    // Prevent page zooming in the browsers for iOS.
    event.preventDefault();
    this.$action = action;
    this.style.willChange = 'transform';
  }

  protected $handlePointerMove(event: Event): void {
    const { $action, $pointers } = this;

    if (this.disabled || $action === ACTION_NONE || $pointers.size === 0) {
      return;
    }

    if (this.$emit(EVENT_ACTION_MOVE, {
      action: $action,
      relatedEvent: event,
    }) === false) {
      return;
    }

    // Prevent page scrolling.
    event.preventDefault();

    if ((event as TouchEvent).changedTouches) {
      Array.from((event as TouchEvent).changedTouches).forEach(({
        identifier,
        pageX,
        pageY,
      }) => {
        const pointer = $pointers.get(identifier);

        if (pointer) {
          Object.assign(pointer, {
            endX: pageX,
            endY: pageY,
          });
        }
      });
    } else {
      const { pointerId = 0, pageX, pageY } = (event as PointerEvent);
      const pointer = $pointers.get(pointerId);

      if (pointer) {
        Object.assign(pointer, {
          endX: pageX,
          endY: pageY,
        });
      }
    }

    const detail: ActionEventData = {
      action: $action,
      relatedEvent: event,
    };

    if ($action === ACTION_TRANSFORM) {
      const pointers2 = new Map($pointers);
      let maxRotateRate = 0;
      let maxScaleRate = 0;
      let rotate = 0;
      let scale = 0;

      $pointers.forEach((pointer, pointerId) => {
        pointers2.delete(pointerId);
        pointers2.forEach((pointer2) => {
          let x1 = pointer2.startX - pointer.startX;
          let y1 = pointer2.startY - pointer.startY;
          let x2 = pointer2.endX - pointer.endX;
          let y2 = pointer2.endY - pointer.endY;
          let z1 = 0;
          let z2 = 0;
          let a1 = 0;
          let a2 = 0;

          if (x1 === 0) {
            if (y1 < 0) {
              a1 = Math.PI * 2;
            } else if (y1 > 0) {
              a1 = Math.PI;
            }
          } else if (x1 > 0) {
            a1 = (Math.PI / 2) + Math.atan(y1 / x1);
          } else if (x1 < 0) {
            a1 = (Math.PI * 1.5) + Math.atan(y1 / x1);
          }

          if (x2 === 0) {
            if (y2 < 0) {
              a2 = Math.PI * 2;
            } else if (y2 > 0) {
              a2 = Math.PI;
            }
          } else if (x2 > 0) {
            a2 = (Math.PI / 2) + Math.atan(y2 / x2);
          } else if (x2 < 0) {
            a2 = (Math.PI * 1.5) + Math.atan(y2 / x2);
          }

          if (a2 > 0 || a1 > 0) {
            const rotateRate = a2 - a1;
            const absRotateRate = Math.abs(rotateRate);

            if (absRotateRate > maxRotateRate) {
              maxRotateRate = absRotateRate;
              rotate = rotateRate;
            }
          }

          x1 = Math.abs(x1);
          y1 = Math.abs(y1);
          x2 = Math.abs(x2);
          y2 = Math.abs(y2);

          if (x1 > 0 && y1 > 0) {
            z1 = Math.sqrt((x1 * x1) + (y1 * y1));
          } else if (x1 > 0) {
            z1 = x1;
          } else if (y1 > 0) {
            z1 = y1;
          }

          if (x2 > 0 && y2 > 0) {
            z2 = Math.sqrt((x2 * x2) + (y2 * y2));
          } else if (x2 > 0) {
            z2 = x2;
          } else if (y2 > 0) {
            z2 = y2;
          }

          if (z1 > 0 && z2 > 0) {
            const scaleRate = (z2 - z1) / z1;
            const absScaleRate = Math.abs(scaleRate);

            if (absScaleRate > maxScaleRate) {
              maxScaleRate = absScaleRate;
              scale = scaleRate;
            }
          }
        });
      });

      const rotatable = maxRotateRate > 0;
      const scalable = maxScaleRate > 0;

      if (rotatable && scalable) {
        detail.rotate = rotate;
        detail.scale = scale;
      } else if (rotatable) {
        detail.action = ACTION_ROTATE;
        detail.rotate = rotate;
      } else if (scalable) {
        detail.action = ACTION_SCALE;
        detail.scale = scale;
      } else {
        detail.action = ACTION_NONE;
      }
    } else {
      const [pointer] = Array.from($pointers.values());

      Object.assign(detail, pointer);
    }

    // Override the starting coordinate
    $pointers.forEach((pointer) => {
      pointer.startX = pointer.endX;
      pointer.startY = pointer.endY;
    });

    if (detail.action !== ACTION_NONE) {
      this.$emit(EVENT_ACTION, detail, {
        cancelable: false,
      });
    }
  }

  protected $handlePointerUp(event: Event): void {
    const { $action, $pointers } = this;

    if (this.disabled || $action === ACTION_NONE) {
      return;
    }

    if (this.$emit(EVENT_ACTION_END, {
      action: $action,
      relatedEvent: event,
    }) === false) {
      return;
    }

    event.preventDefault();

    if ((event as TouchEvent).changedTouches) {
      Array.from((event as TouchEvent).changedTouches).forEach(({
        identifier,
      }) => {
        $pointers.delete(identifier);
      });
    } else {
      const { pointerId = 0 } = (event as PointerEvent);

      $pointers.delete(pointerId);
    }

    if ($pointers.size === 0) {
      this.style.willChange = '';
      this.$action = ACTION_NONE;
    }
  }

  protected $handleWheel(event: Event): void {
    if (this.disabled) {
      return;
    }

    event.preventDefault();

    // Limit wheel speed to prevent zoom too fast (#21)
    if (this.$wheeling) {
      return;
    }

    this.$wheeling = true;

    // Debounce by 50ms
    setTimeout(() => {
      this.$wheeling = false;
    }, 50);

    const delta = (event as WheelEvent).deltaY > 0 ? 1 : -1;
    const scale = delta * this.scale;

    this.$emit(EVENT_ACTION, {
      action: ACTION_SCALE,
      scale,
      relatedEvent: event,
    }, {
      cancelable: false,
    });
  }

  /**
   * Changes the current action to a new one.
   *
   * @param {string} action The new action.
   * @returns {CropperCanvas} Returns `this` for chaining.
   */
  $setAction(action: string): this {
    if (isString(action)) {
      this.$action = action;
    }

    return this;
  }

  /**
   * Generates a real canvas element, with the image draw into if there is one.
   *
   * @param {object} [options] The available options.
   * @param {Function} [options.beforeDraw] The function called before drawing the image onto the canvas.
   * @returns {Promise} Returns a promise that resolves to the generated canvas element.
   */
  $toCanvas(options?: {
    beforeDraw?: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void;
  }): Promise<HTMLCanvasElement> {
    return new Promise((resolve, reject) => {
      if (!this.isConnected) {
        reject(new Error('The current element is not connected to the DOM.'));
        return;
      }

      const canvas = document.createElement('canvas');
      const width = this.offsetWidth;
      const height = this.offsetHeight;

      canvas.width = width;
      canvas.height = height;

      const cropperImage: any = this.querySelector(CROPPER_IMAGE);

      if (!cropperImage) {
        resolve(canvas);
        return;
      }

      cropperImage.$ready().then((image: HTMLImageElement) => {
        const context = canvas.getContext('2d');

        if (context) {
          const matrix = cropperImage.$getTransform();
          const centerX = cropperImage.offsetWidth / 2;
          const centerY = cropperImage.offsetHeight / 2;

          context.fillStyle = 'transparent';
          context.fillRect(0, 0, width, height);

          if (isPlainObject(options) && isFunction(options.beforeDraw)) {
            options.beforeDraw.call(this, context, canvas);
          }

          context.save();

          // Move the transform origin to the center of the image.
          // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
          context.translate(centerX, centerY);
          context.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

          // Move the transform origin to the top-left of the image.
          context.translate(-centerX, -centerY);
          context.drawImage(image, 0, 0);
          context.restore();
        }

        resolve(canvas);
      }).catch(reject);
    });
  }
}
