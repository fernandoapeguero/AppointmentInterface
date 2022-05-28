import { BiHealth } from "react-icons/bi";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";
import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  const filteredAppointments = appointmentList.filter((item) => {
    console.log(query);
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    );
  });

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
      <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} />

      <ul className="divided-y divide-gray-200 ">
        {filteredAppointments.map((appointment) => (
          <AppointmentInfo
            appointment={appointment}
            key={appointment.id}
            onDeleteAppointment={(appointmentId) =>
              setAppointmentList(
                appointmentList.filter(
                  (appointment) => appointment.id !== appointmentId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
