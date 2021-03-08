import firebaseInstance from "./firebase";
import "firebase/firestore";
import "firebase/storage";

export default {
  getLoops
}

async function getLoops() {
  const loops = []
  return  firebaseInstance.firebase.firestore().collection("loops").get()
    .then((docs) => {
      docs.forEach((doc) => {
        loops.push(doc.data())
      });
      return loops
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
