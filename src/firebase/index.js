import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
