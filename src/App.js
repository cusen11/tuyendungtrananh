import './App.css'
import "lightgallery.js/dist/css/lightgallery.css";
import Benefit from './Component/Benefit/Benefit';
import Header from "./Component/Header/Header";
import LoadPage from './Component/LoadPage/LoadPage';
import Media from './Component/Media/Media';
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
      <Media/>
    </>
  );
}

export default App;
