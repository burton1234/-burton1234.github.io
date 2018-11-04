
                let x = parseInt(document.getElementById("value1").innerHTML);
                let y = parseInt(document.getElementById("value2").innerHTML);
                
                let result = 35.74 + (0.6215 * x) + (0.4275 * x - 35.75)  *  y ^ 0.16;
                
                // Output - round to one decimal and output to div
                document.getElementById("output").innerHTML =
                 "The Wind Chill Is <strong>" + result.toFixed(1) + "</strong>.";
