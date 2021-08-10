import { Component } from 'react';
import { connect } from 'react-redux';
import 'tachyons';

import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import '../../styles/App.css';
import { setSearchField, requestRobots } from '../../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobotsReducer.searchField,
    robots: state.requestRobotsReducer.robots,
    isPending: state.requestRobotsReducer.isPending,
    error: state.requestRobotsReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ?
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);