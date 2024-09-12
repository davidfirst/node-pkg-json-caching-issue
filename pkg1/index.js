async function loadPkg2() {
  try {
    const { num } = await import('../pkg2/index.js');
    console.log("num:", num)
  } catch (err) {
    console.log('Error loading pkg2', err);
  }
}

async function run() {
  await loadPkg2();
  // wait 10 seconds
  await new Promise((resolve) => setTimeout(resolve, 8000));
  await loadPkg2();
}

run();