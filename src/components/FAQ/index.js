import React from 'react'
import QuestionAndAnswer from '../FAQ/QuestionAndAnswer'
import REST from '../../REST'

class Qna extends REST { }

class FAQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qnaContent: ''
    }
    this.getAllQnaAndMount()
    this.getAllQnaAndMount = this.getAllQnaAndMount.bind(this)
    this.pushCounts = this.pushCounts.bind(this)
  }
  async pushCounts(id) {    
    let qna = await Qna.find(id)    
    qna.counter++
    await qna.save()
  }
  async getAllQnaAndMount() {
    const allQnaData = await Qna.find(`.find().sort({counter: -1}).exec()`)
    const allQna = allQnaData.map((qna, i) => {
      return (
        <QuestionAndAnswer question={qna.question} answer={qna.answer} key={i} id={qna._id} count={qna.counter} clickHandler={this.pushCounts}/>
      )
    })

    this.setState({qnaContent: allQna})
  }

  render() {
    return (
      <div className="faq-wrapper p-5 bg-white">
        <h2 className="mb-5">FAQ - Frågor och svar</h2>
        {this.state.qnaContent}
      </div>
    )
  }
}

export default FAQ
