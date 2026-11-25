import { useContext, useEffect, useState } from "react";
import HomeSwiper from "../../components/HomeSwiper/HomeSwiper";
import SpotCard from "../../components/SpotCard/SpotCard";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const [spots, setSpots] = useState([]);

  const { API } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${API}/all-tourists-spot`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [API]);

  return (
    <div>
      <HomeSwiper />
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight">
            Featured Tourists Spots
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-500">
            Handpicked destinations loved by travelers around the world.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.slice(0, 6).map((spot) => (
            <SpotCard key={spot._id} spot={spot} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
