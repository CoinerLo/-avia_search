import '../styles/flightContentCard.css';
import PartOfTheCardComponent from './PartOfTheCardComponent';

const FlightContentCard = ({ flight }) => {
    const { legs, price } = flight;

    return (
        <div className='flightContentCard'>
            <div className='flightContentCard_header'>
                <div className='header_logo'>Logo</div>
                <div className='header_price'>
                    <span className='header_price_currency'>
                        {price.total.amount}
                        <img src='ruble.png' alt='ruble' />
                    </span>
                    <p style={{margin: 0}}>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <div className='partOfTheCard'>
                <PartOfTheCardComponent partOfFlight={legs[0]}/>
            </div>
            <div className='separator' />
            <div className='partOfTheCard'>
                <PartOfTheCardComponent partOfFlight={legs[1]}/>
            </div>
            <button>Выбрать</button>
        </div>
    );
};

export default FlightContentCard;
