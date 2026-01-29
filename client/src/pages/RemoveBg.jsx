import { useState } from "react";
import { Eraser, Sparkles } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveBg = () => {
  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", input);

      const { data } = await axios.post(
        "/api/ai/remove-image-background",
        formData,
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      if (data.success) setContent(data.content);
      else toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-full p-4 sm:p-6 flex flex-col lg:flex-row gap-4 sm:gap-6 text-white bg-black overflow-auto">
      {/* Left column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full lg:max-w-lg p-4 sm:p-6 border border-gray-700 rounded-lg flex flex-col gap-3 sm:gap-4"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00CF79]" />
          <h1 className="text-lg sm:text-xl font-semibold">Background Removal</h1>
        </div>

        <label className="text-xs sm:text-sm font-medium mt-3 sm:mt-4">Upload image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setInput(e.target.files[0])}
          className="w-full file:text-gray-400 p-2 sm:p-3 px-3 sm:px-4 mt-2 text-xs sm:text-sm rounded-md bg-gray-900 border border-gray-700 text-white outline-none file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-medium"
          required
        />
        <p className="text-xs text-gray-400 font-light">
          Supports JPG, PNG, and other image formats
        </p>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 mt-3 sm:mt-4 px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg bg-[#00CF79] text-black font-medium"
        >
          {loading ? (
            <span className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-t-transparent rounded-full animate-spin" />
          ) : (
            <Eraser className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
          Remove Background
        </button>
      </form>

      {/* Right column */}
      <div className="w-full lg:max-w-lg p-4 sm:p-6 border border-gray-700 rounded-lg flex flex-col gap-3 sm:gap-4 min-h-80 sm:min-h-[24rem]">
        <div className="flex items-center gap-2 sm:gap-3">
          <Eraser className="w-4 h-4 sm:w-5 sm:h-5 text-[#00CF79]" />
          <h1 className="text-lg sm:text-xl font-semibold">Processed Image</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex flex-col justify-center items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm">
            <Eraser className="w-8 h-8 sm:w-10 sm:h-10" />
            <p className="text-center px-2">Upload an image and click "Remove Background" to get started</p>
          </div>
        ) : (
          <div className="mt-2 sm:mt-3 h-full overflow-y-auto">
            <img
              src={content}
              alt="processed"
              className="w-full h-auto max-h-full object-contain rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveBg;
