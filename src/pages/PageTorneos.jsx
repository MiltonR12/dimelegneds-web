import CardTorneo from "../components/CardTorneo"


function PageTorneos() {
  return (
    <section className='min-h-screen bg-black pt-20 text-white flex flex-col' >
      <h1 className='text-center text-5xl font-anton tracking-widest md:text-7xl' >TORNEOS</h1>
      <div className='flex flex-wrap container mx-auto p-3' >
        <CardTorneo />
      </div>
    </section>
  )
}

export default PageTorneos