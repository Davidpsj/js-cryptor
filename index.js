const crypto = require('crypto')

module.exports = {
    crypt,
    decrypt
}

const algorithm = 'aes-256-ctr'
const password  = 'J3T41m3m0n4m0uRyZeNiTpOlArD3M3Tr1U5'

const crypt = text => {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipher(algorithm, password, iv)
    const crypted = cipher.update(text, 'utf8', 'hex').concat(cipher.final('hex'))
    return iv.toString('hex').concat(':').concat(crypted)
}

const decrypt = text => {
    const parts = text.split(':')
    const decipher = crypto.createDecipher(algorithm, password, new Buffer(parts[0], 'hex'))
    const plain = decipher.update(parts[1], 'hex', 'utf8')
    return plain
}