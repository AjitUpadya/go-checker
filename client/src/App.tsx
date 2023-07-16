import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  const items = ['New York', 'San Francisco', 'Austin', 'Boston'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const fetch
  return (
    <>
      <div><ListGroup items= {items} heading="Cities" onSelectItem={handleSelectItem}/></div>
    </>
  )
}

export default App
