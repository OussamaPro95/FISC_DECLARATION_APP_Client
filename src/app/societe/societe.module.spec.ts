import { SocieteModule } from './societe.module';

describe('SocieteModule', () => {
  let societeModule: SocieteModule;

  beforeEach(() => {
    societeModule = new SocieteModule();
  });

  it('should create an instance', () => {
    expect(SocieteModule).toBeTruthy();
  });
});
