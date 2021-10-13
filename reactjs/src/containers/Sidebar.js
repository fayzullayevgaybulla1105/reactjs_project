import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {name: '', img: ''},
            num: 0,
            age: 12,
        };


        console.log("[Constructor]......");
    }


    componentDidMount() {
        console.log('ComponentDidMount......');

        this.setState({user: {name: 'John', img: 'https://kun.uz'}});
    }



    updateNumber = () => {
            this.setState(oldState => {
                return {
                    num: oldState.num + 1
                }
            })
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState);
        return true;
    }

    static getDerivedStateFromProps(props, state) {
        return {age: props.age}
    }


    render() {
        console.log("[React]......");
        const {age} = this.state;
        return (
            <div>
                <h1>Hello React:  { age }</h1>
                <button onClick={this.updateNumber}>Update</button>
                <h2>Mening yoshim: {age}</h2>
                <span></span>
            </div>


        )
    }

}


export default Sidebar;