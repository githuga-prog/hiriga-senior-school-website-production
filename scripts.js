// Minimal JS for slider arrows and possibly future interactions

document.addEventListener('DOMContentLoaded', function () {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger-menu');
  const navContent = document.getElementById('nav-content');
  
  if (hamburger && navContent) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navContent.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    const navLinks = navContent.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navContent.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    navContent.addEventListener('click', function(e) {
      if (e.target === navContent) {
        hamburger.classList.remove('active');
        navContent.classList.remove('active');
      }
    });
  }

  // Custom Video Player
  const video = document.getElementById('students-video');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const videoPlayer = document.querySelector('.custom-video-player');
  const playIcon = document.querySelector('.play-icon');
  const pauseIcon = document.querySelector('.pause-icon');
  const videoControls = document.querySelector('.video-controls');

  if (video && playPauseBtn) {
    // Play/Pause functionality
    function togglePlayPause() {
      if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        videoPlayer.classList.add('playing');
      } else {
        video.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        videoPlayer.classList.remove('playing');
      }
    }

    // Click events
    playPauseBtn.addEventListener('click', togglePlayPause);
    video.addEventListener('click', togglePlayPause);
    videoControls.addEventListener('click', togglePlayPause);

    // Video ended event
    video.addEventListener('ended', function() {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      videoPlayer.classList.remove('playing');
    });

    // Prevent event bubbling on button clicks
    playPauseBtn.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Hero and join section buttons could have smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

