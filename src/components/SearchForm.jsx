import React, { Component } from "react";
//import rot13 from "rot-thirteen";

class SearchForm extends Component {
    state = {
        userName: "",
        users: [],
    };

    loadData = async () => {
        const response = await fetch("https://api.github.com/users/Athomas9sa");
        const data = await response.json();
        //console.log(data)
            return data;
    };

    _handleChange = (eventValue) => {
        //console.log(eventValue)
        this.setState({
            userName: eventValue,
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();//preventsthepagefromreloadingwhenpageisusingsubmit!
        const userData = await this.loadData();
        
        // const { userName } = this.state;
        // const rotData = rot13(userName);
        // console.log("hallo:", event)
        this.setState({
            userName: userData.login,
            // users: userData,
            // userData: userData.results,
        });
    };

    render() {
        const { userName } = this.state;

        return (
            <>
            <h1>Search Form Github User!!</h1>
            <form onSubmit={this._handleSubmit}>
                <label>
                Search for... to be continued:
                <input
                    type="text"
                    onChange={(event) => this._handleChange(event.target.value)}
                    />
                </label>
                <button type="submit">search</button>
            </form>
            <p>{userName}</p>
            </>
        );
    }
}


export default SearchForm;