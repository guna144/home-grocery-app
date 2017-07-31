import { HomegroceryAppPage } from './app.po';

describe('homegrocery-app App', () => {
  let page: HomegroceryAppPage;

  beforeEach(() => {
    page = new HomegroceryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
