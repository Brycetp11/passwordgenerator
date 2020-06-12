# passwordgenerator

This project was built to create a random password of any length given a set of parameters which include the types of characters in said password (ie. lower case letters, upper case letters, numbers, and special characters).

I started with 5 different arrays, one for each character type (described above), and the last last an empty array to be filled later.

Then I added a prompt for the user to select the number of characters in the password. Then I added a series of conditional statements for the user to select the characters they would like to use. Inside of each of the if statements exists a 'concat' command to add the characters of the array to the selectable characters for the password.

I then added a for loop to select a random element from inside the new array for each character in the in the password.

Finally i returned the password as an output for the user.

I wrapped this all in a function called 'generatePassword' so it would function with the code given.