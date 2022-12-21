function truncate(str, maxlength) {
  let lnth = str.length;

  if (lnth > maxlength) {
    str = str.slice(0, maxlength - 1) + "...";
    console.log(str);
  } else {
    str = str;
    console.log(str);
  }
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);
