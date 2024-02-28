import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { OptionRestRictCheckService } from '../../application/optionRestrictCheck.service';
// import { Message } from './message.entity';
import { RequestParam } from '../dto/requestParamDto';

// エンドポイント情報
@Controller('/optionRestrictCheck')
export class OptionRestRictCheckController {
  constructor(private readonly appService: OptionRestRictCheckService) {}

  @Post()
  @HttpCode(HttpStatus.OK) //Nestのデフォルトでは201のため200に変更
  async getHello(@Body() body: RequestParam): Promise<string> {
    return await this.appService.optionRestrictCheck(body);
  }
}
