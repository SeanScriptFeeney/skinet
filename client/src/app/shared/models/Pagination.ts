import { IProduct } from './products';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    myProperty: IProduct[];
}
