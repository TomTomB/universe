const { gitDescribeSync } = require('git-describe');
const { writeFileSync, mkdirSync } = require('fs');
const { resolve } = require('path');

const gitInfo = gitDescribeSync();
const versionInfoJson = JSON.stringify(gitInfo, null, 2);

mkdirSync(resolve(__dirname, '..', 'temp'), { recursive: true });
writeFileSync(resolve(__dirname, '../temp/version.json'), versionInfoJson);
