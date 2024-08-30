
import "./RewardDashBoard.css";


 function CustomerTotalTable({customerTotalData}){

return (

<>
  <h1> Total Rewards by Customer </h1>
  <table>
  <tr>
    <th>Customer Name</th>
    <th>Rewards Earned</th>
  </tr>

  {customerTotalData.map((object)=>
  (<tr key={object.Name}>
    <td>{object.Name}</td>
    <td>{object.Points}</td>
    
  </tr>)
  )}
  </table>

  </>
    )
}

export default CustomerTotalTable;