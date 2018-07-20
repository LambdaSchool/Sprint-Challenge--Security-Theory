To implement security I downloaded KeePass.
generate a long hased password for my gamil account 
changed my gamil password
added 2 factor authentication with my mobile(gmail app)
logged in with the new secured password and using 2 factor authentication.

Also added SSH key to my github account using following steps: 

1. Generate the key and save in my local machine. 

        Open Git Bash.

        Paste the text below, substituting in your GitHub email address.

        ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

        This creates a new ssh key, using the provided email as a label.

        Generating public/private rsa key pair.
        When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

        Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
        At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".
        Enter passphrase (empty for no passphrase): [Type a passphrase]
        Enter same passphrase again: [Type passphrase again]


2. Include the key in my github account: 

        Copied the SSH key to clipboard typing in terminal(git bash)
        clip < ~/.ssh/id_rsa.pub

        github--> setting --> add SSH and GPG keys and added a title 

        SSH Key buttonClick New SSH key or Add SSH key.
