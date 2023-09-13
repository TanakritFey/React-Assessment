import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext({});

function Context({ children }) {

  const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
    },
  ]


  const [user, setUser] = useState(mockEmployees);
  const [reload,setReload] = useState(false);
  

  // get data ออกมา เก็บลงใน user
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setUser((prevdata) => {
        return [...response.data, ...prevdata];
      });
    }
    getData();
  }, [reload]);
  console.log(user);

  const createData = async (name, lastname, position) => {
    const requestData = {
      id:uuidv4(),
      name: name,
      lastname: lastname,
      position: position,
    };
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );
    if (response.status === 200) {
      setReload(!reload)
    }
  };


  // Delete Data
  const deleteData = async (id) => {
    console.log(id);
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );
    if(response.status === 200 && response.data){
      setReload(!reload)
    }
  };
  

  return <DataContext.Provider value={{user,createData,deleteData}}>
    {children}
</DataContext.Provider>;
}

export default Context;
