"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const laboratory__controller_1 = require("./laboratory..controller");
const create_laboratory_service_1 = require("./create-laboratory/create-laboratory.service");
const typeorm_1 = require("@nestjs/typeorm");
const laboratory_entity_1 = require("../entitys/laboratory.entity");
const delete_exam_service_1 = require("./delete-exam/delete-exam.service");
const exam_entity_entity_1 = require("../entitys/exam.entity.entity");
const update_exam_service_1 = require("./update-exam/update-exam.service");
const find_all_exam_service_1 = require("./find-all-exam/find-all-exam.service");
let LaboratoryModule = class LaboratoryModule {
};
LaboratoryModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([laboratory_entity_1.Laboratory, exam_entity_entity_1.Exam])],
        controllers: [laboratory__controller_1.LaboratoryController],
        providers: [
            create_laboratory_service_1.CreateLaboratoryService,
            delete_exam_service_1.DeleteExamService,
            update_exam_service_1.UpdateExamService,
            find_all_exam_service_1.FindAllExamService,
        ],
    })
], LaboratoryModule);
exports.LaboratoryModule = LaboratoryModule;
//# sourceMappingURL=laboratory.module.js.map