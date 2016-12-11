Feature('END-To-END Tests');

Scenario('Smoke Tests', (I) => {

  I.amOnPage('/index.html');
  I.see('__MATCHME__');
  I.click('#linkToPage2');
  I.seeCurrentUrlEquals('/page2.html');

    
  I.amOnPage('/page2.html');
  I.see('__MATCHME__');
  I.click('#linkToPage3');
  I.seeCurrentUrlEquals('/page3.html');
  I.see('the end');
    
});
