import { useState } from "react";
import { Image, Sparkles } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Generateimages = () => {
  const imageStyle = [
    "Realistic",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "Realistic style",
    "3D style",
    "Portrait style",
  ];

  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const prompt = `Generate an image of ${input} in the style ${selectedStyle}`;

      const { data } = await axios.post(
        "/api/ai/generate-image",
        { prompt, publish },
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
    <div className="h-full overflow-y-auto p-4 sm:p-6 flex items-start flex-col lg:flex-row gap-4 bg-black text-white">
      {/* Left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full lg:max-w-lg p-3 sm:p-4 bg-black rounded-lg border border-gray-800"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00CF79]" />
          <h1 className="text-lg sm:text-xl font-semibold">AI Image Generator</h1>
        </div>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-gray-300">
          Describe Your Image
        </p>

        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={4}
          className="w-full p-2 sm:p-3 px-3 sm:px-4 mt-2 outline-none text-xs sm:text-sm rounded-md bg-black border border-gray-700 text-white placeholder-gray-500"
          placeholder="Describe what you want to see in the image..."
          required
        />

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-gray-300">Style</p>

        <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3 flex-wrap">
          {imageStyle.map((item) => (
            <span
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-3 sm:px-4 py-1.5 sm:py-2 border rounded-full cursor-pointer ${
                selectedStyle === item
                  ? "bg-[#00CF79]/10 text-[#00CF79] border-[#00CF79]"
                  : "text-gray-400 border-gray-700"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="my-4 sm:my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />

            <div className="w-8 h-4 sm:w-9 sm:h-5 bg-gray-700 rounded-full peer-checked:bg-[#00CF79] transition"></div>

            <span className="absolute left-1 top-0.5 sm:top-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full transition peer-checked:translate-x-3 sm:peer-checked:translate-x-4"></span>
          </label>
          <p className="text-xs sm:text-sm text-gray-300">Make this image Public</p>
        </div>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-[#00CF79] text-black px-4 py-2.5 sm:py-3 mt-4 sm:mt-6 text-xs sm:text-sm rounded-lg cursor-pointer hover:opacity-90"
        >
          {loading ? (
            <span className="w-3 h-3 sm:w-4 sm:h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Image className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
          Generate Image
        </button>
      </form>

      {/* Right col */}
      <div className="w-full lg:max-w-lg p-3 sm:p-4 bg-black rounded-lg flex flex-col border border-gray-800 min-h-80 sm:min-h-96">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image className="w-4 h-4 sm:w-5 sm:h-5 text-[#00CF79]" />
          <h1 className="text-lg sm:text-xl font-semibold">Generated image</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-xs sm:text-sm flex flex-col items-center gap-4 sm:gap-5 text-gray-500">
              <Image className="w-8 h-8 sm:w-9 sm:h-9" />
              <p className="text-center px-2">Enter a topic and click "Generate image" to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-2 sm:mt-3 h-full overflow-y-auto">
            <img
              src={content}
              alt="image"
              className="w-full h-auto max-h-full rounded-lg border border-gray-800 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Generateimages;
