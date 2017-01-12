import { NgBootstrapDemoPage } from './app.po';

describe('ng-bootstrap-demo App', function() {
  let page: NgBootstrapDemoPage;

  beforeEach(() => {
    page = new NgBootstrapDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
