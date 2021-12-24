//Para controlar el search
import { Formik, Form, Field } from 'formik'

//Para poder guardar el estado de mis  fotos, mis consultas
import { useState } from 'react';


//Elementos de bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap';

//mis estilos CSS
import './../src/myStyles.css'

//Componentes propios
import MyCard from './components/MyCard'
import Footer from './components/Footer'

// imagenes necesarias
import Logo from './img/p-icnon.png'
import Bell from './img/bell.svg'
import User from './img/user.svg'
import Comments from './img/comment.svg'
import Arrow from './img/arrow.svg'

const App = () => {

  //hook que controla el estado de las fotos
  const [fotos, setFotos] = useState([])
  console.log({fotos})
  
  //para poder entrar a cada una de las fotos
  const open = (url) => { 
    window.open(url)

  }

  return(
    <div>
      <Navbar className='navBorder'>
        <Container>
          <Navbar.Brand href="#">
            <img alt="Logo" src={Logo} width="50" height="50" className="d-inline-block align-top"/>
          </Navbar.Brand>

          <Nav className="me-auto navElementos container-fluid">
            <Nav.Link href="#" id='inicioNav'>Inicio</Nav.Link>
            <Nav.Link href="#">Hoy</Nav.Link>
            <Formik
              initialValues={{search: ''}}
              onSubmit={async values =>{
                //Función asíncrona o promesa para la API de unsplash
                console.log(values)
                const response = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${values.search}`,{
                  headers: {
                    'Authorization': 'Client-ID r8QI5Cu8E_ahxutgdeWA9I6QWSPNb5N2t_bN1XB6dv8'
                } })

                const data = await response.json()
                setFotos(data.results)

              }}>
                
                <Form>
                  {/*Es el campo de busqueda de mi nav*/}
                  <Field name='search' clas='true' className='inputSearch' place='true' placeholder="Buscar"/>
                    
                </Form> 
            
            </Formik> {/*Para controlar el campo de busqueda */} 
            <Nav.Link href="#Campana"><img alt="Logo" src={Bell} width="25" height="25" className="d-inline-block align-top"/></Nav.Link>
            <Nav.Link href="#Mensaje"><img alt="Logo" src={Comments} width="25" height="25" className="d-inline-block align-top"/></Nav.Link>
            <Nav.Link href="#Usuaario"><img alt="Logo" src={User} width="25" height="25" className="d-inline-block align-top"/></Nav.Link>
            <Nav.Link href="#Flecha"><img alt="Logo" src={Arrow} width="25" height="25" className="d-inline-block align-top"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

       <div className=' container divFotos '>
         <div className='columnas'>
            {fotos.map( foto => 
              <MyCard 
                key={foto.id}
                onClick={() => open(foto.links.html)}
                img={foto.urls.regular} 
                desc={[foto.description, foto.alt_description].join('-')}>
             </MyCard>)}
         </div>
       </div>
        
      
      <Footer/>

    </div>
  
  
  );

}

export default App;
