const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/screenshot', async (req, res, next) => {
    try {
        const browser = await puppeteer.launch({args: ['--no-sandbox'] });
        const page = await browser.newPage();
        const url = req.query.url;
        await page.goto(url);
        const screenshotBuffer = await page.screenshot({ encoding: "base64" });

        // Respond with the image
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': screenshotBuffer.length
        });
        res.end(screenshotBuffer);

        await browser.close();
    } catch (err) {
        next(err);
    }
})

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Listening on port ${port}`));