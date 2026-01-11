import {Component} from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class AppComponent {}


document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("reviewsTrack") as HTMLElement;
  const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
  const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

  if (!track || !prevBtn || !nextBtn) return;

  let reviews = Array.from(track.children) as HTMLElement[];
  const visible = 3;
  let index = visible;

  // Clone last & first items
  const firstClones = reviews.slice(0, visible).map(el => el.cloneNode(true));
  const lastClones = reviews.slice(-visible).map(el => el.cloneNode(true));

  lastClones.forEach(clone => track.prepend(clone as HTMLElement));
  firstClones.forEach(clone => track.append(clone as HTMLElement));

  reviews = Array.from(track.children) as HTMLElement[];

  function getReviewWidth() {
    return reviews[0].clientWidth;
  }

  function move(withAnimation = true) {
    track.style.transition = withAnimation ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(-${index * getReviewWidth()}px)`;
  }

  // Initial position
  move(false);

  nextBtn.addEventListener("click", () => {
    index++;
    move();

    if (index === reviews.length - visible) {
      setTimeout(() => {
        index = visible;
        move(false);
      }, 500);
    }
  });

  prevBtn.addEventListener("click", () => {
    index--;
    move();

    if (index === 0) {
      setTimeout(() => {
        index = reviews.length - visible * 2;
        move(false);
      }, 500);
    }
  });

  window.addEventListener("resize", () => move(false));
});

