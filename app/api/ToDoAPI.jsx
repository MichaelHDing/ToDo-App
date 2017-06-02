var $ = require('jquery');

module.exports = {
    setToDos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('listToDo', JSON.stringify(todos));
            return todos;
        }
    },
    getToDos: function () {
        var retInit = localStorage.getItem('listToDo');
        var ret = [];

        try {
            ret = JSON.parse(retInit);
        } catch (e) {
            //console.log('Parsing Failure');
        }

        return $.isArray(ret) ? ret : [];
    },
    filterToDos: function (listToDos, boolShow, searchVal) {
        var filtered = listToDos;

        //filter by boolShow
        filtered = filtered.filter((element) => {
            return !element.done || boolShow;
        });
        //filter by searchVal
        filtered = filtered.filter((element)=>{
            return searchVal === '' || element.text.toLowerCase().indexOf(searchVal)!== -1

        });
        //sort list by non-done
        filtered.sort((a, b) => {
            if (!a.done && b.done) {
                return -1;
            } else if (a.done && !b.done) {
                return 1;
            } else {
                return 0;
            }
        });

        return filtered;
    }
};