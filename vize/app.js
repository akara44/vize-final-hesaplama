function addMidterm() {
    if (counter < 5)
        if (1 == counter)
            (e = document.createElement("div")).innerHTML = "<div id='div2' class='form-group'>\t\t\t\t\t\t      <label class='control-label col-sm-4' for='midterm2'>Vize " + (counter + 1).toString() + "</label>\t\t\t\t\t\t      <div class='col-sm-4'>\t\t\t\t\t\t        <input type='number' class='form-control' id='midterm2'placeholder='Not' name='midterm2'>\t\t\t\t\t\t      </div>\t\t\t\t\t\t      <div class='col-sm-3'>\t\t\t\t\t\t        <input type='number' class='form-control' id='percent2'placeholder='%' name='percent2'>\t\t\t\t\t\t      </div>\t\t\t\t\t      </div>",
            document.getElementById("midterms").appendChild(e),
            counter++;
        else if (2 == counter)
            (e = document.createElement("div")).innerHTML = "<div id = 'div3' class='form-group'>\t\t\t\t\t\t      <label class='control-label col-sm-4' for='midterm3'>Vize " + (counter + 1).toString() + "</label>\t\t\t\t\t\t      <div class='col-sm-4'>\t\t\t\t\t\t        <input type='number' class='form-control' id='midterm3'placeholder='Not' name='midterm3'>\t\t\t\t\t\t      </div>\t\t\t\t\t\t      <div class='col-sm-3'>\t\t\t\t\t\t        <input type='number' class='form-control' id='percent3'placeholder='%' name='percent3'>\t\t\t\t\t\t      </div>\t\t\t\t\t      </div>",
            document.getElementById("midterms").appendChild(e),
            counter++;
        else if (3 == counter) {
            var e = document.createElement("div");
            e.innerHTML = "<div class='form-group'>\t\t\t\t\t\t      <label class='control-label col-sm-4' for='midterm4'>Vize " + (counter + 1).toString() + "</label>\t\t\t\t\t\t      <div class='col-sm-4'>\t\t\t\t\t\t        <input type='number' class='form-control' id='midterm4'placeholder='Not' name='midterm4'>\t\t\t\t\t\t      </div>\t\t\t\t\t\t      <div class='col-sm-3'>\t\t\t\t\t\t        <input type='number' class='form-control' id='percent4'placeholder='%' name='percent4'>\t\t\t\t\t\t      </div>\t\t\t\t\t      </div>",
            document.getElementById("midterms").appendChild(e),
            counter++
        }
}
function addOthers() {
    if (counter2 < 5)
        if (1 == counter2)
            (e = document.createElement("div")).innerHTML = "<div id='div2' class='form-group'>\t\t\t\t\t\t      <label class='control-label col-sm-4' for='others2'>Diğer</label>\t\t\t\t\t\t      <div class='col-sm-4'>\t\t\t\t\t\t        <input type='number' class='form-control' id='others2'placeholder='Not' name='others2'>\t\t\t\t\t\t      </div>\t\t\t\t\t\t      <div class='col-sm-3'>\t\t\t\t\t\t        <input type='number' class='form-control' id='percento2'placeholder='%' name='percento2'>\t\t\t\t\t\t      </div>\t\t\t\t\t      </div>",
            document.getElementById("others").appendChild(e),
            counter2++;
        else if (2 == counter2)
            (e = document.createElement("div")).innerHTML = "<div id = 'div3' class='form-group'>\t\t\t\t\t\t      <label class='control-label col-sm-4' for='others3'>Diğer</label>\t\t\t\t\t\t      <div class='col-sm-4'>\t\t\t\t\t\t        <input type='number' class='form-control' id='others3'placeholder='Not' name='others3'>\t\t\t\t\t\t      </div>\t\t\t\t\t\t      <div class='col-sm-3'>\t\t\t\t\t\t        <input type='number' class='form-control' id='percento3'placeholder='%' name='percento3'>\t\t\t\t\t\t      </div>\t\t\t\t\t      </div>",
            document.getElementById("others").appendChild(e),
            counter2++;
        else if (3 == counter2) {
            var e = document.createElement("div");
            e.innerHTML = "<div class='form-group'>\t\t\t\t\t\t      <label class='control-label col-sm-4' for='others4'>Diğer</label>\t\t\t\t\t\t      <div class='col-sm-4'>\t\t\t\t\t\t        <input type='number' class='form-control' id='others4'placeholder='Not' name='others4'>\t\t\t\t\t\t      </div>\t\t\t\t\t\t      <div class='col-sm-3'>\t\t\t\t\t\t        <input type='number' class='form-control' id='percento4'placeholder='%' name='percento4'>\t\t\t\t\t\t      </div>\t\t\t\t\t      </div>",
            document.getElementById("others").appendChild(e),
            counter2++
        }
}
function gradeCalc() {
    mid1 = Number(document.getElementById("midterm1").value),
    percent1 = Number(document.getElementById("percent1").value),
    final = Number(document.getElementById("final").value),
    percentf = Number(document.getElementById("percentf").value),
    others1 = Number(document.getElementById("others1").value),
    percento1 = Number(document.getElementById("percento1").value),
    1 == counter && (1 == counter2 ? ovgrade = mid1 * percent1 / 100 + others1 * percento1 / 100 + final * percentf / 100 : 2 == counter2 ? (others2 = Number(document.getElementById("others2").value),
    percento2 = Number(document.getElementById("percento2").value),
    ovgrade = mid1 * percent1 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + final * percentf / 100) : 3 == counter2 ? (others3 = Number(document.getElementById("others3").value),
    percento3 = Number(document.getElementById("percento3").value),
    ovgrade = mid1 * percent1 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + final * percentf / 100) : 4 == counter2 && (others4 = Number(document.getElementById("others4").value),
    percento4 = Number(document.getElementById("percento4").value),
    ovgrade = mid1 * percent1 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + others4 * percento4 / 100 + final * percentf / 100),
    document.getElementById("result").innerHTML = '<h3 class="text-center bg-success" style="color:#337ab7;padding-top:1%;padding-bottom:1%">Sonuç</h3><div style= "margin-top:-10px;background-color:#5cb85c;"><h4 class="text-center" style="padding-bottom:5%;padding-top:5%;margin-left:-8%;color:#ffffff;" >Bu dersten alacağınız not: ' + ovgrade.toString() + "</h4></div>",
    window.scrollTo(500, 500)),
    mid2 = Number(document.getElementById("midterm2").value),
    percent2 = Number(document.getElementById("percent2").value),
    2 == counter && (1 == counter2 ? ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + others1 * percento1 / 100 + final * percentf / 100 : 2 == counter2 ? (others2 = Number(document.getElementById("others2").value),
    percento2 = Number(document.getElementById("percento2").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + final * percentf / 100) : 3 == counter2 ? (others3 = Number(document.getElementById("others3").value),
    percento3 = Number(document.getElementById("percento3").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + final * percentf / 100) : 4 == counter2 && (others4 = Number(document.getElementById("others4").value),
    percento4 = Number(document.getElementById("percento4").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + others4 * percento4 / 100 + final * percentf / 100),
    document.getElementById("result").innerHTML = '<h3 class="text-center bg-success" style="color:#337ab7;padding-top:1%;padding-bottom:1%">Sonuç</h3><div style= "margin-top:-10px;background-color:#5cb85c;"><h4 class="text-center" style="padding-bottom:5%;padding-top:5%;margin-left:-8%;color:#ffffff;" >Bu dersten alacağınız not: ' + ovgrade.toString() + "</h4></div>",
    window.scrollTo(500, 500)),
    mid3 = Number(document.getElementById("midterm3").value),
    percent3 = Number(document.getElementById("percent3").value),
    3 == counter && (1 == counter2 ? ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + others1 * percento1 / 100 + final * percentf / 100 : 2 == counter2 ? (others2 = Number(document.getElementById("others2").value),
    percento2 = Number(document.getElementById("percento2").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + final * percentf / 100) : 3 == counter2 ? (others3 = Number(document.getElementById("others3").value),
    percento3 = Number(document.getElementById("percento3").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + final * percentf / 100) : 4 == counter2 && (others4 = Number(document.getElementById("others4").value),
    percento4 = Number(document.getElementById("percento4").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + others4 * percento4 / 100 + final * percentf / 100),
    document.getElementById("result").innerHTML = '<h3 class="text-center bg-success" style="color:#337ab7;padding-top:1%;padding-bottom:1%">Sonuç</h3><div style= "margin-top:-10px;background-color:#5cb85c;"><h4 class="text-center" style="padding-bottom:5%; padding-top:5%;margin-left:-8%;color:#ffffff;" >Bu dersten alacağınız not: ' + ovgrade.toString() + "</h4></div>",
    window.scrollTo(500, 500)),
    mid4 = Number(document.getElementById("midterm4").value),
    percent4 = Number(document.getElementById("percent4").value),
    4 == counter && (1 == counter2 ? ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + mid4 * percent4 / 100 + others1 * percento1 / 100 + final * percentf / 100 : 2 == counter2 ? (others2 = Number(document.getElementById("others2").value),
    percento2 = Number(document.getElementById("percento2").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + mid4 * percent4 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + final * percentf / 100) : 3 == counter2 ? (others3 = Number(document.getElementById("others3").value),
    percento3 = Number(document.getElementById("percento3").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + mid4 * percent4 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + final * percentf / 100) : 4 == counter2 && (others4 = Number(document.getElementById("others4").value),
    percento4 = Number(document.getElementById("percento4").value),
    ovgrade = mid1 * percent1 / 100 + mid2 * percent2 / 100 + mid3 * percent3 / 100 + mid4 * percent4 / 100 + others1 * percento1 / 100 + others2 * percento2 / 100 + others3 * percento3 / 100 + others4 * percento4 / 100 + final * percentf / 100),
    document.getElementById("result").innerHTML = '<h3 class="text-center bg-success" style="color:#337ab7;padding-top:1%;padding-bottom:1%">Sonuç</h3><div style= "margin-top:-10px;background-color:#5cb85c;"><h4 class="text-center" style="padding-bottom:5%;padding-top:5%;margin-left:-8%;color:#ffffff;" >Bu dersten alacağınız not: ' + ovgrade.toString() + "</h4></div>",
    window.scrollTo(500, 500))
}
counter = 1,
counter2 = 1;
