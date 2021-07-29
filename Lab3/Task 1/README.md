In this task I had to use a script file to automate some parts of the process with the 2.2 task. 
I went to this website to download the small movies file of 1KB: https://grouplens.org/datasets/movielens/latest/. Then I took the movies file and exported them out to my local drive.
I had to rename the file for the sake of not strugling to type it up later.


First we have to go to the local folder and open Git Bash there.


![Inkedimg1_LI](https://user-images.githubusercontent.com/87336176/127564281-1c80191c-b85e-48ea-b309-a72cc71c71b9.jpg)

Soon after clicking GitBash, we have to ask bash which is it with the command: $ which bash
After bash tells you which bash it is, you have to copy it by right clicking the mouse and clicking copy.
![IMG2](https://user-images.githubusercontent.com/87336176/127564586-38da384d-dd19-4fa4-83ad-b4cb5b1fd20d.jpg)

Next we need a script command in .sh, and you can name the script however you want, I used this command: $ nano sorting.sh.
Which would then create a new file in your local repository and you would be able to type in this new file. 

![img3](https://user-images.githubusercontent.com/87336176/127564991-e490e51c-5086-44a9-bda9-360d6d3d80c6.jpg)

Since my .csv file has many rows and 3 columns, I decided to sort it by name. But before inputting that sort command, we need to input #! ___/

Where the spaces indicate the location of the bash in the earlier step.
After inputting #! with the location of where the bash is located I sorted them with this command:
$ sort -t"," -k2 moviies.csv > sorted.txt

![img4](https://user-images.githubusercontent.com/87336176/127565489-cd9a6138-6449-41c5-811c-33b38066c90b.jpg)

This will do a few steps: First it will sort by name in order, I designated a comma because the bash will not see it and will seperate columns with a comma.
The -k2 indicated that it is the second column after the comma and the > will translate the sorted command into a file. In my case its a txt file.
![img4](https://user-images.githubusercontent.com/87336176/127566333-3cf7c155-e32f-497e-88d1-66aef5036f56.jpg)

Save it by using CTRL + O to save it and click enter as it will save in the sctipt file. Then CTRL + X to exit the window. 
Then input: $ bash sorting.sh that will automatically sort it and translate it into the txt file that will be made in your local directory.

![img5](https://user-images.githubusercontent.com/87336176/127566631-bc91c57b-f9e4-41d3-b4c1-808159eabd97.jpg)

![img6](https://user-images.githubusercontent.com/87336176/127566655-586b83c4-6888-476f-bbbf-f18995989f80.jpg)

