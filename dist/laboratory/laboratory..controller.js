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
const create_laboratory_service_1 = require("./create-laboratory/create-laboratory.service");
const delete_exam_service_1 = require("./delete-exam/delete-exam.service");
const request_create_laboratory_dto_1 = require("./dtos/request-create-laboratory.dto");
const request_update_exam_dto_1 = require("./dtos/request-update-exam.dto");
const update_exam_service_1 = require("./update-exam/update-exam.service");
const find_all_exam_service_1 = require("./find-all-exam/find-all-exam.service");
const exam_entity_entity_1 = require("../entitys/exam.entity.entity");
let LaboratoryController = class LaboratoryController {
    constructor(createLaboratoryService, deleteExamService, findAllExamService, updateExamService) {
        this.createLaboratoryService = createLaboratoryService;
        this.deleteExamService = deleteExamService;
        this.findAllExamService = findAllExamService;
        this.updateExamService = updateExamService;
    }
    create(createLaboratoryDTO) {
        return this.createLaboratoryService.execute(createLaboratoryDTO);
    }
    findAll() {
        return this.findAllExamService.execute();
    }
    delete(id) {
        return this.deleteExamService.execute(id);
    }
    update(updateExamDTO) {
        return this.updateExamService.execute(updateExamDTO);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_create_laboratory_dto_1.default]),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "findAll", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "delete", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_update_exam_dto_1.RequestUpdateExamDTO]),
    __metadata("design:returntype", Promise)
], LaboratoryController.prototype, "update", null);
LaboratoryController = __decorate([
    common_1.Controller('laboratory'),
    common_1.UseGuards(),
    __metadata("design:paramtypes", [create_laboratory_service_1.CreateLaboratoryService,
        delete_exam_service_1.DeleteExamService,
        find_all_exam_service_1.FindAllExamService,
        update_exam_service_1.UpdateExamService])
], LaboratoryController);
exports.LaboratoryController = LaboratoryController;
//# sourceMappingURL=laboratory..controller.js.map