import React from 'react'
import { Edit, Sparkles } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";// 5 26

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const WriteArticel = () => {
  const articleLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  return (
    <div className="h-full p-6 flex items-start flex-wrap gap-4 bg-black text-white">
      {/* Left col */}
      <form className="w-full max-w-lg p-4 bg-black rounded-lg border border-gray-800">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00CF79]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>

        <p className="mt-6 text-sm font-medium text-gray-300">Article Topic</p>

        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md bg-black border border-gray-700 text-white placeholder-gray-500"
          placeholder="The future of artificial intelligence is..."
          required
        />

        <p className="mt-4 text-sm font-medium text-gray-300">Article Length</p>

        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedLength.text === item.text
                  ? "bg-[#00CF79]/10 text-[#00CF79] border-[#00CF79]"
                  : "text-gray-400 border-gray-700"
              }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>
        <br />

        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-[#00CF79] text-black px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90"
        >
          {loading ? (
            <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <Edit className="w-5" />
          )}
          Generate article
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-black rounded-lg flex flex-col border border-gray-800 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Edit className="w-5 h-5 text-[#00CF79]" />
          <h1 className="text-xl font-semibold">Generated article</h1>
        </div>

        {!content ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-500">
              <Edit className="w-9 h-9" />
              <p>Enter a topic and click “Generate article” to get started</p>
            </div>
          </div>
        ) : (
          <div className="mt-3 h-full text-sm text-gray-300">
            <div className="reset-tw">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WriteArticel;
