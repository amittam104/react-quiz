function FinishScreen({ points, maxPoints, highscore }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage > 90 && percentage < 100) emoji = "🥈";
  if (percentage > 80 && percentage < 90) emoji = "🥈";
  if (percentage > 50 && percentage < 80) emoji = "🥉";
  if (percentage > 20 && percentage < 50) emoji = "😐";
  if (percentage > 0 && percentage < 20) emoji = "😑";
  if (percentage === 0) emoji = "👏🏼";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
    </>
  );
}

export default FinishScreen;