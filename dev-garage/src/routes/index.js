import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signUp';
import Home from '../pages/Home/home';
import Comunidade from '../pages/Comunidade/comunidade';
import Classificados from '../pages/Classificados/classificados';
import Error from '../pages/Error/error';

import Private from './Private'

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <SignIn/> } />
      <Route path="/cadastro" element={ <SignUp/> } />

      <Route path="/home" element={ <Private><Home/></Private> } />
      
      <Route path="/comunidade" element={ <Private><Comunidade/></Private> } />

      <Route path="/classificados" element={<Private><Classificados/></Private>} />
      
      <Route path="/*" element={<Private><Error/></Private>} />

    </Routes>
  )
}

export default RoutesApp;