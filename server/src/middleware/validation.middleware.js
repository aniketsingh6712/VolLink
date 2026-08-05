module.exports = (schema) => {
    return async (req, res, next) => {
        try {
            req.validatedData = await schema.parseAsync({
                body: req.body,
                params: req.params,
                query: req.query,
            });

            next();
        } catch (error) {
            next(error);
        }
    };
};