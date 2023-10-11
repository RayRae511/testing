import React from 'react';
import { Link } from 'react-router-dom';

function ScholarStudentMS() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8 bg-white align-center">
      <div className="w-full sm:w-1/2 lg:w-1/3">

        <div className="w-full p-6 bg-blue-500 rounded">
          <h2 className="mb-4 text-lg font-semibold text-white">ABOUT</h2>
          <p className="text-white">
          "The Scholar" is a cutting-edge Student Management System designed to elevate the academic experience. Streamlining course enrollment, it offers a user-friendly interface and real-time updates, ensuring a seamless registration process. Empowering students to select and register for their desired courses effortlessly, it optimizes their educational journey. With robust features and intuitive navigation, "The Scholar" revolutionizes education management, providing students with unparalleled efficiency and convenience. Stay organized, informed, and in control of your academic path with "The Scholar" – your ultimate partner for academic success. 
          </p>
          <button className="justify-center px-4 py-2 mt-4 font-semibold text-blue-500 bg-white rounded hover:bg-black hover:text-blue-400 align-center h-9"><Link to={'/login'}>Log In</Link></button>
        </div>
      </div>
    </div>
  );
}

export default ScholarStudentMS;