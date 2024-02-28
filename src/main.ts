import { NestFactory } from '@nestjs/core';
import { RootModule } from './rootModule.module';
import { ValidationPipe } from '@nestjs/common';

// NestJSの起動プロセスをカプセル化する
async function bootstrap() {
  // NestJSモジュールからNestJSアプリのインスタンスを作成する
  // bootstrapには一つのモジュールしか入れられないため、RootModuleに複数のAPIモジュールをまとめる
  const app = await NestFactory.create(RootModule);
  // GlobalPipesを利用することでNestJSがDTOで定義したバリデーションと構造に従っているかチェックする
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
