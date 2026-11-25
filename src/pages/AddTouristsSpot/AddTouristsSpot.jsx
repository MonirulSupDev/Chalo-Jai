import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const AddTouristsSpot = () => {
  const { API } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitors = form.totalVisitors.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const description = form.description.value;

    const spot = {
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
    };

    fetch(`${API}/add-tourists-spot`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Incerted!",
            text: "You incerted the data successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
    form.reset();
  };

  return (
    <div className="min-h-screen px-4 py-12 font-sans flex items-center justify-center">
      <div className="w-full max-w-200 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] p-8 sm:p-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-[28px] tracking-tight">Add Tourists Spot</h1>
          <p className="text-[14px] text-[#64748b] mt-1">
            Share a beautiful destination with fellow travelers. Fill in the
            details below to add a new tourist spot.
          </p>
        </div>

        {/* Form Grid */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image URL (Full Width) */}
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-[13px] font-semibold mb-2"
            >
              Image URL *
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          {/* Row 1: Spot Name, Country Name, Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="spotName"
                className="block text-[13px] font-semibold mb-2"
              >
                Tourists Spot Name *
              </label>
              <input
                id="spotName"
                name="spotName"
                type="text"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="countryName"
                className="block text-[13px] font-semibold mb-2"
              >
                Country Name *
              </label>
              <input
                id="countryName"
                name="countryName"
                type="text"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-[13px] font-semibold mb-2"
              >
                Location *
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
          </div>

          {/* Row 2: Average Cost, Seasonality, Travel Time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="averageCost"
                className="block text-[13px] font-semibold mb-2"
              >
                Average Cost ($) *
              </label>
              <input
                id="averageCost"
                name="averageCost"
                type="number"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="seasonality"
                className="block text-[13px] font-semibold mb-2"
              >
                Seasonality *
              </label>
              <input
                id="seasonality"
                name="seasonality"
                type="text"
                required
                placeholder="e.g. Summer, Winter"
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="travelTime"
                className="block text-[13px] font-semibold mb-2"
              >
                Travel Time *
              </label>
              <input
                id="travelTime"
                name="travelTime"
                type="text"
                required
                placeholder="e.g. 7 days"
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
          </div>

          {/* Row 3: Total Visitors, User Email, User Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="totalVisitors"
                className="block text-[13px] font-semibold mb-2"
              >
                Total Visitors Per Year *
              </label>
              <input
                id="totalVisitors"
                name="totalVisitors"
                type="number"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="userEmail"
                className="block text-[13px] font-semibold mb-2"
              >
                User Email *
              </label>
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-[13px] font-semibold mb-2"
              >
                User Name *
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                required
                className="w-full h-11 px-3.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
          </div>

          {/* Short Description (Full Width Textarea) */}
          <div>
            <label
              htmlFor="description"
              className="block text-[13px] font-semibold mb-2"
            >
              Short Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#cbd5e1] text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 h-11 bg-primary dark:bg-zinc-700 hover:bg-green-900 dark:hover:bg-zinc-800 active:scale-[0.99] text-white font-semibold text-[14px] rounded-lg transition cursor-pointer"
            >
              Add Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
