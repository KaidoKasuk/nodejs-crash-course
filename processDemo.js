//argv
console.log(process);
console.log(process.argv);

// process.env
console.log(process.env);

//pid - node js process
console.log(process.pid);

//cwd - currect directory
console.log(process.cwd());

// title
console.log(process.title);

//memoryUsage() -node
console.log(process.memoryUsage());

// update() - how fast code runs
console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`about to exit with code: ${code}`);
});

//exit()
process.exit(0);
console.log("hello");
