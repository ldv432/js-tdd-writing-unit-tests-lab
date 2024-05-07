// Your tests here
describe("isPalindrome", () =>{
    it("determines if a word is palindrome", () => {
        const word = "racecar"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })
})