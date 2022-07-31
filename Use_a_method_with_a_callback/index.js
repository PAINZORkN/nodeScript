const {writeFile} = require('fs')

let data = 'This is a file'

writeFile("test.txt", data, (err) => {
    if(err) {
        console.error(err)
    } else {
        console.log('all good')
    }
})


