import { IsString } from 'class-validator';
// class-validatorとclass-transformerを利用して
// NestがリクエストパラメータをＤＴＯに変換する
export class RequestParam {
  @IsString()
  testparam: string;
}
