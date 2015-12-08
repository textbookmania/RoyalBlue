## Where to Start 

Text Book Mania is a web application that is built upon the meteor web framework. If you are not familiar with Meteor please visit their [wiki page](http://docs.meteor.com/#/full/quickstart). If you don't fancy the wiki page, [meteor's](https://www.meteor.com/) website would make a good start to learn about meteor without the overflowing amount of information. 

Text Book Mania also utilizes the University of Hawaii at Manoa CAS system so an account (MYUH, Laulima, gmail) with University of Hawaii at Manoa is needed to use this application. If you have an account with University of Hawaii at Manoa please proceed to instalation of the application.

## Usage

1. Download the web application from our [GitHub](http://textbookmania.github.io/RoyalBlue) page
2. Extract it to your local repository directory.
3. bring up Git shell (Mac, Linux, or Windows). If you are using the terminal (Mac, Linux) or Windows Powershell then cd into your Github directory.    
4. cd into the app directory, then execute: 

```
meteor --settings ../config/settings.development.json
```

The settings file is needed to provide CAS parameter information. Note that you won't be able to successfully login until you edit the [settings.development.json](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/config/settings.development.json) file to indicate that your UH account should be one of those allowed to login.

## What is Text Book Mania
First you must sign in using your UHM account. Once you are logged in you will see a large image with six ordered buttons as followed 
1) Students
2) Buy Books
3) TextBooks
4) Sell Books
5) Matches
6) Help

## Students
This display the students of University of Hawaii at Manoa Computer Science 

## Buy Books
The Buy Books page will list 


## Text Books
Text Books page will bring you to a list of all textbooks use in the Computer Sciece (ICS) mahjor. Each book will be listed with its ISBN and description about the books such as what ICS course will use the desired textbook.  


## Sell Books
To sell books click on the Sell Books button or hover your mouse over the navigation bar "Sell" sections. You will be prompted with a box with text box fields to fill in. These fields are Textbook title, ISBN, condition of the book, price of the book, and amount of the text book you are selling.  

## Matches
This will give you potential buyers or sellers that are either buying or selling the book you currently have or looking for 

## Help

Show new users how to use this web application 

## Credits

Thanks to Team LightSteelBlue for the Textbook list implementation.  

