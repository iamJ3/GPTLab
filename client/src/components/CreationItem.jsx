import { useState } from "react";
import Markdown from "react-markdown";
const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-black border border-gray-800 rounded-lg cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="text-white">{item.prompt}</h2>
          <p className="text-gray-400">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>

        <button className="bg-[#00CF79]/10 border border-[#00CF79] text-[#00CF79] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>

      {expanded && (
        <div>
          {item.type === "image" ? (
            <div>
              <img
                src={item.content}
                alt="image"
                className="mt-3 w-full max-w-md rounded-lg border border-gray-800"
              />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-gray-300">
              <div className="reset-tw">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
