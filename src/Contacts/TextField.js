import React, { Component } from 'react';

class TextField extends Component {
    render() {
        return (
            <div>
            <label htmlFor={this.props.name}>{this.props.labelName}</label>
            <input type="text" name={this.props.name} id={this.props.name}>
            </input>
            </div>
        )
    }
}

export default TextField;