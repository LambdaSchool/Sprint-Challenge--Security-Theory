const antelope = /(antelopes){1}|(antelope){1}/gm // /([a][n][t][e][l][o][p][e][s]){1}|([a][n][t][e][l][o][p][e]){1}/g;
const either = /([g])([a-z]{3})|([m])([a-z]{3})/gm;
const dates = /(([0-9]{1,4})\-([0-9]{1,2})\-([0-9]{1,2}))/g;
const escp = /ESC\[[0-9]{1,2}([a-z]{1})?;?([0-9]{1,2})?[a-z]?/gm;