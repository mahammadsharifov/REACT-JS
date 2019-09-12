// Example 3: Working with Form Elements

import React, {Component} from 'react';
import Validation from './App3/Validation';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: '', 
      surname: '',
      password: '',
      mystatus: ''
    };
    //this.changeName = this.changeName.bind(this);
  }

  changeName = (event) => {
    // we get the 'event.target.name' which will be either firstname or surname
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="Appcontainer">
        <form>
          <h1>Hello, {this.state.firstname} {this.state.surname} </h1>
          <h3>You are: <span style={{color: 'tomato'}}> {this.state.mystatus} </span></h3>
          <input type="text" name="firstname" onChange={this.changeName} placeholder="name" />
          <input type="text" name="surname" onChange={this.changeName} placeholder="surname" />
          <Validation passLength = {this.state.password.length} />
          <input type="password" name="password" onChange={this.changeName} placeholder="password" />
          <label style={{color: 'tomato'}}> {this.state.password} </label>
          <select name="mystatus" onChange={this.changeName} >
            <option>select your status</option>
            <option value="Administrator">Administrator</option>
            <option value="Moderator">Moderator</option>
            <option value="User">User</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;