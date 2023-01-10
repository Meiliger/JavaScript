function getString() {
    const greeting = 'Hello, Mate Academy!'
    return greeting;
  };
  
  const hey = getString();

  console.log(hey);


function greeter1(name) {
    return `Hi, ${name}!`;
  }

  const sayHi = greeter1('Anna');
  console.log(sayHi);


  function greeter2(name, partOfTheDay) {
    const goodDay = `Good ${partOfTheDay}, ${name}!`;
    return goodDay;
  };
  
  const wishGoodMorn = greeter2("Paul", "morning");
  
  console.log(wishGoodMorn);