import React from "react"
import axios from "axios"
import { 
  Gift, 
  Heart, 
  Clipboard, 
  HelpCircle 
} from "react-feather"
import QuestionAndAnswer from "../FAQ/QuestionAndAnswer"
import Categories from "./Categories"

class FAQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qnaContent: "",
      amount: 5,
      totalAmount: "",
      categoryContent: ""
    }
    this.getQnaAmountTotal()
    this.getAllQnaAndMount()
    this.getQnaAmountTotal = this.getQnaAmountTotal.bind(this)
    this.getAllQnaAndMount = this.getAllQnaAndMount.bind(this)
    this.renderCategoryContent = this.renderCategoryContent.bind(this)
    this.increaseCountByOne = this.increaseCountByOne.bind(this)
    this.categories = [
      {
        icon: <Gift />,
        name: "presenter",
        active: false,
        styling: { backgroundColor: "#6C80C5", color: "white" }
      },
      {
        icon: <Heart />,
        name: "välgörenhet",
        active: false,
        styling: { backgroundColor: "#F66E9F", color: "white" }
      },
      {
        icon: <Clipboard />,
        name: "avtal",
        active: false,
        styling: { backgroundColor: "#FFC263", color: "white" }
      },
      {
        icon: <HelpCircle />,
        name: "allmänt",
        active: false,
        styling: { backgroundColor: "#008A64", color: "white" }
      }
    ]
  }
  componentDidMount() {
    document.title = "Tojj - Vanliga frågor"
  }
  async increaseCountByOne(id) {
    await axios({
      method: "put",
      url: `/api/qna/id/${id}/read`
    })
  }
  async getQnaAmountTotal() {
    const allQnasAmount = await axios({
      method: "get",
      url: "/api/qna"
    })
    this.setState({ totalAmount: allQnasAmount.data.length })
  }
  async getAllQnaAndMount() {
    const allQnaData = await axios({
      method: "get",
      url: `/api/qna/sorted?limit=${this.state.amount}`
    })

    const allQna = allQnaData.data.map((qna, i) => {
      return (
        <QuestionAndAnswer
          question={qna.question}
          answer={qna.answer}
          key={i}
          id={qna._id}
          count={qna.counter}
          clickHandler={this.increaseCountByOne}
        />
      )
    })
    this.setState({
      qnaContent: allQna,
      amount: this.state.amount + 5
    })
  }
  async renderCategoryContent(category) {
    const allCategoryQnaData = await axios({
      method: "get",
      url: `/api/qna/sorted?category=${category}`
    })

    const allCategoryQna = allCategoryQnaData.data.map((qna, i) => {
      return (
        <QuestionAndAnswer
          question={qna.question}
          answer={qna.answer}
          key={i}
          id={qna._id}
          count={qna.counter}
          clickHandler={this.increaseCountByOne}
        />
      )
    })
    this.setState({
      categoryContent: allCategoryQna
    })
  }

  render() {
    return (
      <div className="faq-wrapper bg-white">
        <h2>FAQ - Frågor och svar</h2>
        {this.state.qnaContent}
        {this.state.qnaContent.length === this.state.totalAmount ? null : (
          <button
            type="button"
            className="mt-3 btn btn-outline-dark"
            onClick={this.getAllQnaAndMount}
          >
            Läs in fler
          </button>
        )}
        <Categories
          categories={this.categories}
          name={this.props.match.params.link}
          clickHandler={this.renderCategoryContent}
        />
        {this.state.categoryContent}
      </div>
    )
  }
}

export default FAQ
