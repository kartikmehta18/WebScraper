
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [url, setUrl] = useState(""); // State to hold the user input
//   const [responseMessage, setResponseMessage] = useState(""); // State to hold messages

//   const handleScrape = async () => {
//     if (!url) {
//       alert("Please enter a URL to scrape");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/scrape", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ url }), // Sending the URL as a POST body
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to scrape website");
//       }

//       // Handle the binary ZIP response
//       const blob = await response.blob();
//       const downloadUrl = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = downloadUrl;
//       link.download = `${url.replace(/https?:\/\//, "").split("/")[0]}.zip`; // Generate a filename
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(downloadUrl);

//       setResponseMessage("Download started successfully!");
//     } catch (error) {
//       setResponseMessage(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Web Scraper</h1>
//       <div className="scraper-form">
//         <input
//           type="text"
//           placeholder="Enter URL to scrape"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)} // Update the URL state
//           className="url-input"
//         />
//         <button onClick={handleScrape} className="scrape-button">
//           Scrape Website
//         </button>
//       </div>
//       {responseMessage && <p className="response-message">{responseMessage}</p>}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { ArrowDownTrayIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleScrape = async () => {
    if (!url) {
      toast.error("Please enter a URL to scrape");
      return;
    }

    setIsLoading(true);
    try {
      // const response = await fetch("http://localhost:3000/scrape", {
        const response = await fetch("https://webscraper-a82f.onrender.com/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to scrape website");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${url.replace(/https?:\/\//, "").split("/")[0]}.zip`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);

      toast.success("Download started successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <GlobeAltIcon className="h-12 w-12 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800 ml-2">Web Scraper</h1>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter URL to scrape"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            />
          </div>
          <button
            onClick={handleScrape}
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 ease-in-out flex items-center justify-center"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            )}
            {isLoading ? 'Scraping...' : 'Scrape Website'}
          </button>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;

