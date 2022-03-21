const express = require('express')
const app = express()
const { exec } =require('child_process')

app.get('/', (req, res) => {
  res.send(
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    })
  )}
)

app.listen(3000)