import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
 
    const token = jwt.sign({user}, secretKey, {expiresIn: '24h'} )
    return token
}