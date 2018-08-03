# Understand and Communicate a Threat Model

Hi Cass,

Thank you so much for the warm welcome!

In your email yesterday, you asked me if I'm familiar with the concept of a Threat Model in the context of security. Yes, I am. If you will recall, we covered this topic in one of our lessons in Lambda School last year. Below is a brief explanation, as well as an example.

As far as I understand it, a Threat Model is basically a conceptual tool used for understanding and improving network security. A Threat Model has several aspects: attack surface (what technologies or systems they use that are potential "points-of-entry" for attacks), adversaries (persons who may be interested in attacking their security), attack vectors (means of attack or compromise), and mitigation (possible solutions or preventive measures to lesson the risk of attacks). These aspects or factors help us assess the strengths, weaknesses, and threats of any given situation, and provide us with possible solutions or measures to prevent breach in security.

To illustrate, here's a hypothetical scenario:

Suppose we have a student named Mike who is studying web development and software engineering in Lambda School. He is an absolute newbie when it comes to technology and programming, and that may be one of the reasons why he's not very careful when it comes to security. He often shares his laptop with his room mates and leaves his phone lying about in his dorm. He seldom logs out of his Gmail, Slack, Zoom, and GitHub accounts. He also is a bit naive when it comes to passwords: he only has one for all his accounts and applications. He decided on Mike123 since it's very easy to remember.

One day, he received the shock of his life: Lambda School kicked him out of the program. Among the many complaints laid against him were these: He allegedly sent malicious DMs to several of his classmates in Slack; he corrupted several repos in GitHub; he sent malwares to the school's CEO; and he shared Zoom links that were actually pranks. He insisted that he did not do any of these.

The Threat Model of the story looks like this:

Attack surface -- Mike shares a room with several people. One or more of them may have a motive to harm him or his reputation. For instance, one of them may be a student of a rival coding school. He uses the usual technological tools for a coding student -- laptop, Slack, Zoom, etc., and he doesn't log out of them, which makes it super easy for hackers to hack them.

Adversaries -- As mentioned, a friend or acquaintance may be a student from a rival coding bootcamp, or maybe somebody simply has a beef with him, etc.

Attack vectors -- Mike was very easy to compromise. His applications were usually open, and those that were not had very unsecure passwords.

Mitigation -- The means for securing Mike's security are obvious: Always sign out of all your apps and accounts, create a unique password for every account and use a password manager, utilize two-factor authentications, use encryptions, use SSH for GitHub, etc.

If Mike did the above measures, he wouldn't have been falsely accused of those actions, and he would still have been a Lambda School student.

Just my two cents. I look forward to working with the team!

Best regards,
Dante