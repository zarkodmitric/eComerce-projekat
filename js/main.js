//Globalna promenjiva
let iznos = 0;

function cenaKorpe() {
    alert('Ukupno: $' + iznos)
}

function dodajNaIznos(cena) {
    iznos += cena;
    console.log('Ukupan iznos : $' + iznos);
}

// Prvi proizvod
const PRODUCT1_NAME = 'Muske Farmerke';
const PRODUCT1_PRICE = 35;
const PRODUCT1_QTY = 1;

// Drugi proizvod
const PRODUCT2_NAME = 'Zenske Farmerke';
const PRODUCT2_PRICE = 32;
const PRODUCT2_QTY = 35;

//Treci proizvod
const PRODUCT3_NAME = 'Zenske Farmerke';
const PRODUCT3_PRICE = 35;
const PRODUCT3_QTY = 2;

//Cetvrti proizvod
const PRODUCT4_NAME = 'Muska Jakna';
const PRODUCT4_PRICE = 49;
const PRODUCT4_QTY = 1;

//Peti proizvod
const PRODUCT5_NAME = 'Zenska Jakna';
const PRODUCT5_PRICE = 49;
const PRODUCT5_QTY = 1;

//Sesti proizvod
const PRODUCT6_NAME = 'Muska Kosulja';
const PRODUCT6_PRICE = 39;
const PRODUCT6_QTY = 20;

//Sedmi proizvod
const PRODUCT7_NAME = 'Muska Kosulja';
const PRODUCT7_PRICE = 32;
const PRODUCT7_QTY = 1;

//Osmi proizvod
const PRODUCT8_NAME = 'Zenska Majica';
const PRODUCT8_PRICE = 19;
const PRODUCT8_QTY = 4;

//Deveti proizvod
const PRODUCT9_NAME = 'Muski Sako';
const PRODUCT9_PRICE = 45;
const PRODUCT9_QTY = 12;

//Deseti proizvod
const PRODUCT10_NAME = 'Zenski Sako';
const PRODUCT10_PRICE = 45;
const PRODUCT10_QTY = 15;

//Jedanaesti proizvod
const PRODUCT11_NAME = 'Suknja';
const PRODUCT11_PRICE = 24;
const PRODUCT11_QTY = 1;

//Dvanaesti proizvod
const PRODUCT12_NAME = 'Suknja';
const PRODUCT12_PRICE = 24;
const PRODUCT12_QTY = 1;

//Druge konstante
const VAT_RATE = 0.2;
const CURRENCY = 'EUR';
const USD_PER_EUR = 1.16;

//Kuponi
const VALID_CUPONS = ['SAVE10', 'SAVE15', 'FREESHIP'];

//Tipovi
console.log(typeof PRODUCT1_NAME);
console.log(typeof CURRENCY);
console.log(typeof VAT_RATE);

//Normalizacija kupona
function normalizeCoupon(code) {
    let trimmed = code.trim();
    let upper = trimmed.toUpperCase();
    return upper;
}

//Provera kupona u nizu
function isValidCoupone(code) {
    for (let i=0; i < VALID_CUPONS.length; i++) {
        if (VALID_CUPONS[i] === code) {
            return true;
        }
    }        
    return false; 
}

//Validacija kupona
function validateAndNotyfy() {
    let code = document.getElementById('promo-input').value;
    let normalizeCode = normalizeCoupon(code);

    if (isValidCoupone(normalizeCode)) {
        if (normalizeCode === 'SAVE10') {
            alert('Vaš kupon donosi 10% popusta.');
        }
        else if (normalizeCode === 'SAVE15') {
            alert('Vas kupon donosi 15% popusta');
        }
        else if (normalizeCode === 'FREESHIP') {
            alert('Vas kupon donosi besplatnu dostavu')
        }
            }
        else {
            alert('Kupon nije validan')
        }
}

//Validacija logovanja
function login() {
    let email = document.getElementById('email').value.trim();
    let lozinka = document.getElementById('lozinka').value.trim();

    if (email === 'admin' && lozinka === 'admin') {
        return true;
    }
    else {
        return false
    }
}

//Lager
const allProducts = [
    { name: 'Muske Farmerke', price: 35, qty: 1 },
    { name: 'Zenske Farmerke', price: 32, qty: 35 },
    { name: 'Zenske Farmerke', price: 35, qty: 2 },
    { name: 'Muska Jakna', price: 49, qty: 1 },
    { name: 'Zenska Jakna', price: 49, qty: 1 },
    { name: 'Muska Kosulja', price: 39, qty: 20 },
    { name: 'Muska Kosulja', price: 32, qty: 1 },
    { name: 'Zenska Majica', price: 19, qty: 4 },
    { name: 'Muski Sako', price: 45, qty: 12 },
    { name: 'Zenski Sako', price: 45, qty: 15 },
    { name: 'Suknja', price: 24, qty: 1 },
    { name: 'Suknja', price: 24, qty: 1 },
]

//Racunanje ukupne cene lagera
function calculateTotalValue(product) {
    let totalValue = 0;

    for (let i = 0; i < product.length; i++) {
        totalValue += product[i].price * product[i].qty;
    }

    console.log('Ukupna vrednos lagera je: ' + totalValue + ' USD');
}

calculateTotalValue(allProducts);

//Proizvodi sa lagera cija je kolicina < 10
const lowStock = allProducts.filter(product => product.qty < 10);

console.log(lowStock);

//Pronalazak proizvoda po imenu
function findProductByName (list, searchName) {
    const normalizedSearch = searchName.toLowerCase().trim();

    for (let i = 0; i < list.length; i++) {
        const normalizeName = list[i].name.toLowerCase().trim();
        if (normalizeName === normalizedSearch) {
            return list[i];
        }
    }
    return null;
}

const result = findProductByName(allProducts, 'Zenska Jakna');

console.log(result);