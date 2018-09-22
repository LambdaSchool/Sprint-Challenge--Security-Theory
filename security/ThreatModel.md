# Weakness of human methods for password generation


# Attack surface: Password creation an encryption
Employees should not be generating passwords at all; they should be truly random and a secure password 
manager should be used instead.
Creating passwords with four random words has a potential weakness, and that weakness is based on people
being lazy and instead of using four random words they use four words that can be associated with them.

Another common pattern people use when creating a password from their own mind is to use a combination of
nouns and dates important to them.

Any company known to encourage this type of password generation is at risk. Individuals who use these practices
are also at risk.

Essentially, any password creation method thought up in a person's mind potentially has an element of 
predictability.

# Adversaries:
People close to the target, such as friends and family. In the case of a software development firm or other
important company, there will likely be many adversaries. Anyone who disapproves of the company and anyone
working for another firm in competition with the company is a potential adversary.

# Attack vectors:
A crafty attacker could build a Markov Chain specifically designed to analyze large swathes of text from the 
target's social media profiles. Special attention would be given to verbs, nouns, and dates. The Markov Chain
would arm the attacker with the words that the target uses the most, and the things that are most important to 
the target.

A specialized word list could then be generated, which permutates not through individual characters, but rather
through the words most commanly used by the target. With more processing power and more thought an attacker
could take this even further; research on words, particularly nouns, most commonly used by people in general.

Furthermore, a Markov Chain could be used in 

This is an open criticism of the correcthorsebatterystable approach to generating passwords. Here are a couple links that support my thesis:

https://diogomonica.com/2014/10/11/password-security-why-the-horse-battery-staple-is-not-correct/
https://www.pentestpartners.com/security-blog/correcthorsebatterystaple-isnt-a-good-password-heres-why/

# Mitigation:
* Do not follow any human concocted method for creating passwords. 
* People should not generate passwords at all using any approach but should rather generate truly random 
  passwords using a random password generator and use a secure password manager. For example, using the `correcthorsebatterystable` method, regardless of how strong it may seem, adds an element of predictability to the password, which is undesirable.


