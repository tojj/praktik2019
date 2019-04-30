import React from 'react'
import QuestionAndAnswer from '../FAQ/QuestionAndAnswer'
import REST from '../../REST'
import Categories from './Categories'
import ContactForm from './ContactForm'

class Qna extends REST { }

class FAQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qnaContent: '',
      amount: 5,
      totalAmount: '',
      categoryContent: ''
    }
    this.getQnaAmountTotal()
    this.getAllQnaAndMount()
    this.getQnaAmountTotal = this.getQnaAmountTotal.bind(this)
    this.getAllQnaAndMount = this.getAllQnaAndMount.bind(this)
    this.renderCategoryContent = this.renderCategoryContent.bind(this)

    this.pushCounts = this.pushCounts.bind(this)
  }
  async pushCounts(id) {
    let qna = await Qna.find(id)
    qna.counter++
    await qna.save()
  }
  async getQnaAmountTotal() {
    const allQnasAmount = await Qna.find()
    this.setState({ totalAmount: allQnasAmount.length })
  }
  async getAllQnaAndMount() {
    const allQnaData = await Qna.find(`.find().limit(${this.state.amount}).sort({counter: -1}).exec()`)
    const allQna = allQnaData.map((qna, i) => {
      return (
        <QuestionAndAnswer question={qna.question} answer={qna.answer} key={i} id={qna._id} count={qna.counter} clickHandler={this.pushCounts} />
      )
    })
    this.setState({
      qnaContent: allQna,
      amount: this.state.amount + 5
    })
  }
  async renderCategoryContent(category) {
    if(category === 'Kontakt'){
      this.setState({ categoryContent: <ContactForm />})
      return
    }
    const allCategoryQnaData = await Qna.find(`.find({ category: "${category}" }).sort({counter: -1}).exec()`)
    
    const allCategoryQna = allCategoryQnaData.map((qna, i) => {
      return (
        <QuestionAndAnswer question={qna.question} answer={qna.answer} key={i} id={qna._id} count={qna.counter} clickHandler={this.pushCounts} />
      )
    })
    this.setState({
      categoryContent: allCategoryQna,
    })
  }

  render() {
    return (
      <div className="faq-wrapper bg-white">
        <h2>FAQ - Frågor och svar</h2>
        {this.state.qnaContent}
        {this.state.qnaContent.length === this.state.totalAmount ? null :
          <button type="button" className="mt-3 btn btn-outline-dark" onClick={this.getAllQnaAndMount}>Läs in fler</button>
        }
        <Categories clickHandler={this.renderCategoryContent} />
        {this.state.categoryContent}

      </div>
    )
  }
}

export default FAQ
