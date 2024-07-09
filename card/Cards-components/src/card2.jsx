import ProfilePic from "./assets/profile pic.jpeg"

function Card2(){
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="profile picture" height={150}></img>
            <h2>Murilo</h2>
            <p className="card--text-color">Eu faço engenharia da computação</p>
        </div>
    );
}

export default Card2