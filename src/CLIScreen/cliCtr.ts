const fs = {
    root: {
        Users: {
            pierre_portal: {
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

const exploreWorkingDirectory = (loc: string) => {
    const locTree = loc.split('/').reduce((a: any, b: any) => a[b], fs);
    const firstLevelAccess = Object.keys(locTree).map((x) => ({
        name: x,
        type: typeof (locTree as any)[x],
    }));
    return { firstLevelAccess, locTree };
};

export const ls = (loc: string) => exploreWorkingDirectory(loc).firstLevelAccess;

export const cd: any = (loc: string, path?: string) => {
    if (!path?.length) {
        return 'root';
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

export const openFile = (loc: string, file: string) => {
    return (
        typeof exploreWorkingDirectory(loc).locTree[file] === 'string' &&
        exploreWorkingDirectory(loc).locTree[file]
    );
};
