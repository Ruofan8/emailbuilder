import { BuilderPage } from './app.po';

describe('builder App', () => {
  let page: BuilderPage;

  beforeEach(() => {
    page = new BuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
