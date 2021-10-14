// TABLE=====================================================================================================

let PRACOWNICY = [
   { "imie": "Jan", "nazwisko": "Kowalski", "dzial": "IT", "wynagrodzenieKwota": "3000", "wynagrodzenieWaluta": "PLN" },
   { "imie": "Anna", "nazwisko": "Bąk", "dzial": "Administracja", "wynagrodzenieKwota": "2400.50", "wynagrodzenieWaluta": "PLN" },
   { "imie": "Paweł", "nazwisko": "Zabłocki", "dzial": "IT", "wynagrodzenieKwota": "3300", "wynagrodzenieWaluta": "PLN" },
   { "imie": "Tomasz", "nazwisko": "Osiecki", "dzial": "Administracja", "wynagrodzenieKwota": "2100", "wynagrodzenieWaluta": "PLN" },
   { "imie": "Iwona", "nazwisko": "Leihs-Gutowska", "dzial": "Handlowiec", "wynagrodzenieKwota": "3100", "wynagrodzenieWaluta": "PLN" },
]


// THEAD=====================================================================================================

let fields = Object.keys(PRACOWNICY[0]);

const getTabelHeader = fields => {
   const table = document.querySelector('.table__main');
   const thead = document.createElement('thead');
   const tr = document.createElement('tr');
   const fragment = document.createDocumentFragment();
   const caption = document.createElement('caption');

   fields.forEach(x => {
      const th = document.createElement('th');
      th.innerText = x;
      th.scope = 'col';
      th.id = x;
      fragment.appendChild(th);
   });
   caption.innerText = 'Lista pracowników oraz ich wynagrodzenie'
   tr.appendChild(fragment);
   thead.appendChild(tr);
   table.appendChild(thead);
   table.appendChild(caption);
};
getTabelHeader(fields)
// THEAD=====================================================================================================

// TBODY=====================================================================================================

function creatcontect(PRACOWNICY) {
   const getTabelData = PRACOWNICY => {
      const table = document.querySelector('.table__main');
      const tbody = document.createElement('tbody');
      PRACOWNICY.forEach(x => {

         const tr = document.createElement('tr');
         const fragment = document.createDocumentFragment();
         const keys = Object.keys(PRACOWNICY[0]);
         keys.forEach(y => {
            const td = document.createElement('td');

            td.innerText = x[y];
            td.setAttribute('data-label', y)
            fragment.appendChild(td);
         });

         tr.appendChild(fragment);
         tbody.appendChild(tr);
         table.appendChild(tbody);
      });
   };
   getTabelData(PRACOWNICY)
}
creatcontect(PRACOWNICY)
// TBODY=====================================================================================================

// ADD PERSON=====================================================================================================

document.querySelector('.btn__add-person').addEventListener('click', (e) => {
   const tfoot = document.querySelector('tfoot');
   const inputs = document.querySelectorAll('.add-person label input');
   let inpName = document.querySelector('.input__name');
   let inpLastName = document.querySelector('.input__last-name');
   let inpDepartment = document.querySelector('.input__department');
   let inpAmount = document.querySelector('.input__amount');
   let inpCurrency = document.querySelector('.input__currency');
   if (inpName.value && inpLastName.value && inpDepartment.value && inpAmount.value && inpCurrency.value != '') {
      const person = {
         imie: inpName.value,
         nazwisko: inpLastName.value,
         dzial: inpDepartment.value,
         wynagrodzenieKwota: inpAmount.value,
         wynagrodzenieWaluta: inpCurrency.value
      }
      inputs.forEach(elem => {
         elem.value = '';
      })
      const tbody = document.querySelector('tbody');
      tbody.parentNode.removeChild(tbody);
      if (e.target) {
         tfoot.classList.add('hide')
      } else {
         tfoot.classList.remove('hide')
      }
      let newArray = PRACOWNICY
      newArray.push(person)
      creatcontect(newArray)
   }
   else {
      alert('Wprowadz wszystkie dane żeby dodać osobę')
   }
});
// ADD PERSON=====================================================================================================

// TFOOT=====================================================================================================

