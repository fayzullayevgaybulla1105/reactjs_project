import React, { Component } from 'react';
import axios from 'axios';
//import styles from './UsersList.module.css';

import {StyledInput, StyledTitle, StyledList} from './style';

export default class UsersList extends Component {
    state = {users: []};

    componentDidMount() {
        this.getUsersFromServer()
    }

    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }


    getUsersFromServer = (num) => {
        const url = `https://reqres.in/api/users?page=${num}`;
        // fetch(url)
        // .then(res => res.json())
        // .then(data => this.setState({users: data.data}))
        // .catch(err => console.error(err));


        axios(url).then(({data}) => this.setState({users: data.data}));
    }
    createUser = () => {
        const url = `https://reqres.in/api/users`;
        const {name, job} = this.state;
        // const dataPost = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({name, job})
        //  };
        // fetch(url, dataPost )
        // .then(res => res.json())
        // .then(data => this.setState(precState => ({users: [...precState.users, {...data, first_name: data.name, last_name: data.job}]})))
        // .catch(err => console.error(err));

        axios.post(url, {name, job})
        .then(({data}) =>this.setState(precState => ({users: [...precState.users, {...data, first_name: data.name, last_name: data.job}]})))
        .catch(err => console.error(err));

    }


    updateDate = () => {
        const url = `https://reqres.in/api/users`;
        const {name, job} = this.state;
        const updatedata = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, job})
         };

         fetch(url, updatedata )
         .then(res => res.json())
         .then(data => this.setState(precState => ({users: [...precState.users, {...data, first_name: data.name, last_name: data.job,  updatedAt: data.id}]})))
         .catch(err => console.error(err));

    }
    render() {
        const {users} = this.state;
        console.log(this.state)
        return (
            <div style={{margin: 40}}>
                <StyledTitle fontSize = '50px'>Users List</StyledTitle>
                <div style={{border: '2px solid yellow', backgroundColor: 'black'}}>
                    <p>
                        <StyledInput type='text' name='name' onChange={this.handleInput} />
                    </p>
                    <p>
                        <StyledInput type='text' name='job' onChange={this.handleInput} />
                    </p>
                    <button onClick={this.createUser} className='btn btn-primary'> Create </button>
                    <button className='btn btn-danger'>Update</button>
                </div>
                <StyledList color='blue' className=''>
                   {
                       users.map((item, index) => {
                           return (
                               <li key={index} className='list-item'> 
                                   <img src={item.avatar} alt={item.first_name}/>
                                   <br/>
                                   -{`${item.first_name} ${item.last_name}`}
                               </li>
                           )
                       })
                   }
                </StyledList>
                <button onClick={() => this.getUsersFromServer(1)} className='btn btn-success mr-2'>Page 1</button>
                <button onClick={() => this.getUsersFromServer(2)} className='btn btn-warning'>Page 2</button>
            </div>
        )
    }
}


//  Har bir malumotga id berishimiz uchun quy 2 xil usulda foydalanishimiz mumkin
    // <li key={index}> 
    //  <li key={item.id}> 