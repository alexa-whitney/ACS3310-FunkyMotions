// This function clears the styles for transition, opacity, and transform properties
export function reset(element: HTMLElement): void {
  // Reset the transition property to its default value
  element.style.transition = "";
  // Reset the opacity property to its default value
  element.style.opacity = "";
  // Reset the transform property to its default value
  element.style.transform = "";
}

// This function makes the provided element gradually appear over a given duration
export function fadeIn(element: HTMLElement, duration: number = 500): void {
  // Reset all the styles to their default values
  reset(element);
  // Set the duration for the opacity transition
  element.style.transition = `opacity ${duration}ms`;
  // Use a delay to ensure that opacity is set after the transition has been established
  setTimeout(() => {
    // Set opacity to fully visible
    element.style.opacity = "1";
  }, 0);
}

// This function makes the provided element gradually disappear over a given duration
export function fadeOut(element: HTMLElement, duration: number = 500): void {
  reset(element);
  element.style.transition = `opacity ${duration}ms`;
  // Set opacity to fully transparent
  element.style.opacity = "0";
}

// Define the possible slide directions
type Direction = "left" | "right" | "top" | "bottom";

// This function slides in the element from a specific direction
export function slideIn(
  element: HTMLElement,
  duration: number = 500,
  direction: Direction = "right"
): void {
  reset(element);
  element.style.opacity = "1";
  element.style.transition = `transform ${duration}ms`;

  switch (direction) {
    case "left":
      element.style.transform = "translateX(-100%)";
      setTimeout(() => {
        // Move the element to its original position
        element.style.transform = "translateX(0%)";
      }, 50);
      break;
    case "top":
    case "bottom":
      // No transform applied for top and bottom in this implementation
      element.style.transform = "translateY(0%)";
      break;
    default:
      element.style.transform = "translateX(0%)";
  }
}

// This function slides out the element in a specific direction
export function slideOut(
  element: HTMLElement,
  duration: number = 500,
  direction: Direction = "right"
): void {
  reset(element);
  element.style.opacity = "1";
  element.style.transition = `transform ${duration}ms`;

  switch (direction) {
    case "left":
      // Move the element out to the left
      element.style.transform = "translateX(-100%)";
      break;
    case "top":
      // Move the element upwards
      element.style.transform = "translateY(-100%)";
      break;
    case "bottom":
      // Move the element downwards
      element.style.transform = "translateY(100%)";
      break;
    default:
      // Move the element out to the right
      element.style.transform = "translateX(100%)";
  }
}

// This function enlarges the element to its original size from a zero scale
export function zoomIn(element: HTMLElement, duration: number = 500): void {
  reset(element);
  element.style.opacity = "1";
  element.style.transition = `transform ${duration}ms`;
  setTimeout(() => {
    // Enlarge the element to its original size
    element.style.transform = "scale(1)";
  }, 0);
}

// This function shrinks the element down to zero size
export function zoomOut(element: HTMLElement, duration: number = 500): void {
  reset(element);
  element.style.transition = `transform ${duration}ms`;
  // Shrink the element to zero size
  element.style.transform = "scale(0)";
}

// This function rotates the element by a given number of degrees
export function rotate(
  element: HTMLElement,
  duration: number = 500,
  degrees: number = 165
): void {
  reset(element);
  // Set the initial rotation value
  element.style.transform = `rotate(0deg)`;
  element.style.transition = `transform ${duration}ms`;
  setTimeout(() => {
    // Apply the desired rotation value
    element.style.transform = `rotate(${degrees}deg)`;
  }, 50);
}

// This function makes the element bounce up and down
export function bounce(element: HTMLElement, duration: number = 500): void {
  reset(element);
  // Define the bounce animation keyframes
  element.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-20px)" },
      { transform: "translateY(0px)" },
      { transform: "translateY(-15px)" },
      { transform: "translateY(0px)" },
    ],
    {
      // Set the duration and easing function for the animation
      duration: duration,
      easing: "cubic-bezier(.4,0.01,.65,1.48)",
    }
  );
}

const FunkyMotions = {
  reset,
  fadeIn,
  fadeOut,
  slideIn,
  slideOut,
  zoomIn,
  zoomOut,
  rotate,
  bounce,
};

export default FunkyMotions;
