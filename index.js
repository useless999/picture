var ul=document.querySelector('#wrap ul');

setTimeout(function(){
    ul.className='';
},200);

var lis=document.querySelectorAll('#wrap ul li');
var closeBtns=document.querySelectorAll('#wrap .close');
var last=null;

lis.forEach(function(li, index){
    li.onclick=function(){
        // console.log(1);
        ul.setAttribute('id','activeWrap');
        last &&(last.className = '');
        this.className = 'active';
        last=this;
     };
     closeBtns[index].onclick=function(ev){
         lis[index].className='';
         ul.removeAttribute('id');
         last=null;
         ev.stopPropagation();
     }
});