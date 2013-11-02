/*jslint nomen: true*/
/*global $,define,require,_ */

define(function (require, exports, module) {
    'use strict';

    var codeEditor = require('view/code-editor');

    exports.init = function () {
        codeEditor.create();
    };
});
