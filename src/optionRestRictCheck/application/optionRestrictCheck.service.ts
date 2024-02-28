import { Injectable } from '@nestjs/common';
import { RequestParam } from '../presentation/dto/requestParamDto';

@Injectable()
export class OptionRestRictCheckService {
  async optionRestrictCheck(requestParam: RequestParam): Promise<string> {
    return requestParam.testparam;
  }
}
