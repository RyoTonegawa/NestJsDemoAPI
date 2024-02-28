import { LogLevel, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
// 構造化ログのためにロガークラスを実装
export class WinstonLogger implements LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });
  }
  warn(message: string, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  debug?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  verbose?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  fatal?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  setLogLevels?(_levels: LogLevel[]) {
    throw new Error('Method not implemented.');
  }

  log(_message: string) {
    this.logger.info(_message);
  }

  error(message: string, trace: string) {
    this.logger.error({ message, trace });
  }
}
