## URL Shortener Notes

**Overview**

The problem: Long URLs are too long, messy, and hard to remember.

Solution: Take any long URL input from the user and output a shorter URL that's easier to remember.


**Mapping**
- The short url and long url should take you to the same website.
- *Alius*: A shorter way of referring to an item.
  - Ex. Short url is an *alius* (a "nickname") of the long url; both refer to the same website.

Potential scenarios for mapping:
  1. One to one (1 short url <--> 1 long url)
  2. Many to one (Many short urls <--> 1 long url)
  3. One to many (1 short url <--> Many long urls)

Let's explore each scenario in greater detail:

  1. One short url mapped to one long url: This is main function of the project - To be able to create a shorter alius of the longer url, and map them together so that the system knows which short url corresponds to which longer counterpart.
![IMG_6458](https://github.com/user-attachments/assets/da998604-c00c-4a59-9aca-fb1ade8711b9)

  
  2. Many short urls mapped to one long url: In some cases, the user of the URL Shortener may want to create numerous shortened urls that takes one to the same website. Therefore, this is a scenario that we must account for and allow.
![IMG_F9CA482FD7FD-1](https://github.com/user-attachments/assets/6ca1f797-65da-46f1-badf-3fbf91137f4e)


  3. Many long urls mapped to one short url: In this scenario, the program would encourter a problem. If the user were to click on their newly created short url, the system would see that it is mapped to numerous long urls, and would've know which website to display. Therefore, we cannot allow more than one long url to map to the same short url; one short url may only map to one long url.
![IMG_B8C641F79BA9-1](https://github.com/user-attachments/assets/fa714cb6-18f4-491f-9044-49bf3dc02ec8)


**The 2 seperate components of the project**

![IMG_17743EEB2681-1](https://github.com/user-attachments/assets/52787b0d-229b-43fd-821d-d7a8fe3beb59)


The first component of the project is to take care of is the mapping of the short url to the long url, and making sure that everything is mapped correctly according to the details established in the previous section. The second component is actually loading up the webpage via http requests. The disadvantage of this setup is that the user would have to store--in a database, text file, etc.--the connections of the map. If the user were to lose access to the map connections, then the program would not know which  short urls correspond to which long url.

**Interface vs Implementation**

*Interface*: Used to specify a specific set of functions or methods that a class should have, without actually implementing what the methods do. The interface only specifies what general behaviors that an object should have, but not actually how it is  implemented. 

*Implementation*: The implementation "implements" the functions that are specified in the interface. However, whereas the interface only outlines what functions something should have, the implementation specifies what eachf function actually does. 


**Abstractions (Indirection)**

*Abstraction* is when we decide to hide or reveal certain functions of the program to the user such that when the user wants to perform an action, the program will execute that action, but may hide some background tasks from the user. The benefit of this is better readability of the code and a more simplified and streamlined user experience. 


Notes resources: 

https://docs.oracle.com/javase/tutorial/java/concepts/interface.html

https://www.geeksforgeeks.org/interfaces-in-java/

https://stackoverflow.com/questions/1321122/what-is-an-interface-in-java

https://www.geeksforgeeks.org/abstraction-in-java-2/


Server resources: 

https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/

https://youtu.be/f3uCSh6LIY0?si=AI1b5bcQeeaFVz7Q

https://youtu.be/W6NZfCO5SIk?si=OJDHcUuX6i4zc0X8

Git resources:

https://www.freecodecamp.org/news/error-src-refspec-master-does-not-match-any-how-to-fix-in-git/



**Git Notes:**

git init (initialize a new git)

ls -a (list out the files in directory)

git remote add origin "html url of github repo"

git clone "html url of github repo"

git status

git add "file.name"

git add -A

git commit -m "message" 

git branch -a

git push -u origin main


**PostgrSQL Notes:**

List the databases to the terminal: \l

Create a database: CREATE DATABASE <name of database>;

Connects to a database in terminal: \c <name of database>

List tables of a dataset: \d

List a specific table in database: \d <table_name>

View entries in a specific table: select * from <table_name>;

Creating a table:
CREATE TABLE urls (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  longUrl TEXT,
  shortUrl TEXT
);

Adding column to table: ALTER TABLE <table_name> ADD COLUMN <new_column_name> <DATA_TYPE>;

Dropping column from table: ALTER TABLE <table_name> DROP COLUMN <column_name>;

Dropping a table: drop table <tableName>;

Add entry: 
INSERT INTO urls (longurl, shorturl) VALUES ('google.com', 'gg');
INSERT INTO urls (longurl, shorturl) VALUES ('netflix.com', 'nflx');

Updating an entry:
UPDATE urls SET clicks = 3 WHERE id = 1;