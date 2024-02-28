・下記2つのエンドポイントを実装
http://localhost:3000/calculateTaxService
http://localhost:3000/optionRestrictCheck
・リクエストボディはともに下記で共通。
  パラメタとして送った文字列に各サービスの名前を連結して返却。
{"testparam": "this is request"}
  文字列以外は下記のバリデーションが働く
{
"message":[
"testparam must be a string"
],
"error": "Bad Request",
"statusCode": 400
}
・下記コマンドで実行
nest build 
npm run start

下記はメモ。
それぞれをモジュールとしてまとめ別のディレクトリに実装
→optionRestrictCheckをメインに実装

構造化ログを出力するためにwinstonでカスタムロガーを実装


Injectionがよくわからない。
NestではプロバイダとしてDiコンテナに格納するインスタンスを定義するらしい。

NestJsにおけるプロバイダは4種
値プロバイダ
クラスプロバイダ：クラスインスタンスの提供はこれを利用
ファクトリプロバイダ:非同期処理の場合これを利用
エイリアスプロバイダ
