import { BiHealth, BiTrash } from "react-icons/bi";
import AddAppointment from "./components/AddAppoinment";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";
import appointmentList from "./data.json";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl font-bold p-5">
        {" "}
        <BiHealth className="inline-block text-red-200 align-top" /> Your
        Appointments
      </h1>

      <AddAppointment />
      <Search />

      <ul className="divided-y divide-gray-200 ">
        {appointmentList.map((appointment) => (
          <AppointmentInfo appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
