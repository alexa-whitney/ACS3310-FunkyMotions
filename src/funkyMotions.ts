export function reset(element: HTMLElement): void {
    element.style.transition = "";
        element.style.opacity = "";
        element.style.transform = "";
};

export function fadeIn(element: HTMLElement, duration: number = 500): void {
    reset(element);
    element.style.transition = `opacity ${duration}ms`;
    setTimeout(() => {
        element.style.opacity = "1";
    }, 0);
};

export function fadeOut(element: HTMLElement, duration: number = 500): void  {
    reset(element);
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = "0";
};

type Direction = "left" | "right" | "top" | "bottom";

export function slideIn(element: HTMLElement, duration: number = 500, direction: Direction = 'right'): void  {
    reset(element);
    element.style.opacity = "1";
    element.style.transition = `transform ${duration}ms`;

    switch (direction) {
        case 'left':
            element.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                element.style.transform = 'translateX(0%)';
            }, 50);  // slight delay to ensure transform applies correctly
            break;
        case 'top':
            element.style.transform = 'translateY(0%)';
            break;
        case 'bottom':
            element.style.transform = 'translateY(0%)';
            break;
        default:
            element.style.transform = 'translateX(0%)';
    }
};

export function slideOut(element: HTMLElement, duration: number = 500, direction: Direction = 'right'): void  {
    reset(element);
    element.style.opacity = "1"; // Ensure the box is visible
    element.style.transition = `transform ${duration}ms`;
    switch (direction) {
        case 'left':
            element.style.transform = 'translateX(-100%)';
            break;
        case 'top':
            element.style.transform = 'translateY(-100%)';
            break;
        case 'bottom':
            element.style.transform = 'translateY(100%)';
            break;
        default:
            element.style.transform = 'translateX(100%)';
    }
};

export function zoomIn(element: HTMLElement, duration: number = 500): void  {
    reset(element);
    element.style.opacity = "1";
    element.style.transition = `transform ${duration}ms`;
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 0);
};

export function zoomOut(element: HTMLElement, duration: number = 500): void  {
    reset(element);
    element.style.transition = `transform ${duration}ms`;
    element.style.transform = 'scale(0)';
};

export function rotate(element: HTMLElement, duration: number = 500, degrees: number = 165): void  {
    reset(element);
    element.style.transform = `rotate(0deg)`;
    element.style.transition = `transform ${duration}ms`;
    setTimeout(() => {
        element.style.transform = `rotate(${degrees}deg)`;
    }, 50);
};

export function bounce(element: HTMLElement, duration: number = 500): void  {
    reset(element);
    element.animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-20px)' },
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-15px)' },
        { transform: 'translateY(0px)' }
    ], {
        duration: duration,
        easing: 'cubic-bezier(.4,0.01,.65,1.48)'
    });
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
    bounce
};

export default FunkyMotions;