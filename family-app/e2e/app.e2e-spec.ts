import {FamilyAppPage} from './app.po';

describe('family-app App', () => {
  let page: FamilyAppPage;

  beforeEach(() => {
    page = new FamilyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
