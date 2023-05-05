import copa from '../imgs/copa.jpg'
import CardUnete from './CardUnete'

function Unete() {
  return (
    <section className='bg-black grid md:grid-cols-2 gap-y-10 gap-x-5 px-5 py-10 place-items-center' >
      <div>
        <img src={copa} alt='copa' width={200} className='max-w-xs md:w-auto' />
      </div>
      <CardUnete title={'Crea tu torneo'} accion='Torneo' >
        Crea tu torneo, es muy facil dale click en Crear Torneo y llena el formulario para lo cual tendras que crearte una cuenta en la plataforma.
      </CardUnete>
      <CardUnete title={'Crea tu evento'} accion='Evento' >
        Crea tu Evento, es muy facil dale click en Crear Evento y llena el formulario para lo cual tendras que crearte una cuenta en la plataforma. <br />
        Esta funci
        on no esta disponible por el momento.
      </CardUnete>
      <div>
        <img src={copa} alt='copa' width={200} className='max-w-xs md:w-auto' />
      </div>
    </section>
  )
}

export default Unete