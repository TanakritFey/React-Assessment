import Button from "./Button";
import { useContext } from "react";
import { DataContext } from "../Context";



function HomeUser() {
  const {user} = useContext(DataContext)
  return (
    <div>
        <div className="text-center text-6xl font-bold my-20">
        <h1>Generation Thailand</h1>
        <p>Home - User Sector</p>
        </div>
        <Button/>
        {/* table */}
        <table className="mt-20 min-w divide-y divide-gray-300 dark:divide-gray-800 m-auto">
        <thead className="bg-gray-50 dark:bg-gray-800 border">
          <tr>
            <th className="w-[200px] border px-3 py-3 text-sm text-center font-blod  rtl:text-right text-gray-500 dark:text-gray-400">
              Name
            </th>
            <th className="w-[200px] border px-3 py-3 text-sm font-blod text-center rtl:text-center text-gray-500 dark:text-gray-400" >
              Last Name
            </th>
            <th className="w-[200px] border px-3 py-3 text-sm font-blod text-center rtl:text-center text-gray-500 dark:text-gray-400 ">
              Position
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
          </tr>
          ))}
          </tbody>
       </table>
    </div>
  )
}

export default HomeUser