   var d =new Date();
      //  document.write(d);
        document.write("current date ");
        var year = d.getUTCFullYear();
        var month = d.getUTCMonth()+1;
        var date = d.getUTCDate();
        document.write(date +" /"+ month+" /"+ year);
