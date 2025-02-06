
let selects = document.querySelectorAll(".from select");

let modetoggle = document.querySelector("i");

let modebtn = document.querySelector(".modebtn");

let body = document.querySelector(".body");

let box = document.querySelector(".box");

let allinputs = document.querySelectorAll("input");

let convertbtn = document.querySelectorAll("button");

let icon = document.querySelector(".i");

show = document.querySelectorAll(".rate");

let modespn = document.querySelector("#span");

console.log(selects);

for (select of selects){

    for(codes in countryList){
        opt = document.createElement("option");
        opt.innerText = codes;
        opt.value = countryList[codes];
        select.append(opt);
        if(select.name == "from" && codes == "USD"){

            opt.selected = "selected";

            document.querySelector(".fromimg").src = "https://flagsapi.com/US/flat/64.png";

        };
        if(select.name == "to" && codes == "PKR"){

            opt.selected = "selected";

            document.querySelector(".toimg").src = "https://flagsapi.com/PK/flat/64.png";


        };
     };

     select.addEventListener("change", (event)=>{

        console.log(event, event.target);

        
        show[0].innerText = `Please Click Convert`;

        show[1].innerText = `Please Click Convert`;


        // console.log(event.target.innerText);

        updflag(event.target);

     });
     select.addEventListener("click", (event)=>{

        console.log(event, event.target);

        console.log(event.target);

        // updflag(event.target);

     });

}

let from = document.querySelector("#from");

let to = document.querySelector("#to");

let inputs = document.querySelector("input");

cnvrt = document.querySelector(".convert");

cnvrt.addEventListener("click", async (event)=>{

    input = inputs.value;

    console.log(input);

    event.preventDefault();

    console.log(from, to);

    console.log(from.value, to.value);

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key =>
            object[key] === value);
    }

    f = getKeyByValue(countryList, from.value);

    t = getKeyByValue(countryList, to.value);
    console.log(f, t);

    fr = f.toLowerCase();

    tt = t.toLowerCase();

    console.log(fr);

    console.log(tt);

    console.log(f);

    console.log(t);

    baseurl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fr}.json`;

    rsp = await fetch(baseurl);

    console.log(rsp);

    data = await rsp.json();

    console.log(typeof data);

    datarates = data[fr];

    console.log(typeof datarates);

    rte = datarates[tt];

    console.log(rte, typeof rte);

    finalval = await input * rte;

    finalval = finalval.toFixed(4);

    console.log(finalval,  typeof finalval);

    vinput = await document.querySelectorAll("input");

    console.log(vinput);
    
    vinput[1].value = finalval;

    console.log(show)

    show[0].innerText = `1 ${f} = ${rte.toFixed(4)} ${t}`;

    nvc = 1 / rte;

    nvc = nvc.toFixed(4);

    console.log(nvc);

    show[1].innerText = `1 ${t} = ${nvc} ${f}`;


});

const updflag = async (evt) => {

    curr = evt.value;
    
    console.log(curr);

    var k = Object.keys(countryList).find(key =>
    countryList[key] === curr);

    console.log(evt);

    chnge = evt;

    let url = `https://flagsapi.com/${curr}/flat/64.png`;

    let reslt = await fetch(url);

    if(evt.name == "from"){

    console.log("guddddd");

    img = document.querySelector(".fromimg");

    console.log(img);

    img.src = reslt.url;

    }else if (evt.name == "to") {

    console.log("now more guddddd");

    img = document.querySelector(".toimg");

    console.log(img);

    img.src = reslt.url;

    };

    console.log(reslt.url);

};

console.log(modetoggle);

modebtn.addEventListener("click", ()=>{

    heading = document.querySelector("#cc");

    heading.classList.toggle("cc-dark");

    // modespn.classList.toggle("span-dark");

    if(modespn.getAttribute("class") == "span"){

        modespn.textContent = "Light mode";

        modespn.setAttribute("class", "span-dark");

        modespn.setAttribute("id", "span-dark");

    } else if(modespn.getAttribute("class") == "span-dark"){
        
        modespn.textContent = "Dark mode";

        modespn.setAttribute("class", "span");

        modespn.setAttribute("id", "span");

    };

    // modetoggle.classList.toggle("fa-solid fa-sun");

    console.log(modetoggle.getAttribute("id"));

    if(modetoggle.getAttribute("id") == "mode"){

        modetoggle.setAttribute("class", "fa-solid fa-sun");

        modetoggle.setAttribute("id", "mode-dark");

    } else if (modetoggle.getAttribute("id") == "mode-dark") {

        modetoggle.setAttribute("class", "fa-solid fa-moon");

        modetoggle.setAttribute("id", "mode");

    };

    body.classList.toggle("body-dark");

    box.classList.toggle("box-dark");

    icon.classList.toggle("i-dark");

    for(select of selects){

        select.classList.toggle("select-dark");

    }
    
    for (btn of convertbtn){
            
        btn.classList.toggle("convert-dark");

        console.log(btn);
    };
    
    for (input of allinputs) {

        inid = input.getAttribute("id");

        console.log(inid, typeof inid);

        if(input.getAttribute("id") == "input") {

            input.setAttribute("id", "input-dark");

        } else if(input.getAttribute("id") == "input-dark") {

            input.setAttribute("id", "input");

        };

    };

    console.log(convertbtn, typeof convertbtn);

    console.log(cnvrt, typeof cnvrt);
    
});