import { Link } from "react-router-dom"

function CardTorneo() {

  return (
    <div className='bg-slate-900 p-3 w-80 border-2 border-cyan-400' >
      <h3 className='text-cyan-400 text-center text-2xl font-bold' >MISTYC DUEL</h3>
      <div className='my-3 text-xl grid grid-cols-2' >
        <h4>Modalidad </h4> <span className='text-cyan-400' >2 vs 2</span>
        <h4>Inicio: </h4> <span className='text-cyan-400' >10 de mayo</span>
      </div>
      <Link 
        to={'/torneos/1'}
      className='bg-cyan-400 text-slate-900 py-2 block text-center w-full text-2xl font-bold' >
        PARTICIPAR
      </Link>
    </div>
  )
}

export default CardTorneo