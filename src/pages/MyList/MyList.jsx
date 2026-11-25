import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const MyList = () => {
  const [spots, setSpots] = useState([]);
  const [isLoggedIn] = useState(false); // Toggle based on your auth state
  const { user, API } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;
    user.getIdToken().then((token) => {
      fetch(`${API}/my-spots`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then(setSpots);
    });
  }, [user, API]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`${API}/all-tourists-spot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The Spot has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spot) => spot._id !== id);
              setSpots(remaining);
            }
          });
    });
  };

  return (
    <div className="min-h-screen px-4 py-12 font-sans">
      <div className="max-w-275 mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-[28px] text-[#0f172a] tracking-tight">
            My Tourist Spots
          </h1>
          <p className="text-[14px] text-[#64748b] mt-1">
            Manage the destinations you've added or saved in a simple table
            view.
          </p>
        </div>

        {/* Info Alert Banner */}
        {!isLoggedIn && (
          <div className="mb-6 px-4 py-3.5 rounded-xl border border-[#99f6e4] text-secondary text-[13.5px]">
            Please login to manage your personal list. Showing all spots for
            demo.
          </div>
        )}

        {/* Table Card Container */}
        <div className="rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-[#e2e8f0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="light:bg-[#f8fafc] dark:bg-zinc-800 border-b border-[#e2e8f0] light:text-[#475569] dark:text-zinc-500 text-[13px] font-semibold">
                  <th className="py-4 px-6">Spot</th>
                  <th className="py-4 px-6">Country</th>
                  <th className="py-4 px-6">Avg Cost</th>
                  <th className="py-4 px-6">Season</th>
                  <th className="py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0] text-[14px]">
                {spots.length > 0 ? (
                  spots.map((spot) => (
                    <tr
                      key={spot._id}
                      className="hover:bg-[#f8fafc]/80 transition-colors"
                    >
                      {/* Spot Name & Sub-location */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-[#0f172a] dark:text-gray-400">
                          {spot.spotName}
                        </div>
                        <div className="text-[13px] text-[#64748b] mt-0.5">
                          {spot.location}
                        </div>
                      </td>

                      {/* Country */}
                      <td className="py-4 px-6 text-[#334155]">
                        {spot.countryName}
                      </td>

                      {/* Average Cost */}
                      <td className="py-4 px-6 text-[#334155]">
                        ${spot.averageCost}
                      </td>

                      {/* Season */}
                      <td className="py-4 px-6 text-[#334155]">
                        {spot.seasonality}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2.5">
                          <Link
                            to={`/update-tourists-spot/${spot._id}`}
                            className="px-3.5 py-1.5 rounded-lg border border-primary text-[#0d943a] hover:bg-[#f0fdfa] font-semibold text-[13px] transition cursor-pointer"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => handleDelete(spot._id)}
                            type="button"
                            className="px-3.5 py-1.5 rounded-lg bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold text-[13px] transition cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="py-10 px-6 text-center text-[#64748b]"
                    >
                      No tourist spots found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
