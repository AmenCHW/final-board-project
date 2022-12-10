import './App.css';
import BoardCard from './components/BoardCard';
import DataToCard from './components/DataToCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BoardCard/>
       <DataToCard/>
      </header>
    </div>
  );
}

export default App;
