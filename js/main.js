
fetch("/data.json")
   .then(response => response.JSON())
   .then(JSON => console.log(JSON()))

// TABLE=====================================================================================================




























//const names = document.querySelector('.table__names');
//const surnames = document.querySelector('.table__surnames');
//const departmens = document.querySelector('.table__departmens');
//const solary = document.querySelector('.table__solary');
//const currency = document.querySelector('.table__currency');
////const profession = document.querySelector('.--profession');
////const summ = document.querySelector('.table__summ');

//const items = document.querySelector('.table__items');

//PRACOWNICY.forEach(item => {
//   let liName = document.createElement("td");
//   liName.textContent = item.imie
//   items.appendChild(liName);




   //let liName = document.createElement("li");
   //liName.textContent = item.imie
   //names.appendChild(liName);

   //let liSurnames = document.createElement("li");
   //liSurnames.textContent = item.nazwisko
   //surnames.appendChild(liSurnames);

   //let liDepartmens = document.createElement("li");
   //liDepartmens.textContent = item.dzial
   //departmens.appendChild(liDepartmens);

   //let liSolary = document.createElement("li");
   //liSolary.textContent = item.wynagrodzenieKwota
   //solary.appendChild(liSolary);

   //let liCurrency = document.createElement("li");
   //liCurrency.textContent = item.wynagrodzenieWaluta
   //currency.appendChild(liCurrency);



   //let liProfession = document.createElement("li");
   //liProfession.textContent = item.dzial
   //profession.appendChild(liProfession);
   
//});



// SEARCH=============================================================================================
//document.querySelector('.search__btn').addEventListener('click', seachPerson);
//function seachPerson() {
//   let personIn = document.querySelector('.search__person');
//   let out = document.querySelector('.search__out');

//   PRACOWNICY.forEach(item => {
//      for (key in item) {
//         if (personIn.value == item.imie || personIn.value == item.nazwisko) {
//            out.value = item.wynagrodzenieKwota
//            console.log(item.wynagrodzenieKwota);
//         } else {
//            console.log('No name');
//         }
//      }
//   });
//   personIn.value = '';
//};

