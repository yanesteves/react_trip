import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CardBicicleta from './components/CardBicicleta'

function App() {

  let titulo = 'Titulo Modificado'

  return (
    <>
      <Header></Header>

      <CardBicicleta></CardBicicleta>

      <Footer></Footer>
    </>
  )
}

export default App
