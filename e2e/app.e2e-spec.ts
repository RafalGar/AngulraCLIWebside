import { CORTEAMANGULARPage } from './app.po';

describe('corteamangular App', () => {
  let page: CORTEAMANGULARPage;

  beforeEach(() => {
    page = new CORTEAMANGULARPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
