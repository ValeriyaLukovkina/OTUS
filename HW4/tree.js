let fs = require('fs');
let folder = './foo';
let path = require('path');
let result = {
    folders: [],
    files: []
}

function findFile (folder) {
    fs.readdir (folder, (err, files) => {
        let folderLength = files.length
        files.forEach(file => {
            let filePath = path.join(folder, file);
            let stat = fs.statSync(filePath);
            if (stat.isFile()) {
                result.files.push(filePath)

            } else if (stat.isDirectory()) {
                result.folders.push(filePath)
                findFile(filePath);
                folderLength--;
            }
        })
        if (folderLength == 0) {
            console.log(result)
        }
    })
}
findFile(folder)

