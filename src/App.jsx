import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-blue-500 text-center mt-10">
        Tailwind is working
      </h1>
      <Home />
    </>
  )
}

export default App