import { Injectable, Inject } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { ConfigType } from '@nestjs/config';
import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    //@Inject('TASKS') private tasks: any[],
    // private configService: ConfigService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    // console.log(this.tasks);
    // console.log(
    //   `En base a tu entorno, la Base de datos: ${this.configService.get(
    //     'DATA_BASE',
    //   )}`,
    // );
    console.log(
      `En base a tu entorno, la Base de datos: ${this.configService.database.name}`,
    );
    return 'Hello World! ' + this.apiKey;
  }
}
