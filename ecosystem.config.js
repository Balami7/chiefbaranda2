module.exports = {
apps: [
{
name: 'chiefbaranda',
script: 'node_modules/next/dist/bin/next',
args: 'start',
env: {
NODE_ENV: 'production',
PORT: 3000,
},
instances: 1,
exec_mode: 'fork',
max_memory_restart: '500M',
error_file: '/var/log/chiefbaranda-error.log',
out_file: '/var/log/chiefbaranda-out.log',
},
],
};
