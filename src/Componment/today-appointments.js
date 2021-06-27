import moment from 'moment';
 const appointments = [
    {
        title: 'Libre',
        startDate: new Date(2020, 5, 25, 9, 20),
        endDate: new Date(2020, 5, 25, 9, 40),
        id: 0,
        location: 'red',
    },
     {
         title: 'Libre',
         startDate: new Date(2020, 5, 25, 10, 20),
         endDate: new Date(2020, 5, 25, 10, 40),
         id: 1,
         location: 'gray',
     },
];

const currentDate = moment();
let date = currentDate.date();

const makeTodayAppointment = (startDate, endDate,location) => {
    const days = moment(startDate).diff(endDate, 'days');
    const nextStartDate = moment(startDate)
        .year(currentDate.year())
        .month(currentDate.month())
        .date(date);
    const nextEndDate = moment(endDate)
        .year(currentDate.year())
        .month(currentDate.month())
        .date(date + days);
    return {
        startDate: nextStartDate.toDate(),
        endDate: nextEndDate.toDate(),
    };
};

export default appointments.map(({ startDate, endDate, ...restArgs }) => {
    const result = {
        ...makeTodayAppointment(startDate, endDate),
        ...restArgs,
    };
    date += 1;
    if (date > 31) date = 1;
    return result;
});
