import { ArrowRightOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { dataFormater, timeFormater } from '../utils';
import '../styles/partOfTheCardComponent.css';

const PartOfTheCardComponent = ({ partOfFlight }) => {
    const { departureCity, departureAirport, departureDate, airline } = partOfFlight.segments[0];
    const { arrivalCity, arrivalAirport, arrivalDate } =
        partOfFlight.segments[partOfFlight.segments.length === 2 ? 1 : 0];
    const { hours, minutes } = timeFormater(partOfFlight.duration);
    const dep = dataFormater(departureDate);
    const arr = dataFormater(arrivalDate);

    return (
        <>
            <div className='partOfTheCard_fromAndTo'>
                <span>
                    {`${departureCity?.caption}, ${departureAirport.caption}`}
                    <span className='color08c'>
                        {` (${departureAirport.uid}) `}
                    </span>
                    <ArrowRightOutlined style={{ color: '#08c' }}/>
                    {` ${arrivalCity?.caption}, ${arrivalAirport.caption}`}
                    <span className='color08c'>
                        {` (${arrivalAirport.uid})`}
                    </span>
                </span>
            </div>
            <div className='partOfTheCard_timings'>
                <span>{`${dep.fullHour}:${dep.fullminute}`}
                    <span className='partOfTheCard_timings_data'>
                        {` ${dep.dataDay} ${dep.month}. ${dep.day}`}
                    </span>
                </span>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <ClockCircleOutlined style={{marginRight: '5px'}}/>
                    <span>{`${hours} ч ${minutes} мин`}</span>
                </div>
                <span>{`${arr.fullHour}:${arr.fullminute}`}
                    <span className='partOfTheCard_timings_data'>
                        {` ${arr.dataDay} ${arr.month}. ${arr.day}`}
                    </span>
                </span>
            </div>
            <div className='partOfTheCard_transfers'>
                {partOfFlight.segments.length === 2
                    ? <span>1 пересадка</span>
                    : null
                }
            </div>
            <div style={{margin: '15px 0 0 0'}}>{`Рейс выполняет: ${airline.caption}`}</div>
        </>
    );
};

export default PartOfTheCardComponent;
