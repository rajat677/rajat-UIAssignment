import { render, screen } from '@testing-library/react';
import CustomerTotalTable from './CustomerTotalTable';


var mockData = [
    {
        uniqueID: 1,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "04-30-2024",
        transactionAmount: 150,
        month: 4,
        points: 150
    },
    {
        uniqueID: 2,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "07-29-2024",
        transactionAmount: 80,
        month: 7,
        points: 200
    },
] ;



test('Customer total tabel heading test ', () => {

    

    render(<CustomerTotalTable customerTotalData={mockData}/>);
    const headingElement = screen.getByText(/Total Rewards by Customer/i);
    expect(headingElement).toBeInTheDocument();

    
  });

  test('Customer tabel column heading test ', () => {

    render(<CustomerTotalTable customerTotalData={mockData}/>);
    const tableHeadingElement = screen.getAllByText(/Customer Name/i, { selector: 'th' });
    expect(tableHeadingElement[0]).toContainHTML("<th>Customer Name</th>");

    render(<CustomerTotalTable customerTotalData={mockData}/>);
    const tableHeadingElement2 = screen.getAllByText(/Rewards Earned/i, { selector: 'th' });
    expect(tableHeadingElement2[0]).toContainHTML("<th>Rewards Earned</th>");
  });