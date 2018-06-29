let solution = (function () {

    return {
        add: function (v1,v2) {
            return [v1[0] + v2[0],v1[1] + v2[1]]
        },
        multiply: function (v1,multiply) {
            return [v1[0] * multiply, v1[1] * multiply]
        },
        length: function (v1) {
            return Math.sqrt((v1[0] * v1[0]) + (v1[1] * v1[1]))
        },
        dot: function (v1,v2) {
            return (v1[0] * v2[0]) + (v1[1] * v2[1])
        },
        cross: function (v1, v2) {
            return v1[0] * v2[1] - v1[1] * v2[0]
        }
    }

})();
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([1, 3],2));
console.log(solution.length([3, 4]));
console.log(solution.dot([1, 1], [1, 0]));
console.log(solution.cross([3, 7], [1, 0]));