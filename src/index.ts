import crypto from 'crypto';

// AES アルゴリズム
const ALGO = 'aes-256-cbc';
const PASSWORD = 'l+/MraaOI1yT3F1l15fJMcEKGiG3iWn7nOTmUS4fWk0=';

const SALT = 'kr3dJJ1mPcIKisMOR4RO6w==';

const MESSAGE = 'testtest';

function encrypt(algorithm: string, password: string, salt: string, data: Buffer) {

  const key = crypto.scryptSync(password, salt, 32)
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encryptedData = cipher.update(data)
  encryptedData = Buffer.concat([encryptedData, cipher.final()])

  return {iv, encryptedData}
}

console.log('MESSAGE:', MESSAGE)
const data = Buffer.from(MESSAGE)
console.log('data:', data)

let {iv, encryptedData} = encrypt(ALGO, PASSWORD, SALT, data)
console.log('iv:', iv)
console.log('encryptedData:', encryptedData)
