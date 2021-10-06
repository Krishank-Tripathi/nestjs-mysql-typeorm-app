import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { Customer } from "./Customer.entity";
import { CustomerService } from "./Customers.service";

@Controller('customer')
export class CustomerController {
    constructor ( private customerService: CustomerService) {}
    
    @Get()
    findAll() {
        return this.customerService.getCustomers();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.customerService.findCustomer(id);
    }

    @Post() 
    create(@Body() customer: Customer) {
        return this.customerService.createCustomer(customer);
    }

    @Patch(':id')
    async editCustomer(@Body() customer: Customer, @Param('id') id: number){
        return  this.customerService.editCustomerDetails(id, customer);
    }
}