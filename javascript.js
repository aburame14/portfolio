function mean(w,x,y){
  return (w+x+y)/3;
}

function median(w,x,y) {
    let data = new Array(w,x,y).sort();
    return data[1];
}

function modus(w,x,y) {
    let data = new Array(w,x,y);
    let hitung = 0, max_hitung = 0, modus = 0;
    for (let i = 0; i < data.length; i++) {
        hitung = 0;
        for (let j = 0; j < data.length; j++) {
            if(data[i] == data[j]) {
                hitung++;
            }
        }
        if(hitung > max_hitung) {
            max_hitung = hitung;
            modus = data[i];
        }
    }
    if(max_hitung > 1) {
        return modus;
    }
    else {
        return "Tidak ada modus";
    }
    
}

function max(w,x,y){
    let data = new Array(w,x,y).sort();
    return data[2];
}

function min(w,x,y){
    let data = new Array(w,x,y).sort();
    return data[0];
}

function hitung(){
  var w=eval(form1.a1.value);
  var x=eval(form1.a2.value);
  var y=eval(form1.a3.value);
  document.getElementById("tampil").innerHTML=
    "<table>\
    <tr>\<td>\Mean\</td>\<td>\:\</td>\<td>\ "+ mean(w,x,y) +"\ </td>\</tr>\
    <td>\Median\</td>\<td>\:\</td>\<td>\ "+ median(w,x,y) +"\ </td>\</tr>\
    <td>\Modus\</td>\<td>\:\</td>\<td>\ "+ modus(w,x,y) +"\ </td>\</tr>\
    <td>\Max\</td>\<td>\:\</td>\<td>\ "+ max(w,x,y) +" \</td>\</tr>\
    <td>\Min\</td>\<td>\:\</td>\<td>\ "+ min(w,x,y) +" \</td>\</tr>\
    </table>"
  ;
}

function resetForm(){
  document.form1.reset();
  document.getElementById("tampil").innerHTML="";
}
