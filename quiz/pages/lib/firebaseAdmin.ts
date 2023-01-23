import * as admin from "firebase-admin"
import type { ServiceAccount } from "firebase-admin"

const cert : ServiceAccount = {

}

export const firebaseAdmin = admin.apps[0] ?? admin.initializeApp({credential: admin.credential.cert(cert)})