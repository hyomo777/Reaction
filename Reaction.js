
var screen = document.querySelector('#screen');
var start;
var overtime;
var record = [];
var timeout;
var innerText;
//var을 if,else if, else에 쓸경우 변수를 가져오지 못하여 없는상태로 인식된다 
//그러므로 var을 밖에 써야 정상적으로 인식이 가능하다
screen.addEventListener('click', function () {
    //var overtime = new Date(); //끝시간
    //performance.now(); 정밀한 시간
    //console.timeEnd('time'); 버그 잡을떄 사용됨
    //console.log((overtime - time)  / 1000 + ("ms"));
  if (screen.classList.contains('waiting')) { // 현재 대기 상태인지 파악
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = '초록색이 되면 클릭하세요';
    timeout = setTimeout(function () {
      start = new Date();//start
      //performance.now(); //정밀한 시간을 알고싶을떄 사용됨
      //console.time('time'); 버그 잡을떄 사용됨
      screen.click();
    }, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000 사이 수
  } else if (screen.classList.contains('ready')) { // 준비 상태
    if (!start) { // 부정 클릭
      clearTimeout(timeout);
      screen.classList.remove('ready');
      screen.classList.add('waiting');
      screen.textContent = '워워 진정하세요!';
    } else {
      screen.classList.remove('ready');
      screen.classList.add('now');
      screen.textContent = '클릭하세요!';
    }
  } else if (screen.classList.contains('now')) { // 시작 상태
    overtime = new Date();
    document.getElementById('reaction').innerHTML=('반응속도:' + (overtime - start) + 'ms'); //document.부분
    if (overtime - start < 100) {
      alert('당신의 반응속도는 최상위 입니다 당신은 혹시 프로게이머?')
    }
    else if (overtime - start < 200) {
      alert('당신의 반응속도는 상위 입니다 (조금만 더 하면 프로게이머의 반응속도가 가능합니다.')
    }
    else if (overtime - start < 250) {
      alert('당신의 반응속도는 평균 입니다')
    }
    else {
      alert('당신은 아마 손가락 트레이너가 필요합니다')
    }
    record.push(overtime - start);
    start = null;
    overtime = null;
    screen.classList.remove('now');
    screen.classList.add('waiting');
    screen.textContent = '클릭해서 시작하세요';
  }
});
// window.opener.document.getElementById('reaction').innerHTML=('반응속도:' + (overtime - start) + 'ms');
//document.getElementById('reaction').innerHTML=('반응속도:' + (overtime - start) + 'ms');