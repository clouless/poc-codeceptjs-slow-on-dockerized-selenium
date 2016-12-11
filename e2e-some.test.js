Feature('END-To-END Tests');

Scenario('Smoke Tests', (I) => {

  I.amOnPage('/index.html');
  I.see('__MATCHME__');
  I.click('#linkToPage2');
  I.seeCurrentUrlEquals('https://local.codeclou.io:443/page2.html');

});
