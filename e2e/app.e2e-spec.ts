import { KognozPage } from './app.po';

describe('kognoz App', function() {
  let page: KognozPage;

  beforeEach(() => {
    page = new KognozPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
