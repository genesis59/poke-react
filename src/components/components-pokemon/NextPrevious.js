/******************************************************************
	Fonction	:  Gestion des boutons next/previous
	Creation	:  GV juillet-2021
 ******************************************************************/

const NextPrevious = ({
  existPagePrevious,
  existPageNext,
  previousPage,
  nextPage,
  loading,
}) => {
  if (!loading) {
    return (
      <div className="nav-next-previous">
        <a href="#nextPrevious">
          <div
            className={
              existPagePrevious ? "span-container" : "span-container hidden"
            }
            onClick={previousPage}
          >
            <span>&#x21e6;</span>
          </div>
        </a>
        <a href="#nextPrevious">
          <div
            className={
              existPageNext ? "span-container" : "span-container hidden"
            }
            onClick={nextPage}
          >
            <span>&#x21e8;</span>
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div className="nav-next-previous">
        <div className="span-loading-container">
          <span className="span-loading">Chargement veuillez patientez</span>
        </div>
      </div>
    );
  }
};

export default NextPrevious;
