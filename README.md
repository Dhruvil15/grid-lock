## CSCI 1170: Group Assignment 2

- Game Name: Gridlock
- Authors: Saahir Monowar, Abdulrahman Mohamed Saif Al Kindi, Dhruvil Trivedi, Meet Kumar Patel, Wenhui Zhao

## Summary:

```
Our game features a series of puzzles where the player clicks on letters to select a word that matches the hints 
or images provided to them. As the player progresses, the levels get harder. There is an option to toggle between
light and dark mode. The first three puzzles are word-searches, with a hint-box feature that displays their hint for
the word. The next three are also word-searches, but with an image to accompany each grid that refers to the word.
After every 10 clicks, the grid will automatically deselect selected words, and reset the puzzle. Between levels,
a popup appears with instructions.
```

## Instructions

- Select light/dark mode before starting game (can't switch mid-puzzle)
- The player is given a hint in the form of a short sentence, or image. Note: programme won't allow you to
  change puzzles before you see the hint
- Using the hint, the player selects the buttons on the grid to select a word corresponding to their hint
- If the word matches the word intended by the hint, an alert let's them know
- After 10 button-clicks, the player's selection gets reset
- Note: The puzzle considers your word wrong if the first few letters are wrong, even if the player
  selects the right letters afterwards. I.E. "Car" would be right, but "abCar" would be considered incorrect
- the player can move on to the next level at any time using the button at the bottom of the screen
- Answers for the puzzles in order: "A", "Keys", "Amazon", "Apple", "Panda", "Steamship"
