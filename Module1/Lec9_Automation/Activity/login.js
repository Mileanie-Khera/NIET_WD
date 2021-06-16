const puppeteer = require("puppeteer");
const id ="nagidi9432@gocasin.com";
const pw = "1813310106";
let tab;
// puppeteer functions => promisifed functions

// open a browser

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise.then(function (browserInstance) {
    let pagesPromise = browserInstance.pages();//.pages() returns an array of all pages
    return pagesPromise; // Promise<Pending>
  })
  .then(function (pages) {
    let page = pages[0];
    tab = page;
    let gotoPromise = tab.goto("https://www.hackerrank.com/auth/login");//this link will open in the page returned
    return gotoPromise;
  })
  .then(function(){
      let idTypePromise = tab.type("#input-1" , id);
      return idTypePromise;
  })
  .then(function(){
      let pwTypePromise = tab.type("#input-2" , pw);
      return pwTypePromise;
  })
  .then(function(){
      let loginPromise = tab.click('.ui-btn.ui-btn-large');
      return loginPromise;
  })
  .then(function(){
    //   wait for selector
    let waitPromise = tab.waitForSelector('#base-card-1-link' , {visible:true});
    return waitPromise;
  })
  .then(function(){
      let ipKitClickedPromise = tab.click('#base-card-1-link');
      return ipKitClickedPromise;
  })
  .then(function(){
      let waitPromise = tab.waitForSelector('a[data-attr1="warmup"]' , {visible:true});
      return waitPromise;
  })
  .then(function(){
      let warmupChallengesPromise = tab.click('a[data-attr1="warmup"]');
      return warmupChallengesPromise;
  })
  .then(function(){
      let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item');
      return waitPromise;
  })
  .then(function(){
      let allATagsPromise = tab.$$('.js-track-click.challenge-list-item');
      return allATagsPromise;
  })
  .then(function(allATags){
      //[<a href=""></a> , <a ></a> , <a></a> , <a></a> ];
      let allQuesLinksPromise = [];
      for(let i=0 ; i<allATags.length ; i++){
          let quesLinkPromise = tab.evaluate( function(elem){  return elem.getAttribute("href");   }  , allATags[i] );// .evaluate(callback(),elements) function will evaluate elements in the callback function
          allQuesLinksPromise.push(quesLinkPromise);
      }
    //   allQuesLinkPromise = [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    let combinedPromise = Promise.all(allQuesLinksPromise);//promise.all() will return one single promise containing arrya of all promises either resolved or rejected
    return combinedPromise; //Promise<Pending>
  })
  .then(function(allQuesLinks){
      console.log(allQuesLinks);
  })
  .catch(function(err){//this catch function is common for all functions,if any of the function falis then this catch will work
      console.log("Inside catch");// to know that which function has failed print the error 
      console.log(err);
  })