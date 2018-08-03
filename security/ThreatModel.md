### Prompt

> Think of a threat model - a situation with a user (or type of user) and a
context that frames their personal security preferences and situation. Concepts
you should consider (and a few examples of each) include:

> - Attack surface (what tech/situation exposes them, e.g. systems they use, places they go)
> - Adversaries (who may be interested in compromising their security, e.g. criminals, > pranksters)
> - Attack vectors (specifically how they may be compromised, e.g. password theft/cracking, > surveillance)
> - Mitigations (what can be done to reduce the risk, e.g. 2-factor auth, encryption)

> Write a summary of the overall situation as if you were going to send it as a
professional email to explain it to a coworker. Please turn in a file
`ThreatModel.md` with 1-2 paragraphs addressing the above concepts in a concise
fashion.

### Response

```
Hello, Chris.

I wanted to talk to you about colleagues bringing work home. There are many negative work culture and
productivity effects of this, and I have voiced these concerns to management, but I need your help
to address the security implications of this practice.

The biggest issue with colleagues bringing work home is the massive increase of area in attack surface.
At this time, we do not have a policy about bringing work home, nor a protocol to follow should someone
does indeed bring work home. Therefore, our codebase and our user data can be in a security
environment we cannot control. For example, our sensitive information will be at the mercy of the security
strength of an individual's home WiFi network and the rigor of personal security practices online.

Consider that we are a rapidly growing company, with our main product being a popular social media app
for teens. Adversaries would want access to our data for demographic information, spamming, or even personally
oriented attacks like cyber-bullying, SWATTING, etc.. Because of our size and age, many adversaries may consider 
us "low-hanging fruit": high value, low-difficulty. And a security breach would be devastating to our brand and
our reputation, especially among parents and regulatory bodies.

Therefore, we need to take steps to strengthen our security practices. One thing we can do is to reduce attack
surface by restricting take-home work.

* In the short term, define and enforce a strict protocol for accessing company resources outside.
  - Demand a secure SSH connection to a workstation or VM within the company secured by us.
  - No USB rule. No personal file-sharing/cloud services.
  - An individual user cannot work on company assets on their personal computer, at work or outside. They may
    use it to connect to a company computer or resource. See first point above.

* In the mid-term to long-term range, reduce risk by reducing pressure for people to do risky security practices.
  - Adjust goals and measurable key results to allow employees to reach objectives at work with some overtime.
  - Emphasize work/life balance in our company's culture.

Thank you for taking the time to listen to my concerns. Security can be tangled with other concerns, so it is
important to consider differing forces and pressures that may impact our security, in both expected and unexpected
ways. I look forward to helping you implement a protocal by the end of the week. Thanks, again!

Sincerely,
Ronald
```