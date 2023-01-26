import { useState } from 'react';
import { userServices } from "../../services/users"

const useAuth = () => {
        // ESTO HACE QUE NO SEA NECESARIO ESCRIBIR TODAS LAS FUNCIONES QUE HAY DENTRO EN LOS DIFERENTES COMPONENTES 
        const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
        
        const login = async (email: string, pass: string) => {
            const users = await userServices.getAll()

            const user = users.find(elem => elem.email === email)
    
            if(user && user.password === pass) {
                setIsUserLoggedIn(true)
            } else {
                console.log("Datos incorrectos")
            }
            // PROCESAR EL LOGIN DE LOS USUARIO CON UN USUARIO Y CONTRASEÑA 
        }

        const loginWithToken  = () => {
           // PARA PRCESAR EL LOGIN XON LOS USUARIOS QUE INICIARON SECION CON ANTERIORIDAD Y TENEMOS SU TOKEN EN LOCA STORAGE 
        }

        const logout = () => {
            // PROCESA EL DESLOGUEO DE UN USUARIO
        }

        const forgotPassword = () => {
            // FUNCION PARA RECUPERAR LA CUENTA EN CADO DE OLVIDO DE CONTRASEÑA
        }

        return { login, loginWithToken, logout, forgotPassword }
}

export { useAuth }