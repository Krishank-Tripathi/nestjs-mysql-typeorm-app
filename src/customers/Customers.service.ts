import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Customer } from "./Customer.entity";

@Injectable()
export class CustomerService {
    constructor (
        @InjectRepository(Customer) private customerRepository: Repository<Customer>
    ) {}

    async getCustomers(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }

    async findCustomer(id: number): Promise<Customer> {
        return await this.customerRepository.findOne(id);
    }

    async createCustomer(customerObj: Customer): Promise<void> {
        await this.customerRepository.save(customerObj);
    }

    async removeCustomer(id: number): Promise<void> {
        await this.customerRepository.delete(id);
    }

    async editCustomerDetails(id: number, customer: Customer): Promise<Customer> {
        const editedDetails= await this.customerRepository.findOne(id);
        if (!editedDetails) {
          throw new NotFoundException('Customer is not found');
        }
        editedDetails.email = customer.email;
        editedDetails.name = customer.name;
        editedDetails.active = customer.active;

        await editedDetails.save();
        return editedDetails;
      }
}