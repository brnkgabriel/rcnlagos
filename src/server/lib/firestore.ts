import {
  collection, getDocs, getDoc,
  addDoc, deleteDoc, doc, query,
  where, setDoc, collectionGroup,
  Timestamp,
  DocumentData
} from "firebase/firestore"
import { iOptions, iSubscribe } from "~~/src/types"
import { firestoredb } from "./firebase"

export const queryByCollection = async (col: string) => {
  const colRef = collection(firestoredb, col)

  const snapshot = await getDocs(colRef)

  const docs = Array.from(snapshot.docs).map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  return docs
}

export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestoredb, col)), document, { merge: true })
}

export const add = async (col: string, document: Object) => {
  const colRef = collection(firestoredb, col)
  const docRef = await addDoc(colRef, document)
  return docRef
}

export const del = async (col: string, id: string) => {
  const docRef = doc(firestoredb, col, id)
  return await deleteDoc(docRef)
}

export const checkAndStoreDoc = async (options: iOptions) => {
  const { col, data, id } = options
  const docRef = doc(firestoredb, col as string, id as string)
  const docSnap = await getDoc(docRef)
  const snapData: DocumentData = docSnap.data() as DocumentData
  const exists = snapData[data.email]

  console.log("exists", exists)

  let response: iSubscribe

  if (exists) {
    response = { error: true, success: false, message: "Email already exists" }
    return response
  }

  try {
    snapData[data.email] = data
    await setDoc(docRef, snapData)
    response = { error: false, success: true, message: "Successfully subscribed" }
    return response
  } catch (error: any) {
    response = { error: true, success: false, message: error.message }
    return response
  }

}