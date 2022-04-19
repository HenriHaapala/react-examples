import React, { Component } from 'react'

class Contacts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        //Rest usage example
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

    render(){
        return (
            <div className="inner cover">
                <center><h1>Contact List</h1></center>
                {this.state.contacts.map((contact) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{contact.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                            <p className="card-text">{contact.company.catchPhrase}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};

export default Contacts;