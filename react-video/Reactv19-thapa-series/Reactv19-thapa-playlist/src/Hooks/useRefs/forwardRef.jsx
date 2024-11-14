/* eslint-disable react/display-name */
import { forwardRef, useId, useRef } from "react";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReactV19Input label="username" ref={username} />
      <BeforeReactV19Input label="password" ref={password} />
      {/* <AfterReactV19Input label="username" ref={username} />
      <AfterReactV19Input label="password" ref={password} /> */}
      <button type="submit">submit</button>
    </form>
  );
};
//Before react v19
const BeforeReactV19Input = forwardRef((props, ref) => {
  const id = useId();

  return (
    <>
      <div>
        <label htmlFor={id}>{props.label} </label>
        <input type="text" ref={ref} />
      </div>
    </>
  );
});

// After react v19

// const AfterReactV19Input = ({ label, ref }) => {
//   const id = useId();

//   return (
//     <>
//       <div>
//         <label htmlFor={id}>{label} </label>
//         <input type="text" ref={ref} />
//       </div>
//     </>
//   );
// };
