# Genetic-Algorithm
Click <a href="https://maayanbenshneor.github.io/Genetic-Algorithm/" target="_blank"><b>here</b></a> to test it out yourself.
<br>
Add walls with pressing and dragging the mouse.

## About
All of the dots are trying to get to the goal (the green circle at the top) they start with 0 knowledge on where to move and using genetic algorithm to figure out the
path to the goal. the red dot is the best one, the one who got the closest with the least steps in the previous generation.

## How Does It Work
At first they all start to move in random directions, at the end of the generation, the algorithm calculate the "fitness" of each dot which is how
close it got to the goal. then it chooses randomly dots to reproduce and pass their genes to the next generation, the better the dot did, the higher the
chances for it to reproduce. in each generation the algorithm also applies a small "mutation" which is a small direction change in each dot's brain, this helps to discover new
solutions that werent otherwise possible with just reproducing and passing genes.

## Limitations
The dots will have a hard time to go backwards if needed since their fitness is about getting as close as possible to the goal. they are not the best at
solving complicated mazes.
