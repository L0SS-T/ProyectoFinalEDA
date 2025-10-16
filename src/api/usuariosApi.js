let contador = 3;

let usuarios = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        correo: "juan.perez@gmail.com",
        password: "contraseña123",
        dni: 12345678
    },
    {
        id: 2,
        nombre: "Maria",
        apellido: "Gonzales",
        correo: "maria.gonzales@gmail.com",
        password: "contraseña456",
        dni: 90123456
    },
    {
        id: 3,
        nombre: "Luis",
        apellido: "Rodriguez",
        correo: "luis.rodriguez@gmail.com",
        password: "contraseña789",
        dni: 78901234
    } 
]

const insert = (usuario) => {
    usuario.id = ++contador;
    usuarios.push(usuario)
}

const get = () => {
    return usuarios;
}


const  usuariosApi = {insert,get}

export default usuariosApi;
