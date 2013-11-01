define(function (require, exports, module) {
    
    var ace = require('ace/ace');

    exports.create = function (editorId) {
        var div = document.createElement('div');
        div.setAttribute('id', editorId || 'test-anywhere-code-editor');
        document.body.appendChild(div);

        var editor = ace.edit('test-anywhere-code-editor');
        editor.setTheme('ace/theme/chrome');
        editor.session.setMode('ace/mode/javascript');
    };

});
