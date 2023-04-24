import { useState } from "react"
import Header from "../helpers/Header"

const Usuarios = () => {

    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

  return (
    <div>
        <Header/>
        <section className="part-left">
        <form action="" className="form">
            <label >Nombre</label>
            <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type="test"/>
            <label >Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            <label >Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
            <input type="button"/>
        </form>
        </section>
        <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Correo</td>
                    <td>Contraseña</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nombre}</td>
                    <td>{password}</td>
                    <td>{email}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Usuarios