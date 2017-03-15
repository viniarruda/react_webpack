var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<header>
				<div className="logo">

				</div>
				<div className="links">
					<nav>	
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">Sobre</a></li>
							<li><a href="#">Portfólio</a></li>
							<li><a href="#">Depoimentos</a></li>
							<li><a href="#">Contato</a></li>
						</ul>
						<ul className="social">
							<li><a href=""><i className="fa fa-facebook"></i></a></li>
							<li><a href=""><i className="fa fa-linkedin"></i></a></li>
							<li><a href=""><i className="fa fa-github-alt"></i></a></li>
						</ul>
					</nav>
				</div>

				

				<h1>Vinícius Arruda</h1>

			</header>
		)
	}
});

module.exports = Header;