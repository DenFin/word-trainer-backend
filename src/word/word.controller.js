const Word = require('./word.model')

exports.getWords = (req, res) => {
    try {
        res.status(200).send('Hello World')
    } catch (error) {
        console.log(error)
    }
}