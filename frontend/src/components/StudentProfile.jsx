import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/auth/student/${studentId}`);
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student profile:", error);
    }
  };

  if (!student) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Fees Due:</strong> ₹{student.feesDue}</p>
    </div>
  );
};

export default StudentProfile;
