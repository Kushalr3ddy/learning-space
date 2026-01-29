import profilePic from './assets/react.svg'

function Card(){

    return(
        <div className="card">
            {/* <img src="https://i.redd.it/90oq4nzbrgae1.png" alt="profile picture" /> */}
            <img className="card-image" src={profilePic} alt="profile picture" />

            <h2 className='card-title'>sed</h2>
            <p className='card-text'>lmao this is desc i think</p>

        </div>
    );
}


export default Card