var select = document.querySelectorAll(".currency"),
input_currency = document.getElementById('input_currency'),
output_currency = document.getElementById('output_currency');

fetch(`https://api.frankfurter.app/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    console.log(data)
	  for (var i = 0; i < entries.length; i++) {
	    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
	    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
	  }
   	
});

function convert(){
 	input_currency_val = input_currency.value;
 	if(select[0].value != select[1].value ){
 		const host = 'api.frankfurter.app';
		fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
		  .then((val) => val.json())
    	.then((val) => {
		    //alert(`10 GBP = ${data.rates.USD} USD`);
		    output_currency.value = Object.values(val.rates)[0]
		    console.log(Object.values(val.rates)[0])
		});
 	}else{
 		alert("Please select two different currencies")
 	}
}
