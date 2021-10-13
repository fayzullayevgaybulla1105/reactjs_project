import React, {Component} from 'react';


export  default class signIn extends Component {
    formSubmit = e => {
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.formSubmit}>
                <p>
                   <label htmlfor="">Email:</label>
                   <input 
                       type="email" 
                       name="email" 
                       placeholder="Your email"
                       onChange = {this.inputHandler}
                   />
                   </p>                
                   <p>
                       <label htmlfor="">Password</label>
                       <input 
                           type="password" 
                           name="password" 
                           placeholder="Your password"
                           onChange = {this.inputHandler}
                       />
                   </p>

                   <button>Log In</button>
               </form>
            </div>
        )
    }
}