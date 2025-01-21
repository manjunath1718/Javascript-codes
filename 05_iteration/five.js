const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )
/* 
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); */

// coding.forEach((val) => console.log(val));

coding.forEach((item, index, arr) => console.log(item, index, arr));

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  //   console.log(item.languageName);
  //   console.log(item.languageFileName);
});

myCoding.forEach(({ languageName, languageFileName }) => {
  console.log(languageName, "-->", languageFileName);
});
