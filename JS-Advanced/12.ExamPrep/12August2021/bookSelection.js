const bookSelection = {
    isGenreSuitable(genre, age) {
      if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
        return `Books with ${genre} genre are not suitable for kids at ${age} age`;
      } else {
        return `Those books are suitable`;
      }
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number") {
        throw new Error("Invalid input");
      }
  
      let result = budget - price;
  
      if (result < 0) {
        return "You don't have enough money";
      } else {
        return `Book bought. You have ${result}$ left`;
      }
    },
    suitableTitles(array, wantedGenre) {
      let resultArr = [];
  
      if (!Array.isArray(array) || typeof wantedGenre !== "string") {
        throw new Error("Invalid input");
      }
      array.map((obj) => {
        if (obj.genre === wantedGenre) {
          resultArr.push(obj.title);
        }
      });
      return resultArr;
    },
  };

  let books = [
    { title: "1", genre: "1" },
    { title: "2", genre: "2" },
    { title: "3", genre: "2" },
  ];
  const suitableTitles = bookSelection.suitableTitles(books, "2");
  console.log(suitableTitles); // Output: ["2", "3"]
  module.exports = bookSelection;