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
    this.fetchData();
  }

  messagePosted = () => {
    this.fetchData();
  };

  fetchData = () => {
    fetch('http://onnet.hopto.org/messages')
      .then(response => response.json())
      .then(response => this.setState({ messages: response }));
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <h1>Send Message</h1>
        <Form messagePosted={this.messagePosted} />
        <h1>Messages</h1>
        <div className="messages">
          {messages &&
            messages.map(message => (
              <div key={message._id} className="message">
                <b>{message.name}</b>:{message.message}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
