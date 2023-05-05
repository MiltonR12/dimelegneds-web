import PiePagina from "../components/PiePagina"
import Portada from "../components/Portada"
import Unete from "../components/Unete"

function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white" >
      <Portada />
      <Unete />
    </main>
  )
}

export default Home