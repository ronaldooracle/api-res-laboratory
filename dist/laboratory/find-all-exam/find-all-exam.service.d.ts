import { Repository } from 'typeorm';
import { Exam } from '../../entitys/exam.entity.entity';
export declare class FindAllExamService {
    private readonly ExamRepository;
    constructor(ExamRepository: Repository<Exam>);
    execute(): Promise<Exam[]>;
    findAll(): Promise<Exam[]>;
}
