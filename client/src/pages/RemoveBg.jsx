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
    <div className="h-full p-6 flex flex-wrap gap-6 text-white bg-black overflow-auto">
      {/* Left column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-6 border border-gray-700 rounded-lg flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-[#00CF79]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>

        <label className="text-sm font-medium mt-4">Upload image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setInput(e.target.files[0])}
          className="w-full file:text-gray-400 p-2 mt-2 text-sm  rounded-md bg-gray-900 border border-gray-700 text-white outline-none"
          required
        />
        <p className="text-xs text-gray-400 font-light">
          Supports JPG, PNG, and other image formats
        </p>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 mt-4 px-4 py-2 text-sm rounded-lg bg-[#00CF79] text-black font-medium"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" />
          ) : (
            <Eraser className="w-5 h-5" />
          )}
          Remove Background
        </button>
      </form>

      {/* Right column */}
      <div className="w-full max-w-lg p-6 border border-gray-700 rounded-lg flex flex-col gap-4 min-h-[24rem]">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#00CF79]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex flex-col justify-center items-center gap-4 text-gray-500 text-sm">
            <Eraser className="w-10 h-10" />
            <p>Upload an image and click "Remove Background" to get started</p>
          </div>
        ) : (
          <img
            src={content}
            alt="processed"
            className="mt-3 w-full h-full object-contain rounded"
          />
        )}
      </div>
    </div>
  );
};

export default RemoveBg;