const getTabelFooter = (fields, PRACOWNICY) => {
   const table = document.querySelector('.table__main');
   const tfoot = document.createElement('tfoot');

   fields.forEach(x => {
      if (x === 'dzial') {
         const tr = document.createElement('tr');
         const fragment = document.createDocumentFragment();
         const td = document.createElement('td');
         tr.classList.add('row1')
         td.innerText = x;
         fragment.appendChild(td);
         tr.appendChild(fragment);
         tfoot.appendChild(tr);
         table.appendChild(tfoot);
      };
   });


   function colDzial1() {
      const tfootName = document.querySelector('.row1');
      const tdItems = document.createElement("td");
      let rezult = '';
      for (let item of PRACOWNICY) {
         if (item.dzial === 'IT') {
            rezult = item.dzial
         }
      }
      tdItems.textContent = rezult;
      tfootName.appendChild(tdItems);
   }
   colDzial1()

   function colDzial2() {
      const tfootName = document.querySelector('.row1');
      const tdItems = document.createElement("td");
      let rezult = '';
      for (let item of PRACOWNICY) {
         if (item.dzial === 'Administracja') {
            rezult = item.dzial
         }
      }
      tdItems.textContent = rezult;
      tfootName.appendChild(tdItems);
   }
   colDzial2()

   function colDzial3() {
      const tfootName = document.querySelector('.row1');
      const tdItems = document.createElement("td");
      let rezult = '';
      for (let item of PRACOWNICY) {
         if (item.dzial === 'Handlowiec') {
            rezult = item.dzial
         }
      }
      tdItems.textContent = rezult;
      tfootName.appendChild(tdItems);
   }
   colDzial3()

   function colSum4() {
      const tfootName = document.querySelector('.row1');
      const tdItems = document.createElement("td");
      tdItems.textContent = 'Sum';
      tfootName.appendChild(tdItems);
   }
   colSum4()


   function sumRow() {
      const tr = document.createElement('tr');
      const fragment = document.createDocumentFragment();
      const td = document.createElement('td');
      tr.classList.add('row2')
      td.innerText = 'Sum';
      fragment.appendChild(td);
      tr.appendChild(fragment);
      tfoot.appendChild(tr);
      table.appendChild(tfoot);
      function colSum1() {
         let sum = 0;
         for (let item of PRACOWNICY) {
            if (item.dzial === 'IT') {
               sum += +item.wynagrodzenieKwota;
            };
         };
         const tfootName = document.querySelector('.row2');
         const tdItems = document.createElement("td");
         tdItems.textContent = sum
         tfootName.appendChild(tdItems);
      }
      colSum1()
      function colSum2() {
         let sum = 0;
         const tfootName = document.querySelector('.row2');
         const tdItems = document.createElement("td");
         for (let item of PRACOWNICY) {
            if (item.dzial === 'Administracja') {
               sum += +item.wynagrodzenieKwota;

            };
         };
         tdItems.textContent = sum
         tfootName.appendChild(tdItems);
      }
      colSum2()
      function colSum3() {
         let sum = 0;
         const tfootName = document.querySelector('.row2');
         const tdItems = document.createElement("td");
         for (let item of PRACOWNICY) {
            if (item.dzial === 'Handlowiec') {
               sum += +item.wynagrodzenieKwota;
            };
         };
         tdItems.textContent = sum
         tfootName.appendChild(tdItems);
      }
      colSum3()

      function AllSum() {
         let sum = 0;
         const tfootName = document.querySelector('.row2');
         const tdItems = document.createElement("td");
         for (let item of PRACOWNICY) {
            sum += +item.wynagrodzenieKwota;
         };
         tdItems.textContent = sum
         tfootName.appendChild(tdItems);
      }
      AllSum()
   }
   sumRow()
};
getTabelFooter(fields, PRACOWNICY)
// TFOOT=====================================================================================================


// TABLE=====================================================================================================


// SEARCH=============================================================================================

const input = document.querySelector('.search__person');
input.addEventListener("input", e => {
   const tfoot = document.querySelector('tfoot');
   const searchText = e.target.value.toLowerCase();
   const tbody = document.querySelector('.table__main tbody');
   const headerTh = document.querySelectorAll('.table__main thead th');
   let obj = [];
   for (let index = 0; index < tbody.children.length; index++) {
      obj[index] = {};
      for (let j = 0; j < tbody.children[index].children.length; j++) {
         const field = headerTh[j].id;
         obj[index][field] = tbody.children[index].children[j].innerText.toLowerCase();
      }
   }


   obj.forEach((elem, index) => {
      for (let text in elem) {
         if (elem[text].includes(searchText)) {
            tbody.children[index].hidden = false;
            return true
         } else {
            tbody.children[index].hidden = true;
         }
      }
   });



   if (searchText != '') {
      tfoot.classList.add('hide')
   } else {
      tfoot.classList.remove('hide')
   }
});

// SEARCH=============================================================================================



