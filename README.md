# Test Anywhere

Test Anywhere is a test runner that you can inject to any website to run JavaScript tests. It is a showcase of how script injection can be used for end-to-end UI automation tests. It aims to show people that it is easier to write JavaScript tests that interact with the browser directly than writing WebDriver tests that go through layers before instrumenting the browser to do the actions.

## Demo

It's hosted [here](http://yguan.github.io/repos/test-anywhere/).

## UI Interaction

[![](http://yguan.github.io/img/projects/test-anywhere.png)](http://yguan.github.io/repos/test-anywhere/)

Move your mouse over the test runner on the right side and click the `Run Test` button to see it in action. You can also write code in the editor and run it against your browser.

## Script Injection

If you want to inject the [Ace Editor](http://ace.c9.io/) along with the [mocha](http://visionmedia.github.io/mocha/) test framework a non-https website, do the following steps:
* navigate to a website that you want to inject the test runner
* copy the code from [script-injector.js](https://github.com/yguan/test-anywhere/blob/master/app/js/script-injector.js)
* paste the script into the browser console to run it

Note: if you are hosting the test runner, set variable `baseUrl` to the right url.

## Development

#### Overview of Folder Structure

`app` Contains the source code for the Website
- `css` CSS files used by the site, but they are generated by the .less files in the `less` folder
- `less` [less](http://lesscss.org/) files for generating CSS files
- `img`  Images
- `js` JavaScripts files and template files
  - `lib` Libraries
  - `views` Controllers and view partials

#### require.js Config

* [app-config.js](https://github.com/yguan/test-anywhere/blob/master/app/js/app-config.js) is the require.js config used in development.
* [app-config-dist.js](https://github.com/yguan/test-anywhere/blob/master/app/js/app-config-dist.js) is used the build. It specifies the absolute url for `ace.js` and `ext-language_tools.js` so that when injecting the script, Ace Editor will load correctly.

#### Grunt Configuration

All the grunt config and options are located in the `tasks` folder.

## Build

To build the package, you have to have `node.js` installed, then in command line console, run the followings steps once:

- go to `test-anywhere` folder
- (if grunt-cli is not installed) run `npm install -g grunt-cli`
- run `npm install`

Now, you can build your project with running `grunt build`. The output folder is `dist`, you can change it in the `config` variable of `Gruntfile.js`.

## Less Files Compilation

`grunt build` compiles all less files to app-min.css. In development, you can run `grunt watch`, and all less files will be compiled in 2 seconds after you change a less file. You can change the delay period `debounceDelay` in `tasks/options/watch.js`.

## Run the Website locally

If you have [python](http://www.python.org/download/) installed, run the following steps in the command line console:

- go to `app` folder
- run `python -m http.server` (you can specify port number at the end as well, default is 8000)
- go to your browser, and type in the `localhost:8000` to the address bar
- you should see the site running in the browser

## The Benefits of Using Script Injection for Tests

Test Anywhere shows the possibility of inject JavaScript to test any website with any browser. Even though mocha is used here, any other test frameworks can be used as well.

Writing UI end-to-end tests with JavaScripts has lots of benefits:
* <b>Faster Feedback</b>
 * You can write the code, run it with the runner or the browser console to see if your test is correct.
 * You can debug the test with the browser's developer tools.
* <b>Time Saving</b>
 * Because the fast feedback, it will take less time to write test compare to other browser instrumentation frameworks, such as Selenium, WatiN, and Microsoft Test.
 * With the browser instrumentation frameworks, people usually write more abstract code and more complicated code. Moreover, writing tests are usually really time consuming because you have to figure out the right selector and UI action steps. You have to write the test first, run it to see if it works, then fix it and run it again. If something breaks, the debugger will give you information that you have to think a little bit longer than understanding the exception on the browser console.
* <b>Money Saving</b>
 * Time is money, and saving time is saving money. A lot of companies still heavily rely on manual testing and/or browser instrumentation testing. Both approach are time consuming, boring, and frustrated if you have to deal with them on daily basis.

## What's Next

The [mocha_webdriver_tests](https://github.com/yguan/mocha_webdriver_tests) I wrote a few months ago shows how to use WebDriver to start a browser sesssion, and the inject test scripts. It's not production-ready yet, but it got most of details figured out. If anyone interested in it, let me know. I can show you know what I know about automated testing and what we can do to make UI end-to-end testing a lot easier.

if you're interested on a broad overview of test frameworks, you should checkout Vojtěch Jína's [thesis](https://github.com/karma-runner/karma/raw/master/thesis.pdf).

## License

[MIT](http://opensource.org/licenses/MIT)