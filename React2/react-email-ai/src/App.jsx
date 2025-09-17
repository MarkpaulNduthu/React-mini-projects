import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Student from './Student'
import List from './List.jsx'
import Counter from './Counter.jsx'
import Form from './Form.jsx'
import List2 from './List2.jsx'
import Car from './Car.jsx'

function App() {
  return (
    <>
      <Header />
      <Card />
      <Card />
      <div>
        <h2 style={{ borderBottom: "2px solid" }}>Working with props,propttypes and default-props</h2>
        <Student name="Markpaul" age={20} isStudent={true} />
        <Student name="Nduthu" age={21} isStudent={true} />
        <Student name="Mwema" age={24} isStudent={false} />
        <Student name="Angel" age={18} isStudent={true} />
        <Student />
      </div>
      <div>
        <h2 style={{ borderBottom: '2px solid red' }}>Learning List Rendering</h2>
        <List />
      </div>
      <div>
        <h2 style={{ borderBottom: '2px solid red' }}>Learning React Hooks</h2>
        <h3>&nbsp;&nbsp;1. UseState Hook</h3>
        <Counter />
      </div>
      <div>
        <h3>&nbsp;&nbsp;onChange EventHandler in Forms with useState</h3>
        <Form />
      </div>
      <div>
        <h2>List State Updation</h2>
        <List2/>
      </div>
      <div>
        <h2>Object -Car State Updation</h2>
        <h3>List of Car Objects</h3>
        <Car/>
      </div>
      <Footer />
    </>

  )
}

export default App