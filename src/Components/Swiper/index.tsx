import { useRef, useState } from "react";
import { DIRECTIONS } from "../../Utils/constants";

interface SwiperProps {
  children: React.ReactNode;
  onSwipe: (direction: DIRECTIONS) => void;
}

const Swiper = ({ children, onSwipe }: SwiperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  /**
   * Handles the start of a touch or mouse event, setting the dragging state
   * and capturing the initial coordinates of the interaction.
   *
   * @param e - The event object, which can be either a React.TouchEvent or React.MouseEvent.
   *            For touch events, the initial touch point's `clientX` and `clientY` are used.
   *            For mouse events, the `clientX` and `clientY` of the mouse are used.
   */
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const x =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const y =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setStart({ x, y });
  };

  /**
   * Handles the movement event for both touch and mouse interactions.
   * Calculates the change in position (delta) based on the starting point
   * and the current position of the touch or mouse event.
   *
   * @param e - The event object, which can be either a React.TouchEvent or React.MouseEvent.
   *            For touch events, it extracts the first touch point's clientX and clientY.
   *            For mouse events, it extracts the clientX and clientY directly.
   */
  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const x =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const y =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setDelta({ x: x - start.x, y: y - start.y });
  };

  /**
   * Handles the end of a drag or swipe gesture.
   * 
   * This function determines the direction of the swipe based on the `delta` values
   * and applies a corresponding transformation to the element. If the swipe exceeds
   * a certain threshold (100), it triggers the `onSwipe` callback with the detected direction.
   * Otherwise, it resets the `delta` values.
   * 
   * @remarks
   * - The swipe direction is determined by comparing the `x` and `y` values of `delta`.
   * - A swipe is considered valid if the absolute value of `x` or `y` exceeds 100.
   * - The element's transition and transform styles are updated to animate the swipe.
   * 
   */
  const handleEnd = () => {
    setIsDragging(false);
    const { x, y } = delta;

    if (Math.abs(x) > 100 || Math.abs(y) > 100) {
      let direction: DIRECTIONS = "" as DIRECTIONS;
      if (Math.abs(x) > Math.abs(y)) {
        direction = x > 0 ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT;
      } else if (y < 0) {
        direction = DIRECTIONS.UP;
      }

      if (direction) {
        const element = elementRef.current;
        if (element) {
          element.style.transition = "transform 0.3s ease-out";
          element.style.transform = `translate(${
            direction === DIRECTIONS.LEFT
              ? "-150%"
              : direction === DIRECTIONS.RIGHT
              ? "150%"
              : "0"
          }, ${direction === DIRECTIONS.UP ? "-150%" : "0"})`;
        }

        setTimeout(() => {
          onSwipe(direction);
        }, 300);
        return;
      }
    }

    setDelta({ x: 0, y: 0 });
  };

  return (
    <div
      ref={elementRef}
      className={`absolute transition-transform touch-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={() => isDragging && handleEnd()}
      style={{
        transform: `translate(${delta.x}px, ${delta.y}px) rotate(${
          delta.x / 20
        }deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default Swiper;
