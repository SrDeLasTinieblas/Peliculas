import React, {useState} from 'react'
import './style.css'
import axios from 'axios'
import md5 from 'md5'

const urlApi = 'http://localhost:3001/usuarios'

export function Loginn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  function handleChangeUsername(event) {
    console.log(event.target.value);
  }
  function handleChangePassword(event) {
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.get(urlApi, {/* params: { username: this.state.form.username, password: md5(this.state.form.password)*/})
      .then(response => {
        console.log(response.data)
      })
    }


  //event.target.value
  return (
    <div className="form-wrap">
		<div className="tabs">
			{/*<h3 className="signup-tab"><a onClick={active} href="#signup-tab-content" >Sign Up</a></h3>*/}
			<h3 className="login-tab"><a href="#login-tab-content">Loginsssssssssssss</a></h3>
		</div>

		{<div className="tabs-content">
			<div id="signup-tab-content" className="active"/>

				<form className="signup-form" action="" method="post">
					{/*<input type="email" className="input" name='email' id="user_email" autocomplete="off" placeholder="Email"/>*/}
					<input type="text" 
          className="input" 
          onChange={handleChangeUsername} 
          name='username' 
          id="user_name" 
          autocomplete="off" 
          placeholder="Username"/>

					<input type="password" 
          className="input" 
          onChange={handleChangePassword} 
          name='password' 
          id="user_pass" 
          autocomplete="off"
          placeholder="Password"/>
					
          <input type="submit" 
          className="button" 
          value="Sign Up"
          onClick={handleSubmit}
          />
				</form>

				<div className="help-text">
					<p>By signing up, you agree to our</p>
					<p><a href="#">Terms of service</a></p>
				</div>
  </div>}

			{/*<div id="login-tab-content">
				<form className="login-form" action="" method="post">
					<input type="text" className="input" id="user_login" autocomplete="off" placeholder="Email or Username"/>
					<input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password"/>
					<input type="checkbox" className="checkbox" id="remember_me"/>
					<label for="remember_me">Remember me</label>

					<input type="submit" className="button" value="Login"/>
				</form>
				<div className="help-text">
					<p><a href="#">Forget your password?</a></p>
				</div>
</div>*/}
		</div>
  )
}

