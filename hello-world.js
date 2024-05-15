//task 1
console.log('HELLO WORLD')


//task 2
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>Hello Node!!!!</h1>\n')
    }
});

server.listen(3000)


//task 3
const fs = require('fs');

fs.appendFile('welcom.txt','Hello Node',(err)=>{
    if(err){
        console.log(err)
    }
    fs.readFile('welcom.txt',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
})



//task 4
const password = require('generate-password');

let newPassword = password.generate({
    length : 10,
    numbers : true,
    letters : true,
    excludeSimilarCharacters : true 
})

console.log(newPassword);


//task 5
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'khalfamalik2003@gmail.com',
        pass : 'Malikwolf1'
    }
})

let mailOptions = {
    from : 'khalfamalik2003@gmail.com',
    to : 'kaisshadi123@gmail.com',
    subject : 'Test nodemailler',
    text: 'That was easy!'
}

transporter.sendMail(mailOptions,(err,data)=>{
    if (err){
        console.log('error')
    }
    else{
        console.log('Email sent'+ data.response)
    }
})