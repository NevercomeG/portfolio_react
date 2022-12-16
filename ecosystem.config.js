const argEnvIndex = process.argv.indexOf("--env");
let argEnv = (argEnvIndex !== -1 && process.argv[argEnvIndex + 1]) || "";

const RUN_ENV_MAP = {
  local: {
    instances: 2,
    max_memory_restart: "250M",
  },
  dev: {
    instances: 2,
    max_memory_restart: "250M",
  },
  prod: {
    instances: 4,
    max_memory_restart: "1000M",
  },
};

if (!(argEnv in RUN_ENV_MAP)) {
  argEnv = "prod";
}

module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "next",
      args: "-p 3001",
    },
  ],
};
