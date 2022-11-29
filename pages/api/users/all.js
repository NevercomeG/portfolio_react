

export default async function(req, res) {

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {

res.status(200).json(data);
}) 
.catch((err) => {
res.status(500).json({message: "Something went wrong"});
});
}

