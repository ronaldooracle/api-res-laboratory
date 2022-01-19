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
const class_validator_1 = require("class-validator");
class RequestCreateLatoratoryDTO {
}
__decorate([
    class_validator_1.Length(1, 300, { message: 'Campo name pode ter até 300 caracteres' }),
    class_validator_1.IsNotEmpty({ message: 'Campo name é obrigatório' }),
    class_validator_1.IsString({ message: 'Campo name precisa ser um texto' }),
    __metadata("design:type", String)
], RequestCreateLatoratoryDTO.prototype, "laboratory", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], RequestCreateLatoratoryDTO.prototype, "active", void 0);
exports.default = RequestCreateLatoratoryDTO;
//# sourceMappingURL=request-create-laboratory.dto.js.map