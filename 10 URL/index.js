import url, { URLSearchParams } from 'node:url';


// const myURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

// const hostName = myURL.host;
// const hostName2 = myURL.pathname;
// const hostname3 = myURL.hostname;
// const portName = myURL.port;
// const protocolName = myURL.protocol;
// const hashURL = myURL.hash;
// const hrefURL = myURL.href;

// console.log(hostName);
// console.log(hostName2);
// console.log(portName);
// console.log(protocolName);
// console.log(hashURL);
// console.log(hrefURL);

// console.log(hostname3);

// const url2 = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

// const url3 = new URL('https://example.org/abc?123');

// console.log(url2.origin);
// console.log(url2.password);
// console.log(url2.pathname);
// console.log(url2.port);
// console.log(url3.search);

// url3.search = 'name=james';
// console.log(url3.href);

// const url4 = new URL('https://example.org/abc?foo=~bar');
const url5 = new URL('https://abc:xyz@example.com');

// console.log(url4.search);

// url4.searchParams.sort();

// console.log(url4.search);

// url5.username = 'james';

// console.log(url5.username);

// console.log(url5.href);

// const myurl = new URL('https://example.org/?abc=123');

// console.log(myurl.searchParams.get('abc'));

// myurl.searchParams.append('nama', 'jufron');
// myurl.searchParams.append('umur', 23);
// myurl.searchParams.append('email', 'jufrontamoama@gamil.com');

// myurl.searchParams.set('jurusan', 'teknik informatika');

// myurl.searchParams.delete('umur');
// myurl.searchParams.delete('email');

// myurl.search = 'sinta';

// console.log(myurl.href);

const myurl = new URL('https://www.example.com/search?q=node.js');

console.log(myurl.search);
console.log(myurl.pathname);

const params = new URLSearchParams(myurl.search);

params.set('namaBarang', 'iphone 12');

console.log(params.toString());