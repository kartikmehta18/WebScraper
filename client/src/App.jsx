


import React, { useState } from "react";
import { ArrowDownTrayIcon, CodeBracketIcon, } from "@heroicons/react/24/outline";
import { Toaster, toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function App() {

  const sampleLink = "https://charitfix.vercel.app/theme/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sampleLink).then(() => {
      alert("Sample link copied to clipboard!");
    });
  };





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
    <>
      <div className="min-h-screen bg-black relative">
        <footer className="bg-black text-white py-6 relative z-20 ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm mb-4">
              Made with <span className="text-red-500">❤️</span> by Kartik
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/karrtikmehta.png"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 cursor-pointer"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              <a
                href="https://github.com/kartikmehta18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kartik-mehta-6729b0255/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a
                href="https://x.com/Kartikmehta_png"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
            </div>
          </div>
        </footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10 -mt-10">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
              #1 Web Scraping Tool
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="inline-block text-white ">HTML CSS JS</span>{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-16 inline-block text-yellow-400 mx-2 -mt-2"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-blue-600 inline-block">Web Scraper</span>
            </h1>
            <div className="flex items-center justify-center text-3xl md:text-5xl font-bold tracking-tight text-[#a457ff] mb-8">
              <span>Effortlessly with</span>{' '}
              <CodeBracketIcon className="w-8 h-8 mx-2 text-gray-600" />{' '}
              <span className="text-blue-600">ScraperTool</span>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our platform extracts HTML, CSS, and JavaScript content faster than
              ever. Explore and download website source code with ease.
            </p>
          </div>

          {/* Scraping Form */}
         
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-xl shadow-xl p-6 transform transition-all hover:scale-105">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter website URL to scrape..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a457ff] focus:border-transparent outline-none transition"
                  />
                </div>
                <button
                  onClick={handleScrape}
                  disabled={isLoading}
                  className="w-full bg-[#a457ff] hover:bg-[#a457ff] text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a457ff] transition duration-200 ease-in-out flex items-center justify-center font-medium"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <span>Start Scraping</span>
                  )}
                </button>
                {/* Make a Copy Button */}
                <div className="text-center mt-4">
                  <button
                    onClick={handleCopyLink}
                    className="text-white underline hover:text-white font-bold transition cursor-pointer"
                  >
                    Copy this Sample Link
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Circle Image */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-full md:top-[70%] top-[85%]">
            <img
              src="circle.png"
              alt="Circle"
              className="w-full object-contain"
              style={{ transform: 'scale(1.5)', position: 'relative' }}
            />
          </div>
        </div>

        {/* Footer */}


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
    </>


  );
}

export default App;

