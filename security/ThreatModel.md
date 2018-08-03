# Threat Model for Cassandra Lamendola

___

### Profile:
Cassandra is a student/software developer. She has unique, lengthy passwords for each of her accounts. She uses a password manager (Dashlane) to store (and generate) all of her passwords. However, her passwords have not been updated in a very long time (2+ years in some cases), including the main password for Dashlane. She does not use two-factor authentication on any of her accounts. She spends most of her time in her home office, but also frequents a co-working space where she sometimes leaves her laptop unattended. Her phone uses finger-print recognition to unlock, but she stays logged in to all of her accounts on her phone (except her banking app, which automatically logs out after a certain amount of time). She is careful not to click on links in emails that she did not specifically request.

### Attack surface:
Leaving her laptop unattended in a semi-public place makes her vulnerable to an attack. Keeping old passwords that could have been compromised is also puts her at risk.

### Adversaries:
Her adversaries would include criminals who want to steal her identity or property, or who want to use the software she writes to steal potential users' identities.

### Attack vectors:
- Computer is left unattended and stolen
- Hacker brute forces her password
- Downloads a malicious package from npm
- Clicks on a link from an email that contains malware

### Mitigations:
- Update old passwords
- Use two factor auth
- Don't leave computer unattended in public places
- Open email links in a VM
- Check the security status of all packages downloaded from npm