import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { generateResueme } from "../api/ResumeService";
import toast from "react-hot-toast";

export default function ResumeInputPage()
 {

  const [description, setDescription] = useState("");
  const [loding , setLoding]=useState(false);

  const handleGenerate = async () => {
    alert("AI is generating resume with description:\n\n" + description);
    //api service  call to get resume 
     try {
        
          setLoding(true);
          const responseData= await generateResueme(description)
          console.log(responseData);
          toast.success("ressume generate success fully",{
            duration:3000,
            position:"top-center",
          });
    }
     catch (error) 
     {
        console.log(error);
        toast.error("Error in resume generation !")
    }
    finally
    {
        setLoding(false);
        setDescription("");
    }
    
  };

  const handleClear = () => {
    setDescription("");

  };

  return (
    <div className="min-h-screen flex items-center justify-center  from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      <div className="card w-full max-w-2xl shadow-2xl bg-base-300 text-base-content p-8 rounded-2xl text-center">
        
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaRobot className="text-4xl text-primary" />
          <h1 className="text-3xl font-bold">AI Resume Generator</h1>
        </div>

        <p className="mb-6 text-gray-600">
          Describe yourself in detail (skills, education, experience, goals) and
          let our AI craft your professional resume.
        </p>

        {/* Text Area */}
        <textarea
          className="textarea textarea-bordered w-full h-48 text-lg"
          placeholder="Write about yourself here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleGenerate}
            className="btn btn-primary btn-lg shadow-lg"
            disabled={!description.trim()}
          >
            🚀 Generate Resume
          </button>
          <button
            onClick={handleClear}
            className="btn btn-outline btn-lg"
            disabled={!description.trim()}
          >
            ❌ Clear
          </button>
        </div>
      </div>
    </div>
  );
}
