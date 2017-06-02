var React = require('react');

var AddToDo = React.createClass({
    onAdd: function (e) {
        e.preventDefault();
        var retVal = this.refs.submission.value;
        if (retVal.length > 0) {
            this.refs.submission.value = '';
            this.props.onAdd(retVal);
        } else {
            this.refs.submission.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onAdd} className="AddToDo-form">
                    <input type="text" ref="submission" placeholder="Add a ToDo here" />
                    <button className="button expanded">Add ToDo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddToDo;