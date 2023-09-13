import Button from "./components/Button";

function Home() {
  return (
    <>
      <div className="text-center text-6xl font-bold my-20">
        <h1>Generation Thailand</h1>
        <p>React - Assessment</p>
      </div>
      <Button/>
      <div className="my-10 items-center justify-center text-center flex">
      <img src="https://cdn.pixabay.com/photo/2020/04/24/17/05/onepiece-5087720_640.jpg" alt="" />
      </div>
    </>
  );
}

export default Home;
