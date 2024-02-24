import { Input } from "@nextui-org/react";

const NewCustomer = () => {
    const value = 1000;
  return (
    <div className="p-4 gap-6 flex flex-col">
        <label className="flex justify-center">ADD NEW CUSTOMER</label>
        
        <label className="ml-2">Starting Date</label>
        <Input type="date" />

        <Input type="number" label="Loan Remaining"/>

        <Input isDisabled type="number" label="Initial monthly EMI" value={value}/>
    </div>
  );
};

export default NewCustomer;
