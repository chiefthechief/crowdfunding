import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, updateDoc}  from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBsuScPejfd4OfKXK5LIjlWk530ogFuv5c",
   authDomain: "crowdfunding-27285.firebaseapp.com",
   projectId: "crowdfunding-27285",
   storageBucket: "crowdfunding-27285.appspot.com",
   messagingSenderId: "350302103582",
   appId: "1:350302103582:web:65031cadfe7dabc16a660f"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14');

function writeDailySpecial(){
   const docData = {
      whole: 'false',
      half: 'true',
      semi: 'wholly false',
   }
   setDoc(specialOfTheDay, docData);
}
writeDailySpecial();
console.log('updated database');
const amount = doc(firestore, 'amount/given');
function updateAmount(){
   const moneyData = {
      amountData: '1',
   }
   setDoc(amount, moneyData, {merge: true});
}
updateAmount();