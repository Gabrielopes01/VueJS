const { mongo } = require('mongoose')
const mongoose = require('mongoose')
mongoose.connect('mongodb://locahost/knowledge_stats', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'Não foi possível conectar com o MiongoDB'
        coinsole.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })