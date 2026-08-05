const env=require("./config/env")

const app = require("./app");
const connectDatabase = require("./config/dbConnection");

const PORT = env.PORT || 5000;

(async () => {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})();