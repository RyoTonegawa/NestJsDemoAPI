import { Injectable } from '@nestjs/common';
import { RequestParam } from '../presentation/dto/requestParamDto';

@Injectable()
export class CalculateTaxService {
  async optionRestrictCheck(requestParam: RequestParam): Promise<string> {
    const returnparam: string = requestParam.testparam + ' calculateTax';
    return returnparam;
  }
}
