![](https://raw.githubusercontent.com/ics-software-engineering/meteor-example-uh-cas/master/doc/meteor-example-uh-cas.png)

## Installation

Download the system, cd in the app directory, then execute:

```
meteor --settings ../config/settings.development.json
```

The settings file is needed to provide CAS parameter information. Note that you won't be able to successfully login until you edit the [settings.development.json](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/config/settings.development.json) file to indicate that your UH account should be one of those allowed to login.

## Walkthrough

Meteor-example-uh-cas is a fork of [meteor-application-template](http://ics-software-engineering.github.io/meteor-application-template/) that illustrates how to perform [University of Hawaii CAS authentication](https://www.hawaii.edu/bwiki/display/UHIAM/UH+Web+Login+Service+-+CAS+v3).

This application builds upon meteor-application-template to implement CAS authentication as follows:

First, it uses [atoy40:meteor-accounts-cas](https://github.com/atoy40/meteor-accounts-cas). (I also had to manually add the "random" package from the meteor core.)

Second, it defines a template called CasLogin in [CasLogin.html](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/app/client/templates/application/CasLogin.html) and [CasLogin.js](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/app/client/templates/application/CasLogin.js).  The CasLogin template is invoked in the [Header.html](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/app/client/templates/application/Header.html) to put the link in the navbar to login (and after successful login, to display the user name and a logout button).

Third, the [settings.development.json](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/config/settings.development.json) file provides the configuration parameters to the meteor-accounts-cas package. Note that only two users are allowed to sign in; you will want to edit this setting before adapting this code to your own application. 

Checking to see that only the users specified in the settings.development.json file are allowed is implemented in [Accounts.js](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/app/server/seeds/Accounts.js). This file defines a function for validating new users that checks the user-supplied account name against the list of authorized account names in the settings file.

## Screencast

Click the image below to watch a 10 minute walkthrough of this system.

[<img src="https://raw.githubusercontent.com/ics-software-engineering/meteor-example-uh-cas/master/doc/meteor-example-uh-cas-youtube.png" width="600">](https://www.youtube.com/watch?v=HA_NAdsr-yw)

## Credits

Thanks to [Yongwen Xu](https://github.com/yongwen) for the sample code! 


