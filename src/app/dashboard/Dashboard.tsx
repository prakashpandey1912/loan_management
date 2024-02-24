import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    sno: "1",
    name: "Deepak Pandey",
    monthlyEmi: "1000",
    totalLoan: "100000",
    sewaSulk: "250",
    loanGiven: "10000",
    interest: "1000",
    delayFine: "500",
    pendingLoan: "90000",
    startDate: "30/10/2000",
    endDate: "30/10/2000",
    terminateServiceCharge: "1000"
  },
  {
    key: "2",
    sno: "2",
    name: "Prakash Pandey",
    monthlyEmi: "1000",
    totalLoan: "200000",
    sewaSulk: "250",
    loanGiven: "100000",
    interest: "10000",
    delayFine: "500",
    pendingLoan: "100000",
    startDate: "30/10/2000",
    endDate: "30/10/2000",
    terminateServiceCharge: "1000"
  },
  {
    key: "3",
    sno: "3",
    name: "Narayan Pandey",
    monthlyEmi: "1000",
    totalLoan: "50000",
    sewaSulk: "250",
    loanGiven: "10000",
    interest: "1000",
    delayFine: "500",
    pendingLoan: "40000",
    startDate: "30/10/2000",
    endDate: "30/10/2000",
    terminateServiceCharge: "1000"
  },
  {
    key: "4",
    sno: "4",
    name: "Balaba",
    monthlyEmi: "1000",
    totalLoan: "50000",
    sewaSulk: "250",
    loanGiven: "10000",
    interest: "1000",
    delayFine: "500",
    pendingLoan: "40000",
    startDate: "30/10/2000",
    endDate: "30/10/2000",
    terminateServiceCharge: "1000"
  },
];

const columns = [
  {
    key: "sno",
    label: "S.no",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "monthlyEmi",
    label: "Monthly Emi",
  },
  {
    key: "totalLoan",
    label: "Total Loan amount"
  },
  {
    key: "sewaSulk",
    label: "Sewa Sulk amount"
  },
  {
    key: "loanGiven",
    label: "Monthly Loan Received",
  },
  {
    key: "interest",
    label: "Interest",
  },
  {
    key: "pendingLoan",
    label: "Pending Loan amount"
  },
  {
    key: "delayFine",
    label: "Fine",
  },
  {
    key: "startDate",
    label: "Start Date",
  },
  {
    key: "endDate",
    label: "End date"
  }
];

export default function App() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
