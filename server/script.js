// const scrape = require('website-scraper');
// const websiteUrl = "https://www.tripadvisor.in/Tourism-g297665-Rajasthan-Vacations.html";

// scrape({
//     urls: [websiteUrl],
//     urlFilter: function(url) {
//         return url.indexOf(websiteUrl) === 0;
//     },
//     recursive: true,
//     maxDepth: 50,
//     prettifyUrls: true,
//     filenameGenerator: 'bySiteStructure',
//     directory: './node-website'
// }).then((data) => {
//     console.log("Entire website succesfully downloaded");
// }).catch((err) => {
//     console.log("An error ocurred", err);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const scrape = require('website-scraper');
// const path = require('path');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// // Endpoint to scrape website
// app.post('/scrape', async (req, res) => {
//     const { url } = req.body;

//     if (!url) {
//         return res.status(400).json({ error: "URL parameter is required" });
//     }

//     const outputDirectory = path.resolve(__dirname, './scraped-sites/', new URL(url).hostname);

//     try {
//         await scrape({
//             urls: [url],
//             urlFilter: (scrapedUrl) => scrapedUrl.indexOf(url) === 0,
//             recursive: true,
//             maxDepth: 50,
//             prettifyUrls: true,
//             filenameGenerator: 'bySiteStructure',
//             directory: outputDirectory
//         });

//         res.status(200).json({
//             message: "Website successfully scraped",
//             savedPath: outputDirectory
//         });
//     } catch (err) {
//         console.error("Scraping error:", err);
//         res.status(500).json({ error: "Failed to scrape the website", details: err.message });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
// import express from 'express';
// import cors from 'cors';
// import scrape from 'website-scraper';

// const app = express();
// app.use(cors()); // Enable CORS for all origins
// app.use(express.json());

// app.post('/scrape', async (req, res) => {
//   const { url } = req.body;

//   if (!url) {
//     return res.status(400).json({ error: "URL parameter is required" });
//   }

//   try {
//     await scrape({
//       urls: [url],
//       urlFilter: (scrapedUrl) => scrapedUrl.indexOf(url) === 0,
//       recursive: true,
//       maxDepth: 50,
//       prettifyUrls: true,
//       filenameGenerator: 'bySiteStructure',
//       directory: `./scraped-sites/${new URL(url).hostname}`,
//     });

//     res.status(200).json({
//       message: "Website successfully scraped",
//       savedPath: `./scraped-sites/${new URL(url).hostname}`,
//     });
//   } catch (err) {
//     console.error("Scraping error:", err);
//     res.status(500).json({ error: "Failed to scrape the website", details: err.message });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// import express from 'express';
// import cors from 'cors';
// import scrape from 'website-scraper';
// import fs from 'fs-extra';
// import archiver from 'archiver';
// import path from 'path';

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.post('/scrape', async (req, res) => {
//     const { url } = req.body;

//     if (!url) {
//         return res.status(400).json({ error: "URL parameter is required" });
//     }

//     const outputDirectory = `./scraped-sites/${new URL(url).hostname}`;

//     try {
//         // Scrape the website
//         await scrape({
//             urls: [url],
//             urlFilter: (scrapedUrl) => scrapedUrl.indexOf(url) === 0,
//             recursive: true,
//             maxDepth: 50,
//             prettifyUrls: true,
//             filenameGenerator: 'bySiteStructure',
//             directory: outputDirectory,
//         });

//         // Create a ZIP file
//         const zipPath = path.join(__dirname, 'scraped-site.zip');
//         const output = fs.createWriteStream(zipPath);
//         const archive = archiver('zip', { zlib: { level: 9 } });

//         output.on('close', () => {
//             console.log(`ZIP file created: ${archive.pointer()} total bytes`);
//             res.download(zipPath, 'scraped-site.zip', (err) => {
//                 if (err) {
//                     console.error("Error sending file:", err);
//                 }
//                 // Cleanup: Remove the ZIP file after sending
//                 fs.unlinkSync(zipPath);
//                 fs.removeSync(outputDirectory); // Optional: Clean up scraped files
//             });
//         });

//         archive.on('error', (err) => {
//             console.error("Archive error:", err);
//             res.status(500).json({ error: "Error creating ZIP file" });
//         });

//         archive.pipe(output);
//         archive.directory(outputDirectory, false);
//         archive.finalize();
//     } catch (err) {
//         console.error("Scraping error:", err);
//         res.status(500).json({ error: "Failed to scrape the website", details: err.message });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// import express from 'express';
// import cors from 'cors';
// import scrape from 'website-scraper';
// import archiver from 'archiver';
// import { fileURLToPath } from 'url';
// import path from 'path';
// import fs from 'fs-extra';

// // Define __dirname manually
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/scrape', async (req, res) => {
//     const { url } = req.body;

//     if (!url) {
//         return res.status(400).json({ error: "URL parameter is required" });
//     }

//     const outputDirectory = path.join(__dirname, 'temp', new URL(url).hostname);

//     try {
//         // Scrape the website
//         await scrape({
//             urls: [url],
//             urlFilter: (scrapedUrl) => scrapedUrl.indexOf(url) === 0,
//             recursive: true,
//             maxDepth: 50,
//             prettifyUrls: true,
//             filenameGenerator: 'bySiteStructure',
//             directory: outputDirectory,
//         });

//         // Prepare streaming the ZIP file directly
//         res.setHeader('Content-Type', 'application/zip');
//         res.setHeader('Content-Disposition', `attachment; filename="${new URL(url).hostname}.zip"`);

//         const archive = archiver('zip', { zlib: { level: 9 } });
//         archive.on('error', (err) => {
//             console.error("Archive error:", err);
//             res.status(500).json({ error: "Error creating ZIP file" });
//         });

//         // Pipe the archive stream directly to the response
//         archive.pipe(res);

//         // Add the scraped files to the archive
//         archive.directory(outputDirectory, false);

//         // Finalize and start the download
//         await archive.finalize();

//         // Cleanup the temporary files after streaming
//         fs.removeSync(outputDirectory);

//     } catch (err) {
//         console.error("Scraping error:", err);
//         res.status(500).json({ error: "Failed to scrape the website", details: err.message });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import scrape from 'website-scraper';
import archiver from 'archiver';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs-extra';

// Define __dirname manually for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/scrape', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL parameter is required" });
    }

    const outputDirectory = path.join(__dirname, 'temp', new URL(url).hostname);

    try {
        // Ensure the directory does not exist before scraping
        if (fs.existsSync(outputDirectory)) {
            fs.removeSync(outputDirectory); // Remove existing directory to avoid conflicts
        }

        // Scrape the website
        await scrape({
            urls: [url],
            urlFilter: (scrapedUrl) => scrapedUrl.indexOf(url) === 0,
            recursive: true,
            maxDepth: 50,
            prettifyUrls: true,
            filenameGenerator: 'bySiteStructure',
            directory: outputDirectory,
        });

        // Set headers for ZIP file download
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', `attachment; filename="${new URL(url).hostname}.zip"`);

        const archive = archiver('zip', { zlib: { level: 9 } });
        archive.on('error', (err) => {
            console.error("Archive error:", err);
            res.status(500).json({ error: "Error creating ZIP file" });
        });

        // Pipe the archive to the response
        archive.pipe(res);

        // Add scraped files to the ZIP archive
        archive.directory(outputDirectory, false);

        // Finalize the ZIP archive and start the download
        await archive.finalize();

        // Cleanup the temporary files after streaming
        fs.removeSync(outputDirectory);

    } catch (err) {
        console.error("Scraping error:", err);
        res.status(500).json({ error: "Failed to scrape the website", details: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
