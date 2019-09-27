import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '' };

  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/messages', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
      .then(res => console.log(res));
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Message:
          <textarea type="text" value={this.state.message} onChange={this.handleMessageChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
