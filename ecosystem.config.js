module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "yarn",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 3005,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3005,
      },
    },
  ],
};
