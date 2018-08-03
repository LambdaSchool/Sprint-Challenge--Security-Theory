# Theory of Computation Sprint Challenge

## Regular Expressions

Find regexes that match the following.

* Single regex that matches either of these:

    antelope rocks out
    
    antelopes rock out

```js
const regex = /antelopes? rocks? out/g;
```

* Regex that matches either of:

    goat
    
    moat

  but not:

    boat

```js
const regex = /[^b]oat/g;
```

* Regex that matches dates in YYYY-MM-DD format. (Year can be 1-4 digits, and
  month and day can each be 1-2 digits). This does not need to verify the date
  is correct (e.g 3333-33-33 can match).

  2000-10-12
  
  1999-1-20
  
  1999-01-20
  
  812-2-10


```js
const regex = /\d{1,4}-\d{1,2}-\d{1,2}/g
```

## State Machines

* Draw a state machine that corresponds to the following regex:

      ab*c+d?[ef]

![state1](img/state1.png)

*Any input to a given state not shown in diagram is assumed to transition to `default`.*