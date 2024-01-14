import { useState } from "react";
// let status{
//   c: 0 //it will effect only first time not for second time
// }

function App() {
  const [c, setC] = useState(0);
  function clickHandlerFunction() {
    // status.c=status.c+1;  //if you do like this to increse the c number,
    //console.log( status.c);  //then you can see in log,state is increasing by 1,but not redendaring
    setC(c + 1);
  }
  return (
    <>
      <button
        style={{ textAlign: "center", marginleft: "20px" }}
        onClick={clickHandlerFunction}
      >
        count {c}
      </button>
    </>
  );
}

export default App;
