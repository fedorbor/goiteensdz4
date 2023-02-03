// const a ='50px';
// const b = Number.parseInt(a);
// console.log(a);
// console.log(Number.parseInt(a));
// const x ='50.27px';
// const y = Number.parseFloat(x);
// console.log(x);
// console.log(y);
// const c = 232.232;
// const d = c.toFixed(2);
// const e = Number(d);
// console.log(d);
// console.log(e);

// const firstName = 'Mango';
// const lastName = 'Lee';
// const room = 716;
// const type = 'VIP';
// const userData = "Гість " +firstName+" "+lastName+" поселяється в " +room+" номер "+type;
// console.log(userData)
// «Гість x y поселяється в g номер q»,
// 3
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat =isOnline && isFriend && !isDnd ;
// console.log('Можна відкрити чат? ', canOpenChat);
const sub = 'free';

// якщо користувач pro або користувач vip тоді є доступ

const canAccessContent = sub==="pro" || sub==="vip" ;

console.log('Є доступ до контенту? ', canAccessContent);