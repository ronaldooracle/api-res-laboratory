"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_config_module_1 = require("./typeorm-config/typeorm-config.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_service_1 = require("./typeorm-config/typeorm-config.service");
const laboratory_module_1 = require("./laboratory/laboratory.module");
const laboratory__controller_1 = require("./laboratory/laboratory..controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply()
            .forRoutes(laboratory__controller_1.LaboratoryController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                name: 'default',
                useClass: typeorm_config_service_1.TypeormConfigService,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                name: 'mysql',
                useClass: typeorm_config_service_1.TypeormConfigService,
            }),
            typeorm_config_module_1.TypeormConfigModule,
            common_1.HttpModule,
            laboratory_module_1.LaboratoryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map