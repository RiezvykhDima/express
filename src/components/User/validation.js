const Validation = require('./../validation');


class UserValidation extends Validation {

    findById(id) {
        return this.Joi
        .object({
            id: this.Joi.objectId().required(),
        })
        .validate(id);
    }

    findByEmail(email) {
        return this.Joi
        .object({
            email: this.Joi.string().email().required(),
        })
        .validate(email);
    }

    create(profile) {
        return this.Joi
            .object({
                email: this.Joi.string().email().required(),
                nickName: this.Joi
                    .string()
                    .min(1)
                    .max(30)
                    .required(),
            })
            .validate(profile);
    }

    updateById(data) {
        return this.Joi
        .object({
            id: this.Joi.objectId().required(),
            newNickName: this.Joi
            .string()
            .min(1)
            .max(30)
            .required(),
        })
        .validate(data);
    }

    deleteById(id) {
        return this.Joi
        .object({
            id: this.Joi.objectId().required(),
        })
        .validate(id);
    }

}

module.exports = new UserValidation();

