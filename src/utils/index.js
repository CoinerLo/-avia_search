export const receivingAirlines = (flights) => [...new Set(
    flights.map(({ flight }) => flight.carrier.caption)
)];

export const sorter = (sortableArray, sortingType) => {
    const result = sortableArray;

    switch (sortingType) {
        case 1:
            result.sort(
                (a, b) => Number(a.flight.price.total.amount) > Number(b.flight.price.total.amount) ? 1 : -1
            );
            break;
        case 2:
            result.sort(
                (a, b) => Number(a.flight.price.total.amount) < Number(b.flight.price.total.amount) ? 1 : -1
            );
            break;
        case 3:
            result.sort(
                (a, b) => Number(a.flight.legs[1].duration) + Number(a.flight.legs[0].duration)
                    > Number(b.flight.legs[1].duration) + Number(b.flight.legs[0].duration)
                    ? 1 : -1
            );
            break;
        default: 
            break;
    }

    return result;
};

export const filterTransfers = (filterableArray, transfers) => {
    let result = filterableArray;
    if (transfers.length > 0) {
        result = result.filter((item) => {
            const oneSegments = item.flight.legs[0].segments;
            const twoSegments = item.flight.legs[1].segments;
            if (
                transfers.includes('oneChange')
                && oneSegments.length > 1
                && twoSegments.length > 1
            ) return true;
            if (
                transfers.includes('noChange')
                && oneSegments.length === 1
                && twoSegments.length === 1
            ) return true;

            return false;
        });
    }

    return result;
}

export const filter = (filterableArray, options) => {
    let result = filterableArray;
    const {
        airlines,
        minPrice,
        maxPrice
    } = options;

    if (airlines.length > 0) {
        result = result.filter((item) =>
            airlines.includes(item.flight.carrier.caption));
    }

    if (minPrice > 0) {
        result = result.filter((item) => 
            Number(item.flight.price.total.amount) > minPrice
        );
    }

    if (maxPrice > 0) {
        result = result.filter((item) => 
            Number(item.flight.price.total.amount) < maxPrice
        );
    }

    return result;
};

export const timeFormater = (duration) => {
    const hours = Math.floor(duration / 60);
    const rest = Math.round(duration % 60);
    const minutes = rest < 10 ? `0${rest}` : rest;
    return {
        hours,
        minutes, 
    };
};

const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек'
];

export const dataFormater = (data) => {
    const dataObject = new Date(data);

    const day = days[dataObject.getDay()];
    const month = months[dataObject.getMonth()]
    const dataDay = dataObject.getDate();
    const hour = dataObject.getHours();
    const fullHour = hour < 10 ? `0${hour}` : hour;
    const minute = dataObject.getMinutes();
    const fullminute = minute < 10 ? `0${minute}` : minute;

    return {
        fullHour,
        fullminute,
        dataDay,
        month,
        day
    };
};
