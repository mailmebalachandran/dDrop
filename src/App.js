import React from 'react';
import './App.css';
import Common from './common';
const jsonFirstData = require('./services/FirstDropdown.json');
const jsonSecondData = require('./services/SecondDropdown.json');
const jsonThirdData = require('./services/ThirdDropdown.json');


class App extends React.Component  {
  constructor(){
    super()
    this.state = {
      FirstDropdownValue: "",
      FirstTextboxValue:"",
      SecondDropdownValue: "",
      ThirdDropdownValue: "",
      ShowFirstLoop: false,
      ShowSecondLoop:false,
      ShowMessage: false
    }
  }
  

  onChangedHandlerFirstDropdown = (e) => {
    if(e.target.value === "Option A")  
    this.setState({ FirstDropdownValue: e.target.value, ShowFirstLoop:true, ShowSecondLoop:false, ShowMessage:false});
    else if(e.target.value === "Option B")
    this.setState({FirstDropdownValue: e.target.value,ShowSecondLoop:true, ShowFirstLoop:false, ShowMessage:false});
    else{
      this.setState({ShowFirstLoop:false,ShowSecondLoop:false,ShowMessage:false})
    }
  }

  onChangedHandlerSecondDropdown = (e) => {
    this.setState({ SecondDropdownValue: e.target.value});
  }

  onChangedHandlerThirdDropdown = (e) => {
    this.setState({ ThirdDropdownValue: e.target.value});
  }

  OnChangeTextbox = (e) => {
    if(this.state.FirstDropdownValue === "Option A")
    this.setState({FirstTextboxValue : e.target.value, ShowMessage:false});
  }

  clickHandler = () => {
    this.setState({ShowMessage:true});
  }

  clickCancelHandler = () =>{
    this.setState({
      FirstTextboxValue : "",
      secondDropdownValue : "",
      ThirdDropdownValue : "",
      ShowMessage:false,
      ShowFirstLoop:false,
      ShowSecondLoop: false,
      FirstDropdownValue:""
    })
  }

  render(){
    let textboxValue;
    let showDefaultValue;
    let textboxShowingValue;
    let seconddropdownShowingValue;
    let thirddropdownShowingValue;
    let firstDropdownValue;
    let secondDropdownValue;
    if(this.state.ShowFirstLoop){
      textboxValue = <input type="text" value={this.state.FirstTextboxValue} onChange={this.OnChangeTextbox}></input>
      
      
    }
    else if(this.state.ShowSecondLoop){
      firstDropdownValue = <Common values={jsonSecondData} value={this.state.SecondDropdownValue} onChanged={this.onChangedHandlerSecondDropdown} />
      secondDropdownValue = <Common values={jsonThirdData} value={this.state.ThirdDropdownValue} onChanged={this.onChangedHandlerThirdDropdown} />
     
    }

    if(this.state.ShowMessage && this.state.ShowFirstLoop){
      showDefaultValue = <label>We are showing :</label> 
      textboxShowingValue = <label>{this.state.FirstTextboxValue}</label> 
    }
    else if(this.state.ShowMessage && this.state.ShowSecondLoop){
      showDefaultValue = <label>We are showing :</label> 
      seconddropdownShowingValue = <label>{this.state.SecondDropdownValue}</label>
      thirddropdownShowingValue = <label>{this.state.ThirdDropdownValue}</label>
    }
  
  return (
    <div className="App">
      <Common value={this.state.FirstDropdownValue} onChanged={this.onChangedHandlerFirstDropdown} values={jsonFirstData} />
      {textboxValue}
      <br></br>
      {firstDropdownValue}
      {secondDropdownValue}
      <br></br>
      <input type="button" value="Submit" onClick={this.clickHandler}></input>
      <input type="button" value="Cancel" onClick={this.clickCancelHandler}></input>
      <br></br>
      {showDefaultValue}
      <br></br>
      {textboxShowingValue}
      {seconddropdownShowingValue}
      {thirddropdownShowingValue}
    </div>
  );
  }
}

export default App;
