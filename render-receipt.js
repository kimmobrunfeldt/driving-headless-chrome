const { Chromeless } = require('chromeless');

async function main() {
  // BTW, you can't use await in module scope. Has to be inside function.
  const chromeless = new Chromeless()
  const result = await chromeless
    .goto('https://kimmobrunfeldt.github.io/driving-headless-chrome/example-receipt.html')
    .pdf()

  console.log(result)

  await chromeless.end()
}

main();
