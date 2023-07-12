# file
Asynchronous CRUD methods for Files.

To Use: 
  1. await new file( "filename", "encoding" [optional - default 'utf8'] ).get();

Methods:
  1. exists
    -Checks to see if a file exists. Returns boolean.
  2. get
    -Returns the file contents as a string. Throws an error if the filename doesn't exist.
  3 create
    -Takes a string as an argument and creates a file with the given string as the body. Throws an error if the file already exists.
  4. delete
    -Deletes the file. Throws an error if the file doesn't exist.
  5. update
    -Takes a string as an argument and changes the body of the file to the given string.
