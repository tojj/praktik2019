export const aboutData = [
  {
    text:
      "Är det så enkelt? Ja, absolut! Dagens livsstil förutsätter att så mycket som möjligt ska hinnas med och gärna samtidigt. TOJJ finns för att underlätta för föräldrar som ska planera barnkalas.",
    id: 1
  },
  {
    text:
      "På vår sida kan du enkelt skapa en digital kalasinbjudan och dessutom lägga in en present till födelsedagsbarnet. Tillsammans med våra samarbetspartners erbjuder vi ett leksakssortiment som är klimatsmart och hållbart - för barnens skull.",
    id: 2
  },
  {
    text:
      "Men det är bara början på enkhelheten. Gästerna ska ju också kunna ta del av den och på TOJJ kan man bjuda in gästerna via e-post när kalasinbjudan har skapats. Med den inbjudan kan gästerna förutom att svara också bidra till den utvalda presenten till kalaset.",
    id: 3
  },
  {
    text:
      "Förutom att ta hand om vår planet genom att göra hållbara val, så får vi inte glömma att ta hand om varandra också. Därför uppmuntras det att bidra till välgörenhet och chansen att göra det bättre för andra barn.",
    id: 4
  },
  {
    text:
      "Genom TOJJ sparar alla tid så man kan fokusera på annat, som att skapa fina minnen och ge vidare till välgörenhet.  ",
    id: 5
  },
  {
    text:
      "En win-win helt enkelt!",
    id: 6
  }
]

export const convincerData = [
  {
    header: "Present",
    text:
      "Önska en hållbar present! Alla leksaker kommer från hållbara producenter som är måna om klimatet. Leksakerna håller länge och kan dessutom inredas med.",
    img: "/images/convincer4.jpg",
    id: 1
  },
  {
    header: "Bidra",
    text:
      "Som gäst till kalaset kan man bidra till den önskade presenten. Det sparar inte bara tid utan det är också hållbart, så slipper man massa leksaker som kanske inte håller lika länge.",
    img: "/images/convincer5.jpg",
    id: 2
  },
  {
    header: "Karma",
    text:
      "Ge till dem som behöver! Varför begränsa sig till en present? Skicka vidare budskapet och bidra till att någon annan får det lite bättre också.",
    img: "/images/convincer3.jpg",
    id: 3
  }
]

export const productData = [
  {
    text:
      "Barnkalas är jättekul, men varför ge bort flera presenter som ingen vill ha istället för att hålla det till några få riktigt bra presenter?",
    id: 1
  },
  {
    text:
      "Med Tojj är det nu enkelt att gå ihop och ge barnen något som de faktiskt önskar sig!",
    id: 2
  }
]

export const formHeaderData = {
  title: {
    className: " input100 form-control",
    defaultValue: "Kort men kul",
    text: "Vad vill du ha som rubrik?",
    id: "title"
  },
  name: {
    className: " input50 form-control",
    defaultValue: "Barnets namn",
    text: "Vem är kalaset för?",
    id: "child"
  },
  age: {
    className: "input25 form-control",
    defaultValue: "t.ex. 3",
    text: "Hur många år fyller barnet?",
    id: "age"
  }
}

export const carouselData = [
  {
    img: "/images/barncancer-fonden.jpg",
    id: 1
  },
  {
    img: "/images/radda-barnen.png",
    id: 2
  },
  {
    img: "/images/bris-ny.jpg",
    id: 3
  },
  {
    img: "/images/sos-ny.jpg",
    id: 4
  },
  {
    img: "/images/redcross.jpg",
    id: 5
  },
  {
    img: "/images/habitat.jpg",
    id: 6
  }
]


