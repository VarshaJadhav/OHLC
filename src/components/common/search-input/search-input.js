import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';
import PropTypes from 'prop-types';

import './search-input-style.scss';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.filter = debounce(400, this.filter);
  }

  onChangeOfInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => this.filter({ term: this.state.searchTerm }));
  }

  /**
   * params(obj) = { temp, data }
   * temp - temp created array
   * data - filtered data
   * return array
   * 
   * This function required for identify and replace duplicate entry with latest one.
   * It helps to avoid duplication.
   */
  updateFilteredArr = ({ temp, data }) => {
    let index = temp.findIndex(ele => {
      return ele._id === data._id;
    });
    if (index !== -1) {
      temp[index] = data;
    } else {
      temp.push(data);
    };

    if (typeof this.props.catchFilteredData === 'function') {
      this.props.catchFilteredData(temp)
    }
    return temp;
  }

  /**
   * params(obj) = {term}
   * return array
   */
  filter = ({ term }) => {
    const {
      dataList, //original array from which we need to filter
      searchKeys //keys array - search based on this keys/fields from dataList
    } = this.props;

    let temp = [];

    if (term) {
      term = term.toLowerCase();
      dataList.filter(data => {
        searchKeys.map(key => {
         
          /** key/field can be object/array/string accordingly filter  */
          if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
            for (const keyVal in data[key]) {
              let text = data[key][keyVal].toString();
              if (text.indexOf(term) !== -1) {
                this.updateFilteredArr({ temp, data });
              }
            }
          } else if (Array.isArray(data[key])) {
            let formatedArr = data[key].map((x) => x.toLowerCase())
            if (formatedArr.includes(term)) {
              this.updateFilteredArr({ temp, data });
            }
          } else {
            let text = data[key].toString().toLowerCase();
            if (text.indexOf(term) !== -1) {
              this.updateFilteredArr({ temp, data });
            }
          }
        })
      })
    } else {
      if (typeof this.props.catchFilteredData === 'function') {
        this.props.catchFilteredData(temp)
      }
    }
    return temp;
  }

  render() {
    const { searchContainerStyle, searchInputStyle } = this.props;
    return (
      <div className={`search-container ${searchContainerStyle || '' }`}>
        <input type="text"
          className={`search-input ${searchInputStyle || '' }`}
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={e => this.onChangeOfInput(e)} autoFocus />
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchContainerStyle: PropTypes.string,
  searchInputStyle: PropTypes.string,
  onChangeOfInput: PropTypes.func,
  dataList: PropTypes.arrayOf(PropTypes.object),
  searchKeys: PropTypes.arrayOf(PropTypes.string)
}

export default SearchInput;