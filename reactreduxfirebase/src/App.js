import './App.css';
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { setUser } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  //edi enduku anthey data enter cheyakuamundu null untadi in console lo
  // data enter chesaga data anedi display chestadi console.
  // kani refresh chesthey data anedi kanipincadu mari null avtadi console lo , so ha time lo data anedi null gakunda undadaniki edi use chestaru.
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(setUser(authUser))
      } else{
        dispatch(setUser(null))
      }
    })
  },[dispatch])

  return (
    <div className="App">
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
    </Routes>
    </div>
  );
}

export default App;
