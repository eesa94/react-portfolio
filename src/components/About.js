import React, { Component } from 'react'
import Navbar from './Navbar';

export class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <h1>about me</h1>
            </div>
        )
    }
}

export default About
