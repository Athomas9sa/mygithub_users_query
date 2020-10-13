import React, { Component } from "react";
import SearchForm from './SearchForm';
import rot13 from "rot-thirteen";

class SearchForm extends Component {
    state = {
        text: "",
        submitText: [],
    };

    loadData = async () => {
        const response = await fetch("https://api.github.com/Athomas9sa");
        const data = await response.json();
        return data;
    };

    _handleChange = (newUser) => {
        this.setState({
            text: newUser,
        });
    };

    _handleSubmit = () => {
        const { text } = this.state;
        const userData = rot13(text);

        this.setState({
            text: "",
            submitText: userData,
        });
    };

    render() {
        const { text, submitText } = this.state;

        return (
            <>
            <h1>Search Form Github User!!</h1>
            <form>
                <label>
                Search for... to be continued:
                    <input
                    type="text"
                    onChange={(event) => this._handleChange(event.target.value)}
                    value={userName}
                    />
                </label>
                <button type="Submit" value="Submit" onSubmit={this._handleSubmit}>search</button>
            </form>
            <p>{text}</p>
            <p>{userData}</p>
            </>
        );
    }
}


export default SearchForm;