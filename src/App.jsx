import Result from "./component/Result"
import UserInput from "./component/UserInput"
import { useState } from "react";
function App(){
  const inputObject = {
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };
  const [inputValues, setInputValue] = useState(inputObject);
  function handelChange(initialValue, changedValue) {
    setInputValue((prevInput) => {
      return {
        ...prevInput,
        [initialValue]: +changedValue,
      };
    });
  }
  const inputIsValid=inputValues.duration>0;
  return (
    <>
    <UserInput inputData={inputValues} handelChangeData={handelChange}/>
    {inputIsValid?<Result inputFieldValues={inputValues}/>:<p className="center">Please Enter a duration is greater than zero</p>}
    
    </>
  )
}

export default App
