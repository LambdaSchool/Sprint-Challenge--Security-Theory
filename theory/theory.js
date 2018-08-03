const antelope = ["antelope rocks out", "antelopes rock out"]
//const ant2 = "antelopes rock out"

regex_antelope = /(antelope)s? ?(rock)s? out/gi;

console.log(antelope[0].match(regex_antelope));
console.log(antelope[1].match(regex_antelope));

const oat = ['goat', 'moat', 'boat'];
regex_oat = /[gm]oat\b/g;
console.log('goat: ', oat[0].match(regex_oat));
console.log('moat: ', oat[1].match(regex_oat));
console.log('boat: ', oat[2].match(regex_oat));

const dates = ["2000-10-12", "1999-1-20", "1999-01-20", "812-2-10"];

const regex_dates = /(\d{3,4}) ?-?(\d{1,2}) ?-?(\d{1,2})/gi;

// dates_found = dates.match(regex_dates);

for (let i = 0; i < dates.length; i++) {
    console.log(dates[i].match(regex_dates))
}
