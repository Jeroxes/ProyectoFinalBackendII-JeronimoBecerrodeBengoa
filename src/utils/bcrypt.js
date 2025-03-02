import { hashSync, compareSync, genSaltSync } from "bcrypt";

export const createHash = (password) => hashSync(password, genSaltSync(parseInt(process.env.SALT)))

export const validatePassword = (passIngresada, passBDD) => compareSync(passIngresada, passBDD)

