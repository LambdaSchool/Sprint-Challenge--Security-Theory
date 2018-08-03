Dear partner,

Security is a topic that is everywhere in our everyday.

In regard to you business model, let me said a few words on basic security
practices for your company, that practices can be part of your personal baged.

#THE OVERAL VIEW. In regard to accounts and permissions

## Attack surface.

Your company is composed of several platforms (ERP,CRM, Shop Front/Back-end, DB,
API/Webservices wiring several paltforms, Marketing automation tool, just to mention
the most important parts), each of them does an important job in which the others are supported.

There are several people intervening in the day to day of the company,
each of them with access to different platforms and within these
platforms to different types of information.

The main DB is a shared resource across multiple agents in the company.

Goods are guarded in a warehouse.

## Attack vectors.

Each of the pilar platform is an important part. Having one of these platform
non operative will colapse the most part of the company.

Staff, partners, freelancers, season collaborators, etc. Each of them has its own vulnerability.
Sharing resources and access to the platforms of the company expose yours and your clients information.

The DB, is the hearth of you company.

I noticed:

- Several persons with different profiles have access to the same sensible resources.
- There is no protocol that allows track and controls the several access granted to the platforms.
- There are accounts that belong to persons that not continue collaborating with the company.
- Any of the agents accessing the company information is subceptible to leak some access.
- The DB has an administrator. Several persons access it but no one is responsible for its maintenance and surveillance.

# Good practices.

1.  Accounts and permissions. There is a need to have a solid policy about accounts and permissions.
    The need for a team or system that tracks all accounts is important. Is a good prectice to start giving the minimum
    permissions and then grant more permissions as they are really needed or even better have a schema with the agents roles and its
    access needs.
2.  Remove/Disable old accesses that are not used.
3.  A unique account for each agent. Remove the shared accounts.
4.  Main accounts for accessing sensible data (Bank accounts, System configuration, etc) must no be shared.
    Replace the current accounts for new ones and don't share them.
5.  The DB needs a person/team to be the only responsible for its integrity and maintenance. Currently, several profiles can access
    the core of the DB, that carries several risks as for example someone deletes accidentally a chunk of the DB.

These are just general good practices that helps to have good starting positions in regard to security and privacy.

Hope this can help you.
Best,
Jean S Ariza
