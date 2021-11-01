function myInt(){
    let money, result;
    money = document.getElementById('input'). value;
    if (money <= 40000){
     result = Math.floor(money * 0.0175)
    } else if (money <= 45000){
      result = Math.floor(money * 0.0185)
    } else if (money <= 50000){
      result = Math.floor(money * 0.0200)
    } else if (money <= 55000){
      result = Math.floor(money * 0.0210)
    } else if (money <= 60000){
      result = Math.floor(money * 0.0220)
    } else if (money >= 60001){
      result = Math.floor(money * 0.0225)
    };
    document.getElementById('result').innerHTML = result;
  }