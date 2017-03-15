var React = require('react');
var Header = require('./Header');
var Sobre = require('./Sobre');

var Container = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<Sobre />
			</div>
		);
	}
});

module.exports = Container;