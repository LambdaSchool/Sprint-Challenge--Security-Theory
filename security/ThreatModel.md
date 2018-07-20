## Threat Model 

### Situation

Yahoo got hacked and 1 billion of their users got their information stolen.

### Attack Surface

Hackers used "forged cookies" which are bits of code that lives on the browser cache (means a website doesn't require a login). 

### Adversaries

Some of the people that would want to steal the informaton could be hackers, competeting businesses, people steal user's information to sell, and other countries.

### Attack Vectors

Yahoo said the stolen user account information may have included names, email addresses, telephone numbers, dates of birth, hashed passwords and, in some cases, encrypted or unencrypted security questions and answers.

### Mitigations

At the time of the August 2013 incident, we used MD5 to hash passwords. We began upgrading our password protection to bcrypt in the summer of 2013. Bcrypt is a password hashing mechanism that incorporates security features, including salting and multiple rounds of computation, to provide advanced protection against password cracking. I also would recommend that they use a Two-way authentication

