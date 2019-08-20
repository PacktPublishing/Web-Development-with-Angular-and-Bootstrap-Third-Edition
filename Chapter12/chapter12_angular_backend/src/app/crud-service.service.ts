import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from './firebase-config';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private afStore : AngularFirestore ) { }

  getComments() {
    return this.afStore.collection('comments');
  }

  deleteComment(id) {
    this.afStore.collection('comments').doc(id).delete();
  }

  addComment(newComment) {
    this.afStore.collection('comments').add(newComment);
  }

  updateComment(id, editedListing) {
    this.afStore.collection('comments').doc(id).set(editedListing);
  }

}
