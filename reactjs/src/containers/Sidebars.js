import React, { Component } from 'react';
import Link from '../components/Links';

class Sidebars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            number: 0,
            data: [{name: 'Alisher'}, {name: 'John'}],
            role: {
                admin: true,
                isNew: false
            }
        }
    }


    clickHandler = () => {
        console.log('Hello click');
        this.setState({number: this.state.number + 1}, () => this.alertHandler());
        //this.alertHandler(); //async funksiya bo`lganligi uchun ishlatilmaydi
    }

    alertHandler = () => {
        const { number } = this.state;
        if (number === 5){
            alert("Number is 5");
        }
    }


    clearHandler = () => {
        this.setState({number: 0});
    }

    render() {
        console.log(this.state.number);
        const {title, data} = this.props;
        const { number } = this.state;
        return (
            <div>
                    <h1>{title}</h1>
                <p>{data.name}</p>
                <hr/>
                <Link data={{url: "https://kun.uz/",  title: "Kun.uz", isActive: true }}/>

                <section>
                      <h1>Number: { number }</h1>
                         <button onClick = {this.clickHandler}>Update</button>
                        <button onClick = {this.clearHandler}>Clear</button>
                </section>

            </div>
        )
    }

}


export default Sidebars;
