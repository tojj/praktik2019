import React from 'react'
import {
  Gift,
  Heart,
  Clipboard,
  HelpCircle
} from 'react-feather'
import QuestionAndAnswer from '../FAQ/QuestionAndAnswer'
import QNA from '../../REST/QNA'
import Categories from './Categories'
import ContactForm from './ContactForm'

class Qna extends QNA { }

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
    this.categories = [
      {
        "icon": <Gift />,
        "name": 'presenter',
        "active": false,
        "styling": {backgroundColor: '#4762b7', color: 'white'}
      },
      {
        "icon": <Heart />,
        "name": 'välgörenhet',
        "active": false,
        "styling": {backgroundColor: '#F66E9F', color: 'white'}
      },
      {
        "icon": <Clipboard />,
        "name": 'avtal',
        "active": false,
        "styling": {backgroundColor: '#FFC263', color: 'white'}
      },
      {
        "icon": <HelpCircle />,
        "name": 'kontakt',
        "active": false,
        "styling": {backgroundColor: '#008A64', color: 'white'}
      }
    ]
  }
  componentDidMount(){
    let Link = this.props.match.params.link
    this.renderCategoryContent(Link)

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
    if(category === 'kontakt'){
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
        <Categories categories={this.categories} name={this.props.match.params.link} clickHandler={this.renderCategoryContent} />
        {this.state.categoryContent}
       

      </div>
    )
  }
}

export default FAQ
