


// antelope/antelopes regex
const regex = /(\w+s?){8,9}/g;

// goat/moat/not boat regex
const regex = /(?!boat)(\w+){4}/g;

// dates regex
const regex = /(\d+){3,4}\-(\d+){1,2}\-(\d+){2}/g;

// VT-100 regex - this should work for both!
const regex = /ESC\[\d+\w(;?\d+\w)?/g;