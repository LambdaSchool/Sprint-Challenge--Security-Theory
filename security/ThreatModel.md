Hey,

Since our app is meant to improve the user experience of email for people with vision problems, and we're imagining the typical user is going to be older people, there are a few things we're going to want to consider moving forward as far as security.

The attack surface we're going to be looking at may be rather large.  Considering the technical know-how of our average user, there's going to be a bit of a learning curve in terms of our users understanding the risks of performing certain tasks, such as clicking the links in emails.  While they might not be using a lot of technology in their day to day lives, it's not uncommon for older people to be lax about their personal security in general, writing down their passwords so as not to forget them, etc.

I would say that the adversaries we're going to be looking at in this situation is going to be anyone with the ability to send a scam email or anyone looking to pull a prank on someone who just doesn't know any better.

Attack vectors are mostly going to be in the form of phishing/spearfishing tactics, though it's reasonable to assume that there's going to be an increasing risk of rootkits related to these.

It may prove difficult to encourage our users to use 2-factor authorization, but we can still try to encourage it.  What we can do on our end is to provide better encryption of data so that their information doesn't become publicly accessible as a result of our actions.  As for protecting them from themselves, we can only work on improving email filtering in order to try to ensure that scam emails never get into their hands in the first place.

Let me know your thoughts and if you have anything else you'd like to add to the threat model.

- Amy