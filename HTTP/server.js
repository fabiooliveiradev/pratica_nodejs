const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
    const extName = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item === extName)

    if(!allowed) return
    
    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err
            res.end(content)
        }
    )
    
}).listen(5000, () => console.log('Servidor rodando...'))