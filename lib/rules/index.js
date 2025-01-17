/**
 * @fileoverview Collects the built-in rules into a map structure so that they can be imported all at once and without
 * using the file-system directly.
 * @author Peter (Somogyvari) Metz
 */

"use strict";

const {LazyLoadingRuleMap} = require("./utils/lazy-loading-rule-map");

/** @type {Map<string, import("../shared/types").Rule>} */
module.exports = new LazyLoadingRuleMap(Object.entries({
    "avoid-lodash": () => require("./avoid-lodash"),
    "lighter-http": () => require("./lighter-http"),
    "no-ajax": () => require("./no-ajax"),
    "no-ajax-events": () => require("./no-ajax-events"),
    "no-animate": () => require("./no-animate"),
    "no-attr": () => require("./no-attr"),
    "no-bind": () => require("./no-bind"),
    "no-browser": () => require("./no-browser"),
    "no-box-model": () => require("./no-box-model"),
    "no-moment-js": () => require("./no-moment-js"),
    "no-date-fns": () => require("./no-date-fns"),
    "no-autoplay": () => require("./no-autoplay"),
    "lighter-video-formats": () => require("./lighter-video-formats"),
    "lighter-image-formats": () => require("./lighter-image-formats")
}));
