var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

var count = 0;//�A�j���[�V�����J�E���^�[
var timer = setInterval(function(){
  ctx.fillStyle="#fff";//�������̐F
  ctx.clearRect(0,0,300,300);//����
  ctx.fillStyle="#f00";//�h��Ԃ��F��Ԃ�
  ctx.fillRect(30+count,30+count,30,30);
  count++;
  if(count>200){
    clearInterval(timer);
  }
},100);