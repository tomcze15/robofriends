import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import '../../styles/App.css'
import { setSearchField, requestRobots } from '../../actions';

const App = () =>{
  const [searchResults, setSearchResults] = useState([]);
  const text = useSelector(state => state.searchRobotsReducer.searchField);
  const robotsUsers = useSelector(state => state.requestRobotsReducer.robots);
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    dispatch(setSearchField(e.target.value))
  };

  useEffect(() =>  {
      dispatch(requestRobots());
  }, [dispatch])

  useEffect(() => {
      let filteredRobots = robotsUsers.filter(robots => {
          return(
              robots.name.toLowerCase().includes(text.toLowerCase())
          );
      });
      setSearchResults(filteredRobots);
  }, [text, robotsUsers])

  const newRobot = searchResults;

  return(
    <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox SearchChange={ onSearchChange }/>
      <Scroll>
        {
          text === "" ? 
            <CardList robots={ robotsUsers }/> :
            <CardList robots={ newRobot }/>
        }
      </Scroll>
    </div>
  );
}

export default App;