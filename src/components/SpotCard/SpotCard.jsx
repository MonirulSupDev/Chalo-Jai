import { Link } from "react-router";

const SpotCard = ({ spot }) => {
  const {
    _id,
    imageUrl,
    spotName,
    countryName,
    location,
    averageCost,
    seasonality,
    description,
  } = spot;

  return (
    <div className="rounded-xl shadow-md dark:shadow-zinc-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Card Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={spotName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col grow text-left">
        <span className="text-xs font-semibold text-teal-600 dark:text-teal-500 uppercase tracking-wider mb-1">
          {countryName}
        </span>

        <h3 className="text-xl text-gray-900 dark:text-gray-100 mb-1">
          {spotName}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-200 mb-3 font-medium">
          Location: {location}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 grow">
          {description}
        </p>

        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-6 border-t border-t-teal-600 pt-4">
          <p>
            <span className="font-semibold">Average Cost:</span> {averageCost}
          </p>
          <p>
            <span className="font-semibold">Seasonality:</span> {seasonality}
          </p>
        </div>

        <Link
          to={`/spot-details/${_id}`}
          className="inline-block text-center bg-teal-600 dark:bg-teal-900 hover:bg-teal-700 dark:hover:bg-zinc-800 text-white dark:text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpotCard;
