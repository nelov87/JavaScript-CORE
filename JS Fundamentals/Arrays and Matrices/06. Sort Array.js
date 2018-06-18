function sortByTwoFactors(input) {
    let arr = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join('\n'));
}

sortByTwoFactors(['alpha', 'beta', 'gamma']);