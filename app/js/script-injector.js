/*jslint nomen: true*/
/*global document */

(function () {
    // based on the code from the following articles:
    // http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
    // http://www.nczonline.net/blog/2009/07/28/the-best-way-to-load-external-javascript/
    'use strict';

    function loadFile(fileRef, callback) {
        if (fileRef.readyState) {  //IE
            fileRef.onreadystatechange = function () {
                if (fileRef.readyState === 'loaded' || fileRef.readyState === 'complete') {
                    fileRef.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            fileRef.onload = function () {
                callback();
            };
        }
        document.getElementsByTagName('head')[0].appendChild(fileRef);
    }

    function loadJs(url, callback) {
        var fileRef = document.createElement('script');
        fileRef.setAttribute('type', 'text/javascript');
        fileRef.setAttribute('src', url);
        loadFile(fileRef, callback);
    }

    function loadCss(url, callback) {
        var fileRef = document.createElement('link');
        fileRef.setAttribute('rel', 'stylesheet');
        fileRef.setAttribute('type', 'text/css');
        fileRef.setAttribute('href', url);
        loadFile(fileRef, callback);
    }


    var baseUrl = '';
    loadCss(baseUrl + 'css/app-min.css');
    loadJs(baseUrl + 'js/lib/app-min.js');
}());
