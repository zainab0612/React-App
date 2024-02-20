import React, { useEffect, useState } from "react";


function Counter(props) {
  // const reducer = (state, action) => {
  //   const increment = () => {
  //     if (state.count < 20) {
  //       return {
  //         count: state.count + 1,
  //       };
  //     } else {
  //       return state;
  //     }
  //   };
  //   const decrement = () => {
  //     if (state.count > 0) {
  //       return {
  //         count: state.count - 1,
  //       };
  //     } else {
  //       return state;
  //     }
  //   };

  //   switch (action.type) {
  //     case "increment":
  //       return increment();
  //     case "decrement":
  //       return decrement();
  //     default:
  //       return state;
  //   }
  // };

  // const initialState = { count: 0 };
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      return count;
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  // useEffect(() => {
  //   alert(`you count ${count} times`);
  // }, [count]);

  return (
    <>
      <div className="h1 text-center my-4">{props.sectionTitle}</div>
      <div className="container text-center">
        <div>
          <button className="btn btn-dark mx-2 fs-4" onClick={increment}>
            +
          </button>
          {count}
          <button className="btn btn-dark mx-2 fs-4" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
