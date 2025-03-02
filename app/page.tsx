import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import ExpenseSummary from './components/ExpenseSummary';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Expense Tracker</h1>
          <p className="text-gray-600">Track your expenses with real-time graphs</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ExpenseForm />
            <div className="mt-6">
              <ExpenseSummary />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <ExpenseChart />
            <div className="mt-6">
              <ExpenseList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}