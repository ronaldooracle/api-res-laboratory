import { ConfigService } from '../config/config.service';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class TypeormConfigService implements TypeOrmOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
