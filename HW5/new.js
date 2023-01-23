const fs = require('fs');
const readline = require('readline');

let size = 12500000;
const sizeBuffering = 1250000;
let streams = [];
let bufferArray = [];
const commonWriteStream = fs.createWriteStream('result.txt', { encoding: 'utf8' });

let createFile = async () => {
    const writeStream = fs.createWriteStream('main');
    console.log('The process of forming main file...');
    for (let count = size; count > 0; count--) {
        await writeFunc(writeStream, count + '\n')
    }
    writeStream.close();
    console.log('The process of forming main file successfully completed');
    separateMain()
}

let writeFunc = (writeStream, data) => {
    if (!writeStream.write(data)) {
        return new Promise((resolve) => {
            writeStream.once('drain', () => resolve())
        })
    }
}

const separateMain = async () => {
    let counter = 0;
    let lastNum = '';

    const readStream = fs.createReadStream('main', { highWaterMark: sizeBuffering })
    await fs.mkdir('files', err => {
        if (err) throw err
    });
    readStream.on('data', chunk => {
        counter++;
        const arrNum = (lastNum + chunk.toString()).split('\n')
        lastNum = arrNum.at(-1);
        arrNum.pop();
        arrNum.sort((a, b) => a - b);
        readStream.pause();
        const writeStream = fs.createWriteStream('files/file' + counter);
        writeStream.write(arrNum.join('\n'));
        writeStream.close();
        readStream.resume();
    })
    readStream.on('end', () => {
        readStream.close();
        console.log('The process of separating main file successfully completed');
        startWrite();
    })
}

const startWrite = async () => {

    let counter = 0;
    let lastNum = '';
    let min = Infinity;
    let minIdx = 0;

    fs.readdir('files', async (err, files) => {

        files.map(file => {
            const readStream = fs.createReadStream("files/" + file, { encoding: 'utf8', highWaterMark: 1 });
            const rl = readline.createInterface({ input: readStream, crlfDelay: Infinity })[Symbol.asyncIterator]();;
            streams.push(rl);
        })
        for await (let stream of streams) {
            const { done, value } = await stream.next();

            if (done) {
                continue
            }
            const streamVal = parseInt(value)

            if (!Number.isNaN(streamVal)) {
                bufferArray.push(streamVal);
            }
        }

        while (true) {
            for (let i = 0; i < bufferArray.length; i++) {
                if (bufferArray[i] < min) {
                    min = bufferArray[i];
                    minIdx = i;
                }
            }

            if (min === Infinity) {
                void (lastNum && (await funcWrite(commonWriteStream, lastNum)));
                break;
            }

            const strToWrite = String(min) + "\n";
            counter += Buffer.byteLength(strToWrite);

            if (counter > commonWriteStream.writableHighWaterMark) {
                await funcWrite(commonWriteStream, lastNum);
                counter = 0;
                lastNum = "";
            }

            lastNum += strToWrite;

            const { value } = await streams[minIdx].next();

            Number.isNaN(parseInt(value))
                ? bufferArray.splice(minIdx, 1, Infinity)
                : bufferArray.splice(minIdx, 1, Number(value));

            min = Infinity;
        }

        commonWriteStream.close();
    }
    );
}

const funcWrite = (stream, chunk) => {
    return new Promise((res, rej) => {
        if (
            !stream.write(chunk, (err) => {
                if (err) {
                    rej(err);
                }
                res();
            })
        ) {
            stream.once("drain", () => res());
        }
    });
}

createFile()