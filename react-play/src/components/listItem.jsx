import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class ListItem extends Component {
    removeUser () {
        this.props.remove(this.props.userId);
    }

    render(){
        let liStyles = {
            display: 'flex',
            justifyContent: 'space-between',
            padding: 5,
            borderTop: '1px solid grey'
        };

        let imgStyles = {
            height: 60,
            wigth: 60
        };

        let buttonStyle = {
            border: '2px solid grey',
            borderRadius: '50%',
            height: '30px',
            width: '30px',
            alignSelf: 'center',
            background: 'none',
            outline: 'none'
        }

        return (
            <li style={liStyles}>
                <img src={(this.props.listData || {}).avatar_url} style={imgStyles} />
                <p>{(this.props.listData || {}).login}</p>
                <button style={buttonStyle} onClick={this.removeUser.bind(this)}>X</button>
            </li>
        )
    }
}

ListItem.defaultProps = {
    listData: {
        login: 'no login'
    }
};