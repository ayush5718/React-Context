import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import axios from "axios";
export const productContext = createContext();
const Context = (props) => {
  const [data, setData] = useState([]);
  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <productContext.Provider value={{ data, user }}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;
