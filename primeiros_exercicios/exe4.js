var A = parseFloat(prompt("Digite o valor do produto"));
var B = parseInt(prompt("Digite a quantidade de parcelas"));

if(B == 3)
  {
    A *= 1.1;
    
    alert("o valor da parcela será de " + A/3 );
  }
else if(B == 5)
  {
    A *= 1.3;
    alert("o valor da parcela será de " + A/5 );
  }
else
  {
    alert("Só temos duas opções de parcelamento: 3 e 5");
  }
