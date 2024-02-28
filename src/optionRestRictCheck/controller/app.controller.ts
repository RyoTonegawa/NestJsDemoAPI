import { Body, Controller, Post } from '@nestjs/common';
import { OptionRestRictCheckService } from '../application/optionRestrictCheck.service';
// import { Message } from './message.entity';
import { RequestParam } from '../presentation/dto/requestParamDto';

// エンドポイント情報
@Controller('/optionRestrictCheck')
export class OptionRestRictCheckController {
  constructor(private readonly appService: OptionRestRictCheckService) {}

  @Post()
  async getHello(@Body() body: RequestParam): Promise<string> {
    return await this.appService.optionRestrictCheck(body);
  }
}