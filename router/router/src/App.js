import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Bookkeeping!
        </h1>
        <nav
          style={{
            backgroundColor:"red",
            padding: "3px",
            display: "flex",
            justifyContent: "space-evenly"
          }}>
          
          <Link to="/invoices">Invoices</Link>
          <Link to="/expenses">Expenses</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
