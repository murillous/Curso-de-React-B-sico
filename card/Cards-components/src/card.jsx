import ProfilePic from "./assets/amor.jpeg"

function Card(){
    return(
        <div className="luluzinha">
            <img className="card-image" src={ProfilePic} alt="profile picture" height={150}></img>
            <h2>Lulu</h2>
            <p className="card--text-color">Eu faço buceta</p>
        </div>
    );
}

export default Card