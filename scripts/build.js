const shell = require('shelljs');

shell.echo('Cleaning up old files...');
shell.exec('rimraf public/');
shell.mkdir('public');
shell.mkdir('public/client');
shell.echo('\nCompiling...');
shell.echo('[1/2]\twebpack/server.prod.js');
shell.exec('webpack --config webpack/server.prod.js --json > public/stats.server.json');

shell.echo('[2/2]\twebpack/client.prod.js');
shell.exec('webpack --config webpack/client.prod.js --json > public/stats.client.json');

shell.echo('\nCopying files...');
shell.cp('public/stats.client.json', 'public/client/stats.client.json');
shell.cp('src/server/server.js', 'public/server');
shell.cp('-R', 'src/server/views', 'public/server');

shell.echo('\nDone!');
