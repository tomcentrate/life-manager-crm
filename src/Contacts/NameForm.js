import React, { Component } from 'react';
import TextField from './TextField';
class NameForm extends Component {
    render() {
        return (
            <form>
                <TextField name="firstName" labelName="First Name" />
                <TextField name="lastName" labelName="Last Name" />
                <button type="submit"  name="Create New Person">Create New Person</button>
            </form>
        )
    }
}

export default NameForm;