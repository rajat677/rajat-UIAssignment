import dataSet from "./data-source";



var expectedData = [
    {
        uniqueID: 1,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "04-30-2024",
        transactionAmount: 150,
    },
    {
        uniqueID: 2,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "07-29-2024",
        transactionAmount: 80
    },
    {
        uniqueID: 3,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "07-20-2024",
        transactionAmount: 120
    },
    {
        uniqueID: 4,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "08-9-2024",
        transactionAmount: 30
    },
    {
        uniqueID: 6,
        customerID: 2,
        customerName: "priyanka",
        transactionDate: "06-30-2024",
        transactionAmount: 160
    },
    {
        uniqueID: 7,
        customerID: 2,
        customerName: "priyanka",
        transactionDate: "07-29-2024",
        transactionAmount: 70
    },
    {
        uniqueID: 8,
        customerID: 2,
        customerName: "priyanka",
        transactionDate: "08-9-2024",
        transactionAmount: 20
    },
    {
        uniqueID: 9,
        customerID: 3,
        customerName: "bhanu",
        transactionDate: "06-30-2024",
        transactionAmount: 180
    },
    {
        uniqueID: 10,
        customerID: 3,
        customerName: "bhanu",
        transactionDate: "07-29-2024",
        transactionAmount: 90
    },
    {
        uniqueID: 11,
        customerID: 3,
        customerName: "bhanu",
        transactionDate: "08-9-2024",
        transactionAmount: 40
    }
]




test('testing async data call', async() => {

  const fetchedData = await dataSet();
  expect(Array.isArray(fetchedData)).toEqual(true);
  expect(fetchedData.length).toEqual(10);
  expect(fetchedData).toStrictEqual(expectedData);

});

