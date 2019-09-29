import React from 'react';
import './style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '' };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    const { messagePosted } = this.props;
    event.preventDefault();
    fetch('http://onnet.hopto.org/messages', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(() => {
      messagePosted();
    });
  };

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    const { message, value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-fields">
        <label htmlFor="name">
          Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            type="text"
            value={message}
            onChange={this.handleMessageChange}
          />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    );
  }
}

export default Form;
