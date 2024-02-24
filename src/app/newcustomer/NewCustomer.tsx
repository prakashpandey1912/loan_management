import { Input,Button } from "@nextui-org/react";

const NewCustomer = () => {

  return (
    <div className="p-4 gap-6 flex flex-col">
        <label className="flex justify-center">ADD NEW CUSTOMER</label>
        
        <label className="ml-2">Starting Date</label>
        <Input type="date" />

        <Input type="number" label="Initial Adjustment Amount"/>

        <Input type="number" label="Initial Service charge(Fine)"/>
        
        {/* <Input type="number" label="Loan Remaining"/> */}

        <Input isDisabled type="number" label="Initial monthly EMI"/>

        <Button type="submit">
            ADD
        </Button>
    </div>
  );
};

export default NewCustomer;
