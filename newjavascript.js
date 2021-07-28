<!DOCTYPE html>
<html>
    <head>
        <title>My apps</title>
        <style>
            body {
        background-image: url('Gondwana-Rainforest-Biggest-Forest-feature-update.jpg');
        background-repeat: no-repeat;
        background-size: 1950px 1000px;
        }
        </style>
        
    </head>
    <body style="text-align: center;">
    <h1 style="color: black" style="font-family:courier;">
        Wordy Counter
    </h1>
  
    <p>
        The text box will automatically count words with spaces.
    </p>
  
  
    <textarea id="word" oninput="countingWords()"
        rows="30" cols="100">
    </textarea>
    <br><br>
  
    <p style = "color: white"> Word Count:
        <span id="show">0</span>
    </p>
  
  
    <script>
        function countingWords() {
  
            // Get the input text value
            var words = document
                .getElementById("word").value;
  
            // Initialize the word counter
            var count = 0;
  
            // Split the words on each
            // space character 
            var split = words.split(' ');
  
            // Loop through the words and 
            // increase the counter when 
            // each split word is not empty
            for (var i = 0; i < split.length; i++) {
                if (split[i] != "") {
                    count += 1;
                }
            }
  
            // Display it as output
            document.getElementById("show")
                .innerHTML = count;
        }
    </script>
</body>
</html>
