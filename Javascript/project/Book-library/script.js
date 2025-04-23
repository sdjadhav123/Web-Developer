let book = [
   {
      title: "Rich dad poor dad",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0QsRrcySN6_00PcIPVKexoas3R9IhJMYJw&s"
   },
   {
      title: "Start with Why by Simon Sinek",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk9kYfPPlylRGgAV8HpcEwIo9H5Zqp_zPfA&s"
   },
   {
      title: "The Lean Startup",
      url: "https://rukminim1.flixcart.com/image/300/300/xif0q/regionalbooks/w/s/g/the-lean-startup-original-imagtf5rzz3fpgnp.jpeg"
   },
   {
      title: "The 7 Habits of Highly Effective People",
      URL: "https://images.blinkist.io/images/books/5294dbca3964330015000000/1_1/470.jpg"
   },
   {
      title: "Atomic Habits",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AVP0aULjnKtks1MCU0SGbzP6YbsuCrjaRg&s"
   },
]

function displayData ()
{
    movies.forEach((v,i) =>
    {
        const movieDiv= document.createElement('div')
        const movieImage = document.createElement('img')
        movieImage.src = v.url;
        movieImage.alt = v.title;
        const movieName = document.createElement('h2');
        movieName.textContent = v.title;
        movieDiv.append(movieImage, movieName)
        document.getElementById("main").append(movieDiv)
    })
}