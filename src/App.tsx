import { Col, Row, Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  interface Iperson {
    id: number
    name: string
  }

  // type person = {
  //   id: number
  //   name: string
  // }

  const [name, setName] = useState<string>('');

  const [nameArray, setNameArray] = useState<Iperson[]>([]);

  const [count, setCount] = useState<number>(0);

  // for onChange events if the function is called outside of the onChange when using e (event parameter) we must give it a type
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  // }

  const handleSaveName = () => {
    // we are using the spread operator to add one our object
    setNameArray([...nameArray, {id: 0, name: name}])
  }

  return (
    <Row>
      <Col lg={12} md={9} sm={6} className='d-flex justify-content-center'>
      <h1>Enter Name</h1>
      </Col>
      <Col lg={12} className='d-flex justify-content-center'>
        {/* we are using anon function inside of onchange to set our name state variable to the value of e (our onchange press event) */}
        {/* the value of our input field is always uptodate with out state variable */}
        <input value={name} onChange={(e) => setName(e.target.value)} /> <Button onClick={handleSaveName} variant="dark">Save Name</Button>
      </Col>
      <Col lg={12} className='d-flex justify-content-center'>
        <ul>
          {/* .map takes in more than one parameter 1st is the value of the index, second is the index position */}
          {nameArray.map((person, idx) => (
            // when mapping through through arrays with jsx we need to have a key
            <li key={idx}>{person.name}</li>
          ))}
        </ul>
      </Col>
      <Button onClick={() => setCount(count + 1)}>
        +
      </Button>
      <p className='text-center' >{count}</p>
    </Row>
  );
}

export default App;
