import { React, Component} from 'react';
import './App.css';


class App extends Component { 
  state = { 
    firstOption: false,
    secondOption: false
  }

  
  handleFirstInputChange = (value) => {
    this.setState({
      firstOption: value
    });
  };

  handleSecondInputChange = (value) => {
    this.setState({
      secondOption: value
    });
  };

render() {
  console.log(this.state)
  return (
    <div className="App">
      <header className="App-header">

          <RadioGroup 
            groupName="firstGroup"
            selectedOption={this.state.firstOption}
            handleInputChange={this.handleFirstInputChange} />

          <RadioGroup 
            groupName="secondGroup"
            selectedOption={this.state.secondOption}
            handleInputChange={this.handleSecondInputChange} />
          

      </header>
    </div>
  );
}
}

const RadioGroup = (props) => {
  return (
    <div className="radioGroup">
      <div className={`selectedSlider ${props.selectedOption}`}></div>
      <Radio
        id={`${props.groupName}firstRadio`}
        group={props.groupName}
        value="left"
        label="First"
        isSelected={props.selectedOption === "left"}
        handleInputChange={props.handleInputChange} />

      <Radio
        id={`${props.groupName}SecondRadio`}
        group={props.groupName}
        value="right"
        label="Second"
        isSelected={props.selectedOption === "right"}
        handleInputChange={props.handleInputChange} />
    </div>
  )
}
const Radio = (props) =>  {
  return(
    <>
      <input 
        type="radio" 
        id={props.id} 
        name={props.group}
        value={props.value}  
        onChange={() => props.handleInputChange(props.value)}
        checked={props.isSelected} />
      <label htmlFor={props.id}>
      {props.label}
      </label>
    </>
  );
}

export default App;
