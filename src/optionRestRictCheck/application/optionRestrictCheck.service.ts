import { Injectable } from '@nestjs/common';
import { RequestParam } from '../presentation/dto/requestParamDto';
import { Logger } from '@nestjs/common';

@Injectable()
export class OptionRestRictCheckService {
  async optionRestrictCheck(requestParam: RequestParam): Promise<string> {
    const logger = new Logger();
    logger.log('request paramater %o', requestParam);
    const returnparam: string = requestParam.testparam + ' OptionRestRictCheck';
    return returnparam;
  }
}
