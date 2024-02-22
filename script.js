// script.js
document.getElementById('playButton').addEventListener('click', function() {
    // 글씨와 애니메이션 영역을 표시합니다.
    document.getElementById('birthdayMessage').style.display = 'block';
    document.getElementById('animationArea').style.display = 'block';
  
    // 풍선과 별을 생성하고 애니메이션 영역에 추가합니다.
    createAnimations();
  
    // 오디오를 재생합니다.
    var audio = document.getElementById('birthdaySong');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause(); // 이미 재생 중이라면 일시 정지
        audio.currentTime = 0; // 다시 클릭했을 때 처음부터 재생
    }
  });


function createAnimations() {
    const animationArea = document.getElementById('animationArea');
    // 기존에 추가된 요소가 있다면 제거합니다.
    animationArea.innerHTML = '';
    // 풍선과 별을 생성하여 추가하는 로직을 여기에 넣습니다.
    for (let i = 0; i < 20; i++) {
        animationArea.appendChild(createBalloon());
        animationArea.appendChild(createStar());
    }
}

function createBalloon() {
    var balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.textContent = '🎈';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 3 + 5 + 's';
    return balloon;
}
  
function createStar() {
    var star = document.createElement('div');
    star.className = 'star';
    star.textContent = '⭐';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = Math.random() * 3 + 5 + 's';
    return star;
}
