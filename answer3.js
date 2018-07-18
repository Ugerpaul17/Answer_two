//Write a javascript function that takes in an integer and writes to console the equivalent of the number as a string.//
var thousandth = ['','thousand','million', 'billion','trillion'];

var unit = ['zero','one','two','three','four',
'five','six','seven','eight','nine'];

var tenth = ['ten','eleven','twelve','thirteen',
'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];

var twemth = ['twenty','thirty','forty','fifty',
'sixty','seventy','eighty','ninety'];


function toWords(s){   //function to convert to words//
string= s.toString();

string= s.replace(/[\, ]/g,'');

if (string!= parseFloat(s)) return 'not a number';

var count = s.indexOf('.');//variable name called count//

if (count == -1) count = s.length;

if (count > 15) return 'too big';

var n = s.split('');

var str = '';

var skin = 0;//variable name called skin//
for (var i=0; i < x; i++){   //if statement//
        if ((x-i)%3==2){
        if (n[i] == '1'){
           str += tn[Number(n[i+1])] + ' ';
           i++;
           skin=1;}

       else if (n[i]!=0){
        str += tw[n[i]-2] + ' ';
        skin=1;}
                    }

    else if (n[i]!=0){
        str += dg[n[i]] +' ';
        if ((x-i)%3==0) str += 'hundred ';
        skin=1;}
        if ((x-i)%3==1){
          if (sk) str += th[(x-i-1)/3] + ' ';
          skin=0;}
     }

      if (x != s.length){
        var y = s.length;
        str += 'point ';
                for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
      }
  return str.replace(/\s+/g,' ');

}

console.log(toWords(111));