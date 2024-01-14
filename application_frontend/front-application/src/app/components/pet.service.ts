import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

private URL = 'http://localhost:8080/api/v1/pets';

  constructor(private httpClient: HttpClient) { }

  save(pet: any): Observable<Pet> {
    console.log(pet.name)
    console.log(pet.spitz)
    return this.httpClient.post<any>(`${this.URL}`, pet)
  }

  listPets(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(`${this.URL}`);
  }

  getDetailedAdoption(id: number): Observable<Pet>{
    return this.httpClient.get<Pet>(`${this.URL}/${id}`);
  }

  update(id: number, pet: any): Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`, pet);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.URL}/${id}`, {responseType: 'text'})
  }
}
