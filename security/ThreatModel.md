## Situation

A user does their due diligence and uses version and hosts their project on GitHub. 🐙 🐱 They've done everything they thought was enough. They have a password that they only use for GitHub and type it in every time they need to push or pull.

### Attack Surface

The user uses the same computer every day.
The user goes to work at the same location, and interacts with usually the same people.

### Adversaries

The people who may have interest in compromising the security of the user would be criminals, interested in stealing company IP.

### Attack Vectors

Although the user has done well in creating a password for GitHub, this is not enough to make one's code secure. One could still be susceptible to keyloggers.

### Mitigations

A good way to give yourself the comfort of not having to type your password everytime you push/pull and simultaneously making your workflow more secure is to use `SSH`.
Another good way of accomplishing a similar goal is to use a password manager, digital or otherwise.

## Letter

Coworker,

I have noticed that you are very security minded when it comes to your workflow. During our pair programming sessions I've also noticed that you type your password everytime you push or pull from the repo. This is not the most secure or convenient way for you to do this, so I thought I would provide a solution that is both.

I suggest you take a look into setting up SSH on your machine and having your git use that. I promise it will save you a lot of time.

\- Your Coworker
