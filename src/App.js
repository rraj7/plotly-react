import React from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          Learn React
        <button>Click</button>
        
      </header>
    
      <div>
        <Plot 
          data={[
            x: [0,1,2,3,4,5,6,7,8,9,10],
            y: [10,9,8,7,6,5,4,3,2,1],
            type: 'scattergl',
            marker:{color:'red'},
            name: "Data Testing"
          ]}
          />
      </div>
    </div>
  );
}

export default App;
