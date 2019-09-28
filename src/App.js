import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/messages')
      .then(response => response.json())
      .then(response => this.setState({ messages: response }));
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <h1>Send Message</h1>
        <Form />
        <h1>Messages</h1>
        {messages &&
          messages.map(message => (
            <div key={message._id}>
              {message.name}
              <br />
              {message.message}
            </div>
          ))}
      </div>
    );
  }
}

export default App;
