// import { useState, useEffect } from "react";
// import {
//   addData,
//   deleteData,
//   display1Data,
//   displayAllData,
//   updateData,
// } from "./action";
import "./App.css";
import FirestorePagination from "./FirestorePagination";

function App() {
  // const [defr, setdefr] = useState([{ name: "name", age: "age" }]);
  // console.log(defr);
  // const docID = "H81JqCKtoS8BlSBybUF5";
  // const getAllData = async () => {
  //   let stuff = await displayAllData();
  //   // console.log(stuff, "stuff comp");
  //   setdefr(stuff);
  // };

  // useEffect(() => {
  //   getAllData();
  // }, []);

  return (
    <>
      {/* <h1>hello something</h1>
      <button onClick={addData}>add data</button>
      <button onClick={display1Data}>console data</button>

      <div>
        {defr.length > 0 &&
          defr?.map((d, index) => {
            return (
              <div key={index}>
                <p>{d?.name}</p>
                <p>{d?.age}</p>
                <p>{d?.nickName ? d?.nickName : "no nickName"}</p>
                <button onClick={updateData}>updateData data</button>
                <button onClick={() => deleteData(d?.id)}>delete data</button>
              </div>
            );
          })}
      </div>*/}
      <FirestorePagination />
    </>
  );
}

export default App;
