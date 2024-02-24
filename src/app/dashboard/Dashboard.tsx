import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    sno: "1",
    name: "Tony Reichert",
    startDate: "20/19/2000",
    role: "CEO",
    pendingLoan:"1000",
    totalLoad: "10000",
    status: "Active",
    sewaSulk: "250",
    endDate: "30/10/2000",
    terminateServiceCharge: "1000"
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
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
    key: "role",
    label: "ROLE",
  },
  {
    key: "startDate",
    label: "Start Date",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "pendingLoan",
    label: "Pending Loan amount"
  },
  {
    key: "totalLoad",
    label: "Total Loan amount"
  },
  {
    key: "sewaSulk",
    label: "Sewa Sulk amount"
  },
  {
    key: "endDate",
    label: "End date"
  },
  {
    key:"terminateServiceCharge",
    label: "Termination Service charge"
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
