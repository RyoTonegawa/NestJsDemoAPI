import { OptionRestRictCheckController } from './presentation/controller/app.controller';
import { OptionRestRictCheckService } from './application/optionRestrictCheck.service';
import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// API単位に作成
@Module({
  // NestJSモジュール
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'oracle',
    //   host: 'host',
    //   port: 1521,
    //   username: 'username',
    //   password: 'password',
    //   sid: 'sid',
    //   entities: [],
    //   synchronize: false, // trueにすると更新が走る可能性があるのでfalse
    // }),
  ],
  controllers: [OptionRestRictCheckController],
  // DIに格納してシングルトンで利用するクラスをproviderに入れる
  providers: [
    OptionRestRictCheckService,
    // ファクトリプロバイダは実装しきってないのでコメントアウト
    // {
    //   provide: 'MY_REPOSITORY',
    //   // 非同期処理のロジックを組み込む場合はuseFactoryを利用する
    //   useFactory: async () => {
    //     const repo = new MyRepository();
    //     // 例えば、非同期にデータベース接続を確立する
    //     await repo.connect(); // 仮の非同期操作
    //     return repo;
    //   },
    // },
    {
      provide: OptionRestRictCheckService,
      // 単にクラスインスタンスをDIコンテナに入れる場合はuseClassを利用する
      useClass: OptionRestRictCheckService,
    },
  ],
})
export class OptionRestrictCheckModule {}
