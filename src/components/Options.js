function Options({ question }) {
  console.log(question);

  return (
    <div className="options">
      {question.options.map((option) => (
        <button className="btn btn-option">{option}</button>
      ))}
    </div>
  );
}

export default Options;