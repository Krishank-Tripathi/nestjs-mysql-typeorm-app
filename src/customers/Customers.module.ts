import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./Customer.entity";
import { CustomerController } from "./Customers.controller";
import { CustomerService } from "./Customers.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    providers: [CustomerService],
    controllers: [CustomerController]
})

export class CustomerModule {}