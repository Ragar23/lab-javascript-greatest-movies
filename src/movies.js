// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (moviesArr) => {
  let directorsArr = moviesArr.map((eachMovie) => {
    return eachMovie.director;
  });
  return directorsArr;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
  //I need a filter for Steven Spielberg movies and for drama
  let spielbergMovies = moviesArr.filter((elem) => {
    if (elem.director === "Steven Spielberg" && elem.genre.includes("Drama")) {
      return true;
    }
  });
  return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
  //First I need to sum all the rates
  //then calculate the average of the rates

  let sum = moviesArr.reduce((acc, elem) => {
    return acc + elem.rate;
  }, 0);
  return sum / moviesArr.length.toFixed(2);

  //let average = sum / moviesArr.length;
  //return average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
//I need to get all the drama movies
//Then I need to calculate the average
function dramaMoviesRate(moviesArray) {
  let dramaMovies = moviesArray.filter((elem) => {
    if (elem.genre.includes("Drama")) {
      return 0;
    }
  });
  return dramaMovies.length;

  //Tried this --> let allDramaRate = dramaRate.reduce(() => {});
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//First I need to clone it
let clonedArray = Array.from(moviesArray);

function orderByYear(clonedArray) {
  clonedArray.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem1.year < elem2.year) {
      return -1;
    } else {
      if (elem1.title > elem2.title) {
        return 1;
      } else if (elem1.title < elem2.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return clonedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//Create the function, clone the array and then sort it with .sort()

function orderAlphabetically(moviesArray) {
  let clonedArray = JSON.parse(JSON.stringify(moviesArray));

  for (let i = 0; i < 20; i++) {}

  clonedArray.sort((elem1, elem2) => {
    if (elem1.title < elem2.title) {
      return -1;
    } else if (elem1.title > elem2.title) {
      return 1;
    } else {
      return 0;
    }
  });
  return clonedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate
