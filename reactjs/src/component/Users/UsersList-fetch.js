import React, { Component } from 'react';

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
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({users: data.data}))
        .catch(err => console.error(err));
    }
    createUser = () => {
        const url = `https://reqres.in/api/users`;
        const {name, job} = this.state;
        const dataPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, job})
         };
        fetch(url, dataPost )
        .then(res => res.json())
        .then(data => this.setState(precState => ({users: [...precState.users, {...data, first_name: data.name, last_name: data.job}]})))
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
                <h2>Users List</h2>
               <div className="row">
                   <div className="col-md-6 offset-3">
                   <div className="card">
                    <div className="card-header">
                        <p>
                            <input type='text' name='name' onChange={this.handleInput}/>
                        </p>
                        <p>
                            <input type='text' name='job' onChange={this.handleInput} />
                        </p>
                        <button onClick={this.createUser} > Create </button>
                        <button>Update</button>
                    </div>
                   
                </div>
                   </div>
               </div>
                <ul>
                   {
                       users.map((item, index) => {
                           return (
                               <li key={index}> 
                                   <img src={item.avatar} alt={item.first_name}/>
                                   <br/>
                                   -{`${item.first_name} ${item.last_name}`}
                               </li>
                           )
                       })
                   }
                </ul>
                <button onClick={() => this.getUsersFromServer(1)}>Page 1</button>
                <button onClick={() => this.getUsersFromServer(2)}>Page 2</button>
            </div>
        )
    }
}


//  Har bir malumotga id berishimiz uchun quy 2 xil usulda foydalanishimiz mumkin
    // <li key={index}> 
    //  <li key={item.id}> 