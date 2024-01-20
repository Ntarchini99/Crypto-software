import React from 'react';
import CryptoImage from '../../assets/img/trade.png';
import './Crypto.css';

const Crypto = () => {
	return (
		<div className="signup" id='Crypto'>
			<div className="container">
				<div className="left">
					<img src={CryptoImage} alt="" />
				</div>

				<div className="right">
					<h2>Las criptomonedas son formas de dinero digital.</h2>
					<p>
					Es importante destacar que las criptomonedas también pueden presentar riesgos, como la volatilidad 
					de los precios, la falta de regulación y la posibilidad de uso en actividades ilícitas.
					</p>
				</div>

			</div>
		</div>
	);
};

export default Crypto;
