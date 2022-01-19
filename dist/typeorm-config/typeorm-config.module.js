"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_module_1 = require("../config/config.module");
const common_1 = require("@nestjs/common");
const typeorm_config_service_1 = require("./typeorm-config.service");
let TypeormConfigModule = class TypeormConfigModule {
};
TypeormConfigModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [config_module_1.ConfigModule],
        providers: [typeorm_config_service_1.TypeormConfigService],
        exports: [typeorm_config_service_1.TypeormConfigService],
    })
], TypeormConfigModule);
exports.TypeormConfigModule = TypeormConfigModule;
//# sourceMappingURL=typeorm-config.module.js.map