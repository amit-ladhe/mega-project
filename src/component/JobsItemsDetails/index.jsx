import { useParams } from "react-router-dom";
import "./index.css"

const DisplayjobsitemDetails=()=>{


    const {id}=useParams();

    return(
        <h1> display jobs in details  {id} </h1>
    )
}

export default DisplayjobsitemDetails;