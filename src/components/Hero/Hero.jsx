import HeroImage from '../../assets/img/hero-img.png';
import './Hero.css';

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="left">
					<p>Buy & Sell Crypto 24/7 using your retirement account</p>
					<h1>Invest in Cryptocurreny with Your IRA</h1>
					<p>Buy, Sell, and store hundreds of cryptocurrencies</p>
				</div>

				<div className="right">
					<div className="img-container">
						<img src={HeroImage} alt="Hero Image" />
					</div>
				</div>

			</div>
		</div>
	);
};

export default Hero;
