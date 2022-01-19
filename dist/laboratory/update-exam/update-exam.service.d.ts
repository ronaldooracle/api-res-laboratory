import { Repository } from 'typeorm';
import { Exam } from '../../entitys/exam.entity.entity';
import { RequestUpdateExamDTO } from '../dtos/request-update-exam.dto';
export declare class UpdateExamService {
    private readonly examRepository;
    constructor(examRepository: Repository<Exam>);
    execute({ id, type, active, examNane }: RequestUpdateExamDTO): Promise<void>;
}
