import puppeteer from 'puppeteer';

(async () => {
	const PORT = 5500

	// Launch a new browser session.
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Go to our template that is served on localhost via "Live Server"-extension found in VS Code. 
	await page.goto(`http://localhost:${PORT}/template/`);

	// Store the PDF in a file named `invoice.pdf`.
	await page.pdf({ path: '../CV.pdf', format: 'A4', printBackground: true });

	await browser.close();
})()