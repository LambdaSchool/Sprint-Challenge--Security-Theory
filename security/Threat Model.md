# Threat Model

Hey Joe, 

thanks for the headsup about the practices in the sales team!

I've drafted a simple Threat Model for the section lead for you to use to implement different practices
and to give insight into why those are necessary.

#### Attack surface:
    - Stolen or simply accessed Laptop
        - Saved passwords for online accounts, e-mail clients that sync automatically
        in the browser or other very weak "pw managers"
            - Saved passwords in our business applications
        - Not activated 2-FA authentication (for wherever it is possible)
    - Not enough knowledge about how to avoid social engineering attacks, protect his / her phone 
        and access cards
    - Unvetted new employees that are trying to gain access to our resources

#### Adversaries (who may be interested in compromising their security, e.g. criminals, pranksters)
    - we have two competing contractors, that are regularly pitching for the same contracts as we are
        they do have the resources and a vested interest
    - since we are a defense contractor there are possible state actors that are after informations 
        of some part of our projects 
    - disgruntled teammembers and maybe someone in private who he / she is in conflict with who seek
        to destroy his / her reputation and to inflict a lot of damage to the company in the process

#### Attack vectors (specifically how they may be compromised, e.g. password theft/cracking, surveillance)
    - phishing attacks, a cloned sim to potentially get past sms based 2 FA, a cloned access card to his / her offices
        or even a hacked smartphone to listen in to conversations, read e-mails and get passwords for more attacks
    - Attacks on his / her online accounts due to not activated 2FA using brute force attacks / possible passwords
        gained through social engineering / other channels
    - Simply accessing his / her computer using special software to break the OS password and access the data
        and thus gaining access to all other resources on it 


#### Mitigations (what can be done to reduce the risk, e.g. 2-factor auth, encryption)
    - Install a bios- level password with an automatic and secure encryption of all data if the Bios is tampered with
    - better training for all employees handling sensitive data regarding their smartphones, access cards,
        computers / phones / tables etc they use outside of work
    - Training regardings saved passwords and how / if and which password managers should be used
    - start using token based two factor authentication wherever possible
    - possible introduction of biometric sensors to replace passwords completely
    - stringent vetting of employees when applying, but also every 6 months to spot possibly compromised personell