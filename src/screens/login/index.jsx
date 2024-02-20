import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  })

  function handleClick() {
    navigate(-1);
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login >>>",formData);

    fetch(`http://localhost:3000/users?login=${formData.login}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        alert("Tá logado!")
        navigate("/");
      }
    })
  }

  return(
    <main className='loginContainer'>
      <form onSubmit={handleSubmit}>
        <label> Login
          <input 
            type="text" 
            name='login' 
            value={formData.login} 
            onChange={handleChange}
          />
        </label>
        <label> Senha
          <input 
            type="password" 
            name='password'
            value={formData.password} 
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
      <Link to={-1}>voltar com link</Link>
      <button onClick={handleClick}>Voltar</button>
    </main>
  )
}

export default Login