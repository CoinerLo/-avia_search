import { Layout } from 'antd';
import SideBar from './SideBar';
import FlightContent from './FlightContent';
import { useState } from 'react';
import { sorter, filter, receivingAirlines, filterTransfers } from '../utils';
import '../styles/flight.css';

const { Sider, Content } = Layout;

const Flight = ({ flights }) => {
    const [sorting, setSorting] = useState(null);
    const [transfers, setTransfers] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [airlines, setAirlines] = useState([]);

    const filterOptions = {
        airlines,
        minPrice,
        maxPrice
    };

    const allAirlines = receivingAirlines(flights);

    const filteredTransfers = filterTransfers(flights, transfers);
    const filteredFlights = filter(filteredTransfers, filterOptions);
    const resultFilterAndSortingFlights = sorter(filteredFlights, sorting);

    const filteretedAirlines = receivingAirlines(filteredFlights);

    return (
        <Layout style={{height: '100%'}} className='site-layout-background' >
            <Sider width={300} theme='light' >
                <SideBar
                    allAirlines={allAirlines}
                    flights={resultFilterAndSortingFlights}
                    sorting={sorting}
                    filteretedAirlines={filteretedAirlines}
                    setSorting={setSorting}
                    setTransfers={setTransfers}
                    setMinPrice={setMinPrice}
                    setAirlines={setAirlines}
                    setMaxPrice={setMaxPrice}
                />
            </Sider>
            <Content className='site-layout-background'>
                <FlightContent flights={resultFilterAndSortingFlights}/>
            </Content>
        </Layout>
    );
};

export default Flight;
