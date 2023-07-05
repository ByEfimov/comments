import "./App.css";
import "./null.css";

function App() {
  return (
    <>
      <div className="comments">
        <form className="input">
          <input type="text" />
          <button className="button">+</button>
        </form>
        <div className="comments-place">
          <div className="comment">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <div className="comment-use">
              <div className="title">
                <div className="name">@Sever026</div>
                <div className="ago">5 часов назад</div>
              </div>
              <div className="text">
                Зовите ещё Яниса, добрый и позитивный молодой человек, и машину
                знает какую выбрать, и в контенте разбирается, КОМАНДА А!
              </div>
              <div className="buttons">
                <button className="like">
                  <div className="image"></div>
                  163
                </button>
                <button className="diz">
                  <div className="image"></div>
                </button>
                <button className="answer">Ответить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
