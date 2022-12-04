import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usure} from "./usure";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsureService {

  public usureDataListEvent: EventEmitter<Usure[]> = new EventEmitter<Usure[]>();
  public usureDeleteEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public usureUpdateEvent: EventEmitter<Usure> = new EventEmitter<Usure>();
  public usureElementSelectedEvent: EventEmitter<Usure> = new EventEmitter<Usure>();

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getUsures() : Observable<any> {
    return this.httpClient.get(this.SERVER_URL + 'usures');
  }

  public getUsure(usureId: string){
    return this.httpClient.get(`${this.SERVER_URL + 'usures'}/${usureId}`);
  }
  public createUsure(usure: Usure){
    return this.httpClient.post(`${this.SERVER_URL + 'usures'}`, usure)
  }

  public deleteUsure(usureId: number){
    return this.httpClient.delete(`${this.SERVER_URL + 'usures'}/${usureId}`)
  }
  public updateUsure(usure: Usure){
    return this.httpClient.put(`${this.SERVER_URL + 'usures'}/${usure.id}`, usure)
  }


}
