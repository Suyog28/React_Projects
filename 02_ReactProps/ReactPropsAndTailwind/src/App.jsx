
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <div >
      <button className='text-3xl bg-green-400 text-white font-semibold mb-4' >Tailwind CSS</button>
      <div className='flex gap-7'>
        <Card username="Suyog" btnMe="New Profile Page" />
        <Card username="Chaitali" btnMe="" />
      </div>

    </div>

  )
}

export default App
