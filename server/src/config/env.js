const { z } = require("zod");
require("dotenv").config();

const envSchema = z.object({
    PORT: z.coerce.number().default(5000),

    NODE_ENV: z.enum([
        "development",
        "production",
        "test",
    ]),

    DB_HOST: z.string(),

    DB_PORT: z.coerce.number(),

    DB_NAME: z.string(),

    DB_USER: z.string(),

    DB_PASSWORD: z.string(),

    JWT_SECRET: z.string(),

    JWT_EXPIRES_IN: z.string(),

    REFRESH_SECRET: z.string(),

    REFRESH_EXPIRES_IN: z.string(),
});

const env = envSchema.parse(process.env);

module.exports = env;