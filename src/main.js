const puppeteer = require('puppeteer');

const print = () => {
    console.log('登陆成功！')
}



const main = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    page.on('load', print)
    await page.goto('https://pc.xuexi.cn/points/login.html?ref=https%3A%2F%2Fwww.xuexi.cn%2F');
    await page.screenshot({ path: 'example.png' });
    page.removeAllListeners()
    // await browser.close();
}

main()