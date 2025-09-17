import CardImage from './assets/MARK\'SCO.png'

function Card(){

    return (
        <div className='card'>
            <img src={CardImage} alt="My Company Image" className='card-image'/>
            <h2 className='card-header'>MarkPaul Nduthu</h2>
            <p className='card-paragraph'>I love Jesus and what He has blessed me to do.</p>
        </div>
    );
}

export default Card