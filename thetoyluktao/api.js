const Express = require('express')

const App = Express()
const LIMIT_RND_PER_REQ = 30
// A list of available dice https://en.wikipedia.org/wiki/Dice#Rarer_variations
const DICE_AVAILABLE = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    12,
    14,
    16,
    18,
    20,
    24,
    30,
    34,
    48,
    50,
    60,
    100,
    120
]

// Inclusive range random from https://stackoverflow.com/a/1527820/14904183
function rollDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

App.get('/roll', (req, res) => {
    const rollResult = []
    rollResult.push({result: rollDice(1, 6)})
    res.json(rollResult)
})

App.get('/roll/:times', (req, res) => {
    const { times } = req.params
    const rollResult = []
    // limit most random per request
    if (!isNaN(times) && (Number(times) <= LIMIT_RND_PER_REQ)) {
        for (let i = 0; i < Math.max(times, 1); i++) {
            rollResult.push({result: rollDice(1, 6)})
        }
    }
    res.json(rollResult)
})

App.get('/xroll/:faces', (req, res) => {
    const { faces } = req.params
    const rollResult = []
    if (!isNaN(faces) && DICE_AVAILABLE.indexOf(Number(faces)) >= 0) {
        rollResult.push({result: rollDice(1, faces)})
    }
    res.json(rollResult)
})

App.get('/xroll/:faces/:times', (req, res) => {
    const { faces, times } = req.params
    const rollResult = []
    if (!isNaN(faces) && !isNaN(times) && Number(times) <= LIMIT_RND_PER_REQ && DICE_AVAILABLE.indexOf(Number(faces)) >= 0) {
        for (i = 0; i < times; i++) {
            rollResult.push({result: rollDice(1, faces)})
        }
    }
    res.json(rollResult)
})

App.listen(2021, () => {
    console.log(`API listen on http://localhost:2021`)
})
