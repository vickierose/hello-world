import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { List } from './list.jsx';
import { ListItem } from './listItem.jsx';

export class Wrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            refreshing: false
        }
    }

    refreshUsers(){
        this.setState({refreshing: true});
        console.log(this.state.refreshing);
    }

    render(){ 
        let wrapperStyles = {
            width: 300,
            textAlign: 'center',
            margin: '80px auto',
            border: '1px solid grey',
            paddingTop: 10,
            boxShadow: '0 0 5px grey',
            borderRadius: 15,
            position: 'relative'
        };

        let refreshButtonStyle = {
            background: 'none',
            border: '1px solid grey',
            borderRadius: '5px',
            boxShadow: '0 0 3px darkgrey',
            padding: '5px 10px',
            position: 'absolute',
            right: '10px',
            top: '5px'
        };

        return (
        <div style={wrapperStyles}>
            List 
            <button onClick={this.refreshUsers.bind(this)} style={refreshButtonStyle}>Refresh</button>
            <List refresh={this.state.refreshing}>
            </List>
        </div>
        )
    }
}