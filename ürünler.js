
  
    var btn2=document.querySelector('#all')
    var btn3=document.querySelector('#br')
    var btn4=document.querySelector('#tc')
    var btn5=document.querySelector('#kr')
    var inpt=document.querySelector('#inpt')
    var spna=document.querySelectorAll('div')
    var div=document.querySelector('#xy')
    console.log(spna[10].innerText)
    let s
    
   
   
    btn2.addEventListener('click',e=>{
        div.innerHTML=' '
        var j=` <div class="cont1">
        <img src="8.jpg" alt=""><br> 
     </div>< 
    <div class="cont2">
         <img src="9.jpg" alt=""><br>
     </div>
     <div class="cont3">
         <img src="10.jpg" alt=""><br>
         
     </div>
     <div class="cont4">
         <img src="11.jpg" alt=""><br>
         
     </div>
     <div class="cont5">
         <img src="12.jpg" alt=""><br>
        
     </div>
     <div class="cont6">
         <img src="1.jpg" alt=""><br>
        
     </div>
     <div class="cont7">
         <img src="2.jpg" alt=""><br>

     </div>
     <div class="cont8">
         <img src="3.jpg" alt=""><br>
     </div>
     <div class="cont9">
         <img src="4.jpeg" alt=""><br>
     </div>
     <div class="cont10">
         <img src="51.jpg" alt=""><br>
     </div>
     <div class="cont11">
         <img src="66.jpg" alt=""><br>
     </div>
     <div class="cont12">
         <img src="7.jpg" alt=""><br>
     </div></span>`
         div.innerHTML=j
    })

    btn3.addEventListener('click',e=>{
        div.innerHTML=' '
        var f=`<div class="cont1">
        <img src="8.jpg" alt=""><br>
 
     </div> `
  var d=`
  <div class="cont2">
  <img src="9.jpg" alt=""><br>
  
</div>`
  div.innerHTML=f+d
    })

    btn4.addEventListener('click',e=>{
        div.innerHTML=' '
        var o=` <div class="cont1">
        <img src="51.jpg" alt=""><br>
        
    </div>
    <div class="cont2">
    <img src="66.jpg" alt=""><br>
   
</div>
<div class="cont3">
<img src="4.jpeg" alt=""><br>

</div>`
  div.innerHTML=o
    })
    btn5.addEventListener('click',e=>{
        div.innerHTML=' '
        var f=`   <div class="cont1">
        <img src="2.jpg" alt=""><br>
    
    </div>
    <div class="cont2">
        <img src="1.jpg" alt=""><br>
        
    </div>
    <div class="cont3">
        <img src="3.jpg" alt=""><br>
        
    </div> `
  
  div.innerHTML=f
    })
  
   
