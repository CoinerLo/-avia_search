import { Row, Collapse, Radio, Checkbox, InputNumber } from 'antd';

const { Panel } = Collapse;

const AllAirlinesComponent = ({ airline, filteretedAirlines }) => (
    <Row>
        <Checkbox
            value={airline}
            disabled={!filteretedAirlines.includes(airline)}
        >
            {airline}
        </Checkbox>
    </Row>
);

const SideBar = ({
    allAirlines,
    filteretedAirlines,
    setSorting,
    sorting,
    setTransfers,
    setAirlines,
    setMinPrice,
    setMaxPrice
}) => {
    const onChangeRadioSort = e => {
        setSorting(e.target.value);
    };

    const onChangeCheckboxFilterTransfers = checkedValues => {
        setTransfers(checkedValues);
    };

    const onChangeCheckboxFilterAirlines = checkedValues => {
        setAirlines(checkedValues);
    };

    const onChangeMinPrice = e => {
        setMinPrice(e);
    }

    const onChangeMaxPrice = e => {
        setMaxPrice(e);
    }

    return (
        <Collapse bordered={false} defaultActiveKey={['1', '2', '3', '4']}>
            <Panel header='Сортировать' key='1' style={{border: 'none'}}>
                <Radio.Group onChange={onChangeRadioSort} value={sorting}>
                    <Radio value={1}>- по возрастанию цены</Radio>
                    <Radio value={2}>- по убыванию цены</Radio>
                    <Radio value={3}>- по времени в пути</Radio>
                </Radio.Group>
            </Panel>
            <Panel header='Фильтровать' key='2' style={{border: 'none'}}>
                <Checkbox.Group onChange={onChangeCheckboxFilterTransfers}>
                    <Row>
                        <Checkbox value={'oneChange'}>- 1 пересадка</Checkbox>
                    </Row>
                    <Row>
                        <Checkbox value={'noChange'}>- без пересадок</Checkbox>
                    </Row>
                </Checkbox.Group>
            </Panel>
            <Panel header='Цена' key='3' style={{border: 'none'}}>
                <Row>
                    <InputNumber
                        placeholder='От'
                        style={{width: '100%'}}
                        onChange={onChangeMinPrice}
                    />
                </Row>
                <Row>
                    <InputNumber
                        placeholder='До'
                        style={{width: '100%', marginTop: 20}}
                        onChange={onChangeMaxPrice}
                    />
                </Row>
            </Panel>
            <Panel header='Авиакомпании' key="4" style={{border: 'none'}}>
                <Checkbox.Group onChange={onChangeCheckboxFilterAirlines}>
                    {allAirlines.map(
                        airline => <AllAirlinesComponent
                            key={airline}
                            airline={airline}
                            filteretedAirlines={filteretedAirlines}
                        />
                    )}
                </Checkbox.Group>
            </Panel>
        </Collapse>
    );
};

export default SideBar;
