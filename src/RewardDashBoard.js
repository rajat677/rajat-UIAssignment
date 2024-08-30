
import fetchCustomerData from "./data-source.js";
import {useState,useEffect} from "react" ;
import "./RewardDashBoard.css";
import { calculateRewardPoints, calculateRewardPointsByMonth, calculateTotalCustomerPoints } from "./helperFunction.js";
import CustomerTotalTable from "./CustomerTotalTable.js";
import CustomerMonthlyTable from "./CustomerMonthlyTable.js";

 function RewardDashBoard(){

// state to maintain monthly data
const [customerMonthlyData, setCustomerMonthlydata] = useState([]);

// state to maintain total data
const [customerTotalData, setCustomerTotalData] = useState([]);

useEffect(()=>{

    fetchCustomerData().then((data)=>{
        
        // function to calculate reward points as well as filtering out 3 month old data
        const updatedpointData = calculateRewardPoints(data, 90,2,1);

        // function to aggregate data according to months
        const updatedDataByMonth = calculateRewardPointsByMonth(updatedpointData);

        // setting up monthly aggregated data in state to pass to CustomerMonthlyTable component
        setCustomerMonthlydata(updatedDataByMonth);

        // calculating total reward point of customer
        const customerPointsArray = calculateTotalCustomerPoints(updatedDataByMonth);
        // setting up total aggregated reward point of  customer to pass to CustomerTotalTable
        setCustomerTotalData(customerPointsArray);
    }).catch((error)=>
        alert("error while fetching data please try again")
)

},[])


return (<>
       {/* component to display montly aggregated data for each customer */}
    <CustomerMonthlyTable customerMonthlyData={customerMonthlyData}></CustomerMonthlyTable>
    {/* component to display total aggregated data for each customer */}
  <CustomerTotalTable customerTotalData={customerTotalData} />
  </>
    )
}

export default RewardDashBoard;