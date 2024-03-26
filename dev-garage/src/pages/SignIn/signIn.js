import { useState, useContext } from 'react'
import './signIn.css'
import '../../assets/style.css'


import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'


export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext)

  async function handleSignIn(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await signIn(email, password);
    }

  }


  return(
    <div className="container-center">
      <div className="login">
        <div className="login-area">
         
        </div>

        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            placeholder="email@email.com"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />

          <input 
            type="password" 
            placeholder="********"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
          />

          <button type="submit">
            {loadingAuth ? "Carregando..." : "Acessar"}
          </button>
        </form>

        <Link to="/cadastro">Criar uma conta</Link>

      </div>
    </div>
  )
}