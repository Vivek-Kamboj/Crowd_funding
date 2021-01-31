import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Pagination from "./pagination";
import Loader from "./loader";
import { getAllQueries, deleteQuery } from "../services/query";
import { paginate } from "../utills/paginate";
import styles from "./styles/dashboard.module.css";

const Query = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function getData() {
      const { data, err } = await getAllQueries();
      if (err === undefined) {
        setData(data);
        setLoading(false);
      } else {
        if (err.response && err.response.data) {
          toast.error(err.response.data.message);
        } else toast.error("Something went wrong");
        console.log("Error", err);
      }
    }
    getData();
    return null;
  }, []);

  if (!data || data.length === 0) {
    return loading ? <Loader /> : null;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const pageSize = 5;

  const showdata = paginate(data, currentPage, pageSize);
  const handleDeleteBtn = async (id) => {
    let x = [...data];
    let newData = data.filter((d) => d._id !== id);
    setData(newData);
    let res = await deleteQuery(id);
    if (!res) setData(x);
  };

  return (
    <React.Fragment>
      <h2 className={`${styles.text}`}>Messages</h2>
      {loading && <Loader />}
      <ul className="list-group">
        {showdata.map((d) => (
          <li className="list-group-item" key={d._id}>
            <div className="row">
              <div
                className="col-8 text-left"
                style={{ wordBreak: "keep-all" }}
              >
                <b>Email:</b>
                <br />
                {d.email}
              </div>
              <div className="col-4 text-right">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteBtn(d._id)}
                >
                  Delete
                </button>
              </div>

              <div className=" col-12 " style={{ textAlign: "justify" }}>
                <br />
                <b>Message:</b>
                <br />
                {d.message}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        itemsCount={data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

export default Query;
