Hi Billy Bob,

Everything is good on my end thank you for asking. Something I wanted to bring up you from your last email is you said
that you were using HTTP Cookies in your companies production code and I feel that I should bring up the security
threats of using such an outdated and insecure form of authentication when it comes to your users.

Using HTTP Cookies is easy and a great way to store personal information about your users without having to incur the
costs of making a request to a database. With cookies though, you are also subjected to easy manipulation of those
cookies from those who wish to harm you or your users. HTTP Cookies were not meant to store sensitive data about
your users but instead to store something more significantly less personal such as the color scheme they want
to use for your website. Something personal, but if someone ever saw the information they could never do
anything with this information.

Your applications security could easily become compromised by anyone going into their web browsers developer tools
and checking on the cookies from there. Next thing you know, you have people that have never even signed up for your
service impersonating other users that have actually paid for your application service.

In my personal opinion what I would do is think about using JWT, JSON Web Tokens, or even go the route of using
OAuth2. Both of these options are fairly straight forward and best part is, these options both have extremely large
companies, with extremly intelligent team members constantly working to improve the security of either one of these.
I would go straight to your lead developer and ask them what they think about these two options and see how long
they think it would take to start implementing these into your application.

Thank you,
Brandon Benefield