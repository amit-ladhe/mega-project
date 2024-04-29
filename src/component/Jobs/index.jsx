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
    empType:[],
    minPackage:"",
    searchInput:""
  });

  const token = Cookies.getItem("jwtToken");

  useEffect(() => {

        console.log(allvalues.empType)

    const fetchJobsData = async () => {
      const url = `https://apis.ccbp.in/jobs?employment_type=${allvalues.empType}&minimum_package=${allvalues.minPackage}&search=${allvalues.searchInput}`;

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
  }, [allvalues.searchInput,allvalues.empType]);

  const onChangeSearchInput=(event)=>{
    // setValues({...allvalues, searchInput: event.target.value})
       // console.log(event.key)
  
       if (event.key==="Enter") {
         setValues({...allvalues, searchInput: event.target.value})
       }
  
     }

     const onChangeEmpType =(value, isChaked)=>{
      //  console.log(value)

      if (isChaked===true) {
        setValues({...allvalues, empType:[...allvalues.empType, value]})//--->[1]---->1,value---->[1,value]
      }
      else

      setValues({...allvalues, empType:allvalues.empType.filter(each=>each!==value)})

     }
    
   

  return (
    <div className="jobs-cont">
      <Header />

      {allvalues.showErrorMsg ? (
        <h1> Its Not You, Its Us !!!</h1>
      ) : (
        <div className="jobs-section">
          <div className="filter-section">
            <FilterSection onChangeEmpType={onChangeEmpType} />
          </div>

          <div className="all-job-section">

            <input onKeyDown={onChangeSearchInput} type="search" className="form-control w-50" />

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
