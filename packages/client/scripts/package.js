// @ts-check

const fs = require('fs/promises');
const { build: buildElectionDist } = require('electron-builder');
const { PACKAGE_ROOT } = require('./util');
const path = require('path');

const readPackageJson = async () => {
  const packageJson = await fs.readFile('package.json', 'utf8');
  return JSON.parse(packageJson);
};

const buildPackageJsonForDist = async (packageJson) => {
  const {
    main,
    version,
    name,
    author,
    description,
    dependencies,
    devDependencies,
    electronDependencies,
  } = packageJson;

  const newDeps = {};

  for (const [key, version] of Object.entries(dependencies)) {
    if (electronDependencies.some((dep) => dep === key)) {
      newDeps[key] = version;
    }
  }

  const newDevDeps = {};

  for (const [key, version] of Object.entries(devDependencies)) {
    if (electronDependencies.some((dep) => dep === key)) {
      newDevDeps[key] = version;
    }
  }

  const distPackageJson = {
    name,
    version,
    main,
    author,
    description,
    dependencies: newDeps,
    devDependencies: newDevDeps,
  };

  return distPackageJson;
};

const writeBackupPackageJson = async (packageJson) => {
  await fs.writeFile(
    path.resolve(PACKAGE_ROOT, 'package.json.bak'),
    JSON.stringify(packageJson, null, 2),
  );
};

const writePackageJson = async (packageJson) => {
  await fs.writeFile(
    path.resolve(PACKAGE_ROOT, 'package.json'),
    JSON.stringify(packageJson, null, 2),
  );
};

const cleanUpBackupPackageJson = async () => {
  await fs.unlink(path.resolve(PACKAGE_ROOT, 'package.json.bak'));
};

(async () => {
  const publish = process.argv.includes('--publish');

  const packageJson = await readPackageJson();

  try {
    await writeBackupPackageJson(packageJson);
    const packageJsonForDist = await buildPackageJsonForDist(packageJson);
    await writePackageJson(packageJsonForDist);

    await buildElectionDist({
      config: 'electron-builder.config.js',
      publish: publish ? 'always' : undefined,
      win: publish ? [] : undefined,
    });
  } finally {
    await writePackageJson(packageJson);
    await cleanUpBackupPackageJson();
  }
})();
