import { render, screen } from '@testing-library/react';
import CustomerMonthlyTable from './CustomerMonthlyTable';


var mockData = [
    {
        uniqueID: 1,
        customerID: 1,
        customerName: "rajat",
        transactionDate: "06-30-2024",
        transactionAmount: 150,
    },
    {
        uniqueID: 2,
        customerID: 1,
        customerName: "priyanka",
        transactionDate: "08-29-2024",
        transactionAmount: 170,
    },
] ;


test('Customer total tabel heading test ', () => {

    
    render(<CustomerMonthlyTable customerMonthlyData={mockData}/>);
    const headingElement = screen.getByText(/Total Rewards by Month/i);
    expect(headingElement).toBeInTheDocument();
  });


  test('Customer tabel column heading test ', () => {

    render(<CustomerMonthlyTable customerMonthlyData={mockData}/>);
    const tableHeadingElement = screen.getAllByText(/Customer Name/i, { selector: 'th' });
    expect(tableHeadingElement[0]).toContainHTML("<th>Customer Name</th>");

    render(<CustomerMonthlyTable customerMonthlyData={mockData}/>);
    const tableHeadingElement2 = screen.getAllByText(/Transaction Month/i, { selector: 'th' });
    expect(tableHeadingElement2[0]).toContainHTML("<th>Transaction Month</th>");

    render(<CustomerMonthlyTable customerMonthlyData={mockData}/>);
    const tableHeadingElement3 = screen.getAllByText(/transaction Amount/i, { selector: 'th' });
    expect(tableHeadingElement3[0]).toContainHTML("<th>transaction Amount</th>");

    render(<CustomerMonthlyTable customerMonthlyData={mockData}/>);
    const tableHeadingElement4 = screen.getAllByText(/Rewards Earned/i, { selector: 'th' });
    expect(tableHeadingElement4[0]).toContainHTML("<th>Rewards Earned</th>");
  });