import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRef } from "react"

function Navigation() {

  const menu = useRef(null)

  const menuBoton = () => {
    if (menu.current.classList.contains('hidden')) {
      menu.current.classList.remove('hidden')
    } else {
      menu.current.classList.add('hidden')
    }
  }

  return (
    <header className="bg-slate-900 md:fixed md:w-full border-b-2 border-cyan-400 after:bg-gradient-to-b from-cyan-400 to-slate-950 after:absolute after:h-2 after:w-full relative" >
      <div className="flex justify-between items-center mx-auto h-16 relative px-3 max-w-7xl" >
        <div>
          <NavLink className="text-cyan-400 font-bold text-2xl md:text-3xl" to='/' >Dime Legends</NavLink>
        </div>
        <button className="md:hidden" onClick={() => menuBoton()} >
          <GiHamburgerMenu className="text-cyan-400 text-2xl" />
        </button>
        <nav className="absolute md:static bg-slate-950 text-white top-16 left-0 w-full h-64
          md:bg-inherit md:text-cyan-400 md:w-auto md:block hidden
        " ref={menu} >
          <ul className="flex flex-col md:flex-row justify-center items-center gap-5 text-2xl h-full md:text-xl" >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg bg-cyan-400 text-slate-950' : 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg')}
                to='/' >Home</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg bg-cyan-400 text-slate-950' : 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg')}
                to='/torneos' >Torneos</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg bg-cyan-400 text-slate-950' : 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg')}
                to='/eventos' >Eventos</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg bg-cyan-400 text-slate-950' : 'hover:bg-cyan-400 hover:text-slate-900 py-1 px-3 rounded-lg')}
                to='/contacto' >Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation