# Javascript OOP konseptləri nələrdir?

## Object Oriented Programmingin 4 əsas prinsipi var.Abstraction, İnheritance,Encapsulation,Polymorphism

1. Abstraction:
- Abstraction tətbiqin gizlənməsi deməkdir. Bu tətbiq detallarını gizlətməyin və yalnız çağırılan obyektin vacib xüsusiyyətlərini göstərən bir yoldur. Başqa sözlə, əlaqəsiz detalları gizlədir və yalnız xarici aləm üçün lazım olanı göstərir. Abstraksiya çatışmazlığı kodun davamlılığı problemlərinə səbəb olacaqdır.
### Numune:
    //Created an abstract class (constructor function)
    function Employee()
    {
    this.empName= "empName";
    if(this.constructor === Employee){
    throw new Error("FYI: Instance of Abstract class cannot be instantiated");
    }
    } ;
    // Method (function) of our abstract class
    Employee.prototype.display=function()
    {  return this.empName;  }
    var employee = new Employee();

    // Output: Error"FYI: Instance of Abstract class cannot be instantiated";


2. Inheritance:
- İnheritance OOP-nin əsas xüsusiyyətlərindən biridir.İnheritance bir sinifin xassələri başqa bir sinifdən əldə etmək və ya miras alma qabiliyyətidir. Siniflərimizdən biri başqa bir siniflə \
  ortaq bir xüsusiyyəti paylaşa bilər. Bizdə kod təkrarının qarşısın alıb daha sürətli kod yazmag üçün İnheritance prinsipindən istifadə edə biləriy.Nümunə ilə göstərək.

###  Nümunə:Məsələn bir İnsan sinifi yaradaq və name,surname və age kimi xüsusiyyətlər verək və sonda bir göstər methodu əlavə edək.
    class Man{
        constructor(name,surname,age){
            this.name=name;
            this.surname=surname;
            this.age=age
        }
        Show(){
            return `Mənim adım ${this.name} soyadım ${this.surname} ${this.age} yaşım var`
        }
    }

    let Man1 = new Man('Anar','Imanov',20)
    console.log(Man1.Show())


    // Output:Mənim adım Anar soyadım Imanov 20 yaşım var
    Gördüyünüz kimi bir İnsan sinifi yaratdıq və xüsusiyyətlər əlavə etdik.Indi biz bir Programçı sinifi yaratsaq programçınında name,surname, age, specialty kimi parametrləri olacaq bəs biz bu təkrarçılıq qarşısın necə alarıq? Bu zaman köməyimizə OOP-nin İnheritance prinsipi çatır.Miras almaq xüsusiyyəti vasitəsi ilə ilk üç parametri İnsan sinifində yaratdığımız üçün birdə təkrar o parametrləri yaratmıyacığ.

    class Man{
        constructor(name,surname,age){
            this.name=name;
            this.surname=surname;
            this.age=age
        }
        Show(){
            return `Mənim adım ${this.name} soyadım ${this.surname} ${this.age} yaşım var`
        }
    }

    class Programmer extends Man {
        constructor(name,surname,age,specialty){
            super(name,surname,age);
            this.specialty=specialty
        }
        programmerShow(){
            return this.Show() + ` Təhsil aldığım ixtisas ${this.specialty}`
        }
    }

    let programmer1 = new Programmer('Anar','Imanov',20,'Front-End Developer')
    console.log(programmer1.programmerShow())

    // Output: Mənim adım Anar soyadım Imanov 20 yaşım var Təhsil aldığım ixtisas Front-End Developer

    Nümunədəndə gördüyünüz kimi İnsan sinifinda yaratdığım name,surname və age paramertləri Programmer sinfində istifadə etdim yəni mənim birdə eyni parametrləri ikinci dəfə yaratmağa ehtiyacım qalmır.extends açar sözü vasitəsi ilə İnsan sinfində olan bütün metodları alır Programmer sinfinə əlavə edir.
    - extends: Ana sinifin xüsusiyyətini alır uşaq sinifinə əlavə eliyir.
    - super(): Bu metod ana sinifinə aiddir.Bu metod vasitəsi ilə ana sinifin constructor metodunu çağırırıq və Ana sinifin xüsusiyyətlərinə giriş edirik.

3. Encapsulation:
- Encapsulation məlumatı və ya məlumatı gizlətmək deməkdir. Bu, çağırılan obyektin hər hansı bir icra detalını açıqlamadan öz funksiyasını yerinə yetirmə qabiliyyətindən bəhs edir. Başqa sözlə, 
  xüsusi dəyişən yalnız cari funksiya üçün görünür və qlobal miqyasda və ya digər funksiyalarda əlçatmazdır. 
    ###  Nümunə:

    const Book = function (t, a) {
        let title = t;
        let author = a;
        return {
            summary: function () {
            console.log(`${title} written by ${author}.`);
            }
        }
    }
    const book1 = new Book('Hippie', 'Paulo Coelho');
    book1.summary();

    // Output: Hippie written by Paulo Coelho. 
    Yuxarıdakı kodda title və author yalnız Book funksiyası daxilində görünür və summary metodu Book-u çağırır. Beləliklə, title və author Book-un içərisinə daxil edilmişdir.

4. Polymorphism:
- Polimorfizm, tək bir hərəkətin müxtəlif formalarda həyata keçirilməsini təmin edən bir obyekt yönümlü paradiqmanın əsas konsepsiyasıdır. Adətən Obyekt Yönümlü Proqlamlaşdırmada bir methodun 
  başqa classlarda başqa cür işlədiyini göstərmək üçün polymorphism-dən istifadə olunur.

    ###  Nümunə: 
        class Dog{
            constructor(name){
                this.name=name
            }
            Sound(){
                console.log("hav hav");
            }
        }
        class Cat {
            constructor(name){
                this.name=name
            }
            Sound(){
                console.log("miyau")
            }
        }
        class Cock {
            constructor(name){
                this.name=name
            }
            Sound(){
                console.log("quqqiliqu")
            }
        }

        function animalSound(animal){
        animal.Sound()
        }

        let my_dog =new Dog('Maks')
        let my_cat =new Cat('Anayes')
        let my_cock =new Cock('Xoruz')
        animalSound(my_dog)
        animalSound(my_cat)
        animalSound(my_cock)

        // output: app.js:30 hav hav
        // output: app.js:38 miyau
        // output: app.js:46 quqqiliqu