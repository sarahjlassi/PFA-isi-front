import { Roles } from "./roles.model";

export class User {
    id !: number;
    username!: string;
    email!: string;
    password!: string;
    roles !: Roles;
    

}
