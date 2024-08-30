
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {database} from '../firebase/firebase';

export async function create(collectionName:string,data:any){

    const dbRef = collection(database,collectionName);
    const docRef =await  addDoc(dbRef,{
        ...data
    })

    console.log("Data saved successfully",docRef);


}

export async function getAll(collectionName:string){

    const dbRef = collection(database,collectionName);
    const snapShot = await getDocs(dbRef);
    const data =[]; 
    snapShot.forEach((dataSnap)=>{
        data.push(dataSnap.data());
    })

    return data;


}