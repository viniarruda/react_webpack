var React = require('react');

var Sobre = React.createClass({
	render: function() {
		return(
			<section id="sobre">
				<h1>Sobre</h1>

				<div className="itens">
					<div className="imagem">
						<img src="" alt="" />
					</div>
					<div className="lapis">
						<i className="fa fa-pencil"></i>
					</div>
					<div className="codigo">
						<i className="fa fa-code"></i>	
					</div>
					<div className="compartilhar">
						<i className="fa fa-share-alt"></i>
					</div>
				</div>
			</section>
		)
	}
});

module.exports = Sobre;