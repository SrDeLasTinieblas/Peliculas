import React from "react";

class Registro extends React.Component {

    /*state = {
        form:{
            username: '',
            password: ''
        },
        error: false,
        errorMessage: ''
    }

    manejaSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = async (e) => {
       await this.setState({
              form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value
                }
            });
            console.log(this.state.form);
    }
    listering = () => {
        console.log("listening");
    }*/

    render() {
            return (<React.Fragment>
                <div className="form-wrap">
                    <div className="tabs">
                        {/*<h3 className="signup-tab"><a onClick={active} href="#signup-tab-content" >Sign Up</a></h3>*/}
                        <h3 className="login-tab">
                            <a href="#login-tab-content">Registro</a>
                        </h3>
                    </div>

                    {
                    < div className = "tabs-content" > <div id="signup-tab-content" className="active"/>

                    <form onSubmit={this.manejaSubmit} className="signup-form" action="" method="post">
                        {/*<input type="email" className="input" name='email' id="user_email" autocomplete="off" placeholder="Email"/>*/}
                        <input type="text" className="input"
                            onChange={this.handleChange}
                            name='username'
                            id="user_name"
                            autocomplete="off"
                            placeholder="Username"
                        />

                        <input type="password" className="input"
                            onChange={this.handleChange}
                            name='password'
                            id="user_pass"
                            autocomplete="off"
                            placeholder="Password"
                        />

                        <input type="submit" className="button" value="Sign Up"
                            onClick={this.listering}
                        />
                    </form>

                    <div className="help-text">
                        <p>By signing up, you agree to our</p>
                        <p>
                            <a href="#">Terms of service</a>
                        </p>
                    </div>
                </div>
                }

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
</div>*/} </div>
        </React.Fragment>
        )
    }
}

export default Registro;
