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

The first component of the project is to take care of is the mapping of the short url to the long url, and making sure that everything is mapped correctly according to the details established in the previous section. The second component is actually loading up the webpage via html. The disadvantage of this setup is that the user would have to store--in a database, text file, etc.--the connections of the map. If the user were to lose access to the map connections, then the program would not know which  short urls correspond to which long url.

**Interface vs Implementation**


**Abstractions (Indirection)**

