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
                <label htmlfor="">Full name</label>
                <input 
                    type="text" 
                    name="fullName"
                    placeholder="Your name"
                />
            </p>
             <p>
                <label htmlfor="">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your email"
                />
                </p>                
                <p>
                    <label htmlfor="">password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Your password"
                        onChange = {this.inputHandler}
                    />
                </p>

                <button>Sign Up</button>
            </form>
        </div>
        )
    }
}