import './App.scss';
import Button from './components/Carousel/Button/Button';
import Carousel from './components/Carousel/Carousel'
import data from './data.json'

function App() {
  console.log(data)
  return (
    <div className="App">
       <Carousel/>
    </div>
  );
}

export default App;
