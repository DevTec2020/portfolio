import { useState } from 'react'

import { Header } from './header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='relative min-h-screen bg-black text-white'>
        <Header/>
        <div className='absolute inset-y-0 left-56 flex flex-col justify-center space-y-4'>
          <h2 className='text-3xl font-light'>Olá 👋! sou Leonardo Batista</h2>
          <h1 className='text-5xl font-bold'>Desenvolvedor web</h1>
          <div className='space-x-4'>
            <button className='px-6 py-2 bg-orange-500 text-white rounded'>Contato</button>
            <a href="#" className='text-white underline'>Curriculo</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
