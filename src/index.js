const games = [
    {
      name: "Pac-Man",
      type: "online",
      link: "https://www.pacman.com/"
    },
    {
      name: "Tetris",
      type: "online",
      link: "https://tetris.com/"
    },
    {
      name: "Minecraft",
      type: "offline",
      link: "https://minecraft.net/"
    },
    {
      name: "Grand Theft Auto V",
      type: "offline",
      link: "https://www.rockstargames.com/V/"
    }
  ];
  
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("searchButton");
  const results = document.getElementById("results");
  
  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingGame = games.find(game => game.name.toLowerCase() === searchTerm);
  
    if (matchingGame) {
      window.location.href = matchingGame.link;
    } else {
      results.innerHTML = `
        <h3>No results found</h3>
      `;
    }
  });
  
