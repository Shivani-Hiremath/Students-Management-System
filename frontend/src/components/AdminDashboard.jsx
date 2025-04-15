import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await fetch("http://localhost:5000/batches/all");
      const data = await response.json();
      setBatches(data);
    } catch (error) {
      console.error("Error fetching batches:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/batches/${id}`, { method: "DELETE" });
      fetchBatches();
    } catch (error) {
      console.error("Error deleting batch:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => navigate("/add-batch")}>Add New Batch</button>

      <h2>Existing Batches</h2>
      {batches.length > 0 ? (
        <ul>
          {batches.map((batch) => (
            <li key={batch._id} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => navigate(`/batch/${batch.batchId}`)}
                style={{
                  background: "#007bff",
                  color: "#fff",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                {batch.batchName} - {batch.batchId} - ₹{batch.batchFee}
              </button>
              <button
                onClick={() => handleDelete(batch._id)}
                style={{
                  background: "#ff4d4d",
                  color: "white",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No batches found.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
