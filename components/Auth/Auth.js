import {useState} from 'react'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'

export default function Auth({onCloseModal, settitleModal}) {



    const [showLogin, setshowLogin] = useState(true)

    const showLoginForm = () => {
        setshowLogin(true)
        settitleModal("Iniciar Sesión")
    }
    const showRegisterForm = () => {
        settitleModal("Crear nuevo usuario")
        setshowLogin(false)
    }



    return showLogin ? <LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal} /> : <RegisterForm showLoginForm={showLoginForm}/>
}
