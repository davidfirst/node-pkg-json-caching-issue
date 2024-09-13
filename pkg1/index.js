import fs from 'fs';

async function loadPkg2() {
  try {
    const { num } = await import('../pkg2/index.js');
    console.log("num:", num)
  } catch (err) {
    console.log('Error loading pkg2', err.message);
  }
}

async function run() {
  removeTypeModule();
  await loadPkg2();
  addTypeModule();
  checkTypeModule();
  await loadPkg2();
}

run();

function addTypeModule() {
  const pkgJson = JSON.parse(fs.readFileSync('./pkg2/package.json'));
  pkgJson.type = 'module';
  fs.writeFileSync('./pkg2/package.json', JSON.stringify(pkgJson, null, 2));
}
function removeTypeModule() {
  const pkgJson = JSON.parse(fs.readFileSync('./pkg2/package.json'));
  delete pkgJson.type;
  fs.writeFileSync('./pkg2/package.json', JSON.stringify(pkgJson, null, 2));
}
function checkTypeModule() {
  const pkgJson = JSON.parse(fs.readFileSync('./pkg2/package.json'));
  console.log('type:', pkgJson.type);
}