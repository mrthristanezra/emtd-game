let boss1wave = 25;
let boss2wave = 50;
let boss3wave = 75;
let boss4wave = 100;


function deleteText() {
  document.getElementById("boss-text").textContent = "";
}



function spawnBoss() {
  if (wave === boss1wave) {
    boss.push(new Enemy('◉', 40000, 0.8, 15000, 300));
    document.getElementById("boss-text").textContent = "Boss: Circulando";
    boss1wave += 100;
    setTimeout(deleteText, 5000);
  } else if (wave === boss2wave) {
    boss.push(new Enemy('🛆', 100000, 0.8, 200000, 300));
    document.getElementById("boss-text").textContent = "Boss: Triangelo";
    boss2wave += 100;
    setTimeout(deleteText, 5000);
  } else if (wave === boss3wave) {
    boss.push(new Enemy('▣', 200000, 0.8, 450000, 300));
    document.getElementById("boss-text").textContent = "Boss: Quadralith";
    boss3wave += 100;
    setTimeout(deleteText, 5000);
  } else if (wave === boss4wave) {
    boss.push(new Enemy('✵🌟✵', 500000, 0.8, 1000000, 300));
    document.getElementById("boss-text").textContent = "Boss: Legendary Star (Final Boss)";
    boss4wave += 100;
    setTimeout(deleteText, 5000);
  }
}

