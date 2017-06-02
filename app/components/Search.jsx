var React = require('react');

var Search = React.createClass({
  handleSearch: function () {
    var boolCheck = this.refs.boolCheck.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(boolCheck, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="boolCheck" onChange={this.handleSearch}/>
            Show Completed ToDo's
          </label>
        </div>
      </div>
    )
  }
});

module.exports = Search;
