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

login.addEventListener("click", (e) => {
    var email = document.getElementById("emaillog").value;
    var password = document.getElementById("passwordlog").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            alert("Usuario logueado");
        })
        .catch((error) => {
            console.error("Error de autenticación:", error);
            const errorCode = error.code;

            if (errorCode == "auth/invalid-email")
                alert("El correo no es valido");
            else if (errorCode == "auth/user-disabled")
                alert("El usuario a sido desabilitado");
            else if (errorCode == "auth/user-not-found")
                alert("El usuario no existe");
            else if (errorCode == "auth/invalid-login-credentials")
                alert("Contraseña incorrecta");
        });
});

cerrar.addEventListener("click", (e) => {
    auth.signOut()
        .then(() => {
            alert("Sesión cerrada");
        })
        .catch((error) => {
            alert("Error al cerrar sesión");
        });
});

// Se recomienda utilizar onAuthStateChanged en un componente principal de la aplicación
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("Usuario Activo");
        if (user.emailVerified) {
            // Verifica si el correo electrónico del usuario está verificado
            window.open("https://www.google.com/");
        }
    } else {
        console.log("Usuario inactivo");
    }
});

//para que al recargar la pagina borre datos
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("emaillog").value = "";
    document.getElementById("passwordlog").value = "";
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("emaillog").setAttribute("autocomplete", "off");
    document.getElementById("passwordlog").setAttribute("autocomplete", "off");
});
