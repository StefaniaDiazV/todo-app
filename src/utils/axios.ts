import axios from "axios";

// NOS PERMITE CONFIGURAR UN OBJETO CON UNOS DATOS INICIALES O CONFIGURACION INICIAL

// CONSULTAS A FIREBASE
const api = axios.create({
    baseURL: 'https://todoapp-3798f-default-rtdb.firebaseio.com/',
    params: {
        api_key: "prueba-api-key"
    }

})

// CONSOLUTAS A L API DE PELICULAS 

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export { api }