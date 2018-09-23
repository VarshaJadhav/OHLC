// React modules
import React, { Component } from 'react';
import SearchInput from '../common/search-input/search-input';

import { USER_DATA } from '../../constants';

import './search-style.scss';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredData: [] }
  }

  catchFilteredData = (filteredData) => {
    this.setState({filteredData});
  }

  renderFilteredList = () => {
    if (this.state.filteredData.length) {
      return this.state.filteredData.map(item => {
        return (
        <li key={item._id}>
          <span>ID: {item._id}</span>
          <span>Firstname: {item.name.first}</span>
          <span>Lastname: {item.name.last}</span>
          <span>Email: {item.email}</span>
          <span>Pincode: {item.address.pincode}</span>
        </li>
        );
      })
    } else {
      return <li>No records!</li>
    }
  }

  render() {
    return (
      <div className="search-container">
	      <h1>Search Screen</h1>
        <SearchInput
          dataList={USER_DATA}
          searchKeys={['email', 'tags', 'address', 'name']}
          catchFilteredData={this.catchFilteredData}
        />
        <ul className="search-nav">
          {this.renderFilteredList()}
        </ul>
      </div>
    );
  }
}

export default SearchScreen;