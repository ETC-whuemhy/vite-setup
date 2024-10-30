import "./Contact.css"

const Contact = () => {
  return (
    <section>

      <div className="info">

      <label htmlFor="Name">Name</label>
      <input type="text" placeholder="name" />

      <label htmlFor="Email">Email</label>
      <input type="text" name="" id="" placeholder="email" />

      </div>

      <div className="msg">

      <textarea className="span" name="" id="" placeholder="type here"></textarea>

      </div>

      <button className="subBtn">Submit</button>

    </section>
  )
}

export default Contact