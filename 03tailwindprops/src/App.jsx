import './App.css'
import Card from './components/Card'

function App() {

  const myArr = [1, 2, 3, 4]

  return (
    <>
      <Card username='Yash' position='Staff Engineer' imageUrl='https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-vintage-tram-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'/>
      <Card username='random' arr={myArr} />
      <Card />
    </>
  )
}

export default App
