import { Module } from '@nestjs/common';
import { OptionRestRictCheckController } from './controller/app.controller';
import { OptionRestRictCheckService } from './application/optionRestrictCheck.service';

// API単位に作成
@Module({
  // NestJSモジュール
  imports: [],
  controllers: [OptionRestRictCheckController],
  // DIに格納してシングルトンで利用するクラスをproviderに入れる
  providers: [OptionRestRictCheckService],
})
export class OptionRestrictCheckModule {}
