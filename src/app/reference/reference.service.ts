import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reference} from "./reference";

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  public referenceDataListEvent: EventEmitter<Reference[]> = new EventEmitter<Reference[]>();
  public referenceDeleteEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public referenceUpdateEvent: EventEmitter<Reference> = new EventEmitter<Reference>();
  public referenceElementSelectedEvent: EventEmitter<Reference> = new EventEmitter<Reference>();

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getReferences() : Observable<any>{
    return this.httpClient.get(this.SERVER_URL + 'references');
  }

  public getReference(referenceId : number){
    return this.httpClient.get(`${this.SERVER_URL + 'references'}/${referenceId}`);
  }
  public createReference(reference: Reference){
    return this.httpClient.post(`${this.SERVER_URL + 'references'}`, reference)
  }

  public deleteReference(referenceId: number){
    return this.httpClient.delete(`${this.SERVER_URL + 'references'}/${referenceId}`)
  }
  public updateReference(reference: Reference){
    return this.httpClient.put(`${this.SERVER_URL + 'references'}/${reference.id}`, reference)
  }
}
