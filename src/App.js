import { React, Component  } from 'react';
import './App.css';
import {Button} from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';
import logo from './imeg/Logo.png';


class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      input: "" 
    };
}
  

addToInput = val => {
    this.setState ({
      input: this.state.input + val  });
  };

  FulfillEqual = () => {
    this.setState ({
      input: math.evaluate(this.state.input)  });
  };

  
  render (){
     return (
        <div className="app">
           <div className="calc-wrapper">
             < Input input={this.state.input}></Input>
               <div className="row">
               <Button addToInput = {this.addToInput}>7</Button>
               <Button addToInput = {this.addToInput}>8</Button>
               <Button addToInput = {this.addToInput}>9</Button>
               <Button addToInput = {this.addToInput}>/</Button>
               </div>
               <div className="row">
               <Button addToInput = {this.addToInput}>4</Button>
               <Button addToInput = {this.addToInput}>5</Button>
               <Button addToInput = {this.addToInput}>6</Button>
               <Button addToInput = {this.addToInput}>*</Button>
               </div>
               <div className="row">
               <Button addToInput = {this.addToInput}>1</Button>
               <Button addToInput = {this.addToInput}>2</Button>
               <Button addToInput = {this.addToInput}>3</Button>
               <Button addToInput = {this.addToInput}>+</Button>
               </div>
               <div className="row">
               <Button addToInput = {this.addToInput}>.</Button>
               <Button addToInput = {this.addToInput}>0</Button>
               <Button addToInput ={ () => this.FulfillEqual() }>=</Button>
               <Button addToInput = {this.addToInput}>-</Button>
               </div>

               <div className="row">
               <ClearButton handleClear={() => this.setState({ input: ""})}>Clear/????????????????</ClearButton>
               </div>
                              
               <div className="row">
        <div className="logo">
          <img src={logo} width="50" height="25" />
        </div>
        </div>

         </div>  
      </div>
    
    );
   }
  }

export default App;
