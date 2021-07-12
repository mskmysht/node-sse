let counter = 0;
let max = 600;
const timer = setInterval(() => {
  console.log(`[hoge] ${new Date()}`);
  counter++;
  if (counter > max) {
    clearInterval(timer);
  }
}, 1000);
