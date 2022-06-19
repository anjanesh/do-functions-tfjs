const tf = require('@tensorflow/tfjs');

async function main(args)
{
    const matrix_1 = tf.tensor([[1,2],[3,4]]);
    const matrix_2 = tf.tensor([[5,6],[7,8]]);
    
    const matrix_result = tf.matMul(matrix_1, matrix_2);
    
    return { "body" : matrix_result }; 
}

module.exports.main = main;