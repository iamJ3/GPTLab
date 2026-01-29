import { useState } from "react";
import { Scissors, Sparkles } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveObj = () => {
  const [input, setInput] = useState("");
  const [object, setObject] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (object.split(" ").length > 1) {
        setLoading(false);
        return toast("Only one object name allowed");
      }

      const formData = new FormData();
      formData.append("image", input);
      formData.append("object", object);

      const { data } = await axios.post(
        "/api/ai/remove-image-object",
        formData,
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="h-full p-4 sm:p-6 flex items-start flex-col lg:flex-row gap-4 bg-black text-white">
      {/* Left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full lg:max-w-lg p-3 sm:p-4 bg-black rounded-lg border border-gray-800"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00CF79]" />
          <h1 className="text-lg sm:text-xl font-semibold">Object Removal</h1>
        </div>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-gray-300">Upload image</p>

        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 sm:p-3 px-3 sm:px-4 mt-2 outline-none text-xs sm:text-sm rounded-md bg-black border border-gray-700 text-white file:text-gray-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-medium"
          required
        />

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-gray-300">
          Describe object to remove
        </p>

        <input
          onChange={(e) => setObject(e.target.value)}
          value={object}
          type="text"
          className="w-full p-2 sm:p-3 px-3 sm:px-4 mt-2 outline-none text-xs sm:text-sm rounded-md bg-black border border-gray-700 text-white placeholder-gray-500"
          placeholder="e.g. watch"
          required
        />

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-[#00CF79] text-black px-4 py-2.5 sm:py-3 mt-4 sm:mt-6 text-xs sm:text-sm rounded-lg cursor-pointer hover:opacity-90"
        >
          {loading ? (
            <span className="w-3 h-3 sm:w-4 sm:h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Scissors className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
          Remove object
        </button>
      </form>

      {/* Right col */}
      <div className="w-full lg:max-w-lg p-3 sm:p-4 bg-black rounded-lg flex flex-col border border-gray-800 min-h-80 sm:min-h-96 max-h-[500px] sm:max-h-[600px]">
        <div className="flex items-center gap-2 sm:gap-3">
          <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-[#00CF79]" />
          <h1 className="text-lg sm:text-xl font-semibold">Processed image</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-xs sm:text-sm flex flex-col items-center gap-4 sm:gap-5 text-gray-500">
              <Scissors className="w-8 h-8 sm:w-9 sm:h-9" />
              <p className="text-center px-2">Upload an image and click "Remove object" to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-2 sm:mt-3 h-full overflow-y-auto">
            <img
              src={content}
              alt="result"
              className="w-full h-auto max-h-full rounded-md border border-gray-700 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveObj;
