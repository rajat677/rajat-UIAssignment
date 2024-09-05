import {calculateRewardPoints,calculateRewardPointsByMonth,calculateTotalCustomerPoints } from "./helperFunction.js"



var mockData = [
    {
        uniqueID: 1,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "04-30-2024",
        transactionAmount: 150,
    },
    
]



test('testing calculate reward point function  with old data', () => {

    var mockData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "04-30-2024",
            transactionAmount: 150,
        },
        
    ]
  

  const calculatedData = calculateRewardPoints(mockData, 90, 2, 1)
  expect(calculatedData).toStrictEqual([]);
});

test('testing calculate reward point function  with data with in 90 days range and less than 100', () => {

    var mockData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 90,
        },
        
    ]

    var expectedData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 90,
            points: 40,
            month: 7
        },
        
    ]
  

  const calculatedData = calculateRewardPoints(mockData, 90, 2, 1)
  expect(calculatedData).toStrictEqual(expectedData);
});


test('testing calculate reward point function  with data with in 90 days range and transaction greater than 100', () => {

    var mockData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 120,
        },
        
    ]

    var expectedData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 120,
            points: 90,
            month: 7
        },
        
    ]
  

  const calculatedData = calculateRewardPoints(mockData, 90, 2, 1)
  expect(calculatedData).toStrictEqual(expectedData);
});


test('testing calculateRewardPointsByMonth function  with data with in 90 days range and multiple transaction with in same month', () => {

    
    var mockData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 120,
            points: 90,
            month: 7
        },
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 70,
            points: 20,
            month: 7
        },
        
    ]

    var expectedData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 190,
            points: 110,
            month: 7
        },

    ]
  

  const calculatedData = calculateRewardPointsByMonth(mockData)
  expect(calculatedData).toStrictEqual(expectedData);
});


test('testing calculateTotalCustomerPoints function  with data with in 90 days range and transaction greater than 100', () => {

    
    var mockData = [
        {
            uniqueID: 1,
            customerID: 1,
            customerName: "rajat",
            transactionDate: "07-30-2024",
            transactionAmount: 120,
            points: 90,
            month: 7
        },
        {
            uniqueID: 2,
            customerID: 2,
            customerName: "priyanka",
            transactionDate: "07-30-2024",
            transactionAmount: 70,
            points: 20,
            month: 7
        },
        
    ]

    var expectedData = 
        [
        {
           Name: "rajat" ,
           Points : 90,
        },
        {
            Name: "priyanka",
            Points : 20
        }
        ]

    
  

  const calculatedData = calculateTotalCustomerPoints(mockData)
  expect(calculatedData).toStrictEqual(expectedData);
});