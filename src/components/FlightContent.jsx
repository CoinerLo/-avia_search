import { useState } from 'react';
import FlightContentCard from './FlightContentCard';
import '../styles/flightContent.css';

const FlightContent = ({ flights }) => {
    const [pagination, setPagination] = useState(2);
    const visibleFlights = flights.slice(0, pagination);

    if (flights.length === 0){
        return (
            <div style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>
                <h1>Для данных параметров нет подходящих рейсов.</h1>
            </div>
        );
    }

    return (
        <div className='containerCards'>
            <div className='containerCards_overflow'>
                {
                    visibleFlights.map(flight =>
                        <FlightContentCard
                            key={flight.flightToken}
                            flight={flight.flight}
                        />
                    )
                }
            </div>
            <button
                className='buttonShowMore'
                onClick={() => setPagination(pagination + 2)}
            >
                Показать еще
            </button>
        </div>
    );
};

export default FlightContent;
