import { useState } from 'react'
import Header from './componentes/Header/Header'
import NavBar from './componentes/NavBar/NavBar'
import Tarefas from './componentes/Tarefas/Tarefas'

import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <section className='container-do-conteudo'>
        <NavBar></NavBar>
        <Tarefas titulo="Para hoje"></Tarefas>
      </section>
    </>
  )
}

export default App
