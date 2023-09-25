/* eslint-disable no-undef */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bounce = exports.rotate = exports.zoomOut = exports.zoomIn = exports.slideOut = exports.slideIn = exports.fadeOut = exports.fadeIn = exports.reset = void 0;
function reset(element) {
    element.style.transition = "";
    element.style.opacity = "";
    element.style.transform = "";
}
exports.reset = reset;
function fadeIn(element, duration) {
    if (duration === void 0) { duration = 500; }
    reset(element);
    element.style.transition = "opacity ".concat(duration, "ms");
    setTimeout(function () {
        element.style.opacity = "1";
    }, 0);
}
exports.fadeIn = fadeIn;
function fadeOut(element, duration) {
    if (duration === void 0) { duration = 500; }
    reset(element);
    element.style.transition = "opacity ".concat(duration, "ms");
    element.style.opacity = "0";
}
exports.fadeOut = fadeOut;
function slideIn(element, duration, direction) {
    if (duration === void 0) { duration = 500; }
    if (direction === void 0) { direction = "right"; }
    reset(element);
    element.style.opacity = "1";
    element.style.transition = "transform ".concat(duration, "ms");
    switch (direction) {
        case "left":
            element.style.transform = "translateX(-100%)";
            setTimeout(function () {
                element.style.transform = "translateX(0%)";
            }, 50); // slight delay to ensure transform applies correctly
            break;
        case "top":
            element.style.transform = "translateY(0%)";
            break;
        case "bottom":
            element.style.transform = "translateY(0%)";
            break;
        default:
            element.style.transform = "translateX(0%)";
    }
}
exports.slideIn = slideIn;
function slideOut(element, duration, direction) {
    if (duration === void 0) { duration = 500; }
    if (direction === void 0) { direction = "right"; }
    reset(element);
    element.style.opacity = "1"; // Ensure the box is visible
    element.style.transition = "transform ".concat(duration, "ms");
    switch (direction) {
        case "left":
            element.style.transform = "translateX(-100%)";
            break;
        case "top":
            element.style.transform = "translateY(-100%)";
            break;
        case "bottom":
            element.style.transform = "translateY(100%)";
            break;
        default:
            element.style.transform = "translateX(100%)";
    }
}
exports.slideOut = slideOut;
function zoomIn(element, duration) {
    if (duration === void 0) { duration = 500; }
    reset(element);
    element.style.opacity = "1";
    element.style.transition = "transform ".concat(duration, "ms");
    setTimeout(function () {
        element.style.transform = "scale(1)";
    }, 0);
}
exports.zoomIn = zoomIn;
function zoomOut(element, duration) {
    if (duration === void 0) { duration = 500; }
    reset(element);
    element.style.transition = "transform ".concat(duration, "ms");
    element.style.transform = "scale(0)";
}
exports.zoomOut = zoomOut;
function rotate(element, duration, degrees) {
    if (duration === void 0) { duration = 500; }
    if (degrees === void 0) { degrees = 165; }
    reset(element);
    element.style.transform = "rotate(0deg)";
    element.style.transition = "transform ".concat(duration, "ms");
    setTimeout(function () {
        element.style.transform = "rotate(".concat(degrees, "deg)");
    }, 50);
}
exports.rotate = rotate;
function bounce(element, duration) {
    if (duration === void 0) { duration = 500; }
    reset(element);
    element.animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-20px)" },
        { transform: "translateY(0px)" },
        { transform: "translateY(-15px)" },
        { transform: "translateY(0px)" },
    ], {
        duration: duration,
        easing: "cubic-bezier(.4,0.01,.65,1.48)",
    });
}
exports.bounce = bounce;
var FunkyMotions = {
    reset: reset,
    fadeIn: fadeIn,
    fadeOut: fadeOut,
    slideIn: slideIn,
    slideOut: slideOut,
    zoomIn: zoomIn,
    zoomOut: zoomOut,
    rotate: rotate,
    bounce: bounce,
};
exports.default = FunkyMotions;
