## Regular Expressions

Find regexes that match the following. (e.g. find a single regex that matches
both `antelope` and `antelopes`.)

* Single regex that matches either of these:

    antelope rocks out
    
    antelopes rock out
    
##Ans: 
  /antelopes? rocks? out/g
//   antelope + 0 or more s before ? + space + rock +  0 or more s before ? + space + 

* Regex that matches either of:

    goat
    
    moat

  but not:

    boat

##Ans:
    /g|moat/g // either g or m + oat find globally 
    or 
    /[gm]oat/g


* Regex that matches dates in YYYY-MM-DD format. (Year can be 1-4 digits, and
  month and day can each be 1-2 digits). This does not need to verify the date
  is correct (e.g 3333-33-33 can match).

  2000-10-12
  
  1999-1-20
  
  1999-01-20
  
  812-2-10

##Ans: 
    /\d{1,4}-\d{1,2}-\d{1,2}/g  
    or
    /[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,2}/g  