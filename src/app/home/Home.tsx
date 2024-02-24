import { Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const FeaturePresent = [
    { value: "Add new customer", url: "/newcustomer" },
    { value: "Dashboard", url: "/dashboard" },
    // {value: "Add all details",url: ""},
    { value: "Loan Calculation", url: "/loan" },
  ];

  const handleCardClick = (url: string) => {
    console.log("handleCardClick");
    if (url) {
        router.push(url); // Navigate to the specified URL
      }
  };

  return (
    <div className="p-4 h-screen justify-center flex items-center grid grid-cols-2 gap-4">
      {FeaturePresent.map((data) => (
        <div key={data.value} onClick={() => handleCardClick(data.url)}>
          <Card className="p-10 border border-gray-300">
            {data.value}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
