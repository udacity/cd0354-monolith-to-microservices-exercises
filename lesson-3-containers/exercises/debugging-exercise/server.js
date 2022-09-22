function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getData() {
  return new Date();
}

async function main() {
  while (true) {
    try {
      console.log(getData());
    } catch (e) {
      console.log(e);
    } finally {
      await sleep(5000);
    }
  }
}

main();
