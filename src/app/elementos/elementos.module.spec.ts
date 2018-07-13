import { ElementosModule } from './elementos.module';

describe('ElementosModule', () => {
  let elementosModule: ElementosModule;

  beforeEach(() => {
    elementosModule = new ElementosModule();
  });

  it('should create an instance', () => {
    expect(elementosModule).toBeTruthy();
  });
});
