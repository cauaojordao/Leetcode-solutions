/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const r = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let p = 0
    for (let i = 0; i < s.length; i++) {
        let a = r[s[i]];
        let b = r[s[i + 1]];
        if (b > a) {
            p -= a;
        } else {
            p += a;
        }
    }
    return p;
};