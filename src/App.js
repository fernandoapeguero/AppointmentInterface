import { BiHealth } from "react-icons/bi";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";
import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then(setAppointmentList);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          <AppointmentInfo appointment={appointment} key={appointment.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
