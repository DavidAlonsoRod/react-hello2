import React from "react";

const Card = ({ title, text, imageUrl, link }) => {
    return (
        <>





            <div className="card m-3" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">Ver</a>
                </div>
            </div>





        </>


    )
}
export default Card