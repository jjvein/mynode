process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();

//一旦代码报错， 则下面的代码就不再执行， 但是之前的异步调用依然会继续执行。

console.log('This will not run.');
