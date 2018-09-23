// React modules
import React, { Component } from 'react';
import SearchInput from '../common/search-input/search-input';

import { USER_DATA } from '../../constants';

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
          <span>{item._id}</span>
          <span>{item.name.first}</span>
          <span>{item.name.last}</span>
          <span>{item.email}</span>
          <span>{item.address.pincode}</span>
        </li>
        );
      })
    } else {
      return <li>No records!</li>
    }
  }

  render() {
    return (
      <div>
	      <p>Search Screen</p>
        <SearchInput
          dataList={USER_DATA}
          searchKeys={['email', 'tags', 'address', 'name']}
          catchFilteredData={this.catchFilteredData}
        />
        <ul>
          <li>
            <span>ID</span>
            <span>Firstname</span>
            <span>Lastname</span>
            <span>Email</span>
            <span>Pincode</span>
          </li>
          {this.renderFilteredList()}
        </ul>
      </div>
    );
  }
}

export default SearchScreen;