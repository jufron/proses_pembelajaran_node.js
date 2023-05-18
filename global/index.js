// todo global object

const ac = new AbortController();

ac.signal.addEventListener('abort', () => {
  console.log('aborted!') 
  { once : true} 
});


ac.abort();

console.log(ac.signal.aborted);  // Prints true

// console.log(__dirname); 

// * pembatalan interval
const interalID = setInterval(() => {
  console.log('Pesan ini akan muncul setiap 1 detik');
}, 1000);

setTimeout(() => {
  clearInterval(interalID);
  console.log('Interval telah dibatalkan');
}, 5000);

