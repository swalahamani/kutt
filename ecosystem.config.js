module.exports = {
  apps : [{
    name: "MSA | Canal Service",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "production",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
