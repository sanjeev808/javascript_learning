     /*charAt*/
     document.write("charAt")
     document.write("<br>")
     let str="Hi sanju ";
     document.write(str.charAt("4") )
     document.write("<br>")
     document.write("<br>")
     

     /*charCodeAt*/
     document.write("charCodeAt");
     document.write("<br>");
     let str1="Hi sanju ";
    document.write (str.charCodeAt(0));
    document.write("<br>");
    document.write("<br>");
    
    /*concatination*/
    document.write("concat");
     document.write("<br>");
    var str3 ="i am from ludhiana ";
    document.write(str+","+ str3);
    document.write("<br>");
    document.write("<br>");
    document.write("concat with function");
     document.write("<br>");
    document.write(str.concat(",",str3));
    document.write("<br>")
    document.write("<br>")
    /*endWith*/
    document.write("endsWith");
     document.write("<br>");
    let example1 = "hello World";
      document.write(example1.endsWith("Wo",8));
      document.write("<br>");
      document.write("<br>");
    /*startWith*/
    document.write("startsWith");
     document.write("<br>");
    let example2 = "hello World";
      document.write(example2.startsWith("e",0)); 
      document.write("<br>");
      document.write("<br>");
  /*fromCharCode*/
  document.write("fromCharCode");
     document.write("<br>");
     document.write(String.fromCharCode(85));
     document.write("<br>");
     document.write("<br>");
/*includes*/
document.write("includes");
     document.write("<br>");
     document.write(str3.includes("am"));
     document.write("<br>");
     document.write("<br>");
  /*indexOf*/
document.write("indexOf");
     document.write("<br>");
     document.write(str3.indexOf("i"))
     document.write("<br>");document.write("<br>");
      /* lastIndexOf*/
      document.write("lastIndexOf");
     document.write("<br>");
     document.write(str3.lastIndexOf("ludhiana"))
     document.write("<br>");document.write("<br>");
      /*length*/
      document.write("length");
     document.write("<br>");
     document.write(str3.length)
      document.write("<br>");document.write("<br>");
      /*localeCompare*/
      document.write("localeCompare");
     document.write("<br>");
     var ex1 = "abcd";
     var ex2 = "abcd";
     document.write(str3.localeCompare(ex2));
      document.write("<br>");document.write("<br>");
  /*repeat*/
      document.write("repeat");
     document.write("<br>");
     document.write(str1.repeat(2))
     document.write("<br>");document.write("<br>");
  /*replace*/
     document.write("replace");
     document.write("<br>");
     document.write(str3.replace("ludhiana" , "khanna "))
     document.write("<br>");document.write("<br>");
     /*search*/
     document.write("search");
     document.write("<br>");
     document.write(str3.search("ludhiana"))
     document.write("<br>");document.write("<br>");
/*slice*/
document.write("slice");
     document.write("<br>");
     document.write(str3.slice(4,15))
     document.write("<br>");document.write("<br>");       

     /*split*/
document.write("split");
     document.write("<br>");
     document.write(str3.split(""))
     document.write("<br>");document.write("<br>");       
/*trim*/
document.write("trim");
     document.write("<br>");
     var str4 = "      hello sanju    "
     document.write(str4.trim());
     document.write("<br>");document.write("<br>");       

     /*isLowerCase*/
document.write("toLowerCase");
     document.write("<br>");
     var str4 = "      HELLO sanju    "
     document.write(str4. toLowerCase());
     document.write("<br>");
     document.write("<br>");
     document.write("toUpperCase");
     document.write("<br>");
     document.write(str4. toUpperCase());
     document.write("<br>");document.write("<br>");       
