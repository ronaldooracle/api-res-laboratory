"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_service_1 = require("../config/config.service");
const common_1 = require("@nestjs/common");
const path = require("path");
let TypeormConfigService = class TypeormConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        return {
            type: 'oracle',
            host: this.configService.get('ORACLE_HOST'),
            port: parseInt(this.configService.get('ORACLE_PORT')),
            username: this.configService.get('ORACLE_USERNAME'),
            password: this.configService.get('ORACLE_PASSWORD'),
            schema: this.configService.get('ORACLE_SCHEMA'),
            sid: this.configService.get('ORACLE_SID'),
            entities: [path.join(__dirname + '/../**/*.entity{.ts,.js}')],
            synchronize: false,
            subscribers: [path.join(__dirname + '/../**/*.subscriber{.ts,.js}')],
            logging: true,
        };
    }
};
TypeormConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], TypeormConfigService);
exports.TypeormConfigService = TypeormConfigService;
//# sourceMappingURL=typeorm-config.service.js.map