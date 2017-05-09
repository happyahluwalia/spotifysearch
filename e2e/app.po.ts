import { browser, element, by } from 'protractor';

export class SpotifysearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ha-root h1')).getText();
  }
}
