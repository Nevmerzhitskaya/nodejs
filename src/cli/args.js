const parseArgs = () => {
    const argv = process.argv;

    for (let i = 0; i < argv.length; i++) {
        if (argv[i].startsWith('--') && argv[i + 1]) {
            console.log(`${argv[i].substring(2)} is ${argv[i + 1]}`);
            i++;
        }
    }
};

parseArgs();