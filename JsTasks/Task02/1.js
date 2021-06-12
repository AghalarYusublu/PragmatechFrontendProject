// ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
ededler = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

yeniEdedler=[];



for (i = 0; i < ededler.length; i++){  
  if((typeof(ededler[i]) === "number")===true){    
    yeniEdedler.push(ededler[i])
    
  }
}  
  console.log(yeniEdedler)
