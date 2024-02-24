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
  const [numLoanTaken, setNumLoanTaken] = useState(1);

  const LoanReturnForm = () => {
    return (
      <div className="mb-8">
        <p className="mb-2 font-bold">Loan Return</p>
        <div className="flex flex-col gap-4">
          <Select label="Select loan taken person" className="max-w-xs">
            {User.map((user) => (
              <SelectItem key={user.value} value={user.value}>
                {user.label}
              </SelectItem>
            ))}
          </Select>
          <Input type="number" label="Loan Return Amount" />
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
        <p className="mb-2 font-bold">Loan Taking</p>
        <div className="flex flex-col gap-4">
          <Select label="Select loan taken person" className="max-w-xs">
            {User.map((user) => (
              <SelectItem key={user.value} value={user.value}>
                {user.label}
              </SelectItem>
            ))}
          </Select>
          <Input type="number" label="Loan taking Amount" />
          <Button onClick={handleDeleteTaken} className="mr-2" color="danger">
            Delete
          </Button>
        </div>
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

  return (
    <div className="p-8 max-w-screen-md mx-auto">
      <div className="flex">
        <Button onClick={handleLoanReturn} className="m-8">
          Add More Loan Returning User
        </Button>
        <Button onClick={handleLoanTaken} className="m-8">
          Add More Loan Taking User
        </Button>
      </div>
      {[...Array(numLoanReturn)].map((_, index) => (
        <LoanReturnForm key={index} />
      ))}
      {[...Array(numLoanTaken)].map((_, index) => (
        <LoanTakenForm key={index} />
      ))}
    </div>
  );
}
