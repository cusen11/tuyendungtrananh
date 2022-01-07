import './App.css'
import Benefit from './Component/Benefit/Benefit';
import Header from "./Component/Header/Header";
import LoadPage from './Component/LoadPage/LoadPage';
import Ourteam from './Component/Ourteam/Ourteam';


function App() {  
  return (
    <>
      <LoadPage/>
      <Header/>
      <Benefit/>
      <Ourteam/>
    </>
  );
}

export default App;
