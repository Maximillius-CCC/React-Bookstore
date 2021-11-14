
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav';
import MyFooterBooks from './components/MyFooterBooks';
import MyJumboTron from './components/MyJumbtron';
import LatestRelease from './components/LatestRelease';


function App(){
  return(
  <>
      <MyNav />
      <MyFooterBooks />
      <MyJumboTron />
      <LatestRelease />
  </> 
  )
}

export default App;
