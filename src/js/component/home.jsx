import React from "react";

//include images into your bundle
import Nav from "./nav";
import Carousel from "./carousel";
import Card from "./card";
import Footer from "./footer";
import cajaImanImg from '../../img/caja_iman.jpg';
import packs from '../../img/01packs.webp';

import cajaMarco from '../../img/03cajamarco.jpg';
import funny from '../../img/04funny.jpg';
import bola from '../../img/05bola.jpg';



//create your first component
const Home = () => {
	return (
		<>



			<Nav />
			<Carousel />

			<div className="row card-row justify-content-center aling-items-center">
				<Card className=""
					title="Caja Imán"
					text="Caja imán redonda con copias 15x20. Pueden ser opcionalmente con trasera reforzada."
					imageUrl={cajaImanImg}
					link="https://dpalbum.es/producto/caja-iman-cuadrada-para-fotos-15x20/" />
				<Card className=""
					title="Bola"
					text="Bola para colgar en el árbol de navidad, este producto es ideal para introducir en todos tus packs."
					imageUrl={bola}
					link="https://dpalbum.es/categoria-producto/navidad/" />
				<Card className=""
					title="Funny box"
					text="Caja funny box  ideal para sesiones de navidad. Disponible en rojo y verde."
					imageUrl={funny}
					link="https://dpalbum.es/categoria-producto/navidad/" />
				<Card className=""
					title="Caja marco"
					text="Caja marco para copias 15x20. Entran un total de 20 copias por caja."
					imageUrl={cajaMarco}
					link="https://dpalbum.es/producto/caja-iman-cuadrada-para-fotos-15x20/" />
				<Card className=""
					title="Packs"
					text="Elige entre nuestra amplia variedad de packs para tus sesiones de navidad."
					imageUrl={packs}
					link="https://dpalbum.es/categoria-producto/navidad/" />

			</div>
			<Footer />




		</>
	);
};

export default Home;
