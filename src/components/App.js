import { useState, useEffect } from 'react';
import 'tachyons';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import '../styles/App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(robots => setRobots(robots));
      console.log(count);
  }, [count])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }
  
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <button onClick={() => setCount(count+1)}>Click Me!</button>
        <SearchBox handleSearchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
}

export default App;