const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://pptr.dev/');

	await page.screenshot({path: 'example.png'});
	await page.pdf({ path: 'example.pdf' });

	await browser.close();
	
})();
