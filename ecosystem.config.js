module.exports = {
  apps : [{
    name   : "api",
    script : "ts-node-dev --transpile-only --respawn src/server.ts"
  }]
}
