var ferramenta = "";
var material = "";

escolha = "";
skin = "";
idlist = "";



function clicksteel(){

    escolha = "steel";
    document.getElementById("fieldskin").style.display = "block";
    
    

}
function clickhss(){
    escolha = "hss";
    document.getElementById("fieldskin").style.display = "block";
    
}

function clickdesbaste(){

    skin = "desbaste";
    
    if(skin === "desbaste" && escolha === "steel" ){

        document.getElementById("steelacabamentolist").style.display = "none";
        


        document.getElementById("steeldesbastelist").style.display = "block";
        idlist = "steeldesbastelist";

        document.getElementById("diametro").style.display = "block";
        document.getElementById("btncalc").style.display = "block";
        document.getElementById("btnlimpar").style.display = "block";



    }
    if(skin === "desbaste" && escolha === "hss"){
        document.getElementById("hssacabamentolist").style.display = "none";


        document.getElementById("hssdesbastelist").style.display = "block";
        idlist = "hssdesbastelist";

        document.getElementById("diametro").style.display = "block";
        document.getElementById("btncalc").style.display = "block";
        document.getElementById("btnlimpar").style.display = "block";

    }
}

function clickacabamento(){

    skin = "acabamento";
    
    if(skin === "acabamento" && escolha === "steel" ){
        document.getElementById("steeldesbastelist").style.display = "none";

        document.getElementById("diametro").style.display = "block";
        document.getElementById("btncalc").style.display = "block";


        document.getElementById("steelacabamentolist").style.display = "block";
        document.getElementById("btnlimpar").style.display = "block";
        
        idlist = "steelacabamentolist";

    }
    if(skin === "acabamento" && escolha === "hss"){

        document.getElementById("hssdesbastelist").style.display = "none";

        document.getElementById("diametro").style.display = "block";
        document.getElementById("btncalc").style.display = "block";

        document.getElementById("btnlimpar").style.display = "block";

        document.getElementById("hssacabamentolist").style.display = "block";
        idlist = "hssacabamentolist";


    }

}

function clickcalc(){

    res = document.getElementById(idlist);
    mostrar = res.value;
    diam = document.querySelector("#diametro");
    num = diam.value;

    console.log(mostrar);
    console.log(num);
    console.log(`${mostrar} * ${num} é ${mostrar*num}`)

}
function clicklimp(){
    document.getElementById("fieldskin").style.display = "none";
    document.getElementById("steelacabamentolist").style.display = "none";
    document.getElementById("steeldesbastelist").style.display = "none";
    document.getElementById("hssacabamentolist").style.display = "none";
    document.getElementById("hssdesbastelist").style.display = "none";
    document.getElementById("diametro").style.display = "none";
    document.getElementById("btnlimpar").style.display = "none";
    document.getElementById("btncalc").style.display = "none";
   


}