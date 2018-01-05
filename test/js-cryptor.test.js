const crypt = require('../index')
const decrypt = require('../index')

define('js-cryptor features suite test', () => {
    const data = 'abcd'
    const crypted = crypt(data)
    const crypted2 = crypt(data)
    const dec = decrypt(crypted)
    const dec2 = decrypt(crypted2)

    it('test if crypt function is work', ()=>{
        expect(crypted).toBeDefined()
        expect(crypted2).toBeDefined()
        expect(crypted2).not.toEqual(crypted)
    })

    it('test if decrypt function is work', ()=>{
        expect(dec).toBeDefined()
        expect(dec).toEqual(data)
        expect(dec2).toBeDefined()
        expect(dec2).toEqual(data)
    })
})