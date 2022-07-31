const {writeFile} = require('fs')

let data = 'Hello Node!'

writeFile("test.txt", data, (err) => {
    if(err) {
        console.error(err)
    } else {
        console.log('all good')
    }
})


