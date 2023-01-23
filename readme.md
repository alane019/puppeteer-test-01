## Puppeteer quick test

  Generate a PDF version of a given web page and capture a screenshot using Puppeteer. 

  [Puppeteer](https://pptr.dev/) is a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol.



  ![.assets/images/screen.jpg](./example.png)
  

## Table of Contents

- [Puppeteer quick test](#puppeteer-quick-test)
- [Table of Contents](#table-of-contents)
- [Github repo](#github-repo)
- [Installation](#installation)
- [Usage](#usage)
	- [Running in headless mode](#running-in-headless-mode)
- [Contributing](#contributing)

 ## Github repo
 https://github.com/alane019/puppeteer-test-01
 ## Installation
  Install nodejs and npm dependencies.

  ## Usage
  Use `npm start` to run the file. 
  ### Running in headless mode
 The app.js file included in this repo currently opens the web page so that it's visible on screen when running the app. If you do not want the browser to visible when running puppeteer, update the headless option to `true`.
   
   ``` puppeteer.launch({headless: false}); ```

  ## Contributing
  Submit a pull request to contribute.
