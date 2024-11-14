import { useId } from "react";

export const UseId = () => {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <form>
      <div>
        <label htmlFor={usernameId}>Username:</label>
        <input type="text" id={usernameId} name="name" />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input type="text" id={emailId} name="email" />
      </div>
      <div>
        <label htmlFor={passwordId}>Email:</label>
        <input type="text" id={passwordId} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
