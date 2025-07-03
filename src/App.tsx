import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  function changeText(event: any) {
    setText(event.target.value);
  }
  function displayMessage(event: any) {
    event.preventDefault();
    setMessage(text);
    setText("");
  }
  return (
    <div>
      <h1>Hello {message}</h1>
      <Input type="text" placeholder="Type your name" onChange={changeText} />
      <Button type="submit" onClick={displayMessage} text="Submit" />
    </div>
  )
}

export default App