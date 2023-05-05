import logo from '../imgs/logomandar.png'

function PiePagina() {
  return (
    <footer className='bg-slate-950 text-white grid md:grid-cols-3 gap-5 p-5' >
      <div>
        <img src={logo} alt="logo" width={150} className='mx-auto' />
        <h3 className='text-center text-2xl font-bold' >Dime Legends</h3>
      </div>
      <div>
        <h2 className='text-center text-cyan-500 text-2xl border-b-2 border-b-cyan-400 pb-3 mb-3' >Redes Sociales</h2>
        <ul className='px-5 text-xl' >
          <li><a href="https://www.facebook.com/DimeLegendsBolivia">Facebook</a></li>
          <li><a href="https://chat.whatsapp.com/K5AH26VUJwC9zhLMnZ7OI1">WhatsApp</a></li>
          <li><a href="https://discord.gg/rMunx9nFGc">Discord</a></li>
        </ul>
      </div>
      <div>
        <form className='flex flex-col p-5 gap-2' >
          <label htmlFor="" className='text-2xl' >Contacto</label>
          <textarea rows="5" className='bg-slate-900 outline-none p-2 my-3' ></textarea>
          <button className='text-cyan-600 border-cyan-400 border-2 text-2xl font-bold py-2' >ENVIAR</button>
        </form>
      </div>
    </footer>
  )
}

export default PiePagina