## Regular Expressions

Find regexes that match the following. (e.g. find a single regex that matches
both `antelope` and `antelopes`.)

1. Single regex that matches either of these:

    - antelope rocks out

    - antelopes rock out

    Answer: `/antelopes?/g`

2. Regex that matches either of:

    - goat

    - moat

    but does not match:
    - boat

    Answer: `/[^b]oat/g`

3. Regex that matches dates in YYYY-MM-DD format. (Year can be 1-4 digits, and month and day can each be 1-2 digits). This does not need to verify the date is correct (e.g 3333-33-33 can match).

    - 2000-10-12

    - 1999-1-20

    - 1999-01-20

    - 812-2-10

    Answer: `/(\d+){3,4}\-(\d+){1,2}\-(\d+){2}/g`