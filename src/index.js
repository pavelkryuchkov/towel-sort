// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (matrix) {
        for (let [index, row] of matrix.entries()) {
            res = res.concat(index % 2 === 0 ? row : row.reverse());
        }
    }
    return res;
};
