import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         username:'',
         password:'',
         loginFailed: false
      };
   }

   login(event) {
      event.preventDefault();

      const form = event.target;
      const encoded = btoa(form.username.value + ':' + form.password.value);
      const data = {
         username: form.username.value,
         password: encoded
      };

      this.props.onLogin(data, this.onLoginFailed());
   }

   onLoginFailed() {
      this.setState({
         loginFailed: true
      });
   }

   handleUsername(event) {
      this.setState({
         username: event.target.value
      });
   }

   handlePassword(event) {
      this.setState({
         password: event.target.value
      });
   }

   render() {
      return(
         <div className="login-form">
            <form className="login-box" onSubmit={(event) => this.login(event)}>
               <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text"
                         id="username"
                         name="username"
                         className="form-control"
                         onChange={(e) => this.handleUsername(e)}
                         placeholder="Username" />
               </div>
               <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password"
                         id="password"
                         name="password"
                         className="form-control"
                         onChange={(e) => this.handlePassword(e)}
                         placeholder="Password" />
               </div>

               <button type="submit" className="btn">Login</button>
            </form>
         </div>
      )
   }
}

LoginForm.propTypes = {
   onLogin: PropTypes.func.isRequired
};
