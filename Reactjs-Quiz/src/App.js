import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import QuestionsData from './Data/QuestionData'

function App() {
  const [questions, setQuestions] = useState(QuestionsData);
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  //data is coming from api
  const fetchQuestions = async (category = "", difficulty = "") => {
    // const { data } = await axios.get(
    //   `https://opentdb.com/api.php?amount=10${
    //     category && `&category=${category}`
    //   }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    // );
    // console.log(JSON.stringify(data.results))

    //set your default question with format  setQuestions
    // [
    //   {
    //     "category": "Entertainment: Music",
    //     "type": "multiple",
    //     "difficulty": "hard",
    //     "question": "How many members are there in the idol group &quot;&micro;&#039;s&quot;?",
    //     "correct_answer": "9",
    //     "incorrect_answers": [
    //       "48",
    //       "6",
    //       "3"
    //     ]
    //   }
    // ]
    // setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/home" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
