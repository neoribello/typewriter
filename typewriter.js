const typewriter = (sentence, interval) => {
  for(let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * interval);
  }
}

typewriter("hello there from lighthouse labs \n", 50)