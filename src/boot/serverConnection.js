import firebaseInstance from "src/middleware/firebase";

export default async () => {
  const config = {
    apiKey: "AIzaSyAHDnsOUJw_LqjVsjuEAG269hEsQ5WQ0Pw",
    authDomain: "padsloop-f9305.firebaseapp.com",
    projectId: "padsloop-f9305",
    storageBucket: "padsloop-f9305.appspot.com",
    messagingSenderId: "49015806238",
    appId: "1:49015806238:web:36707a571c235426efd10f",
    measurementId: "G-3J0SM3VMJW"
  };

  firebaseInstance.fBInit(config);
  // Validation that our service structure is working
  // with a firebase app instance. Does not validate a
  // valid API key.
};
