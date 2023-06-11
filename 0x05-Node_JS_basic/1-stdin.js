// Program to be called from a parent process as in a CLI pipe

console.log('Welcome to Holberton School, what is your name?');

// the `readable` event is emitted when there's data to consume
process.stdin.on('readable', () => {
  const msg = process.stdin.read();  // msg contains newline character
  if (msg !== null) {
    process.stdout.write(`Your name is: ${msg}`);
  }
});

// `end` event is emitted when there's no more data in buffer
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
