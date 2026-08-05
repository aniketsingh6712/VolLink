const sequelize = require("./database");

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();

        console.log("✅ Database Connected");
    } catch (error) {
        console.error("❌ Database Connection Failed");

        console.error(error.message);

        process.exit(1);
    }
};

module.exports = connectDatabase;