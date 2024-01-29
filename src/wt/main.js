import { Worker} from 'worker_threads'
import os from 'os';

const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    let promises = [];

    for(let i = 0; i < numCPUs; i++)
    {
        let promise = new Promise((resolve, reject) => {
            let worker = new Worker("./src/wt/worker.js", { workerData: 10 + i });
            worker.on('message', resolve);
            worker.on('error', reject);
        });

        promises.push(promise);
    }

    return Promise.allSettled(promises);
};

const results = await performCalculations()

const fotmatResults = results.map(result => {
    const formatResult = {
        status: result.status == "fulfilled" ? "resolved" : "error",
        data: result.status == "fulfilled" ? result.value : "error"
    }
    return formatResult;
})

console.log(fotmatResults)