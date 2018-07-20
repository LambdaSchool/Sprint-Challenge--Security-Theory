
Coworker,

I'm writing you this e-mail because I recently noticed you had taken down your website from your third party hosting platform.  
I just wanted to warn you about a subdomain takeover, where someone can go in and taken over that domain and start selling what scam 
items on your domain.  This is called a subdomain takeover and is considered a high severity threat.

In a subdomain takeover after you have setup your domain with a cloud provider it assigns you a domain that you would rather not
share with your customers so it looks like you may have changed it by configuring a CNAME DNS record to make it more marketable.  
Well, after you cancelled your subscription with them because the CNAME(or Canonical Name) record remained in your DNS zone file someone is able to go
in and register their new store under your environment and has can take over your domain.

I would suggest that you make sure that whenever you pull a domain down that you also check that you delete your CNAME record and
that you also properly monitor your DNS records at all times to make sure that none of your websites are in any danger.



