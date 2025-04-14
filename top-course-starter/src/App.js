import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState({});
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`API Error: ${res.status}`);
      
      const output = await res.json();
      if (!output || !output.data || typeof output.data !== "object") {
        throw new Error("Invalid API response");
      }
      
      setCourses(output.data);
    } catch (err) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
    </div>
  );
};

export default App;
