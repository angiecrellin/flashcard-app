require('babel-polyfill');

var ReactDOM = require('react-dom');

var Flashcard = require('./components/Flashcard');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Flashcard />, document.getElementById('app'));
});