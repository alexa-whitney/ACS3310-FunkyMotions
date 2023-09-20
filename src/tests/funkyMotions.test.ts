import {
  reset,
  fadeIn,
  fadeOut,
  slideIn,
  slideOut,
  zoomIn,
  zoomOut,
  rotate,
  bounce,
} from "../funkyMotions";

describe("funkyMotions", () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement("div");
  });

  jest.useFakeTimers();

  test("reset", () => {
    element.style.transition = "opacity 500ms";
    element.style.opacity = "1";
    element.style.transform = "scale(0.5)";

    reset(element);

    expect(element.style.transition).toBe("");
    expect(element.style.opacity).toBe("");
    expect(element.style.transform).toBe("");
  });

  test("fadeIn", () => {
    fadeIn(element);
    jest.advanceTimersByTime(100);
    expect(element.style.opacity).toBe("1");
  });

  test("fadeOut", () => {
    fadeOut(element);
    expect(element.style.opacity).toBe("0");
  });

  test("slideIn with default direction", () => {
    slideIn(element);
    jest.advanceTimersByTime(100);
    expect(element.style.transform).toBe("translateX(0%)");
  });

  test("slideIn with left direction", () => {
    slideIn(element, 500, "left");
    jest.advanceTimersByTime(50);
    expect(element.style.transform).toBe("translateX(0%)");
  });

  test("slideIn with top direction", () => {
    slideIn(element, 500, "top");
    expect(element.style.transform).toBe("translateY(0%)");
  });

  test("slideIn with bottom direction", () => {
    slideIn(element, 500, "bottom");
    expect(element.style.transform).toBe("translateY(0%)");
  });

  test("slideOut with default direction", () => {
    slideOut(element);
    expect(element.style.transform).toBe("translateX(100%)");
  });

  test("slideOut with left direction", () => {
    slideOut(element, 500, "left");
    expect(element.style.transform).toBe("translateX(-100%)");
  });

  test("slideOut with top direction", () => {
    slideOut(element, 500, "top");
    expect(element.style.transform).toBe("translateY(-100%)");
  });

  test("slideOut with bottom direction", () => {
    slideOut(element, 500, "bottom");
    expect(element.style.transform).toBe("translateY(100%)");
  });

  test("zoomIn", () => {
    zoomIn(element);
    jest.advanceTimersByTime(100);
    expect(element.style.transform).toBe("scale(1)");
  });

  test("zoomOut", () => {
    zoomOut(element);
    expect(element.style.transform).toBe("scale(0)");
  });

  test("rotate with default degrees", () => {
    rotate(element);
    jest.advanceTimersByTime(100);
    expect(element.style.transform).toBe("rotate(165deg)");
  });

  // For bounce, we won't test the exact animation but check that it triggers an animation
  test("bounce", () => {
    const animateMock = jest.fn();
    element.animate = animateMock;

    bounce(element);
    expect(animateMock).toHaveBeenCalled();
  });

  test("fadeIn without duration", () => {
    fadeIn(element);
    jest.advanceTimersByTime(0);
    expect(element.style.opacity).toBe("1");
  });

  test("fadeOut without duration", () => {
    fadeOut(element);
    expect(element.style.opacity).toBe("0");
  });

  test("zoomIn without duration", () => {
    zoomIn(element);
    jest.advanceTimersByTime(0);
    expect(element.style.transform).toBe("scale(1)");
  });

  test("zoomOut without duration", () => {
    zoomOut(element);
    expect(element.style.transform).toBe("scale(0)");
  });

  test("rotate without duration and degrees", () => {
    rotate(element);
    jest.advanceTimersByTime(50);
    expect(element.style.transform).toBe("rotate(165deg)");
  });

  test("bounce without duration", () => {
    const animateMock = jest.fn();
    element.animate = animateMock;

    bounce(element);
    expect(animateMock).toHaveBeenCalled();
  });
});
