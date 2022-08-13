// import {PythonShell} from 'python-shell'

// let options = {
//     scriptPath: "",
//     args: ["Livio", 19],
// }

// PythonShell.run("./hello.py", options,(err, res) =>{
//     if(err)
//         console.log(err);
//     // else
//         // console.log(res);
// })

import {spawn} from 'child_process'

// const childPython = spawn('py', ['--version']);
// const childPython = spawn('py', ['hello.py']);
const childPython = spawn('py', ['hello.py']);


childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});


childPython.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

childPython.on('close', (code) => {
    console.log(`child prosess exited with code ${code}`);
});