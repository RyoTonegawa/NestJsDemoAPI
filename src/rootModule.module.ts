// app.module.ts
import { Module } from '@nestjs/common';
import { OptionRestrictCheckModule } from './optionRestRictCheck/optionRestrictCheck.module';
import { CalculateTaxModule } from './calculateTax/CalculateTaxModule.module';

@Module({
  imports: [OptionRestrictCheckModule, CalculateTaxModule],
})
export class RootModule {}
