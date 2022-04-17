import { useEffect, useState } from "react";

const getData = async (setPlayerStats, query) => {
  const apiKey = "";
  const response = await fetch(`https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${query}&auth=${apiKey}`);
  const stats = await response.json();
  console.log(stats);
  setPlayerStats(stats);
}

const PlayerStats = ( {query} ) => {
  const [playerStats, setPlayerStats] = useState();
  useEffect(() => {
    if (query) {
      getData(setPlayerStats, query);
    }
  }, [query])

  if (playerStats) {
    return (
    <div>
      <h1>{playerStats.global.name}</h1>
      <ul>
        <li>Level: {playerStats.global.level}</li>
        <li>Rank: {playerStats.global.rank.rankName} {playerStats.global.rank.rankDiv}</li>
        <li>Selected Legend: {playerStats.legends.selected.LegendName}</li>
      </ul>

      <img src={playerStats.legends.selected.ImgAssets.icon} />

    </div>
    )
  } else {
    return <h2>Please search for something</h2>;
  }
}

export default PlayerStats;
