import { Injectable } from "@angular/core";
import { Customer } from "./customer";
import { CUSTOMERS } from "./mock-customer";

@Injectable()
export class CustomerService {
constructor() {}   
selectedCustomers: Customer[];

customers(): Customer[] {
    return CUSTOMERS;
}


}
