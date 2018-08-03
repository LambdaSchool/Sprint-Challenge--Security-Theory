# Threat Model

Hey Joe, 

thanks for the heasup about the practices in the XY team!

I've drafted a simple Threat Model for the section lead for you to use to implement different practices
and to give insight into why those are necessary.

#### Attack surface:
    - Lack of a password to log into the laptop of the Section Lead
    - saved passwords for all relevant log ins for company software and online accounts

#### Adversaries (who may be interested in compromising their security, e.g. criminals, pranksters)
    - we have two competing agencies, that are regularly pitching for the same contracts as we are,
        although it is unlikely should this laptop be compromised the finder will have access to **all**
        sensitive data like our approach for pitches, pricing, employess etc. 
    - this also extends to disgruntled teammembers and maybe someone in private who he / she is in conflict with
    - **This practice is a huge risk to take, which we can not take**

#### Attack vectors (specifically how they may be compromised, e.g. password theft/cracking, surveillance)
    - if any of our competitors is after the kind of information contained on the laptop, it will be fairly easy
        to either steal it, or just access it in any unobserved moment 
        maybe even break in to the office

#### Mitigations (what can be done to reduce the risk, e.g. 2-factor auth, encryption)
    - Install a password to log in to the laptop
    - stop saving passwords in a non-secure way 
    - start using password manager
    - start using token based two factor authentication 