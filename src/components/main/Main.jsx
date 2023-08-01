import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoodsList } from "..";

import { API_KEY, API_URL } from "../../config";
const Main = () => {
  const [isLoad, setIsLoad] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios.get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });

      setData(data.featured);
      setIsLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-100 h-100 ">
      {isLoad ? <h1>Nothing not found</h1> : <GoodsList data={data} />}
    </div>
  );
};

export default Main;
