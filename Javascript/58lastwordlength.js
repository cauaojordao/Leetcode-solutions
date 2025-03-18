/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let r2 = []
    let r1 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " ") {
            r1.push(s[i])
            r2 = r1;
        } else {
            r1 = []
        }
    }
    return r2.length;
};