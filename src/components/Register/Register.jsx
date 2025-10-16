import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import RegisterForm from "./RegisterForm/RegisterForm";
import { useState, useEffect } from "react";
import usuariosApi from "../../api/usuariosApi";

const Register = ()=>{

const [usuarios, setUsuarios] = useState([])

    const handleOnLoad = () => {
        const usuariosOriginales = usuariosApi.get()
        setUsuarios(usuariosOriginales)
    }

    useEffect(() => {
        handleOnLoad()
    }, [])

    const handleSubmit = (usuario) => {
        usuariosApi.insert(usuario)
        alert('Registrado Correctamente!')
        handleOnLoad()
    }

    return(
        <>
            <Header/>
            <RegisterForm onSubmit={handleSubmit}/>
            <Footer/>
        </>
    )
}
export default Register;