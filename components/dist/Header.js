"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var _1bg_png_1 = require("@/public/1bg.png");
var Header = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "body-font text-whi bg-gray-900" },
            React.createElement("div", { className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" },
                React.createElement(image_1["default"], { className: "md:ml-auto md:mr-auto flex flex-wrap items-center justify-center mt-5", src: _1bg_png_1["default"], width: 500, height: 500, alt: "brand" })),
            React.createElement("div", { style: {
                    borderBottom: "1px solid #ffffff",
                    width: "100%",
                    margin: "1px 5px"
                } }))));
};
exports["default"] = Header;
