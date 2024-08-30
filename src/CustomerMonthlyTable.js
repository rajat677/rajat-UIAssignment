
import "./RewardDashBoard.css";


 function CustomerMonthlyTable({customerMonthlyData}){

return (

<>
  <h1> Total Rewards by Month </h1>
  <table>
  <tr>
    <th>Customer Name</th>
    <th>Transaction Month</th>
    <th>transaction Amount</th>
    <th>Rewards Earned</th>
  </tr>

  {customerMonthlyData.map((customerData)=>
  (<tr key={customerData?.uniqueID}>
    <td>{customerData?.customerName}</td>
    <td>{customerData?.month}</td>
    <td>{customerData?.transactionAmount}</td>
    <td>{customerData?.points}</td>
  </tr>)
  )}
  </table>


  </>
    )
}

export default CustomerMonthlyTable;