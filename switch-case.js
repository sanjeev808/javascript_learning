let day= new Date();
current = day.getDay();

switch (current) {
  case 0:
    current = "Sunday";
    break;
  case 1:
    current = "Monday";
    break;
  case 2:
    current = "Tuesday";
    break;
  case 3:
    current = "Wednesday";
    break;
  case 4:
    current = "Thursday";
    break;
  case 5:
    current = "Friday";
    break;
  case 6:
    current = "Saturday";
}
document.write(" today is " + current)