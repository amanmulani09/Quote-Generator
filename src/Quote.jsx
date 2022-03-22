import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [data, setData] = useState();

  useEffect(() => {
    FeatchApi();
  });

  const FeatchApi = () => {
    axios.get(`https://api.adviceslip.com/advice`).then((Response) => {
      setData(Response.data.slip.advice);
    });
  };

  return (
    <div className="quote">
      <div className="quote-container">
        <h2 className="line">{data}</h2>
        <button className="generate" onClick={FeatchApi}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default Quote;
