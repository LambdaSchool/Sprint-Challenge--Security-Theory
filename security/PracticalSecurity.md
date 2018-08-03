Regarding the assertion in the readme that it is safe to publish our security measures to
github:

Shannon's maxim states that  is that the *design* of a security system should be sound under
the assumption that "the enemy knows the system".  That *does not* mean that we should
just publish everything about our security setups.  Obscurity should not be our
primary source of security, but it can be an extra layer on top of a sound system.
It is undeniably harder for an attacker to get started the less information he has
about what he's attacking.

And yes, I do see the irony in writing my threat model about myself and then
quibbling that point.

I have decided to experiment with keepass as an alternative to my current
cloud based password management solution.  As it is open source and offline
rather than cloud based, I hope it will represent a security improvement.
It is available as a package in my linux distribution, so installation is
as simple as one command in the terminal.

It may be worth noting that, in the interim period where I'm experimenting with
keepass without getting rid of my current manager, it will represent an increased
attack surface.

The first thing KeePass had me do was select a location for the database file,
which I placed in a subdirectory of my home folder.

Next was setting a password, which I did.

I initialized my database and declined to print an emergency sheet.

I then added my github username and password.  KeePass is set up!