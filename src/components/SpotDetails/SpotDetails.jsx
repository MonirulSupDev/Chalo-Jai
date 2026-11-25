import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaSun,
  FaClock,
  FaUsers,
  FaUserCheck,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { useLoaderData } from "react-router";

const SpotDetails = () => {
  const [isSaved, setIsSaved] = useState(false);

  const spot = useLoaderData();
  console.log(spot);
  const {
    imageUrl,
    spotName,
    countryName,
    location,
    averageCost,
    seasonality,
    travelTime,
    totalVisitors,
    userEmail,
    userName,
    description,
  } = spot;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          {/* TOP SECTION: Hero Image Banner */}
          <div className="relative h-80 sm:h-105 w-full overflow-hidden group">
            <img
              src={imageUrl}
              alt={spotName}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

            {/* Bottom-Left Title & Country Badge Overlaid on Image */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/90 backdrop-blur-sm text-white mb-3 shadow-sm">
                <HiSparkles className="w-3.5 h-3.5" />
                {countryName}
              </span>
              <h1 className="text-3xl sm:text-5xl tracking-tight drop-shadow-sm">
                {spotName}
              </h1>
            </div>
          </div>

          {/* BOTTOM SECTION: Information & Highlights */}
          <div className="p-6 sm:p-10">
            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 pb-8 border-b border-slate-100">
              {description}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-colors">
                <div className="p-3 rounded-xl bg-teal-100 dark:bg-gray-900 text-teal-700">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-300">
                    Location
                  </p>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-400">
                    {location}
                  </p>
                </div>
              </div>

              {/* Average Cost */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50  dark:bg-gray-900 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                <div className="p-3 rounded-xl bg-emerald-100  dark:bg-gray-900 text-emerald-700">
                  <FaDollarSign className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-300">
                    Average Cost
                  </p>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-400">
                    {averageCost}
                  </p>
                </div>
              </div>

              {/* Seasonality */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-colors">
                <div className="p-3 rounded-xl bg-amber-100  dark:bg-gray-900 text-amber-700">
                  <FaSun className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-300">
                    Best Season
                  </p>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-400">
                    {seasonality}
                  </p>
                </div>
              </div>

              {/* Travel Time */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50  dark:bg-gray-900 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                <div className="p-3 rounded-xl bg-blue-100  dark:bg-gray-900 text-blue-700">
                  <FaClock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-300">
                    Travel Time
                  </p>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-400">
                    {travelTime}
                  </p>
                </div>
              </div>

              {/* Total Visitors */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50  dark:bg-gray-900 border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-colors">
                <div className="p-3 rounded-xl bg-purple-100  dark:bg-gray-900 text-purple-700">
                  <FaUsers className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-300">
                    Visitors / Year
                  </p>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-400">
                    {totalVisitors}
                  </p>
                </div>
              </div>

              {/* Added By */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50  dark:bg-gray-900 border border-slate-100 hover:border-slate-300 transition-colors">
                <div className="p-3 rounded-xl bg-slate-200  dark:bg-gray-900 text-slate-700">
                  <FaUserCheck className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-300">
                    Added By
                  </p>
                  <p
                    className="text-sm font-bold text-slate-800 truncate dark:text-slate-400"
                    title={userName}
                  >
                    {userEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Call-to-Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Planning a trip to{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {spotName}
                </span>
                ? Save it to compare later.
              </div>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white shadow-lg transition-all transform active:scale-95 ${
                  isSaved
                    ? "bg-slate-800 hover:bg-slate-900 shadow-slate-800/20"
                    : "bg-linear-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 shadow-teal-600/30"
                }`}
              >
                {isSaved ? "✓ Saved in Your List" : "Save to My List"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
