# Advanced Web Technologies Final Project

Project is split into the Web & API component

The Web Application is developed using React, Redux & React Material Design

## Lab Description

 
Welcome to Night City!

City of Dreams, eh? Well, not really but… whatever! Welcome to Night City! So, why did you come in here? For glory, money, or just looking for a place to die?
Money, uh? Well, you might live long enough for that. Nice to meet you, Choomba. My name is Morgan Blackhand, and it is your lucky day: I have a job for you.

You see, 99% of this city is like you: jobless and hopeless. Corpos rule Night City and the rest of the world – but the rest of the world doesn’t matter. If you want money, you need to get your hands dirty. I can tell by just looking at you: you’re a coder and not a shooter, so don’t worry I’m not asking you to zero somebody.

People for hire are called mercs, those who give them jobs are fixers. And fixers need a platform to gather all the data we can find for available mercs and jobs. Think you can do that, Choomba?

Good.


The job.

The site must handle multiple things, it will be a long, tough job. We accept a work in progress at the end of the deadline, but make sure that what’s done is working fine!
What I will describe here is what we expect and should be respected. But the details are up to you and your creativity. 

1)	Mercs
Can’t create a site for fixers if we don’t talk about mercs… After all, they are the ones who do the job. So we need to register them.
A merc always has a nickname and a legal age. When they are registered, we give them a small gun: a Militech M-10AF Lexington. But we don’t give them any money (eddies) in advance: they must work for it!
A fixer should always be able to look through all registered mercs and create one if necessary.

2)	Guns, guns, guns!
A merc without a weapon is worse than stupid: he is useless! So, as a special service, the site will also be the official gun provider for mercs! We already have all the available guns inside our database, so let’s make money!
When you sell a weapon to a merc, he must pay for it, and NO advance! If he does have the money to buy a gun, you take the money right away. If he is even one eddie away from the price, he will have to work more!

3)	Jobs
Time to talk about Business with capital B. A fixer can declare a new available job any time.
A job must have a fixer name, a title, a description, the number of spotted enemies (can be 0 or more) and a reward in eddies (above 0, you crook!).
When a job is declared, it is marked as available. Any fixer can access the list of all available jobs declared.

4)	Getting the job done!
Now, here comes the fun! When a job is available, you can assign a merc to it! If the merc succeeds, he will get the reward, if he fails, he dies (on the job or after, whatever…).
The job always goes south, sadly. The merc will always have to fight the spotted henchmen for the job, one at a time.
A merc and a henchman both have 100 Health Points (HP). The merc always has the upper hand: he strikes first. His attacks are determined by the statistics of his weapon:
-	The accuracy stat shows the chance of hit the henchman in percent
-	The damage stat represents the number of HP removed from the henchman. If he reaches 0 or below, he dies
-	The firerate stat shows how many times the merc can attack before being attacked
-	Example: a weapon with an accuracy of 50, a damage of 75 and a firerate of 2 will have 2 attacks that both have 50% chances to inflict 75 points of damage).
-	If the henchman dies, then another one spotted for the job takes his place and a new fight starts. If he was the last henchman on the job, the job is not available anymore and the reward is given to the merc.
After the merc’s turn, the henchman attacks the merc, and always inflicts 10 points of damage. If the merc’s health reaches 0, well, sayonara Choomba! And of course, no time to rest during a job: his health doesn’t regenerate between fights…
