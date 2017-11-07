
# Original Game

The game is basically an upgrade chain. There are 5 basic classes of animals:
Rabbit, Sheep, Pig, Cow and Horse.
At the beginning of each round, you can trade *once* (both ways). The exchange rates are the following:
   
- 6 Rabbits = 1 Sheep
- 2 Sheep = 1 Pig
- 3 Pig = 1 Cow
- 2 Sheep = 1 Horse
   
You can get animals by rolling two, 12 sided dices, each having a different layout.
If you roll two rabbits or sheeps or pigs; you earn 1 of that type.
Later, if you throw a rabbit, and you have one, the sum of what you have and what you threw (1 or 2) is halfed and given to you.<br>
    
_Example:_ You have three pigs, a rabbit and one sheep. You throw a pig and a sheep. Therefore you get two pigs and one sheep.

---

**Beware** there is a fox on one and a wolf on the other dice.
If you throw a fox, all your rabbits will be gone; if you throw a wolf, all your livestock will be gone execept rabbits AND horses.<br>
However, you can buy small dogs and big dogs; who will defend you *once* from their respective wild "partner"

_Example:_ You have seven rabbits a big dog and 4 pigs. You throw a wolf and a pig. Your big dog will automatically perish, but your pigs are saved and can breed that round; so you get 2 pigs.
Exchange rates for dogs are the following (you can either trade dogs or upgrade animals!):
-1 small dog = 1 sheep
-1 cow = 1 big dog

---

The ultimate goal is to have all livestock (not including the small and big dogs.)

## Implementation

To create a new user call   `createNewUser();`

The value of each animal (measured in rabbits) is called `values` _arrays_
The upgrade cost for each livestock animal is stored in `upgradeCost` _arrays_
The sum and maximum amount of animals is stored in `gameFieldHas` and `gameFieldMax` _arrays_ respectively.

*Writing AI*
you can interact with the code by using the 

`curr.doRound(what,which,where)`
function, where:
- **what** is the main action you want to do: 0 is nothing, 1 is trade, 2 is buying dogs
- **which** is needed if you choose to do something in that round. 0=rabbit 1=sheep 2=pig 3=cow 4=horse. Or true=small dog false=big dog
- **where** is whether you want to upgrade=true or downgrade=false. 

If an invalid function is called, it will just throw the dice, as if nothing was called.

the curr object has the following parameters:
`curr.has` stores the amount of animal you have (including dogs)
`curr.diceResult` _array[2]_ storing the results of the last dice.
`curr.topscore` is the sum points you have in all you livestock.
   
    
   
   
---
__Website created by Aron and Mate 2017 CC-BY-NC__

