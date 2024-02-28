import { Module } from '@nestjs/common';
import { CalculateTaxController } from './controller/calculateTax.controller';
import { CalculateTaxService } from './application/calculateTax.service';

// API単位に作成
@Module({
  // NestJSモジュール
  imports: [],
  controllers: [CalculateTaxController],
  // DIに格納してシングルトンで利用するクラスをproviderに入れる
  providers: [CalculateTaxService],
})
export class CalculateTaxModule {}
