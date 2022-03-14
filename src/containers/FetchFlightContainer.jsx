import data from '../assets/flights.json';
import Flight from '../components/Flight';

const FetchFlightContainer = () => {
    const { flights } = data.result;

    return <Flight flights={flights} />
};

export default FetchFlightContainer;
