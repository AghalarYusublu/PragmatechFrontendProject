// ededler massivinin daxilində eyni tipli olan məlumatları ayrı ayrı massivlər şəklinə gətirən metod yazın
ededler = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters']

numbers=[];
booleans=[];
strings=[];
objects=[];



for (i = 0; i < ededler.length; i++){  
  if(typeof(ededler[i])==="number"){
    numbers.push(ededler[i])
  
  
}else if(typeof(ededler[i])==="boolean"){
    booleans.push(ededler[i])
  
}else if(typeof(ededler[i])==="string"){
    strings.push(ededler[i])
 
}else if(typeof(ededler[i])==="object"){
    objects.push(ededler[i])
  
}

}
 console.log(numbers);
 console.log(booleans);
 console.log(strings);
 console.log(objects);