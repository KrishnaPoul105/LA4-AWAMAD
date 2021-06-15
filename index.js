import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' ,comments:''};
  }
  SubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting =>" +"Name:" +this.state.username+"||Comments :"+this.state.comments);
  }
  ChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
      <h1>Hey {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.ChangeHandler}
      />
       <p>Comments:</p>
      <input
        type='text'
        name='comments'
        onChange={this.ChangeHandler}
      />
       
      <input
        type='submit'
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
