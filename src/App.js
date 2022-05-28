import { BiTrash } from "react-icons/bi";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl font-bold p-5">
        {" "}
        <BiTrash className="inline-block text-red-200 align-top" /> Your
        Appointments
      </h1>
    </div>
  );
}

export default App;
