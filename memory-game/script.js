/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const halfLength = Math.round(s.length / 2);
    const firstHalf = s.slice(0, halfLength);
    const secondHalf = s.slice(halfLength + 1);

    var totalRegularLeft = 0;
    var totalRegularRight = 0;
    var totalSquareLeft = 0;
    var totalSquareRight = 0;
    var totalCurlyLeft = 0;
    var totalCurlyRight = 0;

    function checkForOrderedPairs() {
        console.log(s);
        for (let k = 0; k < s.length - 1; k++) {
            if (s[k] === "(") {
                if (s[k + 1] !== ")") {
                    
                    return false;
                }
            } else if (s[k] === "[") {
                if (s[k + 1] !== "]") {
                    
                    return false;
                }
            } else  if (s[k] === "{") {
                if (s[k + 1] !== "}") {
                    console.log(s[k])
                    console.log(s[k + 1])
                    console.log("whoops")
                    return false;
                }
            }
        }
        return true;
    }

    if (s.length % 2 == 1) {
        return false;
    } else {
        console.log("made it past remainder part");
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            totalRegularLeft++;
            continue;
        } else if (s[i] === ")") {
            totalRegularRight++;
            continue;
        } else if (s[i] === "[") {
            totalSquareLeft++;
            continue;
        } else if (s[i] === "]") {
            totalSquareRight++;
            continue;
        } else if (s[i] === "{") {
            totalCurlyLeft++;
            continue;
        } else if (s[i] === "}") {
            totalCurlyRight++;
            continue;
        };
    };

console.log(totalRegularLeft);
console.log(totalRegularRight);
console.log(totalSquareLeft);
console.log(totalSquareRight);
console.log(totalCurlyLeft);
console.log(totalCurlyRight);

    if (
        totalRegularLeft === totalRegularRight && 
        totalSquareLeft === totalSquareRight && 
        totalCurlyLeft === totalCurlyRight
    ) {
        console.log("totals are equal");    
        if (s.length < 4) {
            console.log("length is less than 4");
            for (let j = 0; j < s.length / 2 - 1; j++) {
            let end = s[s.length - 1 - j];
            if (s[j] === "(") {
                if (s[end] !== ")") {
                    return checkForOrderedPairs();
                }
            } else if (s[j] === "[") {
                if (s[end] !== "]") {
                    return checkForOrderedPairs();
                }
            } else {
                if (s[end] !== "}") {
                    return checkForOrderedPairs();
                };
            }
        };
        return true;
        } else {
            console.log("length is not less than 4")
            for (let j = 0; j < s.length / 2; j++) {
            let end = s[s.length - 1 - j];
            console.log(end)
            console.log(s[j])
            if (s[j] === "(") {
                if (s[s.length - 1 - j] !== ")") {
                    return checkForOrderedPairs();
                }
            } else if (s[j] === "[") {
                if (s[s.length - 1 - j] !== "]") {
                    return checkForOrderedPairs();
                }
            } else if (s[j] === "{") {
                if (s[s.length - 1 - j] !== "}") {
                    console.log(s[j])
                    console.log(s[end])
                    console.log("hello")
                    return checkForOrderedPairs();
                };
            }
        };
        return true;
        }
    
    } else {
        console.log("totals are not equal")
        return false;
    }

    // if (s.length % 2 == 1) {
    //         return false;
    //     };
    //     if (s.length == 2) {
    //         if (s[0] === "(") {
    //             if (s[1] !== ")") {
    //                 return false;
    //             } else {
    //                 return true;
    //             };
    //         } else if (s[0] === "[") {
    //             if (s[1] !== "]") {
    //                 return false;
    //             } else {
    //                 return true;
    //             };
    //         } else {
    //             if (s[1] !== "}") {
    //                 return false;
    //             } else {
    //                 return true;
    //             };
    //         };
    //     };

    function nonPairCheck() {
        for (let j = 0; j < s.length - 1 - j; j++) {
            let end = s[s.length - 1 - j];
            if (s[j] === "(") {
                if (s[end] !== ")") {
                    return checkForOrderedPairs();
                }
            } else if (s[j] === "[") {
                if (s[end] !== "]") {
                    return checkForOrderedPairs();
                }
            } else {
                if (s[end] !== "}") {
                    return checkForOrderedPairs();
                };
            }
        };
        return true;
    };
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "(") {
    //         if (s[i + 1] === ")") {
    //             i++;
    //             continue;
    //         } else {
    //             nonPairCheck();
    //         };
    //     } else if (s[i] === "[]") {
    //         if (s[i + 1] === "]") {
    //             i++;
    //             continue;
    //         } else {
    //             nonPairCheck();
    //         };
    //     } else if (s[i] === "{") {
    //         if (s[i + 1] === "}") {
    //             i++;
    //             continue;
    //         } else {
    //             nonPairCheck();
    //         };
    // }
    // }
    // return true;
};

console.log(isValid("()[]{}"))

var isValid2 = function(s) {
    let toggleRegular = "closed";
    let toggleSquare = "closed";
    let toggleCurly = "closed";

    let lastToOpen = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            toggleRegular = "open";
            lastToOpen = "regular";
        } else if (s[i] === "[") {
            toggleSquare = "open";
            lastToOpen = "square";
        } else if (s[i] === "{") {
            toggleCurly = "open";
            lastToOpen = "curly";
        } else if (s[i] === ")") {
            toggleRegular = "closed";
            if (lastToOpen !== "regular") {
                return false;
            };
        } else if (s[i] === "]") {
            toggleSquare = "closed";
            if (lastToOpen !== "square") {
                return false;
            };
        } else if (s[i] === "}") {
            toggleCurly = "closed";
            if (lastToOpen !== "curly") {
                return false;
            };
        };
    };

    if (
        toggleRegular === "closed" &&
        toggleSquare === "closed" &&
        toggleCurly === "closed"
    ) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid2("([)]"))