// import logo from './logo.svg';
import './App.css';
// import CardGroup from './components/cart/CardGroup/CardGroup';
import { Button, Spinner } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Using react Bootstrap</h1>
      <Button variant="primary">Hello</Button>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      

    </div>
  );
}

export default App;
