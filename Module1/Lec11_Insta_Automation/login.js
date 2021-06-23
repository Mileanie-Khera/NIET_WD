const puppeteer = require("puppeteer");
const id ="xocali_singh";
const pw = "123456789@";
const searchFor = "pepcoding";
(async function(){
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
            executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        });
        let pages = await browser.pages();
        let tab = pages[0];
        let posts = [];
        await tab.goto("https://www.instagram.com/accounts/login/");
        await tab.waitForSelector('input[name="username"]');
        await tab.type('[name="username"]', id);
        await tab.type('[name="password"]', pw);
        await tab.waitForSelector('[type="submit"]');
        await tab.click('[type="submit"]');
        console.log("logged in");
        await tab.waitForSelector(".cmbtv");
        await tab.click(".cmbtv");
        await tab.waitForSelector(".HoLwm");
        await tab.click(".HoLwm");
        await tab.waitForSelector(".TqC_a");
        await tab.click(".TqC_a");
        await tab.waitForSelector(".XTCLo.x3qfX");
        await tab.type(".XTCLo.x3qfX", searchFor);
        console.log("searching");
        await tab.waitForSelector(".-qQT3[href='/pepcoding/']");
        await tab.click(".-qQT3[href='/pepcoding/']");     
        await tab.waitForSelector('[href="/p/CQXjVexr1OH/"]');
        await tab.click('[href="/p/CQXjVexr1OH/"]');
        await tab.waitForSelector(".fr66n");
        await tab.click(".fr66n");
        for(let i=0;i<25;i++){
            await tab.waitForSelector("._65Bje.coreSpriteRightPaginationArrow");
            await tab.click("._65Bje.coreSpriteRightPaginationArrow");
            await tab.waitForSelector(".fr66n");
            await tab.click(".fr66n");
        }
        console.log("liked");
        // await tab.keyboard.press("Escape");
        // await tab.waitForSelector('[href="/p/CQS4b2BLUgw/"]');
        // await tab.click('[href="/p/CQS4b2BLUgw/"]');
        // await tab.waitForSelector(".fr66n");
        // await tab.click(".fr66n");
        //await tab.keyboard.press("Escape");
        
    }
    catch(err){
        console.log(err);
    }
})();