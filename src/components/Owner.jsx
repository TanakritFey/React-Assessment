
import fey from '../assets/fey.png'

function Owner() {
  return (
    <div>
      <div className="text-center text-6xl font-bold my-10">
        <h1>Fey - Group M - 24</h1>
      </div>
      <div className="justify-center flex">
        <img className="max-w-[270px] max-h-[221px]" src={fey} alt="/" />
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2">Short Biography:</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint magnam ab aut assumenda inventore at prae.</p>
      </div>
    </div>
  );
}

export default Owner;
