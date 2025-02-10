import jwt from 'jsonwebtoken'

let secretKey = "PokeSecret"

export const generateToken = (user) => {
 
    const token = jwt.sign({user}, secretKey, {expiresIn: '24h'} )
    return token
}