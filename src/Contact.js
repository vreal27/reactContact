import React, { Component } from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import User from './names.json'
import icon from 'font-awesome/css/font-awesome.css'


class Contact extends Component {
    state = {
        img: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        st: '',
        nat: ''
    }

    componentDidMount() {

        const contact = User.find(n =>{
            return n.id == this.props.match.params.id
        })

        this.setState({
            img: contact.picture.large,
            fname: contact.name.first,
            lname: contact.name.last,
            email: contact.email,
            phone: contact.phone,
            st: contact.location.state,
            nat: contact.nat
        })
    }

    render() {
      return (
        <div id="container">
            <div className='profilepic'><img src={this.state.img}/></div>
            <ul>
                <li className='fullname'> <i className="fa fa-user"> </i>{this.state.fname} {this.state.lname}</li>
                <li> <i className="fa fa-envelope"></i> {this.state.email}</li>
                <li> <i class="fa fa-mobile"></i> {this.state.phone}</li>
                <li> <i class="fa fa-globe"></i> {this.state.st} {this.state.nat}</li>
                <li><Link to={'/'}><i class="fa fa-undo"></i> back to contacts</Link></li>
            </ul>
        </div>
      )
    }
  }

export default Contact

