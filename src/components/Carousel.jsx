import React from 'react';
import cat from '../images/cat.png';
import mouse from '../images/mouse 1.png';
import krolik from '../images/krolik 1.png';
import Card1 from './Card1';


function Carousel(props) {
  debugger;

  let [slide, setSlide]=useState({data:{pets:[]}});
  let [show, setShow]=useState({display:'flex'});
  useEffect(()=>req_slide(slide, setSlide), []);

  function req_slide(slide, setSlide) {   
    var requestOptions = {
      method: 'GET',  
    };}

    fetch("https://pets.сделай.site/api/pets/slider", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setSlide(result)
    setShow({display:'none'});
   })

.catch(error => console.log('error', error));}

  let  slides=slide.data.pets.map((pet, index)=>{
    if (index==0){return<Slide data={pet} key={index} css_class='carousel-item active'/>;        
    } else {return <Slide data={pet} key={index} css_class='carousel-item'/>;}})

  let  indicators=slide.data.pets.map((pet, index)=>{
    if (index==0){return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={index+'btn'}></button>;        
    } else {return  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={"Slide "+(Number(index)+1)} key={index+'btn'}></button>;
    }})
    

 var props = [{
    "data": {
        "id": 6,
        "kind": "Кенгуру 1",
        "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
        "image": "/storage/images/06vZ5JD5SiY9scNCLx6NRku8f7t85CvBbSmbGObu.png"
    },
    "css_class": "carousel-item active"
},
{
"data": {
  "id": 6,
  "kind": "Кенгуру 2",
  "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
  "image": "/storage/images/06vZ5JD5SiY9scNCLx6NRku8f7t85CvBbSmbGObu.png"
},
"css_class": "carousel-item"
},

{"data": {
  "id": 6,
  "kind": "Кенгуру 3",
  "description": "Кенгуру из Бразилии, любит прыгать, ласковая",
  "image": "/storage/images/06vZ5JD5SiY9scNCLx6NRku8f7t85CvBbSmbGObu.png"
},
"css_class": "carousel-item"
},

];



  return (
    
    <div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .hh{\n      background-color:  rgb(173, 49, 223);\n      color: aliceblue;\n      text-align: center;\n    }\n    link{\n      background-color:  rgb(173, 49, 223);\n      color: aquamarine;\n    }\n    pon{\n      width: 50px;\n      text-wrap: pretty;\n      min-width: 250px;\n      color: rgb(173, 49, 223);\n    }\n    .card{\ntext-align: right;\n    }\n    .container {\n    width: 960px;\n    margin: 0 auto;\n    margin-left: 20px;\n    margin-right: 20px;\n    display: block;\n    width: 90%;\n    justify-content: space-between;\n}\n.link-purple {\n  color: rgb(173, 49, 223);\n}\n.link-purple:hover, .link-purple:focus {\n  color: rgb(173, 49, 223);\n}\n  "
      }}
    />
    
    <h2 className="hh">Найденные животные</h2>
    <br />
      <br />

      <div>
       <Loader display={show}/>
        <div id="carouselExampleIndicators" className="carousel slide carousel-dark w-50 m-auto" data-bs-ride="carousel" style={{minWidth: '250'}}>
  <div className="carousel-indicators">
    {indicators}
  </div>
  <div className="carousel-inner">
  
    {slides}

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>     
</div>
      </div>



      <div
        id="carouselExampleIndicators"
        className="carousel slide m-auto bg-dark bg-opacity-25 w-75 p-2"
        data-bs-ride="carousel"
        style={{ minHeight: 400 }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">

        <Card1 {...props[0]}/>
        <Card1 {...props[1]}/>
        <Card1 {...props[2]}/>

        {/* <div className={props.css_class}>
            <img
              src={props.data.image}
              className="d-block m-auto"
              alt={props.data.kind}        
            />
            <h2 className="text-center">{props.data.kind}</h2>
            <p className="text-center">
            {props.data.description}
            </p>
          </div> */}
    
        {/* <div className="carousel-item active">
            <img
              src={cat}
              className="d-block m-auto"
              alt="Собака"
              style={{ width: 500 }}
            />
            <h2 className="text-center">Найдена кошка</h2>
            <p className="text-center">
              Кошка серая, была утеряна в красногвардейском районе
            </p>
          </div>
          <div className="carousel-item">
            <img
              src={mouse}
              className="d-block m-auto"
              alt="Мышь"
              style={{ width: 500 }}
            />
            <h2 className="text-center">Найдена мышь</h2>
            <p className="text-center">
              Мышь черная, была утеряна в центральном районе
            </p>
          </div>
          <div className="carousel-item">
            <img
              src={krolik}
              className="d-block m-auto"
              alt="Горилла"
              style={{ width: 500 }}
            />
            <h2 className="text-center">Найден кролик</h2>
            <p className="text-center">
              Кролик, был утерян в красногвардейском районе
            </p>
          </div>*/}
        </div>
        <br /> 
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>    
     
     
     );
}

export default Carousel;