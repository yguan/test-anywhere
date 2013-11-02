/*jslint nomen: true, evil: true */
/*global $,define,require,mocha,ace */

define([
    'exports',
    'ace',
    'lib/doT',
    'lib/text!view/template/test-runner.tpl',
    'lib/text!view/template/sample-script.txt'
], function (exports, ace, doT, testRunnerTpl, sampleScriptText) {
    'use strict';

    exports.create = function (editorId) {
        var templateFn = doT.template(testRunnerTpl),
            testRunnerHtml = templateFn({
                editorId: editorId || 'test-anywhere-code-editor',
                runTestBtnId: 'run-tests'
            }),
            editor,
            $testRunner = $(testRunnerHtml),
            $mocha = $testRunner.find('#mocha');

        $testRunner.find('#run-tests').on('click', function () {
            $mocha.html('');
            mocha.suite.suites = [];
            var script = editor.getValue();
            eval(script);
            mocha.run();
        });

        $('body').append($testRunner);

        editor = ace.edit('test-anywhere-code-editor');
        editor.setTheme('ace/theme/chrome');
        editor.session.setMode('ace/mode/javascript');
        editor.setOptions({
            enableBasicAutocompletion: true
        });
        editor.setValue(sampleScriptText);
    };

});
