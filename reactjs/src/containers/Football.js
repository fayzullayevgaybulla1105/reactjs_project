import React, {Component} from 'react';
import ReactDOM  from 'react-dom';

class Football extends Component {
    constructor(props) {
        super(props);
        
    }


  /*  shoot() {
        alert('Shootda event');
    }*/

    football(a){
        alert(a);
    }



    render() {
        return (
            <button onClick={() => this.football("Hello world")}>Shoot</button>

        )
    }
}




export default Football;