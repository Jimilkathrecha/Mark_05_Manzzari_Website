import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [mydata, setMydata] = useState([]);
  const [isError, setIsError] = useState("");


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMydata(res.data))
      .catch((error) => setIsError(error.message))
  }, []);

  return (
    <>
      <div className="">
        {mydata.map((post) => {
            const {id, title, body} = post;
          return (
            <div key={id} className="bs-pink text-center m-3 p-3">
              <h2 className="font-bold">{title.slice(0, 25)}</h2>
              <p>{body.slice(0, 150)}</p>
            </div>
          );
        })}
      </div>
      <p>{isError !== "" && {isError}}</p>
    </>
  );
};

export default Data;
