import Button from "./Button";
import { useState, useContext } from "react";
import { DataContext } from "../Context";


function Admin() {
  const {user,deleteData,createData} = useContext(DataContext);

/*   const [id,setId] = useState(uuidv4())
 */const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

 /*  useEffect(() => {
    setId(uuidv4());
  }, []); */



  return (
    <div>
      <div className="text-center text-6xl font-bold my-20">
        <h1>Generation Thailand</h1>
        <p>Admin - User Sector</p>
      </div>
      <Button />

      {/* Input */}
      <h1 className="text-center mt-10 text-3xl font-bold">Create User Here</h1>
      <div className="text-center flex justify-center items-center gap-6 mt-5">
        <div className="border">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="border">
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="border">
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div>
          <button
            className="rounded-md bg-green-500 p-1 "
            type="submit"
            onClick={()=> createData(name, lastname, position)}
          >
            Save
          </button>
        </div>
      </div>

      <table className="mt-20 min-w divide-y divide-gray-300 dark:divide-gray-800 m-auto">
        <thead className="bg-gray-50 dark:bg-gray-800 border">
          <tr>
            <th className="w-[200px] border px-3 py-3 text-sm text-center font-blod  rtl:text-right text-gray-500 dark:text-gray-400">
              Name
            </th>
            <th className="w-[200px] border px-3 py-3 text-sm font-blod text-center rtl:text-center text-gray-500 dark:text-gray-400">
              Last Name
            </th>
            <th className="w-[200px] border px-3 py-3 text-sm font-blod text-center rtl:text-center text-gray-500 dark:text-gray-400 ">
              Position
            </th>
            <th className="w-[200px] border px-3 py-3 text-sm font-blod text-center rtl:text-center text-gray-500 dark:text-gray-400 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {user.map((item,index)=>(
            <tr key={index}>
            <td className="px-4 py-4 text-sm border text-gray-500 dark:text-gray-300 text-center ">
              {item.name}
            </td>
            <td className="px-4 py-4 text-sm border text-gray-500 dark:text-gray-300 text-center ">
              {item.lastname}
            </td>
            <td className="px-4 py-4 text-sm border text-gray-500 dark:text-gray-300 text-center ">
              {item.position}
            </td>
            <td className="px-4 py-4 text-sm border text-gray-500 dark:text-gray-300 text-center "> <button onClick={()=>deleteData(item.id)}>Delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
