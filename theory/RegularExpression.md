# Regular Expressions

### Single regex that matches either of these:

```
antelope rocks out

antelopes rock out
```

> /[a-z]+\s[a-z]+\s[a-z]+/g

### Regex that matches either of:

```
goat

moat
```

### but not:

```
boat
```

> /^((?!b).)+$/g

### Regex that matches dates in YYYY-MM-DD format:

```
2000-10-12

1999-1-20

1999-01-20

812-2-10
```

> /\d{1,4}-\d{1,2}-\d{1,2}/g
