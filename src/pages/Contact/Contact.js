import { useRef } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.scss"
import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet"
const Contact = () => {

   const form = useRef()

  const sendEmail = (e) => {
      e.preventDefault()
    
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
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
            İletişime Geç
        </h1>
        <p></p>
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required></input>
                    </li>
                    <li className="half">
                        <input type="email" name="email" placeholder="Email" required></input>
                    </li>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required></input>
                    </li>
                    <li>
                        <input placeholder="Subject" type="text" name="subject" required></input>
                    </li>
                    <li>
                        <textarea placeholder="Message" name="message" required></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND"></input>
                    </li>
                </ul>
            </form>
        </div>
      </div>
      <div className="info-map">
        Sabriye Üregen
        <br/>
        Bursa
        <br/>
        Karacabey <br/>
        <span>sabriyeuregen@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact