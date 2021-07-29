searchID() {
echo "Enter ID of the movie by number: "
read ID
grep $ID movies.csv
}

searchTitle() {
echo "Enter movie title: "
read Title
grep $Title movies.csv
}

seachGenre() {
echo "Enter genre of the movie: "
grep $Genre movies.csv
}

echo -e "Enter a number 1-3 in order to make a search by \n1.search by ID, \n2.search by movie, \n3.search by genre."
read choice

if[ $choice -eq 1]
then
searchID
fi

if[ $choice -eq 2]
then
seachTitle
fi

if[$choice -eq 3]
then
search Genre
fi
