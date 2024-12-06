

// import React, { useState } from "react";
// import { ArrowDownTrayIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
// import { Toaster, toast } from 'react-hot-toast';

// function App() {
//   const [url, setUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleScrape = async () => {
//     if (!url) {
//       toast.error("Please enter a URL to scrape");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // const response = await fetch("http://localhost:3000/scrape", {
//         const response = await fetch("https://webscraper-a82f.onrender.com/scrape", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ url }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to scrape website");
//       }

//       const blob = await response.blob();
//       const downloadUrl = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = downloadUrl;
//       link.download = `${url.replace(/https?:\/\//, "").split("/")[0]}.zip`;
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(downloadUrl);

//       toast.success("Download started successfully!");
//     } catch (error) {
//       toast.error(`Error: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
//         <div className="flex items-center justify-center mb-6">
//           <GlobeAltIcon className="h-12 w-12 text-indigo-600" />
//           <h1 className="text-3xl font-bold text-gray-800 ml-2">Web Scraper</h1>
//         </div>
//         <div className="space-y-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Enter URL to scrape"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
//             />
//           </div>
//           <button
//             onClick={handleScrape}
//             disabled={isLoading}
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 ease-in-out flex items-center justify-center"
//           >
//             {isLoading ? (
//               <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//             ) : (
//               <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
//             )}
//             {isLoading ? 'Scraping...' : 'Scrape Website'}
//           </button>
//         </div>
//       </div>
//       <Toaster position="bottom-center" />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { ArrowDownTrayIcon, CodeBracketIcon, } from "@heroicons/react/24/outline";
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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
            #1 Web Scraping Tool
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="inline-block">HTML CSS JS</span>{' '}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 inline-block text-yellow-400 mx-2 -mt-2">
              <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
            </svg>

            {/* <LightningBoltIcon className="w-12 h-12 inline-block text-yellow-400 mx-2 -mt-2" />{' '} */}
            <span className="text-blue-600 inline-block">Web Scraper</span>
          </h1>
          <div className="flex items-center justify-center text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
            <span>Effortlessly with</span>{' '}
            <CodeBracketIcon className="w-8 h-8 mx-2 text-gray-600" />{' '}
            <span className="text-blue-600">ScraperTool</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform extracts HTML, CSS, and JavaScript content faster than ever. Explore and download
            website source code with ease.
          </p>
        </div>

        {/* Scraping Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-6 transform transition-all hover:scale-105">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter website URL to scrape..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <button
                onClick={handleScrape}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out flex items-center justify-center font-medium"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                )}
                {isLoading ? 'Scraping...' : 'Start Scraping'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

export default App;

