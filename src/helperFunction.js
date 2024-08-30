// function to filter out 3 month old entries and calculating reward points for each transaction
export function calculateRewardPoints(customerData, NumberOfDays, rewardPointsAboveHundred, rewardPointsBetweenFiftyToHundred) {
 
    const filteredData = [] ;
        customerData.forEach(transaction=> {
        let currentMilliseconds =  new Date().getTime() ;
        let transactionMilliseconds = new Date(transaction.transactionDate).getTime() ;
        if ( (currentMilliseconds - transactionMilliseconds) < ( NumberOfDays *24* 60 * 60 * 1000)){
            let points = 0;
            let doublePointAmount = transaction.transactionAmount - 100;
            let singlePointAmount = 0 ;
    
      if (transaction.transactionAmount > 100) {
        singlePointAmount = 50 ;
      }
      else{
        singlePointAmount = transaction.transactionAmount - 50 ;
      }
      
      if (doublePointAmount > 0) {
        points += (doublePointAmount * rewardPointsAboveHundred);
      }    
      if (singlePointAmount > 0) {
        points += singlePointAmount * rewardPointsBetweenFiftyToHundred;      
      }
      const month = (new Date(transaction.transactionDate).getMonth()+ 1);
      
      filteredData.push({...transaction, points, month});
    }
        });
        return filteredData
    }
    
 export   function calculateRewardPointsByMonth(filteredData){
    
        let filteredArrayByMonth = []
                        filteredData.forEach(Transaction => {
                        let {customerID, month, points,transactionAmount} = Transaction; 
                        let flag = false ;
                            if (filteredArrayByMonth.length === 0 ){
                                filteredArrayByMonth.push(Transaction);
                            }
                            else{
                                filteredArrayByMonth.forEach((filteredTransaction)=>{
                                    if(filteredTransaction.month === month && filteredTransaction.customerID === customerID){
                                        
                                        let updatedpoints =  filteredTransaction.points + points ;
                                        let updatedTransactionAmount = filteredTransaction.transactionAmount +  transactionAmount ;
                                        filteredTransaction.points = updatedpoints ;
                                        filteredTransaction.transactionAmount = updatedTransactionAmount ;
                                        
                                    }
                                    else {
                                        flag= true;
                                        
                                    }
                                })
                            }
                            if (flag === true){
                                filteredArrayByMonth.push(Transaction);
                            }
                        })
        
                        
                        
                        
                        return filteredArrayByMonth;
    
    }
    
 export   function calculateTotalCustomerPoints(filteredArrayByMonth){
    
                        let customerpoints = {} ;
                        filteredArrayByMonth.forEach(dataObject => {
    
    
                           if (customerpoints[dataObject.customerName] === undefined){
                            customerpoints[dataObject.customerName] = dataObject.points ;
                           } 
                           else{
                            customerpoints[dataObject.customerName] = customerpoints[dataObject.customerName] + dataObject.points ;
                        }
    
                        });
    
                        let customerPointArray = [] ;
                        for(let key in customerpoints){
                            console.log("key", key);
                            let Totalobject = {Name:key,Points:customerpoints[key]};
                            customerPointArray.push(Totalobject);
    
                        }
    
        console.log("customerpoints",customerpoints);
        console.log("customerPointArray",customerPointArray);
        return customerPointArray ;
    
    }