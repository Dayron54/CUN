import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

import {
    sendEmailVerification,
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB0SxHP6-jR1zOSv-Hc5RDG47vKg4FuDac",
    authDomain: "cafeteria-257a9.firebaseapp.com",
    projectId: "cafeteria-257a9",
    storageBucket: "cafeteria-257a9.appspot.com",
    messagingSenderId: "332009052501",
    appId: "1:332009052501:web:0dfc7c7d1656585f5077dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registro.addEventListener("click", (e) => {
    var email = document.getElementById("emailreg").value;
    var password = document.getElementById("passwordreg").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            alert("Usuario creado");
            sendEmailVerification(auth.currentUser).then(() => {
                alert("Se ha enviado un correo de verificación");
            });
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode == "auth/email-already-in-use")
                alert("El correo ya esta en uso");
            else if (errorCode == "auth/invalid-email")
                alert("El correo no es valido");
            else if (errorCode == "auth/weak-password")
                alert("La contraseña debe de tener al menos 6 caracteres");
        });
});

//para que al recargar la pagina borre datos
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("emailreg").value = "";
    document.getElementById("passwordreg").value = "";
});
