# Overview 
   Text Book Mania is a way computer science (ICS) students, attending at the University of Hawaii at Manoa (UHM), can exchange their textbooks more easily and more actively. This project is developed as a direct way for ICS students to exhcange their textbook without using other web applcation such as craigslist. Services like craigslist are public service so finding a textbook another student is selling will be tedious and by the time you found that textbook, the ad was up for more than three days which could lead to another buyer to getting the book before you. With Text Book Mania you can put in a buy order of desired textbook for your ICS course and you will be given a list of other ICS student selling the textbook you desired. The process for selling a book is the same as well. Text Book Mania is a innovative way for students to get their books fast where buyers and sellers are straightforward and honest. The best thing about this application is that this service is free to all users that have an account with UHM. 

You can visit our [Wiki page](https://github.com/textbookmania/RoyalBlue/wiki) for a better understanding of our system. 

# Installation
Before you installed this application you will need to have a web framework Meteor installed. If you don't know what meteor is please refer to our wiki page before you proceed for it will save you an exorbatent amount of time. 

If you have meteor then below is how to install our application. 

### method 1 (if you don't have GitHub installed) 
1. Download the web application zip or tar package from our [GitHub Page](http://textbookmania.github.io/RoyalBlue). 
2. extract the file in any directory of your choice.

### method 2 (if you have GitHub installed, want to download package) 
1. Download the web application zip or tar package from our [GitHub Page](http://textbookmania.github.io/RoyalBlue).
2. Extract it to your local repository directory.

### method 3 (if you have GitHub installed, want to clone it)
1. Go to our [GitHub repository](https://github.com/textbookmania/RoyalBlue)
2. Clone to desktop and the GitHub will put it into your local repository


# Usage
1. bring up Git shell (Mac, Linux, or Windows). If you are using the terminal (Mac, Linux) or Windows Powershell then cd into your Github directory.    
2. cd into the app directory, then execute: 

```
meteor --settings ../config/settings.development.json
```

The settings file is needed to provide CAS parameter information. Note that you won't be able to successfully login until you edit the [settings.development.json](https://github.com/ics-software-engineering/meteor-example-uh-cas/blob/master/config/settings.development.json) file to indicate that your UH account should be one of those allowed to login.


# Credits
Developing a software implementation is one heck of a ride. There are ups and downs in our journey and we want to commemorate those who helped us along the way to get us Text Book Mania deployed and ready to service UHM ICS students. 

### Teams
We want to credit the team that helped us

1. Team Light Steel Blue 
   - Implementation of the  

2. Team Tomato 
   - Student page functionality 
   
3. SkyBlue 
   - UI design 
   - Communication

4. Professor Philip Johnson 
   - [Meteor Template](http://ics-software-engineering.github.io/meteor-application-template/)

### Applications 
We want to credit the applications that helped us achieve this web application

1. [Meteor](https://www.meteor.com/)

2. fontawesome : fontawesome

3. email

4. momentjs : moment

