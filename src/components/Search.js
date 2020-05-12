import React, { Component } from 'react';
import { Input, Button } from 'antd';


class Search extends Component {
    state = {
        search: ""
    };

    handleInputChange = e => {
        let value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
        console.log("hello")
        console.log(this.state.search)
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("hi")
        this.props.filterArray(this.state.search)

        this.setState({
            search: ""
        })
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              {/* <Input onChange={this.handleInputChange} placeholder="Search Employees" value={this.state.search} /> */}
              <input onChange={this.handleInputChange} placeholder="Search Employees" value={this.state.search} name="search"/>
              <Button onClick={this.handleSubmit}>Search</Button>
            </form>
          </div>
        );

        
    }
    
}

export default Search;