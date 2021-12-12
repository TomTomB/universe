import findProcess from 'find-process';

export const getLCUCredentials = async () => {
  const argKeys = {
    authToken: '--remoting-auth-token',
    appPort: '--app-port',
  };
  const processes = await findProcess('name', 'LeagueClientUx', true);
  const lcuProcess = processes.find((p) =>
    ['LeagueClientUx', 'LeagueClientUx.exe'].includes(p.name),
  );

  const lcuProcessArgs = lcuProcess?.cmd.split('" "');

  const authToken = lcuProcessArgs
    ?.find((a) => a.includes(argKeys.authToken), '')
    ?.split('=')[1];
  const appPort = lcuProcessArgs
    ?.find((a) => a.includes(argKeys.appPort))
    ?.split('=')[1];

  return authToken && appPort ? { authToken, appPort } : null;
};
