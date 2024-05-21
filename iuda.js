
let images =[
  {
    'alt':'img1',
    'url':'https://stackoverflow.com/questions/796087/make-a-div-into-a-link',
    'src':'sam1.jpg'
  },
  {
    'alt':'img2',
    'url':'https://www.gimpart.org/fotomontazh/kak-sdelat-kollazh-iz-neskolkih-fotografij',
    'src':'sam3.jpg'
  },
  {
    'alt':'img3',
    'url':'https://mail.ru/?from=logout',
    'src':'sam2.jpg'
  },
  {
    'alt':'img4',
    'url':'https://www.w3docs.com/snippets/css/how-to-make-a-div-a-clickable-link.html',
    'src':'sam4.jpg'
  }
]
let imgBlock = document.querySelector(".img");
imgBlock.style.backgroundImage = 'url("'+ images[imgBlock.dataset.num].src +'")';
function prev(){
  let imgBlock = document.querySelector(".img");
  let prevNum = imgBlock.dataset.num - 1;
  if(prevNum<0){
    prevNum = images.length - 1;
  }
  imgBlock.dataset.num = prevNum;
  imgBlock.style.backgroundImage = 'url("'+ images[prevNum].src +'")';
  const li = document.querySelectorAll('li')
  for (var i = li.length - 1; i >= 0; i--) {
    li[i].classList.remove('active')
  }
}
function next(){
  let imgBlock = document.querySelector(".img");
  let nextNum = Number(imgBlock.dataset.num) + 1;
  if(nextNum>(images.length - 1)){
    nextNum = Number(0);
  }
  imgBlock.dataset.num = nextNum;
  imgBlock.style.backgroundImage = 'url("'+ images[nextNum].src +'")';
  const li = document.querySelectorAll('li')
  for (var i = li.length - 1; i >= 0; i--) {
    li[i].classList.remove('active')
  }
}
function link() {
  open(images[imgBlock.dataset.num].url);
}