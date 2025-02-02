document.querySelector('.container').addEventListener('touchstart', function(e) {
    // Mendapatkan posisi sentuhan
    let touch = e.touches[0];
    let moveX = touch.clientX;
    let moveY = touch.clientY;
  
    // Menggerakkan container berdasarkan posisi sentuhan
    this.style.transform = `translate(${moveX - 150}px, ${moveY - 100}px)`;
  });
  
  document.querySelector('.container').addEventListener('touchend', function() {
    // Mengembalikan posisi ke semula
    this.style.transform = 'translate(0, 0)';
  });
  