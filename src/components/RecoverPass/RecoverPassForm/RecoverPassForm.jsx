import './RecoverPassForm.css'

const RecoverPassForm = () =>{
    return(
        <main>
            <div className="recoverBloque">

                <h2>Recuperar contraseña</h2>

                <form>
                    <label>Nueva Contraseña</label><br/>
                    <input type="password" placeholder="Contraseña" name="nuevo"></input>
                    
                    <label>Repetir Contraseña</label><br/>
                    <input type="password" placeholder="Contraseña" name="repetir"></input>
                    
                    <button>Iniciar sesión</button>
                </form>
            </div>

        </main>
    )
}

export default RecoverPassForm;