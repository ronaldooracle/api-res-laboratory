import { Laboratory } from '../../entitys/laboratory.entity';
import { Repository } from 'typeorm';
import RequestCreateLatoratoryDTO from '../dtos/request-create-laboratory.dto';
export declare class CreateLaboratoryService {
    private readonly laboratoryRepository;
    constructor(laboratoryRepository: Repository<Laboratory>);
    execute({ laboratory, active, address, }: RequestCreateLatoratoryDTO): Promise<RequestCreateLatoratoryDTO>;
}
