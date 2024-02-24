import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function Loan() {
  const User = [
    {
      label: "Cat",
      value: "cat",
      description: "The second most popular pet in the world",
    },
    {
      label: "Dog",
      value: "dog",
      description: "The most popular pet in the world",
    },
    {
      label: "Elephant",
      value: "elephant",
      description: "The largest land animal",
    },
    { label: "Lion", value: "lion", description: "The king of the jungle" },
    { label: "Tiger", value: "tiger", description: "The largest cat species" },
    {
      label: "Giraffe",
      value: "giraffe",
      description: "The tallest land animal",
    },
    {
      label: "Dolphin",
      value: "dolphin",
      description: "A widely distributed and diverse group of aquatic mammals",
    },
    {
      label: "Penguin",
      value: "penguin",
      description: "A group of aquatic flightless birds",
    },
    {
      label: "Zebra",
      value: "zebra",
      description: "A several species of African equids",
    },
    {
      label: "Shark",
      value: "shark",
      description:
        "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
      label: "Whale",
      value: "whale",
      description: "Diverse group of fully aquatic placental marine mammals",
    },
    {
      label: "Otter",
      value: "otter",
      description: "A carnivorous mammal in the subfamily Lutrinae",
    },
    {
      label: "Crocodile",
      value: "crocodile",
      description: "A large semiaquatic reptile",
    },
  ];

  const [numLoanReturn, setNumLoanReturn] = useState(0);
  const [numLoanTaken, setNumLoanTaken] = useState(0);
  const [userGivenMonthlyEMI, setUserGivenMonthlyEMI] = useState(false);

  const LoanReturnForm = () => {
    return (
      <div className="mb-8">
        <p className="mb-2 font-bold">Loan Return Form</p>
        <div className="flex flex-col gap-4">
          <Select label="Select loan taken person" className="max-w-xs">
            {User.map((user) => (
              <SelectItem key={user.value} value={user.value}>
                {user.label}
              </SelectItem>
            ))}
          </Select>
          <Input type="number" label="Loan Return Amount" />
          <Input type="date" label="Loan Return Date" />
         
          <Button onClick={handleDeleteReturn} className="mr-2" color="default">
            Add
          </Button>
          <Button onClick={handleDeleteReturn} className="mr-2" color="danger">
            Delete
          </Button>
        </div>
      </div>
    );
  };

  const LoanTakenForm = () => {
    return (
      <div className="mb-8">
        <p className="mb-2 font-bold">Loan Taking Form</p>
        <div className="flex flex-col gap-4">
          <Select label="Select loan taken person" className="max-w-xs">
            {User.map((user) => (
              <SelectItem key={user.value} value={user.value}>
                {user.label}
              </SelectItem>
            ))}
          </Select>
          <Input type="number" label="Current Loan"/>


          <Input type="number" label="New Loan Amount" />
          <Input type="date" label="New Loan Date" />
          <Button onClick={handleDeleteReturn} className="mr-2" color="default">
            Add
          </Button>
          <Button onClick={handleDeleteTaken} className="mr-2" color="danger">
            Delete
          </Button>
        </div>
      </div>
    );
  };

  const MonthlyEMIUserForm = () => {
    return (
         <div className="mb-8">
        <p className="mb-2 font-bold">Instalment tracking Form</p>
        <Button onClick={handleAddEMI} className="mr-2" color="default">
          Update
        </Button>
        <Button onClick={handleAddEMI} className="mr-2" color="danger">
          Close
        </Button>
        {User.map((user: any) => {
          return (
            <div className="flex p-2" key={user.label}>
              <p className="flex items-center mr-2">{user.label}</p>
              <Select label="Select EMI" className="max-w-xs">
                <SelectItem value={"Given"}>{"Not Given"}</SelectItem>
                <SelectItem value={"Given"}>{"Given"}</SelectItem>
              </Select>
            </div>
          );
        })}
      </div>
    );
  };

  const handleDeleteReturn = () => {
    setNumLoanReturn(numLoanReturn - 1);
  };

  const handleDeleteTaken = () => {
    setNumLoanTaken(numLoanTaken - 1);
  };
  const handleLoanReturn = () => {
    setNumLoanReturn(numLoanReturn + 1);
  };

  const handleLoanTaken = () => {
    setNumLoanTaken(numLoanTaken + 1);
  };

  const handleAddEMI = () => {
    setUserGivenMonthlyEMI(!userGivenMonthlyEMI);
  };

  return (
    <div className="p-8 max-w-screen-md mx-auto">
      <div className="flex">
        <Button onClick={handleLoanReturn} className="m-8">
          Add Loan Returning User
        </Button>
        <Button onClick={handleLoanTaken} className="m-8">
          Add Loan Taking User
        </Button>

        <Button onClick={handleAddEMI} className="m-8">
          Monthly Instalment User
        </Button>
      </div>
      {[...Array(numLoanReturn)].map((_, index) => (
        <LoanReturnForm key={index} />
      ))}
      {[...Array(numLoanTaken)].map((_, index) => (
        <LoanTakenForm key={index} />
      ))}
      {userGivenMonthlyEMI && <MonthlyEMIUserForm />}
    </div>
  );
}
