import './RegisterForm.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({onSubmit}) => {

    const navigate = useNavigate();

    const usuarioDefault = {
        id: 0,
        nombre: "",
        apellido: "",
        correo: "",
        password: "",
        confirmPassword: "",
        dni: "",
    }

    const [usuario, setUsuario] = useState(usuarioDefault)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (usuario.correo === ""
            || usuario.nombre === "" 
            || usuario.apellido === ""
            || usuario.dni === ""
            || usuario.password === ""){
            alert("Debe completar todos los datos necesarios para el registro")
            return;
        }

        if (usuario.password !== usuario.confirmPassword){
            alert("Debe colocar la misma contraseña en la confirmación")
            return;
        }

        const nuevoUsuario = {
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.correo,
            password: usuario.password,
            dni: usuario.dni
        };

        onSubmit(nuevoUsuario)

        localStorage.setItem("usuario",JSON.stringify(nuevoUsuario));

        navigate("/")

    }

    return(
        <main>
            <div className="registroBloque">
                <form>
                    <h2>Registro</h2>
                        <label>Nombre</label><br/>
                        <input type="text" placeholder="Nombre del usuario" value={usuario.nombre}
                            onChange={(e) => setUsuario({...usuario, nombre: e.target.value})}/>

                        <label>Apellido</label><br/>
                        <input type="text" placeholder="Apellido del usuario" value={usuario.apellido}
                            onChange={(e) => setUsuario({...usuario, apellido: e.target.value})}/>

                        <label>Correo</label><br/>
                        <input type="email" placeholder="usuario@gmail.com" value={usuario.correo}
                            onChange={(e) => setUsuario({...usuario, correo: e.target.value})}/>
                        
                        <label>DNI</label><br/>
                        <input type="text" placeholder="DNI" value={usuario.dni}
                            onChange={(e) => setUsuario({...usuario, dni: e.target.value})}/>

                        <label>Contraseña</label><br/>
                        <input type="password" placeholder="Contraseña" value={usuario.password}
                            onChange={(e) => setUsuario({...usuario, password: e.target.value})}/>

                        <label>Confirmar contraseña</label><br/>
                        <input type="password" placeholder="Contraseña" value={usuario.confirmPassword}
                            onChange={(e) => setUsuario({...usuario, confirmPassword: e.target.value})}/>

                        <br/>
                        <button onClick = {(e) => handleSubmit(e)}>Registrarme</button>
                </form>
            </div>
        </main>
    )
}

export default RegisterForm;