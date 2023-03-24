const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Check to see if the array is the same length as the argument sent', ()=>{
        expect(shuffleArray('Hello').length).toBe('Hello'.length)
    })

    test('Check to see if the array is the same length as the argument sent', ()=>{
        expect(typeof shuffleArray('Hello')).toBe('object')
    })
})