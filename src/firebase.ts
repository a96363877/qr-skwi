// firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7Kd6-a3M2eD_yuZbbcxEJXslU2RsWJQk",
  authDomain: "rfiod-acd4d.firebaseapp.com",
  projectId: "rfiod-acd4d",
  storageBucket: "rfiod-acd4d.firebasestorage.app",
  messagingSenderId: "552489166840",
  appId: "1:552489166840:web:200a39c746c843f5b0d80d",
  measurementId: "G-BFX7D5ESW4"
  
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addData(data: any) {
  localStorage.setItem('visitor', data.id);
  try {
    const docRef = await doc(db, 'pays', data.id!);
    await setDoc(docRef, data);

    console.log('Document written with ID: ', docRef.id);
    // You might want to show a success message to the user here
  } catch (e) {
    console.error('Error adding document: ', e);
    // You might want to show an error message to the user here
  }
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: 'pending' },
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
};
export { db };
