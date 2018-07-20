# Medical Office Threat Model
```
Employees use their Work computers for entering and retrieving patient 
personal data that includes healthcare information as well as personal 
identifying information which can be used in many ways by an attacker. 
Threats can arrive at multiple surfaces, for example, something as 
simple as an e-mail, a website post, a link on a social media website. 
Usually the Electronic Records are kept on a web application that is 
secure but susceptible to man in the middle attacks, phishing attempts, 
and malware redirecting the user to a page that appears seemingly as the
official Electronic Records app but it is designed to steal information 
and gain access. Because of the nature of the business and the type of 
information that is kept, there will be a myriad of adversaries 
interested in access, information, and perhaps malicious attempt to 
alter said information for personal gain. For example: Someone might 
alter the health record information of a person to exclude substances 
they are allergic to. If this is done prior to surgery, that person 
may be administered a medication can prove lethal.  Someone can also 
steal a patient’s identity if they had access to the personal 
information on the healthcare records.

Considering all the possibilities mentioned above, I believe that the 
best approach at mitigating the risks is to restrict access by only 
allowing certified and trusted personnel access to computers through 
which they can have healthcare information access. Also restrict 
computer access to only permit the healthcare practice functions and 
nothing outside of that manner, like limiting web browsing, and 
e-mail usage being blocked on the Electronic Records machines. Require 
all employees the use of 2 form authentication to mitigate phishing 
attacks. Perform surveillance outside of the offices to control who 
has access to the information. Encrypt all local data so that if 
there is a breach the data is secure. The last step is to finally 
train the personnel so that they do not fall in common traps that 
can compromise the security and integrity of the system.
```