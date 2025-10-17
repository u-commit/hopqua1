$(document).ready(function () {
  const envelope = $('#envelope');
  const openBtn = $("#openBtn");
  const resetBtn = $("#resetBtn");

  let currentPage = 1;
  const totalPages = 8;
  let isOpen = false;

  envelope.on('click', function () {
      if (isOpen) nextLyric();
  });

  openBtn.on('click', function () {
      envelope.removeClass("close").addClass("open");
      isOpen = true;
      openBtn.hide();
      resetBtn.show();
  });

  resetBtn.on('click', function () {
      envelope.removeClass("open").addClass("close");
      isOpen = false;
      setTimeout(function () {
          currentPage = 1;
          updateActivePage();
          resetBtn.hide();
          openBtn.show();
      }, 600);
  });

  function nextLyric() {
      currentPage = currentPage < totalPages ? currentPage + 1 : 1;
      updateActivePage();
  }

  function updateActivePage() {
      $(".lyric-page").removeClass("active");
      $("#page" + currentPage).addClass("active");
  }
});

const audio = document.getElementById("sound");
let isPlaying = false;
function playAudioOnce() {
    if (!isPlaying) {
        audio.play().catch((e) => {
            console.log("Autoplay blocked:", e);
        });
        isPlaying = true;
    }
}
window.addEventListener("click", playAudioOnce);
window.addEventListener("touchstart", playAudioOnce);
window.addEventListener("keydown", playAudioOnce);
