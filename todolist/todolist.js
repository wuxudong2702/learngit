

var input=document.getElementById("input");
var finish=document.getElementById('finish');
var finished=document.getElementById('finished');
var list=[];//存储input.value
var i=0; //id
var k=0;//传送删除的id
var j=false;//标记删除id
var m=0;//记录i的值，
var listsh =[];//存储div
var removeListId=[];
addEventListener ("keydown",function(event){
    if (event.keyCode == 13&&input.value!=='') {
        if(j===true){
            i=removeListId[0];
            removeByValue(removeListId,i);
            if(removeListId.length===0){
                j=false;
            }
        }
        else{
            i=m;
        }
        list.push(input.value);
        var divi = document.createElement('div');
        finish.appendChild(divi);
        divi.setAttribute('class','divii');
        divi.setAttribute('id',i);
        divi.style.display="block";
        var checkbox=document.createElement('input');
        divi.appendChild(checkbox);
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('class','checkbox');
        checkbox.setAttribute('id',100+i);
        checkbox.setAttribute('onclick','remove_append(this.id)');
        checkbox.style.position='relative'
        var input_change = document.createElement('input');
        divi.appendChild(input_change);
        input_change.style.fontSize="20px";
        input_change.style.width="450px";
        input_change.style.height="25px";
        input_change.style.marginTop="10px";
        input_change.style.marginBottom="12px";
        input_change.style.position="absolute";
        input_change.style.borderStyle="none";
        input_change.style.marginLeft="10px";

        input_change.setAttribute('value',input.value);
        input.value="";
        var btn=document.createElement('input');
        divi.appendChild(btn);
        btn.setAttribute('id',i+1000);
        btn.style.marginRight="5px";
        btn.setAttribute('class','btn');
        btn.setAttribute('type','button');
        btn.setAttribute('value','删除');
        btn.setAttribute('onclick','remove1(this.id)');
        i++;
        m++;
        // list1.push(i);
        listsh.push(divi);

    }
});
function removeByValue(arr, val) {//通过id索引删除节点。
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}
var remove1=function(id){//删除事件
    // k=id-1000;
    j=true;
    removeListId.push(id-1000);
    var x= document.getElementById(id-1000);
    x.parentNode.removeChild(document.getElementById(id-1000));
    removeByValue(listsh,x);
    removeByValue(list, x.firstChild.nextSibling.value);
    //  console.log(x);
    //  console.log(list[id-1000]);
    // console.log("listsh",listsh.length,listsh,id-1000);
    // console.log("list",list.length,list,id-1000);
    //  console.log("list1",list1.length,list1);
}
var remove_append=function(id){//已经完成事件
    finished.appendChild(document.getElementById(id-100));
    document.getElementById(id).setAttribute('onclick','up(this.id)');
}

function up(idj) {//完成事件改变为完成事件
    finish.appendChild(document.getElementById(idj-100));
    document.getElementById(idj).setAttribute("onclick",'remove_append(this.id)');
}
function search(){//查询
    var lists=[];//未完成任务节点divclass
    var listsed=[];//完成任务节点divclass
    var showdiv=[];
    for(var i=0;i<list.length;i++){
        if(list[i].indexOf(input.value)>=0){
            showdiv.push(list[i]);
        }
    }
    var divclass =document.getElementById('finish').getElementsByTagName('div');
    var divclassed =document.getElementById('finished').getElementsByTagName('div');
    for(var j=divclass.length-1;j>=0;j--){
        lists[j]=divclass[j];
        finish.removeChild(divclass[j]);
    }
    for(var j=divclassed.length-1;j>=0;j--){
        listsed[j]=divclassed[j];
        finished.removeChild(divclassed[j]);
    }
    for(var i=0;i<showdiv.length;i++){
        for(var j=0;j<lists.length;j++){
            if(showdiv[i]===lists[j].firstChild.nextSibling.value){
                finish.appendChild(lists[j]);
            }
        }
        for(var j=0;j<listsed.length;j++){
            if(showdiv[i]===listsed[j].firstChild.nextSibling.value){
                finished.appendChild(listsed[j]);
            }
        }
    }
}
//查询后返回结果
function returnsearch(){
    for(var j=0;j<listsh.length;j++){
        if(!listsh[j].firstChild.checked)
            finish.appendChild(listsh[j]);
        else   finished.appendChild(listsh[j]);
    }
    input.value="";
}


