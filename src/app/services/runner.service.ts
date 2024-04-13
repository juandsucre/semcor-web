import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import  Runner  from "../interfaces/runner.interface";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  constructor(
    private firesotre: Firestore
  ) {


   }

   
   addNewRunner(runner:Runner){
    const placeRefDb = collection(this.firesotre, 'runners');

    return addDoc(placeRefDb, runner);
   }


   getRunners():Observable<Runner[]>{
    const placeRefDb = collection(this.firesotre, 'runners');

    return collectionData(placeRefDb, {idField: 'id'}) as Observable<Runner[]>;
   }
}
