import { Observable } from "rxjs";

export interface IGrpcService {
    sum(numberArray: INumberArray): Observable<any>;
}
interface INumberArray {
    data: number[];
}
