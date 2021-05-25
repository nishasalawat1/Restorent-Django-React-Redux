import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import CustomNavbar from './Navbar';

class RestorantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
        }

    }
    create() {
        this.props.createRestoHandler(this.state).then((result)=>{
            if(result.id){
                this.props.history.push('list');
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    render() {
        console.warn('render called')
        console.log(this.props)
        return (
            <div>
                <CustomNavbar />
                <h2>Restorant Create Component</h2>
                <input
                    name="name"
                    onChange={(event) => this.setState({ name: event.target.value })}
                    placeholder="Restorant Name" /><br /><br />
                <input
                    name="email"
                    onChange={(event) => this.setState({ email: event.target.value })}
                    placeholder="Restorant Email" /><br /><br />
                <input
                    name="address"
                    onChange={(event) => this.setState({ address: event.target.value })}
                    placeholder="Restorant Address" /><br /><br />
                <input
                    name="rating"
                    onChange={(event) => this.setState({ rating: event.target.value })}
                    placeholder="Restorant Rating" /><br /><br />
                <Button variant="info" onClick={() => this.create()}>Add Restorant</Button>
            </div>
        );
    }
}

export default RestorantCreate;