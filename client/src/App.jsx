import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState(""); // State to hold the user input
  const [responseMessage, setResponseMessage] = useState(""); // State to hold API response

  const handleScrape = async () => {
    if (!url) {
      alert("Please enter a URL to scrape");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }), // Sending the URL as a POST body
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
      } else {
        setResponseMessage(`Error: ${data.error || "Failed to scrape website"}`);
      }
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="app">
      <h1>Web Scraper</h1>
      <div className="scraper-form">
        <input
          type="text"
          placeholder="Enter URL to scrape"
          value={url}
          onChange={(e) => setUrl(e.target.value)} // Update the URL state
          className="url-input"
        />
        <button onClick={handleScrape} className="scrape-button">
          Scrape Website
        </button>
      </div>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
}

export default App;
