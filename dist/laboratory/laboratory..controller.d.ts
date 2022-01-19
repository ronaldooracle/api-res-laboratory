import { CreateLaboratoryService } from './create-laboratory/create-laboratory.service';
import { DeleteExamService } from './delete-exam/delete-exam.service';
import RequestCreateLatoratoryDTO from './dtos/request-create-laboratory.dto';
import { RequestUpdateExamDTO } from './dtos/request-update-exam.dto';
import { UpdateExamService } from './update-exam/update-exam.service';
import { FindAllExamService } from './find-all-exam/find-all-exam.service';
import { Exam } from 'src/entitys/exam.entity.entity';
export declare class LaboratoryController {
    private readonly createLaboratoryService;
    private readonly deleteExamService;
    private readonly findAllExamService;
    private readonly updateExamService;
    constructor(createLaboratoryService: CreateLaboratoryService, deleteExamService: DeleteExamService, findAllExamService: FindAllExamService, updateExamService: UpdateExamService);
    create(createLaboratoryDTO: RequestCreateLatoratoryDTO): Promise<RequestCreateLatoratoryDTO>;
    findAll(): Promise<Exam[]>;
    delete(id: string): Promise<void>;
    update(updateExamDTO: RequestUpdateExamDTO): Promise<void>;
}
