import React from 'react';
import ExpenseList from './expenseList';
import ExpensteListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpensteListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;