import {Link} from 'react-router-dom'

function Button() {
  return (
    <div className="flex justify-around text-center text-3xl">
        <Link to='/homeuser' className="transform active:scale-95 bg-blue-500 hover:bg-blue-400 text-white px-16 py-6 rounded-lg font-bold tracking-widest ">Owner Home Selector</Link>
        <Link to='/admin' className="transform active:scale-95 bg-blue-500 hover:bg-blue-400 text-white px-16 py-6 rounded-lg font-bold tracking-widest ">Admin Home Sector</Link>
    </div>
  )
}

export default Button