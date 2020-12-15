import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src="../../BudgetPlanning.png" className="App-logo" alt="logo" />
        <p> 
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit"><i class="fa fa-search"></i></button>
        </p>
        
  
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
