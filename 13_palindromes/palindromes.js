const palindromes = function (textString) {
    const cleaned = textString
        .replace(/[^a-z0-9]/gi, "")
        .toLowerCase();

    const reversed = cleaned
        .split("")
        .reverse()
        .join("");

    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
