import './ForgotPassForm.css'
import usuarios from '../../../data/usuarios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassForm = () => {
    const navigate = useNavigate()
    const [correo, setCorreo] = useState('')

    const handleForgotPass =() => {
        
        const resultado = usuarios.find((c) => c.correo.toLowerCase() === correo.toLowerCase())
        
        if (resultado){
            alert('Correo enviado')
            navigate('/login')
        }
        else
            alert('Correo del usuario no registrado')
    }

    return(
        <main>
            <div className="contraseñaBloque">
                
                <h2>Olvidé mi contraseña</h2>
                <br/>
                <p>
                    Se enviará un enlace  a tu correo electrónico para que puedas validar
                    tu identidad y restablecer tu contraseña. <br/>
                    Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.
                </p>
                <label>Correo</label><br/>
                <input type="email" name="correo" placeholder="usuario@gmail.com"value={correo} 
                onChange={(e)=>setCorreo(e.target.value) }></input>
                <br/>
                <button onClick={() => handleForgotPass()}>Recuperar contraseña</button>
            </div>
        </main>
    )
}

export default ForgotPassForm;