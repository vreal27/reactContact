import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Users from './names.json'
import './App.css'

const people = Users.map(n => (
    <li><Link to={`/contact/${n.id}`}><img src={n.picture.thumbnail}/> <span>{n.name.first} {n.name.last}</span></Link></li>
  ))

class Home extends Component {
    render() {
        return (
            <div>
            <h1>My Peeps</h1>
            <ul className="contacts">{people}</ul>
            </div>
        )
    }
} 

 

export default Home