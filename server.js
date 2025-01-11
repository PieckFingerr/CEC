import app from "./src/app.js";

const PORT = process.env.PORT || 3052;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

