import './custom_commands/cmd-login';

on("task", {
    log(message) {
      console.log(message);
      return null;
    },
  });

  on("uncaught:exception", (err, runnable) => {
    return false;
  });