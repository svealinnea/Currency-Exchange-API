# _Currency Exchange_

### _Currency Exchange Calculator, November 20, 2020_

### By 
Svea Wade

### Description
This is a currency exchange website. A user can enter a currency and then recieve the applicable exchange rate for the country they are traveling too from the US. 

## Setup/Installation Requirements

You can open it locally within your computer by cloning the repository https://github.com/svealinnea/Currency-Exchange-API.git 

Here are some instructions on how to do so:
1. You will need an internet browser & a code editor installed on your computer. Examples include: VSCode.
2. When you open the link above you will need to click on the "clone or download button"
3. You will then need to clone it on your computer git Clone https://github.com/svealinnea/Currency-Exchange-API.git
4. After you clone it you will need to open it in your preferred code editor
5. You can type npm install into the terminal to get npm to install
6. Then you will want to type npm run start and it will open a live server. From there you can see the website in your browser.

## API Key Information 
You will need to also create an API Key in order for this application to work. We used the API key found on https://app.exchangerate-api.co after we created an account. Once you create an account you can access your API key under dashhboard. After you get your API key you can either paste the API key directly in to the code in main.js OR you will want to create a .env file.

How to create a .env file

1. In terminal within the cloned repository enter touch .env (this will create the .env file within the project)
2. You will then want to open the .env folder within the code editor.
3. You will add .env to your gitignore folder
4. In the .env file you will add "process.env.API_KEY" and API_KEY="Your API key"
5. Then run npm install dotenv-webpack --save-dev
6. And add the plugin for dotenv webpack

## Known Bugs

There are no known bugs at this time

## Support and contact details
You can reach out to me at any time. Svea Wade <svealinneawade@gmail.com>

## Specs
Test | Input | Output



## Technologies Used

* NPM
* Webpack
* HTML
* CSS
* Javascript
* JSON

## Legal

I used the MIT license, see below: Copyright (c) 2020 Svea Wade Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.