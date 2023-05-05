import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function CardUnete({ title, children, accion }) {
  return (
    <div
      className='bg-slate-950 max-w-md min-h-[200px] px-3 py-8 md:p-8 border-2 border-rose-600 relative rounded-xl' >
      <h3 className='text-rose-600 text-2xl mb-5 font-bold' > {title} </h3>
      <p className='text-slate-200' >
        {children}
      </p>
      <Link to='/' className='absolute bottom-[-20px] bg-rose-600 text-slate-900 
      w-56 h-10 flex justify-center items-center gap-3 left-[50%] translate-x-[-50%] text-2xl hover:bg-slate-950 hover:text-rose-600 border-2 border-rose-600 transition-all' >
        Crear {accion} <AiOutlineStar />
      </Link>
    </div>
  )
}

export default CardUnete