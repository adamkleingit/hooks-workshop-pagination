import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { fetchData } from "./utils";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(function fetchCurrentPage() {
    fetchData().then(setData);
  }, [currentPage]);

  const handlePageChange = e => {
    setCurrentPage(Number(e.target.value));
  };
  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Job</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.jobTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={currentPage === 1} onClick={prevPage}>
          prev
        </button>
        <input
          type="number"
          min="1"
          max="10"
          value={currentPage}
          onChange={handlePageChange}
        />
        <button disabled={currentPage === 10} onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
