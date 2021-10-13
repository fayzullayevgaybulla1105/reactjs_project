import React, {Component} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';





class CondetionalRenders extends Component {

    state = {
        email: '',
        password: '',
        fullName: '',
        signIn: true
    }


    authHandler = () => {
       // this.setState(prevState => ({signIn: prevState.signIn === true ? false : true}));
       this.setState(prevState => ({signIn: !prevState.signIn }));
    }






    render() {
        const {signIn} = this.state;

        return (
            <div>
                <h1>Sign {signIn ? 'In' : 'Up'}</h1>
                {
                    signIn  ?
                    <SignIn />
                    :
                    <SignUp />
                }

                <p></p>
                <button onClick={this.authHandler} className = {'btn ' + signIn ? 'btn-success' : 'btn-primary'}>Sign {signIn ? 'Up' : 'In'}</button>
            </div>
        )
       
    }
}





export default CondetionalRenders;