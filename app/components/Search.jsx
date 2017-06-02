var React = require('react');

var Search = React.createClass({
    onSearch: function () {
        var retVal = this.refs.submission.value;
        var boolCheck = this.refs.boolCheck.checked;
        this.props.onSearch(retVal, boolCheck);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="submission" onChange={this.onSearch} placeholder="Search for ToDo's" />
                </div>
                <div>
                    <input type="checkbox" ref="boolCheck" onChange={this.onSearch} />Show Completed ToDo's
                </div>
            </div>
        )
    }
});

module.exports = Search;