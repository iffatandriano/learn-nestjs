import { Injectable } from '@nestjs/common';
import { CreateCustomersDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Iffat',
      email: 'iffat@gmail.com',
    },
    {
      id: 2,
      name: 'Andriano',
      email: 'andriano@email.com',
    },
    {
      id: 3,
      name: 'IA Fat',
      email: 'iafatandri@email.com',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomers(createCustomersDto: CreateCustomersDto) {
    return this.customers.push(createCustomersDto);
  }

  getCustomers() {
    return this.customers;
  }
}
