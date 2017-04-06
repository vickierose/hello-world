import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {ListItem} from './listItem.jsx';

export class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user1: null,
            user2: null,
            user3: null
        };
        this.data = [];
        this.counter = 0;
    }

    componentDidMount() {
        this.getUsers();
    }
    
    render (){
        let ulStyles = {
            listStyle: 'none',
            marginBottom: 0,
            padding: 0
        };

        return (
            <ul style={ulStyles}>
                <ListItem listData={this.state.user1} userId="user1" remove={this.removeUser.bind(this)}/>
                <ListItem listData={this.state.user2} userId="user2" remove={this.removeUser.bind(this)}/>
                <ListItem listData={this.state.user3} userId="user3" remove={this.removeUser.bind(this)}/>
            </ul>
        )
    }

    removeUser(userId) {
        this.setState({
            [userId]: this.data[this.counter]
        });
        this.counter++;
    }

    refreshUsers(){
      
    }

    getUsers(){ 
        let users = fetch('https://api.github.com/users')
        .then(resp => resp.json()).then(data => {
            this.data = data;
            this.setState ({
                user1: data[0],
                user2: data[1],
                user3: data[2]
            });
            this.counter = 3;
        });
    }

}

