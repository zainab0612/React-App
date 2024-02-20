import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Service, Contact, Login, Signup, Page404 } from "./Pages";
import "./index.css";

function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      {{ user } ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/service/*" element={<Service />} />
          <Route path="*" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/home/" element={<Home />} />
          {/* <Route path="/login/*" element={<Login />} /> */}
          {/* <Route path="/signup/*" element={<Signup />} /> */}
          <Route path="/about/*" element={<About />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/service/*" element={<Service />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      )}
    </>
  );
}

export default App;
