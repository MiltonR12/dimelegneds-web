import React from 'react'

function InfoTorneo() {
  return (
    <div className='container mx-auto p-2 bg-zinc-950 border-2 border-cyan-700 rounded-xl' >
      <h2 className='text-2xl text-center text-cyan-400 font-semibold' >MISTYC DUEL</h2>
      <div className='flex flex-col gap-y-5' >
        <div>
          <h3 className='text-red-600 text-xl font-bold' >MODALIDAD</h3>
          <ul className='pl-5 list-disc text-zinc-200' >
            <li>Se jugara en Personalizada / Clasica</li>
            <li>Se jugara la modalidad Eliminacion Directa</li>
          </ul>
        </div>
        <div>
          <h3 className='text-red-600 text-xl font-bold' >INICIO DEL TORNEO</h3>
          <p className='text-center' >El torneo inicia el dia <br /> <span className='font-bold' >miercoles 10 de mayo</span></p>
        </div>
        <div>
          <h3 className='text-red-600 text-xl font-bold' >INSTRUCCIONES</h3>
          <ul className='pl-5 list-disc text-zinc-200' >
            <li>Tiempo maximo por partida 15 minutos</li>
            <li>Jugar solo linea media</li>
            <li>Esta permitido la jungla tanto aliada como enemiga</li>
            <li>No se puede hacer la TORTUGA</li>
            <li>Solo se puede matar al LORD MEJORADO ( Lord Minuto 12 )</li>
          </ul>
          <p className='my-2 p-1 bg-zinc-800' >
            <span className='text-red-600 font-bold' >Nota:</span> El equipo que no cumpla las instrucciones de la modalidad sera automaticamente eliminado
          </p>
        </div>
        <div>
          <h3 className='text-red-600 text-xl font-bold' >FORMAS DE GANAR</h3>
          <h5 className='font-bold' >DURANTE LOS 15 MINUTOS</h5>
          <ul className='pl-5 list-decimal text-zinc-200' >
            <li>Matar 7 veces en total al duo enemigo</li>
            <li>Destruir la torre central enemiga (NEXO)</li>
            <li>Realizar LORD MEJORADO</li>
          </ul>
          <h5 className='font-bold' >PASADO LOS 15 MINUTOS</h5>
          <ul className='pl-5 list-decimal text-zinc-200' >
            <li>El duo que tenga mas Kills acumuladas</li>
            <li>El equipo que causo mas daño a las Torres enemigas centrales</li>
            <li>El equipo que tenga mas Oro</li>
          </ul>
        </div>
        <div>
          <h3 className='text-red-600 text-xl font-bold' >REGLAMENTO / SANCION</h3>
          <ul className='pl-5 list-disc text-zinc-200' >
            <li>No esta permitido el uso de hacks u otras ayudas externas. / Eliminacion</li>
            <li>No esta permitido expectadores en la sala excepto el ADMINISTRADOR Y CASTERS / Reinicio de la partida</li>
            <li>No esta permitido el uso del chat en el juego / Eliminacion</li>
            <li>Tiempo maximo de espera para su partida 5 minutos / Eliminacion</li>
          </ul>
        </div>
        <div className='w-full' >
          <a
            href='https://chat.whatsapp.com/K5AH26VUJwC9zhLMnZ7OI1'
            className='bg-cyan-500 text-black py-1 w-full mb-3
          text-2xl font-semibold block text-center' >
            GRUPO DE WHATSAPP
          </a>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdon01wlt4rpbk_ewhT8fWOYDm1xKelNeXHatSTy4QrVlPecg/viewform?usp=sf_link' className='bg-cyan-500 text-black py-1 w-full 
          text-2xl font-semibold block text-center' >
            INSCRIBIRSE
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoTorneo