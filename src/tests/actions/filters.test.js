import moment from 'moment';
import { editExpense, 
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate 
} from "../../actions/filters";



// TEST setStartDate
test('should generate setStarDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

// TEST setEndDate
test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});



// TEST setTextFilter
test('should generate set text filter object with text value', () => {
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

// TEST setTextFilter, Default values
test('should generate set text filter object default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

// TEST sortByAmount
test('should generate action object for sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

// TEST sortByDate
test('should generate action object for sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});