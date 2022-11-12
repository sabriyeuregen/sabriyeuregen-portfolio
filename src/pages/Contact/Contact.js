import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_9ck25ci', form.current, 'OwA0v8hc-brEKGvkK')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'İ',
              'l',
              'e',
              't',
              'i',
              'ş',
              'i',
              ' m',
              " ",
              'b',
              'i',
              'l',
              "g",
              "i",
              "l",
              "e",
              "r",
              "i"
            ]}
            idx={15}
          />
        </h1>
        <div className='contact-info'>
          <p>e-posta: sabriyeuregen@gmail.com</p>
          <p>tel-no : 05418935836</p>
          <p>Adres : Bursa</p>
          <p>Doğum Tarihi: 17/04/1999</p>
           
        </div>
        <div className="contact-form">
        <h2>İletişime Geç</h2>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                ></input>
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                ></input>
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="SEND"
                ></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
