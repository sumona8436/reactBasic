import { useState } from "react";

function App() {
  const [todoState, settodoState] = useState([
    {
      name: "Gym",
      description: "You have to go gym",
    },
    {
      name: "Breakfast",
      description: "You have to take breakfast",
    },
  ]);

  //if you click  button,it will add one new todo with existed todo
  function addingNew() {
    let newTodo = [
      ...todoState,
      {
        name: "Study",
        description: "You have to Study",
      },
    ];
    settodoState(newTodo);
  }

  return (
    <>
      <button
        style={{
          color: "red",
          textAlign: "center",
          marginLeft: "570px",
          marginTop: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={addingNew}
      >
        Add new Todo
      </button>
      {/* redendaring */}

      {/* {JSON.stringify(todoState)}  //object array -> string */}

      {/* <TodoComponents
        name={todoState[0].name}
        description={todoState[0].description}
      />
      <TodoComponents
        name={todoState[1].name}
        description={todoState[1].description}
      /> */}
      {/* iterate over state */}
      {todoState.map(function (param) {
        return (
          <TodoComponents name={param.name} description={param.description} />
        );
      })}
    </>
  );
}
function TodoComponents(prop) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "greenyellow" }}>{prop.name}</h1>
      <h2>{prop.description}</h2>
    </div>
  );
}
export default App;
