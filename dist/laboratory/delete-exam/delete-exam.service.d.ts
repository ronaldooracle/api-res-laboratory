import { Repository } from 'typeorm';
import { Exam } from '../../entitys/exam.entity.entity';
export declare class DeleteExamService {
    private readonly ExamRepository;
    constructor(ExamRepository: Repository<Exam>);
    execute(id: string): Promise<void>;
    deleteExam(id: string): Promise<void>;
}
