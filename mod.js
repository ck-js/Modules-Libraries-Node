 const pi = 3.14;

const flight = "Air Asia";

const query = (flight, location, destination) => {
const ques = flight + " flight for " + location + " to " + destination +
" available or not";
return ques;

}
console.log(query(flight, "New York", "London"));

export {pi, flight, query};