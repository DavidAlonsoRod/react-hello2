import React from "react";


// import cajaIman from '../../img/caja_iman.jpg';
import woodHandler from '../../img/wood-handler.webp';
import photoTune from '../../img/photo-tune.webp';
import dpalbum from '../../img/LOGO_DP_ALBUM_2024.jpg';
import books from '../../img/Dp-Album049.jpg';



function Carousel() {
    return (


        <>

            <div className="d-flex justify-content-center aling-items-center m-3">
                <img src={dpalbum} alt="logo dp álbum" style={{ width: "90px", }} />
            </div>
            <main className="d-flex ">
                <div className="col-3">

                </div>

                <div className="row col-6">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner mb-5">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <img src={photoTune} className="d-block w-100" alt="Phototune" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className="carouselTitle">Photo Tune</h2>
                                    <p className="carousel">Descubre nuestro metacrilato, opción de QR con tu canción preferida de spoty. </p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={books} className="d-block w-100" alt=".woodhandler" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className="carouselTitle">Lino + UV</h2>
                                    <p className="carousel">Álbumes que combinan materiales velvet y lino con impresión UV en portada, elige entre nuestros diseños o sube el tuyo personalizado.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={woodHandler} className="d-block w-100" alt="caja iman" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className="carouselTitle">Colgadores para el árbol</h2>
                                    <p className="carousel">Te van a encantar nuestros productos para colgar en tu árbol de navidad.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>




            </main>


        </>
    );
}
export default Carousel