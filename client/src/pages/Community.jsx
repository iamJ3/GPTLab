import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();

  const fetchCreations = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/user/get-published-creations", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) setCreations(data.creations);
      else toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  const imageLikeToggle = async (id) => {
    try {
      const { data } = await axios.post(
        "/api/user/toggle-like-creation",
        { id },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );

      if (data.success) {
        toast.success(data.message);
        await fetchCreations();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (user) fetchCreations();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full bg-black">
        <span className="w-10 h-10 rounded-full border-4 border-t-transparent border-[#00CF79] animate-spin"></span>
      </div>
    );
  }

  return (
    <div className="h-full p-6 flex flex-wrap gap-6 bg-black text-white overflow-auto">
      {creations.length === 0 ? (
        <div className="flex-1 flex flex-col justify-center items-center gap-4 text-gray-500 text-sm w-full">
          <p>No creations yet. Publish something to see it here!</p>
        </div>
      ) : (
        creations.map((creation, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[48%] lg:w-[31%] rounded-lg overflow-hidden group"
          >
            <img
              src={creation.content}
              alt="creation"
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-sm text-white mb-2">{creation.prompt}</p>
              <div className="flex items-center gap-2">
                <p>{creation.likes.length}</p>
                <Heart
                  onClick={() => imageLikeToggle(creation.id)}
                  className={`w-5 h-5 cursor-pointer transition-transform duration-200 hover:scale-110 ${
                    creation.likes.includes(user.id)
                      ? "fill-red-500 text-red-500"
                      : "text-[#00CF79]"
                  }`}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Community;
