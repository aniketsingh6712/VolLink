const { z } = require("zod");

const createOrganizationRequestSchema = z.object({
    body: z.object({
        organizationName: z.string().min(3).max(255),

        organizationType: z.enum([
            "NGO",
            "COMPANY",
            "COLLEGE",
            "CLUB",
            "GOVERNMENT",
            "COMMUNITY",
            "OTHER",
        ]),

        email: z.string().email(),

        phone: z.string().min(10).max(20),

        website: z.string().url().optional(),

        description: z.string().min(20),

        documents: z.array(
            z.object({
                documentType: z.enum([
                    "REGISTRATION_CERTIFICATE",
                    "PAN",
                    "GST",
                    "AUTHORIZATION_LETTER",
                    "IDENTITY_PROOF",
                    "ADDRESS_PROOF",
                    "OTHER",
                ]),

                fileName: z.string(),

                fileUrl: z.string(),
            })
        ).min(1),
    }),
});

module.exports = {
    createOrganizationRequestSchema,
};