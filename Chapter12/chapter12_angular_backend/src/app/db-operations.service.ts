import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbOperationsService {

  constructor(private http: HttpClient) { }

  getListings(){
    return this.http.get('http://localhost:3000/listings');
  }
  viewListing(id){
    return this.http.get('http://localhost:3000/listings/'+id);
  }
  addListing(newList){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/listings', newList);
  }
  editListing(id, newList){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put('http://localhost:3000/listings/'+id, newList);
  }
   deleteListing(id){
    return this.http.delete('http://localhost:3000/listings/'+id);
  }

}