export const imageHandlerData = [
  {
    img: "/images/patterns/cake.jpg",
    dropdownClass: "dd-item",
    imgClass: "dd-image",
    id: 1
  },
  {
    img: "/images/patterns/camo.jpg",
    dropdownClass: "dd-item",
    imgClass: "dd-image",
    id: 2
  },
  {
    img: "/images/patterns/heart.jpg",
    dropdownClass: "dd-item",
    imgClass: "dd-image",
    id: 3
  },
  {
    img: "/images/patterns/blue.jpg",
    dropdownClass: "dd-item",
    imgClass: "dd-image",
    id: 4
  },
  {
    img: "/images/patterns/leaf.jpg",
    dropdownClass: "dd-item",
    imgClass: "dd-image",
    id: 5
  },
  {
    img: "/images/patterns/navy.jpg",
    dropdownClass: "dd-item",
    imgClass: "dd-image",
    id: 6
  }
]

export const eventInputData = {
  description: {
    classNameFormGroup: "input100",
    name: "description",
    classNameLabel: "birthday-label",
    text: "Skriv några ord till de inbjudna",
    type: "textarea",
    placeholder: "",
    className: "textarea-label form-input",
    id: "description"
  },
  date: {
    classNameFormGroup: "input50",
    name: "date",
    classNameLabel: "birthday-label",
    text: "När är kalaset?",
    type: "date",
    placeholder: "12:00",
    className: "form-input",
    id: "date"
  },
  time: {
    classNameFormGroup: "input25",
    name: "time",
    classNameLabel: "birthday-label",
    text: "",
    type: "time",
    placeholder: "12:00",
    className: "form-input mt-2 mt-lg-0 ml-lg-2",
    id: "time"
  },
  street: {
    classNameFormGroup: "input100",
    name: "asv", //cryptic in order to avoid autofill
    classNameLabel: "birthday-label",
    text: "Plats",
    type: "text",
    placeholder: "Gatuadress eller plats",
    className: "form-input",
    id: "asv" //cryptic in order to avoid autofill
  },
  zip: {
    classNameFormGroup: "input25",
    name: "asc", //cryptic in order to avoid autofill
    classNameLabel: "location-label inline-input",
    text: "",
    type: "text",
    placeholder: "Postnr",
    className: "form-input mt-2",
    id: "asc" //cryptic in order to avoid autofill
  },
  city: {
    classNameFormGroup: "input50",
    name: "asd", //cryptic in order to avoid autofill
    classNameLabel: "location-label inline-input",
    text: "",
    type: "text",
    placeholder: "Stad",
    className: "form-input mt-2 ml-lg-2",
    id: "asd" //cryptic in order to avoid autofill
  },
  deadline: {
    classNameFormGroup: "",
    name: "deadline",
    classNameLabel: "birthday-label",
    text: "När vill du senast ha svar om vem som kommer?",
    type: "date",
    placeholder: "",
    className: "form-input input50",
    id: "deadline"
  }
}


export const guestUserData = {
  firstName: {
    classNameFormGroup: "input50",
    id: "firstName-input",
    name: "firstName",
    classNameLabel: "",
    label: "Förnamn",
    type: "text",
    className: "form-input"
  },
  lastName: {
    classNameFormGroup: "input50",
    id: "lastName-input",
    name: "lastName",
    classNameLabel: "ml-lg-2",
    label: "Efternamn",
    type: "text",
    className: "form-input ml-lg-2"
  },
  email: {
    classNameFormGroup: "input50",
    id: "email-input",
    name: "email",
    classNameLabel: "",
    label: "E-post",
    type: "email",
    className: "form-input"
  },
  phoneNumber: {
    classNameFormGroup: "input50",
    id: "phoneNumber-input",
    name: "phoneNumber",
    classNameLabel: "position-relative ml-lg-2",
    label: "Telefonnummer",
    type: "text",
    className: "form-input ml-lg-2"
  },
  city: {
    classNameFormGroup: "input50",
    id: "city-input",
    name: "city",
    classNameLabel: "",
    label: "Stad",
    type: "text",
    className: "form-input "
  },
  
  zipcode: {
    classNameFormGroup: "input50 ",
    id: "zipcode-input",
    name: "zipcode",
    classNameLabel: "ml-lg-2",
    label: "Postnummer",
    type: "text",
    className: "form-input ml-lg-2"
  },
  
  
  address: {
    classNameFormGroup: "input50",
    id: "address-input",
    name: "address",
    classNameLabel: "",
    label: "Gata",
    type: "text",
    className: "form-input"
  },

  password: {
    classNameFormGroup: "input50",
    id: "pw-input",
    name: "pw",
    classNameLabel: "ml-lg-2",
    label: "Lösenord",
    type: "password",
    autocomplete: 'new-password',
    className: "form-input ml-lg-2"
  }
}


