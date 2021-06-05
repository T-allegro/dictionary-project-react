import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>
         Find the meaning...
       </h1>
       <main>
         <Dictionary />
       </main>
      </header>
      <footer className="App-footer">
        Coded by Teresa Allegro
      </footer>
      </div>
    </div>
  );
}

export default App;
