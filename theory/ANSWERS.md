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
const regex = /\d{1,4}-\d{1,2}-\d{1,2}/g;
```

## State Machines

* Draw a state machine that corresponds to the following regex:

      ab*c+d?[ef]

![state1](img/state1.png)

* A lion can be sleeping, eating, hunting, or preening. Draw a state
  machine diagram for the lion and label the transition events that
  cause state transitions.

![state2](img/state2.png)

* The VT-100 terminal (console) outputs text to the screen as it
  receives it over the wire. One exception is that when it receives an
  ESC character (ASCII 27), it goes into a special mode where it looks
  for commands to change its behavior. For example:

      ESC[12;45f

  moves the cursor to line 12, column 45.

      ESC[1m

  changes the font to bold.

  * Come up with regexes for the two above sequences. The one to set the
    cursor position should accept any digits for the row and column. The
    bold sequence need only accept `1` (and is a trivial regex). (ESC is
    a single character which can be represented with `\e` in the regex.)
  
  ```js
  const regex = /\x1b\[\d{1,2};\d{1,2}f/;
  ```

  `\e` does not seem to indicate the `ESC` character. This [Stackoverflow answer](https://stackoverflow.com/a/15084808) suggests `\x1b` does.

```js
const regex = /\x1b\[m1/;
```

  * Draw a state machine diagram for a VT-100 that can consume regular
    character sequences as well as the two above ESC sequences.

![state3](img/state3.png)

*Any input to a given state not shown is assumed to transition to an `ERROR` state, then goes to `RDY` with no further input (`ε` input).*