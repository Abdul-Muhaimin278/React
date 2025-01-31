// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   deleteField,
//   doc,
//   getDoc,
//   getDocs,
//   limit,
//   onSnapshot,
//   orderBy,
//   query,
//   setDoc,
//   startAfter,
//   updateDoc,
//   where,
// } from "firebase/firestore";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "./config/firebase";
// // create, update, delete,getall docs and get from id

export const fetchInitialData = (setData, setLastDoc, pageSize) => {
  const q = query(
    collection(db, "students"),
    orderBy("createdAt", "desc"),
    limit(pageSize)
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(docs);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]); // Store last doc for pagination
    }
  });

  return unsubscribe;
};

export const fetchNextPage = (setData, setLastDoc, lastDoc, pageSize) => {
  if (!lastDoc) return;
  const q = query(
    collection(db, "students"),
    orderBy("createdAt", "desc"),
    startAfter(lastDoc),
    limit(pageSize)
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData((prevData) => [...prevData, ...docs]); // Append new data
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    }
  });

  return unsubscribe;
};

// // export const displayData = async (id) => {
// //   try {
// //     // const docRef = doc(db, "students", id);
// //     const studentsRef = collection(db, "students");
// //     console.log("doc.id()", "=>", "doc.data()");

// //     // getDoc(docRef).then((shot) => {
// //     //   if (shot.exists()) {
// //     //     console.log(shot.id, "=>", shot.data());
// //     //   } else {
// //     //     console.log("nothing for you");
// //     //   }
// //     // });
// //     // getDocs(studentsRef).then((snapShot) => {
// //     //   snapShot.forEach((doc) => {
// //     //     console.log(doc.id, "=>", doc.data());
// //     //   });
// //     // });
// //     // setDoc(
// //     //   docRef,
// //     //   {
// //     //     name: "bb pizen",
// //     //     age: 1121,
// //     //     ulf: "something",
// //     //   },
// //     //   { merge: true }
// //     // );
// //     // updateDoc(docRef, {
// //     //   luqab: "nothing",
// //     // });
// //     // updateDoc(docRef, {
// //     //   ulf: deleteField(),
// //     // });
// //     // const q = query(
// //     //   studentsRef,
// //     //   where("age", "!=", "25"),
// //     //   orderBy("age", "desc"),
// //     //   limit(7)
// //     // );
// //     // getDocs(q).then((snapShot) => {
// //     //   snapShot.forEach((doc) => {
// //     //     console.log(doc.id, "=>", doc.data());
// //     //   });
// //     // });
// //     // const arrQ = query(studentsRef, where("name", "in", ["apple", "mango 2"]));
// //     // const arrQ = query(
// //     //   studentsRef,
// //     //   where("name", "not-in", ["apple", "mango 2"])
// //     // );
// //     // const arrQ = query(
// //     //   studentsRef,
// //     //   where("practiceArr", "array-contains", "mango")
// //     // );
// //     // const arrQ = query(
// //     //   studentsRef,
// //     //   where("practiceArr", "array-contains-any", ["mango", "apple"])
// //     // );
// //     // getDocs(arrQ).then((snapShot) => {
// //     //   snapShot.forEach((doc) => {
// //     //     console.log(doc.id, "=>", doc.data());
// //     //   });
// //     // });
// //   } catch (err) {
// //     console.error(err.message || "error not found");
// //   }
// // };
// const decId = "vx2caRSv6WuJ9ziSDxDu";
// const delId = "a57yPtDDGEe4nZL5KBWF";

// export const addData = async () => {
//   try {
//     const studentsRef = collection(db, "user");
//     const payload = {
//       name: "practice",
//       age: "new-born",
//     };
//     await addDoc(studentsRef, payload);
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const updateData = async () => {
//   try {
//     const docRef = doc(db, "user", decId);
//     const payload = {
//       age: "medium",
//       nickName: "practiceDoc",
//     };
//     await updateDoc(docRef, payload);
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const deleteData = async (id) => {
//   try {
//     const docRef = doc(db, "user", id);
//     await deleteDoc(docRef);
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const display1Data = async () => {
//   try {
//     const docRef = doc(db, "user", decId);
//     await getDoc(docRef).then((docSnap) => {
//       if (docSnap.exists()) {
//         console.log(docSnap.data());
//       } else {
//         console.log("data not found");
//       }
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const displayAllData = async (id) => {
//   try {
//     let data = [];
//     const studentsRef = collection(db, "user");
//     await getDocs(studentsRef).then((snapshot) => {
//       snapshot.forEach((doc) => {
//         let dr = doc.data();
//         const payload = { ...dr, id: doc.id };
//         data.push(payload);
//         // console.log(doc.id, "=>", doc.data());
//       });
//     });
//     console.log(data, "data action");
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };
