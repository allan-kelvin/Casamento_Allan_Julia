balls = document.querySelector('.balls');
quant = document.querySelectorAll('.slides .imagens');
atual =0;
imagem = document.getElementById('atual');
next = document.getElementById('next');
voltar = document.getElementById('voltar');
rolar= true;

for(let i = 0; i < quant.length; i++){
    div = document.createElement('div');
    div.id=i;
    balls.appendChild(div)
}

document.getElementById('0').classList.add('img-Atual');
pos = document.querySelectorAll('.balls div')

for(let i = 0; i < pos.length; i++){
    pos[i].addEventListener('click',()=>{
        atual = pos[i].id;
        rolar=false;
        slide();
    })
}

voltar.addEventListener('click',()=>{
    atual--;
    rolar=false;
    slide();
})

next.addEventListener('click',()=>{
    atual++;
    rolar=false;
    slide();
})

function slide(){
    if(atual>=quant.length){
        atual=0;
    }
    else if(atual<0){
        atual = quant.length-1;
    }

    document.querySelector('.img-Atual').classList.remove('.img-Atual');
    imagem.style.marginLeft=-1024*atual+'px';
    document.getElementById(atual).classList.add('img-Atual');
}
setInterval(()=>{
    if(rolar){
        atual++;
        slide()
    }else{
        rolar=true;
    }
    
},4000)