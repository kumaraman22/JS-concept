async function getData(){
    let dataFetch = await fetch("https://jsonplaceholder.typicode.com/posts")

console.log(await dataFetch.json());
};

getData();
