import axios from "axios";
const url="http://localhost:5000";

export const addCustomer= async (ApplicantInfo)=>{
  return await axios.post (`${url}/customerInformation`, ApplicantInfo);
 
}
export const getCustomer= async ()=>{
    return await axios.get (`${url}/viewCustomer`);
}

axios.get();
axios.post();