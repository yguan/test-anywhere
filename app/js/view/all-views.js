define(function (require, exports, module) {

    var codeEditor = require('view/code-editor');

    exports.init = function () {
        codeEditor.create();
    };
});
