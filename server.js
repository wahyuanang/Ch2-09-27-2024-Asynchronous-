const http = require("http") 
const url = require("url")
const fs = require("fs")
const FsAsync = require("fs").promises

const content = fs.readFileSync("./index.txt", "utf-8")

// express = framework third parti untuk memudahkan http
 const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathUrl = req.url

    // default selalu ada :
    // localhost:3000/ = health check, cek aplikasi jalannya, nyala gak
    //404 = handle jika url jika ada, salah atau ngarang = bakal tidak ada http status code = 404
    if(pathUrl === "/Wahyu") {
        res.end("ini adalah tugas wahyu")
    } else if (pathUrl === "/") {
        res.end("hellow ke tim 2")        
    
    } else if (pathUrl === "/Alif") {
        console.log("original data dari index.txt = " + contentFileUtama)
        async function rewriteFromImam(filepath, content) {
            try {
                await fsAsync.writeFile(filepath, content) 
                console.log("sukses nulis ulang file")
                const resultRewrite = await fsAsync.readFile(filepath, "utf-8")
                console.log(resultRewrite)
                res.end(resultRewrite)
            } catch (error) {
                console.log(error)
            }
        }

        rewriteFromImam("./index.txt", "HAI TUGAS IMAM !!!")
    } else {
        res.end("INI GAK ADA ! Status code : 404")
    }
})

server.listen(3000, 'localhost', () =>  {
    console.log('Aplikasi kita jalan ini di port 300')
})
