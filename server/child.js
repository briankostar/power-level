const { spawn } = require("child_process");
// const bat = spawn('cmd.exe');

const bat = spawn("python", ["./python/test.py", "5", "2"]);
// const bat = spawn('python', ['test.py'], {cwd: '/home/user/directory'});

bat.stdout.on("data", data => {
  console.log("stdout data", data.toString());
});

bat.stderr.on("data", data => {
  console.log("stdout stderr", data.toString());
});

bat.on("exit", code => {
  console.log(`bat exit Child exited with code ${code}`);
});
