# Coffee Shop Owner Threat Model

## Attack Suface
1. Credit Card Machine
2. POS
3. Back of House Computer

## Adversaries
1. Spiteful employees
2. Coffee Shop Down the road
3. Mistress

## Attack Vectors
1. Credit Card Skimmers
2. Downloading proprietary POS software and copying it
3. Downloading Customer Data
4. Social Engineering

## Mitigations
1. Visual Checks
2. Encrypt Data
3. Password manager, 2FA.


Hello Coworker,

I recently visited a coffee shop and there were threats abound.  There were no policies to check the condition of the credit card machine.  Skimmers are easily installed and doing daily visual checks are easy.  Their, self written, point of sale software does not have copy protection nor is the customer's data encrypted.  The coffee shop down the road could come in and easily copy all their customer's data if they had access to the computer.  In addition, the back of house computer where the scheduling and finances are handled is not password secured nor is there 2FA. Spiteful employees who feel they aren't being paid enough can change the schedule, payrates, or even access personal data.

My suggestion to them is that they institute a new policy of checking for skimmers upon opening, and to warn of social engineering to prevent fraud.  If possible, they should consider copy protecting their software, but that isn't a big issue.  They should be more focused on encrypting and/or hashing their customer's data, especially their plain-text passwords.  The back of house computer should have a password and using the scheduling and other manager only software should be password protected with a different password.  If they have 2FA that's even better