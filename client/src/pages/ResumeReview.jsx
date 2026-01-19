import { useState } from "react";
import { FileText, Sparkles } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ResumeReview = () => {
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
      formData.append("resume", input);

      const { data } = await axios.post("/api/ai/resume-review", formData, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

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
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        <label className="text-sm font-medium mt-4">Upload Resume</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setInput(e.target.files[0])}
          className="w-full file:text-gray-400 p-2 mt-2 text-sm rounded-md bg-gray-900 border border-gray-700 text-white outline-none"
          required
        />
        <p className="text-xs text-gray-400 font-light">
          Supports PDF resumes only
        </p>

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 mt-4 px-4 py-2 text-sm rounded-lg bg-[#00CF79] text-black font-medium"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" />
          ) : (
            <FileText className="w-5 h-5" />
          )}
          Review Resume
        </button>
      </form>

      {/* Right column */}
      <div className="w-full max-w-lg p-6 border border-gray-700 rounded-lg flex flex-col gap-4 min-h-[24rem]">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#00CF79]" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex flex-col justify-center items-center gap-4 text-gray-500 text-sm">
            <FileText className="w-10 h-10" />
            <p>Upload a resume and click "Review Resume" to get started</p>
          </div>
        ) : (
          <div className="mt-3 h-full overflow-auto text-sm text-gray-300">
            <Markdown>{content}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeReview;
