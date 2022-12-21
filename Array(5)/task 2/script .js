
//  Let’s try 5 array operations.

    let styles;

    // 1.Create an array styles with items “Jazz” and “Blues”.
    console.log( styles = ["Jazz","Blues"]);
    
    // 2.Append “Rock-n-Roll” to the end.
    console.log( styles.push("Rock-n-Roll"));

    /*3.Replace the value in the middle with “Classics”. Your code for finding the middle value should work 
      for any 4.4.4.arrays with odd length.*/

    let res = ((styles.length) / 2)
    console.log( styles[( Math.trunc(res))]=("Classics")); 

    // 4.Strip off the first value of the array and show it.
    console.log(styles.shift());


    // 5.Prepend Rap and Reggae to the array.
    console.log(styles.unshift("Rap" , "Reggae"));


    
    console.log(styles);
