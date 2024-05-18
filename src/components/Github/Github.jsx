import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/akashmondal2000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data)
      }
        
    );
  }, []);
  return (
    <div className="text-center bg-red-600 text-white font-bold">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="github image" className="w-56 text-center p-7"/>
    </div>
  );
};

export default Github;
