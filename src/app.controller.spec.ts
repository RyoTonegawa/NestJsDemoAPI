import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './optionRestRictCheck/controller/app.controller';
import { AppService } from './optionRestRictCheck/application/optionRestrictCheck.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
