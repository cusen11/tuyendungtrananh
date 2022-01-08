import './App.css'
import Benefit from './Component/Benefit/Benefit';
import Header from "./Component/Header/Header";
import LoadPage from './Component/LoadPage/LoadPage';
import Ourteam from './Component/Ourteam/Ourteam';
import Project from './Component/Project/Project';


function App() {  
  return (
    <>
      <LoadPage/>
      <Header/>
      <Benefit/>
      <Ourteam/>
      <Project/>
    </>
  );
}

export default App;
