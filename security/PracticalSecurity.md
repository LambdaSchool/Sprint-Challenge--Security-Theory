## Practical Security

### Current Security State

I use KeePassX as my password manager. I use a password and a keyfile to unlock the password manager. The password is sufficiently large (*greater than 32 characters*) and is memorable (*I've remembered it for a decade!*). For convenience, the encrypted password file is stored in a file-sync or cloud service, so I can access the file across multiple devices.

The keyfile used to unlock it is generated through whatever standard process KeePassX employs. That key is *never* shared through a cloud or file-syncing service. The key is copied by USB to any other device on which I need access to my passwords, then is deleted off the USB.

I am particular on the sharing solution for the password file itself. I used to save it on Google Drive or Dropbox, but the problem is that these services have some sort of file change history. This is amazing for most situations but not for this one, because multiple versions of the password file aids in decrypting the file without the keys. Even worse, they would only need to compromise my Google or Dropbox account to have access to this file and its history. While the chance of an adversary going through this vector is really low, I'm paranoid enough that this is no good. 

Thus, I am using "Resilio Sync" to sync files between my computer. The files are synced over my private network, so no cloud service is employed to share this file between devices. Their is a file history, but it is saved on the devices themselves, so employing the above vector would require physical possesion (*which at that point, other vectors are more efficient*).

Another fun thing I do is encapsulate my personal browsing in an encrypted Veracrypt container. This has some security benefits, but I'd have to change some habits to fully realize them. This is mainly done to better separate my personal and school/work browsing. The big upside is a nice clean history filled with Computerphile videos, Github repos, and Medium articles, because all the ...*other* stuff is in a different Firefox profile locked in an encrypted container. Perhaps when I start working, I can do put my work browsing/activities in a similar encrypted container.

### Steps Taken



