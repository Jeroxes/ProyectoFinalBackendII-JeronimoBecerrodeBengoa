import { hashSync, compareSync, genSaltSync } from "bcrypt";

export const createHash = (password) => hashSync(password, genSaltSync(4))

export const validatePassword = (passIngresada, passBDD) => compareSync(passIngresada, passBDD)

