import { useLoaderData } from "react-router";
import SpotCard from "../../components/SpotCard/SpotCard";

const AllTouristsSpot = () => {
  const spots = useLoaderData();
  return (
    <div className="py-14">
      <h2 className="text-4xl text-center mb-4">All Tourists Spot</h2>
      <p className="text-center text-base mb-10">
        Popular south-asian tourists spots
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
