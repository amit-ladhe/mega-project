import Cookies from "js-cookies";
import { useEffect, useState } from "react";
import Header from "../Header";
import DisplayallJobs from "../DisplayAllJobs";
import FilterSection from "../FilterSection";
import "./index.css";

const Jobs = () => {
  const [allvalues, setValues] = useState({
    alljobsList: [],
    showErrorMsg: false,
  });

  const token = Cookies.getItem("jwtToken");

  useEffect(() => {
    const fetchJobsData = async () => {
      const url = "https://apis.ccbp.in/jobs";

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, options);
      const fetchData = await response.json();
      //console.log(fetchData.jobs)// actual data

      if (response.ok === true) {
        setValues({
          ...allvalues,
          alljobsList: fetchData.jobs,
          showErrorMsg: false,
        });
      } else setValues({ ...allvalues, showErrorMsg: true });
    };

    fetchJobsData();
  }, []);

  return (
    <div className="jobs-cont">
      <Header />

      {allvalues.showErrorMsg ? (
        <h1> Its Not You, Its Us !!!</h1>
      ) : (
        <div className="jobs-section">
          <div className="filter-section">
            <FilterSection />
          </div>

          <div className="all-job-section">

            <input type="search" className="form-control w-50" />

            <ul className="w-100">
              {allvalues.alljobsList.map((each) => (
                <DisplayallJobs jobsItem={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