export const createAccountData = [
  {
    classNameFormGroup: "input50",
    id: "firstName-input",
    type: "firstName",
    name: "firstName",
    label: "Förnamn",
    classNameLabel: "",
    placeholder: "Förnamn",
    className: "form-input",
    pattern: "",
    title: "",
  },
  {
    classNameFormGroup: "input50",
    id: "lastName-input",
    type: "lastName",
    name: "lastName",
    label: "Efternamn",
    classNameLabel: "ml-lg-2",
    placeholder: "Efternamn",
    className: "form-input ml-lg-2",
    pattern: "",
    title: "",
  },
  {
    classNameFormGroup: "input50",
    id: "address-input",
    type: "address",
    name: "address",
    label: "Adress",
    classNameLabel: "",
    placeholder: "Adress",
    className: "form-input",
    pattern: "",
    title: "",
  },
  {
    classNameFormGroup: "input20 display-inline",
    id: "zip-input",
    type: "zip",
    name: "zipCode",
    label: "Postnr",
    classNameLabel: "ml-lg-2",
    placeholder: "Postnr",
    className: "form-input ml-lg-2",
    pattern: "",
    title: "",
  },
  {
    classNameFormGroup: "input27",
    id: "city-input",
    type: "city",
    name: "city",
    label: "Stad",
    classNameLabel: "",
    placeholder: "Stad",
    className: "form-input ml-lg-3",
    pattern: "",
    title: "",
  },
  {
    classNameFormGroup: "input50",
    id: "phoneNumber-input",
    type: "phoneNumber",
    name: "phoneNumber",
    label: "Telefonnummer",
    classNameLabel: "",
    placeholder: "Telefonnummer",
    className: "form-input",
    pattern: "",
    title: "",
  },
  {
    classNameFormGroup: "input50",
    id: "email-input",
    type: "email",
    name: "email",
    label: "E-post",
    classNameLabel: "ml-lg-2",
    placeholder: "E-post",
    className: "form-input ml-lg-2",
    pattern: "",
    title: "",
  },
  {
    classNameFormGroup: "input50",
    id: "password-input-first",
    type: "password",
    name: "password",
    label: "Lösenord",
    classNameLabel: "",
    placeholder: "Lösenord",
    className: "form-input",
    pattern: "",
    title: "Välj ett lösenord",
  },
  {
    classNameFormGroup: "input50",
    id: "password-input-confirmation",
    type: "password",
    name: "passwordRepeat",
    label: "",
    classNameLabel: "ml-lg-2",
    placeholder: "Bekräfta ditt lösenord",
    className: "form-input registration-text-positioning ml-lg-2",
    pattern: "",
    title: "Upprepa ditt lösenord",
  }
]

export const loginData = [
  {
    id: "user-email-input",
    type: "email",
    name: "email",
    label: "E-postadress",
    className: "registration-form",
    pattern: ""
  },
  {
    id: "user-password-input",
    type: "password",
    name: "password",
    label: "Lösenord",
    className: "registration-form",
    pattern: ""
  }
]

export default {
  aboutData,
  convincerData,
  productData,
  formHeaderData,
  carouselData,
  imageHandlerData,
  eventInputData,
  guestUserData,
  createAccountData,
  loginData,
}
