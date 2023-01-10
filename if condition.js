const score = 55;

if (score >= 60) {
  console.log('Well done!');
} else {
  console.log('Try again!');
}

function getPrice(amount) { 
    if (amount < 20) {
      return amount * 10; 
    } else if (amount < 50) { 
      return amount * 8; 
    }
  
    return amount * 5;
  }
  
  getPrice(10);


const score1 = 70;
if (score1 >= 60) {
  console.log('Well done!');
}

const score2 = 59;

if (score2 >= 60) {
  console.log('Well done!');
}

function getTipsRating(amount) {
    if (amount === 0) {
      return 'terrible';
    }
  
    if (amount <= 10) {
      return 'poor';
    }
  
    if (amount <= 20) {
      return 'good';
    }
  
    if (amount <= 50) {
      return 'great';
    }
  
    return 'excellent';
  }
  
console.log(getTipsRating(12));