import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const generateToken = (data, key) => {
    return jwt.sign(data, key, { expiresIn: '1h' });
}

const checkToken = (token, key) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err, data) => {
            if (err) {
                reject(err.message);
            }
            else {
                resolve(data);
            }
        })
    })
}

const hashData = (data, saltRounds) => {
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err.message);
        }
        else {
            resolve(hash);
        }
    });
}

const hashCompare = (data, hashedString) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(data, hashedString, (err, result) => {
            if (err) {
                reject(-1);
            }
            else {
                if (result)
                    resolve(true);
                else
                    resolve(false);

            }
        })
    })
}



export { generateToken, checkToken, hashCompare, hashData };