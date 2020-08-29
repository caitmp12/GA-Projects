1. Technologies used

Avengers Assemble uses HTML, CSS, Javascript, Jquery, and JqueryUI


2. Approach Taken

I had originally imagined a fun-but-simple memory matching game involving Avenger characters. I started with creating my initial DOM, including the background, Loki's image, an "assembly" section, and the grid which holds the six original Avengers. 

The original playing cards used a combo of hard-code and data from my chosen API. I was able to pull from the API by looping over the data's objects, matching with the ids used in my HTML. 

Prompts were used to guide the player from one function to the next, until Loki "splits" the Avengers and there are twelve cards. 

And that is where I got stuck. Oh boy, did I get stuck. 

Once it became obvious that I was not going to be able to execute my original idea in time, I decided to pivot. 

The final product is less of a game, and more of place for program-guided user DOM manipulation. 

In the end, it hits the MVPs, with Ajax implemented, a (somewhat) responsive design, and jQueryUI features such as draggable() and bounce. 


3. Link to site

https://my-project-ecru.vercel.app/

4. Installation Instructions



5. Unsolved problems

Unsolved problems include the following:
    -Functionality that allows the playing cards to "flip", and therefor be matched. 
    -Reloading original Dom once the "game" is finished. 
    -CSS, specifically making images and divs reactive to fit the container space as it changes. 
