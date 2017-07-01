import { CentralMonitoringSystemPage } from './app.po';

describe('central-monitoring-system App', () => {
  let page: CentralMonitoringSystemPage;

  beforeEach(() => {
    page = new CentralMonitoringSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
