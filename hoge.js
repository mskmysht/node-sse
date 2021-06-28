let counter = 0;
const timer = setInterval(() => {
  console.log(`[hoge] ${new Date()}`);
  counter++;
  if (counter > 10) {
    clearInterval(timer);
  }
}, 1000);
