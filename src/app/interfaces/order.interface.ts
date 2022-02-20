import { shopping } from './shopping.interface';
import { user } from './user.interface';

export interface order {
    id?: string,
    name ?:string,
    address ?: string,
    cart ?:Array<shopping>
}