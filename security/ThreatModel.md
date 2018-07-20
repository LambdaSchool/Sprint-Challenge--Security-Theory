### What's the sitch? Admissions office at a university. University of Pretend must adhere to FERPA guidelines to protect student privacy.

### Attack surface:
  At University of Pretend, student files are stored in two places - scanned documents on a local shared drive accessible by all admissions employees, and info-only files in a proprietary database. Potential weak points in this system include human error/carelessness, malware, phishing attempts, and man in the middle attacks.

### Adversaries:
  Locally, student information is at risk from non-admissions employees, office visitors, and the like. Adversaries could seek social security numbers and similar data for identity theft, financial information could be used for theft, or personal information could be used to harass students. Outside adversaries would have the same goals but a different approach to gaining entry.

### Attack vectors: 
  Locally the biggest risk is employee carelessness. Unlocked computer screens, passwords on post-its, etc would allow unauthorized access. Employees using university computers for personal business (gmail, social media, online shopping) offer opportunities for phishing emails, social engineering, and malware that would also grant database access to outside attackers.

### Mitigations:
  Strict protocols regarding computer usage by employees, extensive email filters, frequent password changes, and limitations on personal use would close a lot of loopholes. Employees should have access only to the data that pertains directly to their job - for example, an employee that helps students transfer credits does not need access to financial aid information. Employees should receive periodic training in ways to recognize phishing attempts. All data should be encrypted . Filters should be in place to prevent malware or ransomware that could destroy or compromise data. Employee web access should be restricted to a select few sites that are necessary for work ( other universities, government sites, etc) and no unrelated sites like shopping, banking, social media, etc. Offices should be secured by key card access and data should be secured by multiple authorization points. Access to a physical machine should be limited to one employee, with further authorization checkpoints to access the data repositories and then again protecting the individual pieces of data. 