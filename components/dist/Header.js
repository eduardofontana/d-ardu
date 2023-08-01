"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var _2_png_1 = require("@/public/2.png");
var _3_png_1 = require("@/public/3.png");
var link_1 = require("next/link");
var Header = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", { className: "body-font text-whi bg-gray-900" },
            react_1["default"].createElement("div", { className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" },
                react_1["default"].createElement("a", { className: "flex title-font font-medium items-center mb-4 md:mb-0" },
                    react_1["default"].createElement(image_1["default"], { alt: "testimonial", className: "w-10 h-10 object-cover object-center rounded-full inline-block", src: _2_png_1["default"], width: 302, height: 302 })),
                react_1["default"].createElement(image_1["default"], { className: "md:ml-auto md:mr-auto flex flex-wrap items-center justify-center", src: _3_png_1["default"], width: 302, height: 302, alt: "log" }),
                react_1["default"].createElement(link_1["default"], { href: "/register", className: "register" },
                    react_1["default"].createElement("button", { className: "inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0 mr-4 text-center" },
                        "Cadastrar",
                        react_1["default"].createElement("svg", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", className: "w-4 h-4 ml-1", viewBox: "0 0 24 24" }))),
                react_1["default"].createElement(link_1["default"], { href: "/sign-in", className: "signin" },
                    react_1["default"].createElement("button", { className: "inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0" },
                        "Login",
                        react_1["default"].createElement("svg", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", className: "w-4 h-4 ml-1", viewBox: "0 0 24 24" })))))));
};
exports["default"] = Header;
