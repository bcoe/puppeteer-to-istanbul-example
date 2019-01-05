# Puppeteer to Istanbul Example

Example of using [puppeteer-to-istanbul](https://github.com/istanbuljs/puppeteer-to-istanbul)
to output puppeteer format coverage output in Istanbul format.

## Files

* `index.html`: an HTML file containing inline JavaScript.
* `index.js`: a script that executes `index.html` with coverage enabled.

## Usage

```
npm install
npm install -g nyc
npm run coverage
```

This will:

1. Install necessary prerequisites.
2. Run JavaScript in puppeteer with coverage enabled.
3. Output to disk in Istanbul format.
4. Run reports with [nyc](https://github.com/istanbuljs/nyc).
5. Open `coverage/index.html`, displaying the coverage information collected.
