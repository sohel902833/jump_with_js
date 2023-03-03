const arr = [1, 2, 3, 4, 5];
arr.push("asdf");

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//<==========object==========>

const obj = {
  name: "Md Sohrab Hossain",
  lastName: "Sohel",
  age: 27,
  books: ["Book-1", "Book-2", "Book-3"],
};

console.log(obj.name);
console.log(obj.lastName);

for (let i = 0; i < obj.books.length; i++) {
  console.log(obj.books[i]);
}
