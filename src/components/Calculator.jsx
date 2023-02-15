import React from 'react';

function Calculator() {
  return (
    <div className="calculator-wrapper">
      <div className="app">
        <div className="keypad">
          <p className="result">10</p>
          <div>
            <button className="numbers" type="button" id="clear">AC</button>
            <button className="numbers" type="button" id="backspace">+/-</button>
            <button className="numbers" type="button" name="/">&divide;</button>
            <button className="yellow-numbers" type="button" name="/">&divide;</button>
          </div>
          <div>
            <button className="numbers" type="button" name="7">7</button>
            <button className="numbers" type="button" name="8">8</button>
            <button className="numbers" type="button" name="9">9</button>
            <button className="yellow-numbers" type="button" name="*">&times;</button>
          </div>
          <div>
            <button className="numbers" type="button" name="4">4</button>
            <button className="numbers" type="button" name="5">5</button>
            <button className="numbers" type="button" name="6">6</button>
            <button className="yellow-numbers" type="button" name="-">&ndash;</button>
          </div>
          <div>
            <button className="numbers" type="button" name="1">1</button>
            <button className="numbers" type="button" name="2">2</button>
            <button className="numbers" type="button" name="3">3</button>
            <button className="yellow-numbers" type="button" name="+">+</button>
          </div>
          <div>
            <button className="last-big-0" type="button" name="0">0</button>
            <button className="numbers" type="button" name=".">.</button>
            <button className="yellow-numbers" type="button" id="result">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
