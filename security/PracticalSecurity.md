The first software program I had researched and installed on my personal computer that helped improve the security setup on my computer was KeePass. 
After reading the basic setup instructions from the KeePass documentation, I was able to create an encrypted database file. This encrypted database 
file when opened with the correct security passphrase will display all of the usernames and passwords for my personal accounts. In addition, I had 
generated a key file in KeePass for two-factor authentication in order to open the database. Therefore, to access the contents of my database I need 
to present the key file and know the security passphrase for it. 

For my personal Gmail account, I had implemented two-factor authentication as well. To access my Gmail account, I have to input my password and a 
security code on the web page. This security code is sent via SMS to my phone. 

When I was installing Ubuntu in a virtual environment I decided to use VMWare Workstation since it is the hypervisor I am most comfortable and 
familiar with. During the virtual machine installation process, I set the Ubuntu guest OS to gain access to 2 GB of memory and 40 GB of storage on my
computer. Because hypervisor software is scalable I can increase the memory and storage capacity at any time. This virtual machine will be used to test 
my own code or other people’s software. If my code is not working properly or if the software I am testing contains malware I can revert back the virtual 
machine to a healthy state or reinstall it with ease. 

The last security set up I had accomplished was configuring SSH for my GitHub account. To do this, I had to generate a RSA security key and create a 
passphrase. Then, I had to link the passphrase to the SSH agent installed on my computer as well as add the RSA key to my GitHub account. 