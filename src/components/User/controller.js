const UserService = require('./service');
const UserValidation = require('./validation');
const ValidationError = require('../../error/ValidationError');

async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();

        res.status(200).json({
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            details: null,
        });

        next(error);
    }
}

async function findById (req, res, next) {
    console.log(req.params);
    try {
        const { error } = UserValidation.findById(req.params);

        if (error) {

            throw new ValidationError(error.details);
        }

        const user = await UserService.findById(req.params.id);
        
        return res.status(200).json({
            data: user,
        });
     } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                error: error.name,
                details: error.message,
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
     }
}

async function findByEmail(req, res, next) {
    try {
        const { error } = UserValidation.findByEmail(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const user = await UserService.findByEmail(req.body);
        
        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(req.body);
            return res.status(422).json({
                error: error.name,
                details: error.message,
            });
        }

        return next(error);
    }
}

async function create(req, res, next) {
    try {
        const { error } = UserValidation.create(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const createdUser = await UserService.create(req.body);

        return res.status(200).json({
            data: createdUser,
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                message: error.name,
                details: error.message,
            });
        }
        
        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}

async function updateById(req, res, next) {
    console.log(req.body.id);
    console.log(req.body);
    try {
        const { error } = UserValidation.updateById(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const updatedUser = await UserService.updateById(req.body.id, req.body);

        return res.status(200).json({
            data: updatedUser,
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                message: error.name,
                details: error.message,
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}

async function deleteById(req, res, next) {
    try {
        const { error } = UserValidation.deleteById(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const deletedUser = await UserService.deleteById(req.body.id);

        return res.status(200).json({
            data: deletedUser,
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                message: error.name,
                details: error.message,
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
    
}


module.exports = {
    findAll,
    findById,
    findByEmail,
    create,
    updateById,
    deleteById,
};