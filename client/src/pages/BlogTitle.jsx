import { useState } from "react";
import { Hash, Sparkles } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import Markdown from "react-markdown";
import { useAuth } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const BlogTitle = () => {
  const blogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  const [selectedCategory, setSelectedCategory] = useState("General");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      const prompt = `Create 5 engaging and SEO-friendly blog titles for the keyword "${input}" in the ${selectedCategory} category. Make them catchy, informative, and suitable for a blog post.`;

      const { data } = await axios.post(
        "/api/ai/generate-blog-title",
        { prompt },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      console.log(data.message);

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
          <h1 className="text-lg sm:text-xl font-semibold">AI Title Generator</h1>
        </div>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium text-gray-300">Keyword</p>

        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 sm:p-3 px-3 sm:px-4 mt-2 outline-none text-xs sm:text-sm rounded-md bg-black border border-gray-700 text-white placeholder-gray-500"
          placeholder=" mars is a really stupid..."
          required
        />

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-gray-300">Category</p>

        <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3 flex-wrap">
          {blogCategories.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-3 sm:px-4 py-1.5 sm:py-2 border rounded-full cursor-pointer ${
                selectedCategory === item
                  ? "bg-[#00CF79]/10 text-[#00CF79] border-[#00CF79]"
                  : "text-gray-400 border-gray-700"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <br />

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-[#00CF79] text-black px-4 py-2.5 sm:py-3 mt-4 sm:mt-6 text-xs sm:text-sm rounded-lg cursor-pointer hover:opacity-90"
        >
          {loading ? (
            <span className="w-3 h-3 sm:w-4 sm:h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Hash className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
          Generate title
        </button>
      </form>

      {/* Right col */}
      <div className="w-full lg:max-w-lg p-3 sm:p-4 bg-black rounded-lg flex flex-col border border-gray-800 min-h-80 sm:min-h-96">
        <div className="flex items-center gap-2 sm:gap-3">
          <Hash className="w-4 h-4 sm:w-5 sm:h-5 text-[#00CF79]" />
          <h1 className="text-lg sm:text-xl font-semibold">Generated titles</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-xs sm:text-sm flex flex-col items-center gap-4 sm:gap-5 text-gray-500">
              <Hash className="w-8 h-8 sm:w-9 sm:h-9" />
              <p className="text-center px-2">Enter a topic and click "Generate title" to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-2 sm:mt-3 h-full overflow-y-auto text-xs sm:text-sm text-gray-300">
            <div className="reset-tw">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTitle;
