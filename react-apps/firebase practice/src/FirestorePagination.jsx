import { useState, useEffect } from "react";
import { fetchInitialData, fetchNextPage } from "./action";

const PAGE_SIZE = 4;

const FirestorePagination = () => {
  const [data, setData] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);

  useEffect(() => {
    const unsubscribe = fetchInitialData(setData, setLastDoc, PAGE_SIZE);
    return () => unsubscribe();
  }, []);

  const loadMore = () => {
    fetchNextPage(setData, setLastDoc, lastDoc, PAGE_SIZE);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={loadMore} disabled={!lastDoc}>
        Load More
      </button>
    </div>
  );
};

export default FirestorePagination;
