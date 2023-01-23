import { FirebaseOptions, initializeApp } from "firebase/app";
import type { FirebaseApp } from "firebase/app";

const firebaseConfig: FirebaseOptions = {

}

export const firebaseApp = initializeApp(firebaseConfig)