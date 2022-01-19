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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const laboratory_entity_1 = require("../../entitys/laboratory.entity");
const typeorm_2 = require("typeorm");
const log = new common_1.Logger('CreateLaboratoryService');
let CreateLaboratoryService = class CreateLaboratoryService {
    constructor(laboratoryRepository) {
        this.laboratoryRepository = laboratoryRepository;
    }
    async execute({ laboratory, active, address, }) {
        try {
            const laboratoryCreated = this.laboratoryRepository.create();
            laboratoryCreated.laboratory = laboratory;
            laboratoryCreated.active = active;
            laboratoryCreated.address = address;
            const createdEntity = await this.laboratoryRepository.save(laboratoryCreated);
            return createdEntity;
        }
        catch (error) {
            log.error(`Erro ao salvar a laboratorio na base de dados`);
            throw new common_1.InternalServerErrorException('Erro ao salvar a laboratorio na base de dados');
        }
    }
};
CreateLaboratoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(laboratory_entity_1.Laboratory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CreateLaboratoryService);
exports.CreateLaboratoryService = CreateLaboratoryService;
//# sourceMappingURL=create-laboratory.service.js.map