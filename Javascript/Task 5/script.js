const persons = [
        {
          "name": "Adam",
          "age": 25,
          "place": "New York",
          "dob": "1998-03-12"
        },
        {
          "name": "Big E",
          "age": 32,
          "place": "Los Angeles",
          "dob": "1991-07-19"
        },
        {
          "name": "Dish",
          "age": 41,
          "place": "Chicago",
          "dob": "1982-11-03"
        },
        {
          "name": "Daniel",
          "age": 18,
          "place": "Houston",
          "dob": "2005-05-08"
        },
        {
          "name": "Emi",
          "age": 29,
          "place": "San Francisco",
          "dob": "1994-09-26"
        },
        {
          "name": "Frankenstein",
          "age": 36,
          "place": "Boston",
          "dob": "1987-12-30"
        },
        {
          "name": "Grace",
          "age": 22,
          "place": "Miami",
          "dob": "2001-01-14"
        },
        {
          "name": "Harry",
          "age": 47,
          "place": "Seattle",
          "dob": "1976-06-21"
        }
]
const List = document.getElementById("list");
persons.forEach(e => {
    const h2 = document.createElement("h2");
    h2.innerText = `name = ${e.name} , age = ${e.age}`;
    List.appendChild(h2);
});
