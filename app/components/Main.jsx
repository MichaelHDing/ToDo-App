var React = require('react');

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <p>Main.jsx Loaded</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;