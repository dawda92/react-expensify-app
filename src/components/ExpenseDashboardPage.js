import React from 'react';
import ExpenseList from './expenseList';
import ExpensteListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensteListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;