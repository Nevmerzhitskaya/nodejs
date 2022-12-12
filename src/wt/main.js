import * as os from 'os';
import { Worker } from 'node:worker_threads';

const workerThreads = os.cpus().length;

const performCalculations = async () => {
    const workerPromises = [];
    const resultArray = [];

    for (let i = 0, j = 10; i < workerThreads; i++, j++) {
        workerPromises.push(addWorker(j));
    }

    const threadArray = await Promise.allSettled(workerPromises);

    threadArray.map((thread) => {
        const threadModified = {};
        if (thread.status == 'rejected') {
            threadModified.status = 'error';
            threadModified.data = null;
        } else {
            threadModified.status = 'resolved';
            threadModified.data = thread.value;

        }
        resultArray.push(threadModified);
    });

    console.log(resultArray);
};

await performCalculations();

function addWorker(j) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData: j });

        worker.on('message', (msg) => {
            resolve(msg);
        });

        worker.on('error', (msg) => {
            reject(msg);
        });
        
        j++;
    });
}