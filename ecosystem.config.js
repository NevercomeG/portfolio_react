module.exports = {
  apps: [
    {
      name: "app1",
      script: "yarn",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
    {
      name: "app2",
      script: "yarn",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
