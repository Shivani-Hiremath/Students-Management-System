import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TestPage= () => {
  const { testId } = useParams();
  const [test, setTest] = useState(null);

  useEffect(() => {
    fetchTest();
  }, []);

  const fetchTest = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tests/test/${testId}`);
      setTest(response.data);
    } catch (error) {
      console.error("Error fetching test page :", error);
    }
  };

  if (!test) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
      <p><strong> Test Name:</strong> {test.testName}</p>
    </div>
  );
};

export default TestPage;
