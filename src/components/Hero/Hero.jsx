import HeroImage from '../../assets/img/hero-img.png';
import './Hero.css';

const Hero = () => {
	return (
		<div className="hero" id='Home'>
			<div className="container">
				<div className="left">
					<p className='p-left'>Compre y venda criptomonedas las 24 horas del día</p>
					<h1><span className='invierta'>Invierta</span> en <span className='span-crypto'>criptomonedas</span> con su IRA</h1>
					<p className='p-left'>Compra, vende y almacena cientos de criptomonedas</p>
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
