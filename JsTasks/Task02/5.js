// ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın
ededler=[1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];

strings = [];
saitler = [ 'a','ı','o','u','e','ə','i','ö','ü' ];




for(var i=0; i<ededler.length;i++){
  if((typeof(ededler[i]) === "string")){
   strings += ededler[i].toLowerCase();
   

  }
}
let count = 0;

 for(var j=0;j<strings.length;j++){
  for(var k=0; k<saitler.length;k++){
    if(strings[j] === saitler[k]){
      count++
    }
  }
 }
let samit = strings.length - count;

console.log('Massivdə ' + count + ' sait var');
console.log('Massivdə ' + samit + ' samit var');