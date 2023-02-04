import { Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import Busqueda from './Busqueda'

const Headers = () => {

  const {handleBuscador, cerrarSesionProyectos} = useProyectos()
  const {cerrarSesionAuth} = useAuth()

  const handleCerrarSesion = () => {
    cerrarSesionAuth()
    cerrarSesionProyectos()
    localStorage.removeItem('token')
  }

  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-sky-600 font-black mb-5 md:mb-0">
          UpTask
        </h2>

        <button 
          type="button"
          className='font-bold uppercase'
          onClick={handleBuscador}
        >Buscar Proyectos</button>

        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Link
            to="/proyectos"
            className='font-bold uppercase'
            >Proyectos</Link>
          <button
            className='text-white bg-sky-600 text-sm p-3 rounded-md uppercase font-bold'
            type='button'
            onClick={handleCerrarSesion}
          >Cerrar sesión</button>

          <Busqueda/> 
        </div>
      </div>
    </header>
  )
}

export default Headers
