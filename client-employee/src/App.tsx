import EmployeeFormPage from "./pages/EmployeeForm/EmployeeFormPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import HomePage from "./pages/Homepage/HomePage";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import { Employee } from "./services/employees";
import { useState } from "react";
import ToastNotification from "./components/ToastNotification/ToastNotification";

function App() {
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  const [employee, setEmployee] = useState<Employee | undefined>(undefined);
  const [message, setMessage] = useState<string | null>(null);
  const [variant, setVariant] = useState<string | null>(null);
  const [isClosed, setIsClosed] = useState(true);

  const dispatchToast = (toastMessage: string, toastVariant: string) => {
    setMessage(toastMessage);
    setVariant(toastVariant);
  };

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/EmployeeForm" element={<EmployeeFormPage employee={employee} setEmployee={setEmployee} setEmployees={setEmployees} dispatchToast={dispatchToast} />} />
          <Route path="/Employee/:id" element={<EmployeePage employee={employee}/>} />
          <Route path="/" element={<HomePage setEmployee={setEmployee} setEmployees={setEmployees} employee={employee} employees={employees} />} />
        </Routes>
      </BrowserRouter>
      {!isClosed && (
        <ToastNotification
          message={message}
          variant={variant}
          setIsClosed={setIsClosed}
          setMessage={setMessage}
          setVariant={setVariant}
        />
      )}
    </>
  );
}

export default App;
