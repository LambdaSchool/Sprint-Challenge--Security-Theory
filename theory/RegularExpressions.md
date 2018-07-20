- Single regex that matches `antelope rocks out` and `antelopes rock out`

/antelopes? rocks? out/g

- Regex that matches either `goat` and `moat` but not `boat`

/[gm]oat/g

- Regex that matches dates in YYYY-MM-DD format

/\d{1,4}-\d{1,2}-\d{1,2}/g

- Come up with regexes for VT-100
`ESC[12;45f` : /\e\[(\d+);(\d+)f/g
`ESC[1m` : /\e\[1m/

