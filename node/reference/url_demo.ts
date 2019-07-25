const url =require('url');

const myUrl = new URL('http://mywebsite.com:8000/helllo.html?id=12343&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host  (root domain)
console.log(myUrl.host);

//hostname 
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//parameters
console.log(myUrl.searchParams);

// append search parms
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);