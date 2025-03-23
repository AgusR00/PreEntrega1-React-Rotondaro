import { useState } from 'react';
import './Contacto.css'

const Contacto = () => {


    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviado', valores)
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='container'>

            <h1 className='main-title'>Contacto</h1>

            <form className='formulario' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Ingresá tu nombre'
                    value={valores.nombre}
                    onChange={handleValores}
                    name='nombre'
                />
                <input
                    type="email"
                    placeholder='Ingresá tu e-mail'
                    value={valores.email}
                    onChange={handleValores}
                    name='email'
                />
                <input
                    type="phone"
                    placeholder='Ingresá tu telefono'
                    value={valores.telefono}
                    onChange={handleValores}
                    name='telefono'
                />
                <button className='enviar' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto