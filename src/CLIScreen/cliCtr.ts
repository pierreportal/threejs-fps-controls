const fs = {
  root: {
    Users: {
      pierreportal: {
        about_me: '',
        portfolio: {
          workA: '',
          workB: '',
          workC: '',
        },
        contact_information: '',
        cv: '',
      },
    },
    source_code: '',
  },
};

// let loc = 'root/Users/pierreportal';

const exploreWorkingDirectory = (loc:string) => {
	const locTree = loc.split('/').reduce((a:any, b) => a[b], fs);
  const firstLevelAccess = Object.keys(locTree).map((x) => ({
    name: x,
    type: typeof locTree[x],
  }));
  return { firstLevelAccess, locTree };
};

const ls = (loc:string) => exploreWorkingDirectory(loc).firstLevelAccess;

const cd: any = (loc:string, path?: string) => {
  if (!path?.length) {
    loc = 'root';
    return loc;
  }

  const endSlash = path.charAt(path.length - 1) === '/';
  const startSlash = path.charAt(0) === '/';
  let trimPath = path;
  if (endSlash) {
    trimPath = trimPath.slice(0, -1);
  }
  if (startSlash) {
    trimPath = trimPath.slice(1, trimPath.length);
  }

  const splitedPath = trimPath.split('/');
  let error = false;
  splitedPath.forEach((p) => {
    if (p === '..') {
      const tmpLoc = loc.split('/').slice(0, -1).join('/');
      loc = tmpLoc.length ? tmpLoc : 'root';
    } else if (!exploreWorkingDirectory(loc).locTree[p]) {
      error = true;
    } else {
      loc += `/${p}`;
    }
  });
  return !error && loc;
};

const openFile = (loc:string, file: string) => {
  return (
    typeof exploreWorkingDirectory(loc).locTree[file] === 'string' &&
    exploreWorkingDirectory(loc).locTree[file]
  );
};

const singleCmdMap: any = {
	pwd:(loc:string) => loc,
	whoami:(loc:string) => 'pierreportal'
};

const cmdNeedingArgs: any = {
	ls: (loc:string, dir:string=loc) => ls(dir || loc),
	cd: (loc:string, dir?:string) => cd(loc, dir),
	open: (loc:string, file?:string) => {},
	echo: (loc:string, msg:string) => msg
};


const handleCmd = (loc:string, cmd: string) => {
  if(Object.keys(cmdNeedingArgs).includes(cmd)) {
    return `${cmd} need options. See "${cmd} --help".`;
  };
	return singleCmdMap[cmd] ? singleCmdMap[cmd](loc) : `Unknown command: ${cmd}.`;
};

const handleArgs = (loc:string, cmd: string, args: Array<string>) => {
  if(Object.keys(singleCmdMap).includes(cmd)) {
    return `Invalid options for command ${cmd}. See "${cmd} --help".`;
  };
  return cmdNeedingArgs[cmd] ? cmdNeedingArgs[cmd](loc, args.join(' ')) : `Unknown command: ${cmd}.`;
};

export const enterCmd = (loc:string, cmd:string, callback?:any) => {
  const splittedCmd = cmd.split(' ');
	const [command, ...options] = splittedCmd;
	if(!options.length) {
		return callback ? callback(handleCmd(loc, command)) : handleCmd(loc, command)	
	} else {
		return callback ? callback(handleArgs(loc, command, options)) : handleArgs(loc, command, options)
	}
};

