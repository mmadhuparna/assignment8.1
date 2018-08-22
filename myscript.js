//declaring functions to show output in console
function isPrime(number)
	{
        var i;
        var prime = true; //by default considering number is prime
        if(number < 2)  // 0, 1 is not a prime number by definition
        {
            prime = false;
        }
        for(i=2; i <= Math.sqrt(number); i++)  //for loop to iterate the number till it return false
		{
			if(number%i == 0)
			{
				prime = false;
				break;
			}
        }
                return prime;
            }
    console.log(isPrime(96));  // returns false (not a prime number)
    console.log(isPrime(97)); // returns true (prime number)
    console.log(isPrime(98)); // returns false(not a prime number)
     
    //function to show the result in design view        
    function Prime()
			{
                var i, isprime = true;
				 num = Number(document.getElementById("N").value); // stores user input in variable num
                if(num < 2 )  // 0, 1 is not a prime number by definition
                {
                 isprime = false;
                }
				for(i=2; i <= Math.sqrt(num) ; i++ )  //for loop to iterate the number till it return false
				{
					if(num%i == 0 )
					{
						isprime = false;
						break;
					}
				}
				if(isprime == true)
				{
					window.alert(num+"-The inputed number is Prime");
					console.log("true")     //show result in console
				}
				else
				{
					window.alert(num+"-The inputted number is not Prime");
					console.log("false")    //show result in console
				}
			}
			
			