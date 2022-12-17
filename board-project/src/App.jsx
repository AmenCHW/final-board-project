import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Kanban from "./pages/kanban/Kanban";
import MainTable from "./pages/mainTable/MainTable";
import DataCard from "./components/DataCard"
import Sidebar from './components/Sidebar';
import Overview from "./components/Overview"






function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar />

      <main className='main-content-wrapper'>
      <Routes>
        <Route path="/" element={ <MainTable/> } />
        <Route path="/kanban" element={<Kanban/> } />

        <Route path="/add" element={ <DataCard/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      </main>


    </div>
  );
}


export default App;
