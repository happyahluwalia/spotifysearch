import { SpotifysearchPage } from './app.po';

describe('spotifysearch App', () => {
  let page: SpotifysearchPage;

  beforeEach(() => {
    page = new SpotifysearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ha works!');
  });
});
