const express = require("express");
const app = express();
const cors = require("cors");

// Define a GET API route
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from the backend!", data: [1, 2, 3, 4] });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(cors());
