import * as fs from 'fs';

function readFromSettings() {
  const tempSettings = fs.readFileSync(
    "settings.json",
    "utf-8",
    function (err, data) {
      if (err) throw err;
      const result = JSON.parse(data);
      return result;
    }
  );
  return JSON.parse(tempSettings);
}

function writeToSettings(settings) {
    let json = JSON.stringify(settings, null, 4);
    fs.writeFile('settings.json', json, 'utf-8', function(err) {
        if(err) {
            console.log(err);
        } 
    })
}

export {
    readFromSettings,
    writeToSettings
}