const NextPrevious = ({
  existPagePrevious,
  existPageNext,
  previousPage,
  nextPage,
}) => {
  return (
    <div className="nav-next-previous">
      <div
        className={
          existPagePrevious ? "span-container" : "span-container hidden"
        }
        onClick={previousPage}
      >
        <span>&#x21e6;</span>
      </div>
      <div
        className={existPageNext ? "span-container" : "span-container hidden"}
        onClick={nextPage}
      >
        <span>&#x21e8;</span>
      </div>
    </div>
  );
};

export default NextPrevious;
