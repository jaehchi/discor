import Joi from 'joi';

export default {
  signup: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9]{6,25}$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{6,25}$/).required(),
    }
  }
};
