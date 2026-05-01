import './App.css'
import Header from './components/header/Header'
import Recipies from './components/recipies/Recipies';

function App() {

  return (
    <>
      <Header></Header>
      <main className="max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto" >
        <Recipies></Recipies>
      </main>
    </>
  )
}

export default App
