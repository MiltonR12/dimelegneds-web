import { useNavigate } from "react-router-dom"

function Portada() {

  const navigate = useNavigate()

  return (
    <section className='flex flex-col md:text-left justify-center min-h-screen text-center gap-5 px-2 md:px-10 bg-fondo pt-16 bg-cover bg-center bg-no-repeat' >
      <h1 className='text-5xl font-anton tracking-widest md:text-7xl max-w-xl' >
        DEMUESTRA QUIEN ES EL MEJOR <span className='text-cyan-400' >GAMER</span>
      </h1>
      <p className='text-xl text-slate-200 md:text-2xl max-w-xl' >
        ¡Únete a la competición y conviértete en el campeón del juego!
      </p>
      <button 
      onClick={() => {navigate('/torneos')}}
      className='text-slate-900 bg-rose-600 text-2xl py-1 w-full max-w-xs
      rounded-3xl transition-all hover:text-rose-500 border-rose-600 border-2 hover:bg-black mx-auto md:mx-0 md:text-3xl' >
        PARTICIPAR
      </button>
    </section>
  )
}

export default Portada