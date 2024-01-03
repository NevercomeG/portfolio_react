module.exports = {
  apps: [
    {
      name: "portfolio",
      script: 'node_modules/next/dist/bin/next',
      args: "start -p 4005",
      instances: "2", // or set a number of instances
      exec_mode: "cluster", // "fork" mode is the default, switch to "cluster" for cluster mode
    },
  ],
};