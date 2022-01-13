
import { getCustomer } from "../Service/api";
import { useEffect, useState } from "react";
const ViewCustomer=()=>{
   
    const [ applicantData, setApplicantData ] = useState([]);

    useEffect(() => {
      getApplicatsDetails();
    },[]);
  
    const getApplicatsDetails = async () => {
      const result = await getCustomer();
      setApplicantData(result.data);
    }
return(
<div>
<table class="table table-striped table-hover">
<thead>
  <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Gmail</th>
    <th scope="col">Password</th>
  </tr>
</thead>
<tbody>
{applicantData.map(details => (
            <tr>
              <td>{details.FirstName}</td>
              <td>{details.LastName}</td>
              <td>{details.Email}</td>
              <td>{details.Password}</td>
            </tr>
          ))}
</tbody>

</table>
</div>
);
}
export default ViewCustomer; 