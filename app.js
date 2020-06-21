/*String Methods
Task 1
var firstname=prompt("Enter your first name ");
var lastname=prompt("Enter your last name ");
var fullName=(firstname+' '+lastname);
alert("Welcome "+fullName);
Task 2
var favPhone=prompt("My favourite phone is: ");
var a=favPhone.length;
document.write("My favourite phone is: "+favPhone+"<br>"
	+"Length of string: "+a);
Task 3
var str = "Pakistani";
var a = str.indexOf('n');
document.write('String: '+str+'<br>'+
               "Index of 'n': "+a);
Task 4
var str = "Hello World";
var a = str.lastIndexOf('l');
document.write('String: '+str+'<br>'+
               "Last index of 'l': "+a);
Task 5
var str = "Pakistani";
var a = str.charAt(3); 
document.write('String: '+str+'<br>'+
               "Character at index 3: "+a);
Task 6
var firstname=prompt("Enter your first name ");
var lastname=prompt("Enter your last name ");
var cat = firstname.concat(lastname);
alert("Welcome "+cat);
Task 7
var str = "Hyderabad";
var a = str.replace("Hyder", "Islam");
document.write('City: '+str+'<br>'+
               "After replacement: "+a);
Task 8
var message = "Ali and Sami are best friends. They play cricket and football together";
var a = message.replace(/and/g, "&");
document.write(a);
Task 10
var str =prompt("peanuts");
var a = str.toUpperCase();
document.write('User input: '+str+'<br>'+
               "Upper case: "+a);
Task 12
var num = 35.36;
var n = Math.trunc(num);
document.write('Number: '+num+'<br>'+
               "Result: "+n);
               
Task 17
var str = prompt("Enter your word");
  var a = str.charAt(str.length-1)
  document.write('User input: '+str+'<br>'+
               "Last character of input: "+a);
Task 18
function count(str, str1) 
    {
    str += '';
    str1 += '';

    if (str1.length <= 0) 
    {
        return str.length + 1;
    }

       str1 = str1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (str.match(new RegExp(str1, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
document.write("Text: The quick brown fox jumps over the lazy dog"+'<br>'+
	          "There are 2 occurrence(s) of word 'the'");
Math Methods
Task 1
var int=prompt("Enter positive integer: ");
var num=Math.round(int);
var num1=Math.floor(int);
var num2=Math.ceil(int);
document.write("number: "+int+"<br>"+"round off value: "+num+'<br>'+
	            'floor value: '+num1+'<br>'+'ceil value: '+num2);
Task 2
var int=prompt("Enter negative floating point: ");
var num=Math.round(int);
var num1=Math.floor(int);
var num2=Math.ceil(int);
document.write("number: "+int+"<br>"+"round off value: "+num+'<br>'+
	            'floor value: '+num1+'<br>'+'ceil value: '+num2);
Task 3
var num=Math.abs(-4);
var num1=Math.abs(5);
document.write('The absolute value of -4 is: '+num+'<br>'+
	            'The absolute value of 5 is: '+num1);
Task 8
var num = prompt('Guess the number between 1 and 10 inclusive');
var num1 = Math.ceil(Math.random() * 10);
if (num == num1) alert('Congrats!You got it!');
else alert('Try Again');
Date Methods
Task 1
var a=new Date();
document.write(a);
Task 2
var month=new Date();
var monthName=new Array(12);
monthName[0]="January"
monthName[1]="February"
monthName[2]="March"
monthName[3]="April"
monthName[4]="May"
monthName[5]="June"
monthName[6]="July"
monthName[7]="August"
monthName[8]="September"
monthName[9]="October"
monthName[10]="November"
monthName[11]="December"
alert("Current month: " + monthName[month.getMonth()]); 
Task 3
Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function short_days(date)
{ 
   return Date.shortDays[date.getDay()];
}
date = new Date();
document.write(short_days(date));
Task 4
var today=new Date();
if(today.getDay() == 6 || today.getDay() == 0)
document.write("It's Funday");
Task 5
var days=new Date();
if(days.getDate() == 14 || days.getDate() == 0){
document.write("First fifteen days of the month");
}
else
document.write("Last days of the month");
Task 6
var minutes = new Date();
var minMili=minutes.getTime();
var minutesconvert=minMili/(1000*60*60)
document.write("Current Date: "+minutes+"<br>");
document.write("Elapsed milisecond since january 1, 1970: "+minMili+"<br>");
document.write("Elapsed minutes since january 1, 1970: "+minutesconvert+"<br>");
Task 7
var days=new Date();
if(days.getTime() == 10 || days.getTime() == 0){
alert("It's AM");
}
else
alert("It's PM");
Task 8
var laterDate = new Date();
laterDate.setFullYear(2020, 11, 31);
document.write("Later date: "+laterDate);
Functions
Task 1
var a=new Date();
document.write(a);
Task 11
function uppercase(str)
{
  var array = str.split(' ');
  var array1 = [];
    
  for(var x = 0; x < array.length; x++){
      array1.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return array1.join(' ');
}
document.write(uppercase("the quick brown fox"));
Task 12
function longestWord(str)
{
  var array = str.match(/\w[a-z]{0,}/gi);
  var word = array[0];

  for(var x = 1 ; x < array.length ; x++)
  {
    if(word.length < array[x].length)
    {
    word = array[x];
    } 
  }
  return word;
}
document.write(longestWord('Web Development Tutorial'));
Task 13
function count(str, letter) 
{
 var letterCount = 0;
 for (var num = 0; num < str.length; num++) 
 {
    if (str.charAt(num) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
document.write(count('JSResources.com', 'o'));
*/

