import { Body, Controller, Post } from '@nestjs/common';
import { CalculateTaxService } from '../application/calculateTax.service';
import { RequestParam } from '../presentation/dto/requestParamDto';

// エンドポイント情報
@Controller('/calculateTaxService')
export class CalculateTaxController {
  constructor(private readonly appService: CalculateTaxService) {}

  @Post()
  async getHello(@Body() body: RequestParam): Promise<string> {
    return await this.appService.optionRestrictCheck(body);
  }
}
