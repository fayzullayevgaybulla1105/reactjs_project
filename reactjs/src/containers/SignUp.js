import React, {Component} from 'react';



const initialState = {fullName: '', email: '', password: '', type: 'admin', beo: ''};

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    inputHandler = e => {
        e.preventDefault();
        console.log(e.target)
        const {name, value } = e.target
        this.setState({[name]: value})
    }


    resetHandler = () => {
        this.setState(initialState);
    }


    formSubmit = e => {
        e.preventDefault();
        console.log('Form submit');
    }
    render() {
        const { fullName, email, password, type, beo } = this.state;
        return (
            <div>
                <h2>Sign Up Now</h2>
                <form action="" onSubmit={this.formSubmit}>
                    <p>
                        <label for="">Full name</label>
                        <input 
                            type="text" 
                            name="fullName"
                            placeholder="Your name"
                            value = {fullName}
                            onChange = {this.inputHandler}
                        />
                    </p>
                    <h4>{fullName}</h4>
                    <p>
                        <label for="">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your email"
                            value = {email}
                            onChange = {this.inputHandler}
                        />
                    </p>
                    <h4>{email}</h4>
                    <p>
                        <label for="">Full name</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Your password"
                            value = {password}
                            onChange = {this.inputHandler}
                        />
                    </p>
                    <h4>{password}</h4>
                    
                    <p>
                    <select name="type" onChange={this.inputHandler} value={type}>
                        <option value="customer">Customer</option>
                        <option value="seller">Seller</option>
                        <option value="admin">Admin</option>
                    </select>
                    </p>
                    <textarea name="beo" value={beo} onChange={this.inputHandler}></textarea>
                    <button type="submit">Sign Up</button>
                    <button type="reset" onClick={this.resetHandler}>Reset</button>
                </form>
            </div>
    );
  }
}

export default SignUp;