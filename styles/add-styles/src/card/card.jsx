import ProfilePic from './assets/profile pic.jpeg'
import cartinha from './card.module.css'

function Card(){
    return(
        <div className={cartinha.card}>
            <img className={cartinha.card_image} src={ProfilePic} alt="profile picture" height={150}></img>
            <h2>Murilo</h2>
            <p className= {cartinha.card_text_color}>Eu faço engenharia da computação</p>
        </div>
    );
}

export default Card