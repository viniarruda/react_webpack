var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<header>
				<div className="logo">

				</div>
				<nav>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Sobre</a></li>
						<li><a href="#">Portfólio</a></li>
						<li><a href="#">Depoimentos</a></li>
						<li><a href="#">Contato</a></li>
					</ul>
				</nav>

				<ul className="social">
					<li>
						<a href=""><i className="fa fa-facebook"></i></a>
						<a href=""><i className="fa fa-linkedin"></i></a>
						<a href=""><i className="fa fa-github-alt"></i></a>
					</li>
				</ul>

				<h1>Vinícius Arruda</h1>

			</header>
		)
	}
});

module.exports = Header;