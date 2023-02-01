import './About.css'

function Aboutus(props) {
  const tuggleColor = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'light' ? 'white' : '#36499c',
    border: `2px solid ${props.mode === 'dark' ? 'white' : 'black'}`,
    'border-radius': '5px'
  }
  return (
    <div className="container accordion" id="accordionExample" style={tuggleColor}>
      <div className="accordion-item" style={tuggleColor}>
        <h2 className="accordion-header " id="headingOne" style={tuggleColor}>
          <button className="accordion-button container" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={tuggleColor}>
            <strong>About Page</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={tuggleColor}>
          <div className="accordion-body" style={tuggleColor}>
            This page all about operation on the text , we can change the text from lowercase to uppercase and uppercase to lowercase , remove space captilize and copy many more
            <br />
            this is my first project made in react js 
          </div>
        </div>
      </div>
      <div className="accordion-item" style={tuggleColor}>
        <h2 className="accordion-header" id="headingTwo" style={tuggleColor}>
          <button className="accordion-button container collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={tuggleColor}>
            <strong>About me </strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={tuggleColor}>
          <div className="accordion-body" style={tuggleColor}>
            <div className="card" style={{ 'width': '18rem' }}>
              <img src="https://scontent.fvns2-1.fna.fbcdn.net/v/t39.30808-6/279140112_1106321603268412_4642657278434968900_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=pWe2TnqvDlQAX8ynhA7&_nc_ht=scontent.fvns2-1.fna&oh=00_AfAPcprTsJi59kdk9ZISM7APtbZ6gBR67jvj3Mk0JCTXMQ&oe=63E00295" className="card-img-top" alt="good img" />
              <div className="card-body" style={tuggleColor}>
                <h5 className="card-title">Ashish Tripathi</h5>
                <p className="card-text">I am <strong>Ashish Tripathi </strong> I have made this project with react js and I am motivated by Shivam Mishra Sir after that I am start to learning react js and this is my first project <br />
                  thank to <strong>Shivam sir</strong> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Aboutus