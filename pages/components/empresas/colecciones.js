import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo';
import { Tab, Nav, Dropdown, Form, Button, Col, Breadcrumb, Row, FormGroup, Card, Badge } from "react-bootstrap";
import Link from "next/link"

import users2 from "../../../public/assets/img/users/2.jpg"
import media3 from "../../../public/assets/img/media/3.jpg"
import users4 from "../../../public/assets/img/users/4.jpg"
import Tabss from './tabColecciones';



const Colecciones = () => {

  return (
    <>
      {/*Seo start */}
      <Seo title="Colecciones" />
      {/* Seo end*/}

      {/* Page Header Start*/}
      <PageHeader title="Colecciones" item="Pages" active_item="colecciones" />
      {/* Page Header end*/}

      {/*Tab containier start */}
      <Tab.Container
        id="center-tabs-example"
        defaultActiveKey="Biografia"
        className="bg-gray-100"
      >
        {/*Tab container End */}

        {/* Row start*/}
        <Row className="square">
          {/*container component start */}
          <div lg={12} md={12}>
            <Card className="custom-card ">
              <Card.Body>
                <div className="panel profile-cover">
                  <div className="profile-cover__img">
                    <h3 className="h3">Empresa Eafit</h3>
                  </div>
                  <div className="profile-cover__action bg-img"></div>
                  <div className="profile-cover__info">
                    <ul className="nav">
                      <li>
                        <strong>1</strong>Colecciones
                      </li>
                    </ul>
                  </div>
                  {/* List nav start */}
                  <div className="profile-tab tab-menu-heading">
                    <Nav variant="pills" className="p-3 bg-primary-transparent">
                      <Nav.Item>
                        <Nav.Link eventKey="Biografia">Biografia</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Notificationes">Notificationes <Badge bg="primary">0</Badge></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Colecciones">Mis Colecciones </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Aprobaciones">Aprobaciones <Badge bg="primary">0</Badge></Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="setting">
                          Settings
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  {/* List nav end */}
                </div>
              </Card.Body>
            </Card>
          </div>
          {/*container component end  */}
        </Row>
        {/* Row end*/}

        {/* Row start*/}
        <Row className="row-sm">
          {/* Col start*/}
          <Col md={12} lg={12}>
            {/*container component start */}
            <div className="card custom-card main-content-body-profile">
              {/*tab  container start */}
              <Tab.Content>
                {/*tab pane container start Biografia */}
                <Tab.Pane eventKey="Biografia">
                  <div lg={12} md={12}>
                    <Card className="custom-card main-content-body-profile">
                      <div className="tab-content">
                        <div className="main-content-body tab-pane p-sm-4 p-0 border-top-0 active">
                          <div className=" p-0 border p-0 rounded-10">
                            <div className="p-4">
                              <h4 className="tx-15 text-uppercase mb-3 text-info">
                                Biografia
                              </h4>
                              <p className="m-b-5">
                                Somos la Univeridad de Eafit y nos dedicamos a la educacion superior y a la investigacion
                                de nuevas tecnologias y mejoramiento de nuestras instalacione y servicios. Como somos inovadores
                                y nos gusta estar a la vanguardia de la tecnologia nos gusta estar en constante actualizacion
                                nos hemos afiliado a la empresa de Certiblock con la finalidad de mejorar nuestros servicios
                                en la gestion de documentos y la seguridad de la informacion. Certiblock es una empresa que
                                nos ofrece la posibilidad de gestionar nuestros documentos de manera segura y eficiente dandonos la
                                posibilidad de tener un control de los mismos y de la informacion que estos contienen.
                              </p>
                              <div className="m-t-30">
                                <h4 className="tx-15 text-uppercase mt-3 text-info">
                                  Informacion de Univeridad
                                </h4>
                                <div className=" p-t-10">
                                  <p className="mb-0 text-muted">
                                    <span className="mb-0 text-info ">
                                      <i className="fe fe-chevrons-right"></i>url: eafit.edu.co
                                    </span>
                                  </p>
                                  <p className="mb-0 text-muted">
                                    <span className="mb-0 text-info ">
                                      <i className="fe fe-chevrons-right"></i>fecha: 1964-2022
                                    </span>
                                  </p>
                                  <p className="text-muted tx-13 m-b-0">
                                    La Universidad EAFIT originalmente las siglas en español: Escuela de Administración, Finanzas e Instituto Tecnológico, «Escuela de Administración,
                                    Finanzas e Instituto Tecnológico» es una universidad privada colombiana ubicada en Medellín que ofrece 23 programas de pregrado,
                                    70 especializaciones, 34 maestrías y seis programas de doctorado.  La universidad ofrece títulos en diversas disciplinas a través de sus
                                    escuelas de Administración, Ingeniería, Derecho, Finanzas y Economía, Ciencias y Humanidades.
                                    La Universidad EAFIT fue aprobada por el Ministerio de Educación de Colombia el 6 de mayo de 1971.
                                    Cuenta con tres sedes adicionales en Bogotá, Pereira y Rionegro.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="border-top"></div>
                            <div className="p-4">
                              <Form.Label className="main-content-label tx-13 mg-b-20">
                                Contacto
                              </Form.Label>
                              <div className="d-sm-flex">
                                <div className="mg-sm-r-20 mg-b-10">
                                  <div className="main-profile-contact-list">
                                    <div className="media">
                                      <div className="media-icon bg-primary-transparent text-primary">
                                        <i className="icon fe fe-user"></i>
                                      </div>
                                      <div className="media-body">
                                        <span>Contacto Administracion</span>
                                        <div> +57 312 788 22 22 </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mg-sm-r-20 mg-b-10">
                                  <div className="main-profile-contact-list">
                                    <div className="media">
                                      <div className="media-icon bg-success-transparent text-success">
                                        <i className="icon fe fe-box"></i>
                                      </div>
                                      <div className="media-body">
                                        <span>Gmail</span>
                                        <div> administracion-u-eafit.@gmail.com </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div className="main-profile-contact-list">
                                    <div className="media">
                                      <div className="media-icon bg-info-transparent text-info">
                                        <i className="icon fe fe-map-pin"></i>
                                      </div>
                                      <div className="media-body">
                                        <span>Ubicacion</span>
                                        <div> Medellin-El-Poblado, Colombia </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-top"></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {/*container component end */}
                </Tab.Pane>
                {/*tab pane container Biografia end */}

                {/*tab pane container Notificationes start */}
                <Tab.Pane eventKey="Notificationes">
                  <div className="main-content-body tab-pane border-top-0">
                    <div className="border p-4">
                      <div className="main-content-body main-content-body-profile">
                        <div className="main-profile-body p-0">
                          <Row className=" row-sm">
                            <div className="col-12">
                              <Card className=" mg-b-20 border">
                                <Card.Header className="p-4">
                                  <div className="media">
                                    <div className="media-user me-2">
                                      <div className="main-img-user avatar-md">
                                        <img alt="user6" className="rounded-circle" src={users2.src} />
                                      </div>
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-0 mg-t-2 ms-2">Notificaion de Certiblock</h6>
                                      <span className="text-info ms-2">Hace un momento</span>
                                    </div>
                                  </div>
                                </Card.Header>
                                <Card.Body>
                                  <p className="mb-0 text-muted">
                                    <span className="mb-0 text-dark fs-13 mx-2">
                                      <i className="fe fe-folder"></i> Se ha completado la coleccion
                                    </span>
                                  </p>
                                  <p className="mg-t-0 fs-13 mx-2">
                                    Puede consultar en el apartado de aprobaciones verificar si realmente quedo correctamente su creacion
                                    alli encontrara la coleccion de certificados de la univeridad Eafit y podra revizarlos antes de enviarlos a la
                                    univeridad para su verificacion y puede descargarlos en pdf para su posterior uso.
                                  </p>
                                  <Row className=" row-sm">
                                    <div className="col">
                                      <p className="mb-0 text-muted">
                                        <span className="mb-0 text-success fs-13 mx-2">
                                          <i className="fe fe-copy"></i> Aqui esta la coleccion de certificados para eafit:
                                        </span>
                                      </p>
                                      <img alt="img" className="wd-400 m-6" src={media3.src} />
                                      <p className="mb-0 text-muted">
                                        <span className="mb-0 text-success fs-13 mx-2">
                                          <i className="fe fe-hash"></i> url:
                                        </span>
                                        https://certiblock.com/verificacion/5f9f9b0b0b9b8c0017b6b1b1
                                      </p>
                                    </div>
                                  </Row>
                                  <div className="media mg-t-15 profile-footer">
                                    <div className="media-user me-2">
                                      <Row className="row-sm">
                                        <Col md={12} className="col-md-12">
                                          <Card className="custom-card">
                                            <Row className="row-sm">
                                              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0 border-end">
                                                <Card.Body className="text-center">
                                                  <h6 className="mb-0">Fecha de creacion</h6>
                                                  <h2 className="mb-1 mt-2 number-font">
                                                    <span className="counter">01/12/2022</span>
                                                  </h2>
                                                  <p className="mb-0 text-muted">
                                                    <span className="mb-0 text-success fs-13 mx-2">
                                                      <i className="fe fe-clock"></i> 12:00 am
                                                    </span>
                                                    desde medellin colombia
                                                  </p>
                                                </Card.Body>
                                              </Col>
                                              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0 border-end">
                                                <Card.Body className="text-center">
                                                  <h6 className="mb-0">Cantidad Items</h6>
                                                  <h2 className="mb-1 mt-2 number-font">
                                                    <span className="counter">10,000</span>
                                                  </h2>
                                                  <p className="mb-0 text-muted">
                                                    <span className="mb-0 text-success fs-13 mx-2">
                                                      <i className="fe fe-database"></i> 100%
                                                    </span>
                                                    completado el minteo
                                                  </p>
                                                </Card.Body>
                                              </Col>
                                              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0 border-end">
                                                <Card.Body className="text-center">
                                                  <h6 className="mb-0">Aprobado</h6>
                                                  <h2 className="mb-1 mt-2 number-font">
                                                    <span className="counter">false</span>
                                                  </h2>
                                                  <p className="mb-0 text-muted">
                                                    <span className="mb-0 text-warning fs-13 mx-2">
                                                      <i className="fe fe-shield-off"></i> verificacion
                                                    </span>
                                                    pendiente
                                                  </p>
                                                </Card.Body>
                                              </Col>
                                              <Col xl={3} lg={6} sm={6} className="pe-0 ps-0">
                                                <Card.Body className="text-center">
                                                  <h6 className="mb-0">Creador coleccion</h6>
                                                  <h2 className="mb-1 mt-2 number-font">
                                                    <span className="counter">Mariano</span>
                                                  </h2>
                                                  <p className="mb-0 text-muted">
                                                    <span className="mb-0 text-success fs-13 mx-2">
                                                      <i className="fe fe-user-check"></i> verificado
                                                    </span>
                                                    Administracion certiblock
                                                  </p>
                                                </Card.Body>
                                              </Col>
                                            </Row>
                                          </Card>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </div>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/*tab pane container Notificationes end */}

                {/*Start Colecciones*/}
                <Tab.Pane eventKey="Colecciones">
                  <div>
                    <div className="card-body border">
                      <div className="demo-gallery">
                        <Tabss/>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                {/*end Colecciones*/}


                {/*Start aprobaciones*/}
                <Tab.Pane eventKey="Aprobaciones" className="main-content-body tab-pane border-top-0">
                  <div className="card-body border pd-b-10">
                    <Row className=" row-sm">
                      <Col sm={12} md={6} xl={3}>
                        <Card className="custom-card border">
                          <div className=" text-center">
                            <div className="user-lock text-center">
                              <Dropdown className="text-end">
                                <Dropdown.Toggle href="#" variant="default">
                                  <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" dropdown-menu-end" style={{ marginTop: "0px" }}>
                                  <Dropdown.Item href="#">
                                    <i className="fe fe-message-square me-2"></i>
                                    Message
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#">
                                    <i className="fe fe-edit-2 me-2"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#">
                                    <i className="fe fe-eye me-2"></i> View
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#">
                                    <i className="fe fe-trash-2 me-2"></i>
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                              <Link href="#">
                                <a>
                                  <img
                                    alt="avatar"
                                    className="rounded-circle"
                                    src={users4.src}
                                  />
                                </a>
                              </Link>
                            </div>
                            <Link href="#">
                              <a>
                                <h5 className=" mb-1 mt-3 main-content-label">
                                  Socrates Itumay
                                </h5>
                              </a>
                            </Link>
                            <p className="mb-2 mt-1 tx-inverse">
                              Project Manager
                            </p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief
                              Contrary.
                            </p>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                  {/* </div> */}
                </Tab.Pane>
                {/*End aprobaciones*/}
                
                <Tab.Pane eventKey="setting">
                  <div
                    className="main-content-body tab-pane p-sm-4 p-0 border-top-0"
                  >
                    <div className="card-body border" data-select2-id="12">
                      <Form className="form-horizontal" data-select2-id="11">
                        <div className="mb-4 main-content-label">Account</div>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >User Name</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="text"
                                placeholder="User Name"
                                defaultValue="Sonia Taylor"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3}>
                              <Form.Label >Email</Form.Label>
                            </Col>
                            <Col md={9}>
                              <Form.Control
                                type="text"
                                placeholder="Email"
                                defaultValue="info@SoniaTaylor.in"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup data-select2-id="108" className="form-group">
                          <div className="row" data-select2-id="107">
                            <Col md={3}>
                              <Form.Label >Language</Form.Label>
                            </Col>
                            <div className="col-md-9" data-select2-id="106">
                              <select
                                className="form-control select2"
                                data-select2-id="5"
                                tabIndex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="33">
                                  Us English
                                </option>
                                <option data-select2-id="109">Arabic</option>
                                <option data-select2-id="110">Korean</option>
                              </select>
                            </div>
                          </div>
                        </FormGroup>
                        <FormGroup data-select2-id="10" className="form-group">
                          <div className="row" data-select2-id="9">
                            <Col md={3}>
                              <Form.Label >Timezone</Form.Label>
                            </Col>
                            <div className="col-md-9" data-select2-id="8">
                              <select
                                className="form-control select2"
                                data-select2-id="4"
                                tabIndex="-1"
                                aria-hidden="true"
                              >
                                <option
                                  defaultValue="Pacific/Midway"
                                  data-select2-id="6"
                                >
                                  (GMT-11:00) Midway Island, Samoa
                                </option>
                                <option
                                  defaultValue="America/Adak"
                                  data-select2-id="16"
                                >
                                  (GMT-10:00) Hawaii-Aleutian
                                </option>
                                <option
                                  defaultValue="Etc/GMT+10"
                                  data-select2-id="17"
                                >
                                  (GMT-10:00) Hawaii
                                </option>
                                <option
                                  defaultValue="Pacific/Marquesas"
                                  data-select2-id="18"
                                >
                                  (GMT-09:30) Marquesas Islands
                                </option>
                                <option
                                  defaultValue="Pacific/Gambier"
                                  data-select2-id="19"
                                >
                                  (GMT-09:00) Gambier Islands
                                </option>
                                <option
                                  defaultValue="America/Anchorage"
                                  data-select2-id="20"
                                >
                                  (GMT-09:00) Alaska
                                </option>
                                <option
                                  defaultValue="America/Ensenada"
                                  data-select2-id="21"
                                >
                                  (GMT-08:00) Tijuana, Baja California
                                </option>
                                <option
                                  defaultValue="Etc/GMT+8"
                                  data-select2-id="22"
                                >
                                  (GMT-08:00) Pitcairn Islands
                                </option>
                                <option
                                  defaultValue="America/Los_Angeles"
                                  data-select2-id="23"
                                >
                                  (GMT-08:00) Pacific Time (US &amp; Canada)
                                </option>
                                <option
                                  defaultValue="America/Denver"
                                  data-select2-id="24"
                                >
                                  (GMT-07:00) Mountain Time (US &amp; Canada)
                                </option>
                                <option
                                  defaultValue="America/Chihuahua"
                                  data-select2-id="25"
                                >
                                  (GMT-07:00) Chihuahua, La Paz, Mazatlan
                                </option>
                                <option
                                  defaultValue="America/Dawson_Creek"
                                  data-select2-id="26"
                                >
                                  (GMT-07:00) Arizona
                                </option>
                                <option
                                  defaultValue="America/Belize"
                                  data-select2-id="27"
                                >
                                  (GMT-06:00) Saskatchewan, Central America
                                </option>
                                <option
                                  defaultValue="America/Cancun"
                                  data-select2-id="28"
                                >
                                  (GMT-06:00) Guadalajara, Mexico City,
                                  Monterrey
                                </option>
                                <option
                                  defaultValue="Chile/EasterIsland"
                                  data-select2-id="29"
                                >
                                  (GMT-06:00) Easter Island
                                </option>
                                <option
                                  defaultValue="America/Chicago"
                                  data-select2-id="30"
                                >
                                  (GMT-06:00) Central Time (US &amp; Canada)
                                </option>
                                <option
                                  defaultValue="America/New_York"
                                  data-select2-id="31"
                                >
                                  (GMT-05:00) Eastern Time (US &amp; Canada)
                                </option>
                                <option
                                  defaultValue="America/Havana"
                                  data-select2-id="32"
                                >
                                  (GMT-05:00) Cuba
                                </option>
                                <option
                                  defaultValue="America/Bogota"
                                  data-select2-id="33"
                                >
                                  (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                                </option>
                                <option
                                  defaultValue="America/Caracas"
                                  data-select2-id="34"
                                >
                                  (GMT-04:30) Caracas
                                </option>
                                <option
                                  defaultValue="America/Santiago"
                                  data-select2-id="35"
                                >
                                  (GMT-04:00) Santiago
                                </option>
                                <option
                                  defaultValue="America/La_Paz"
                                  data-select2-id="36"
                                >
                                  (GMT-04:00) La Paz
                                </option>
                                <option
                                  defaultValue="Atlantic/Stanley"
                                  data-select2-id="37"
                                >
                                  (GMT-04:00) Faukland Islands
                                </option>
                                <option
                                  defaultValue="America/Campo_Grande"
                                  data-select2-id="38"
                                >
                                  (GMT-04:00) Brazil
                                </option>
                                <option
                                  defaultValue="America/Goose_Bay"
                                  data-select2-id="39"
                                >
                                  (GMT-04:00) Atlantic Time (Goose Bay)
                                </option>
                                <option
                                  defaultValue="America/Glace_Bay"
                                  data-select2-id="40"
                                >
                                  (GMT-04:00) Atlantic Time (Canada)
                                </option>
                                <option
                                  defaultValue="America/St_Johns"
                                  data-select2-id="41"
                                >
                                  (GMT-03:30) Newfoundland
                                </option>
                                <option
                                  defaultValue="America/Araguaina"
                                  data-select2-id="42"
                                >
                                  (GMT-03:00) UTC-3
                                </option>
                                <option
                                  defaultValue="America/Montevideo"
                                  data-select2-id="43"
                                >
                                  (GMT-03:00) Montevideo
                                </option>
                                <option
                                  defaultValue="America/Miquelon"
                                  data-select2-id="44"
                                >
                                  (GMT-03:00) Miquelon, St. Pierre
                                </option>
                                <option
                                  defaultValue="America/Godthab"
                                  data-select2-id="45"
                                >
                                  (GMT-03:00) Greenland
                                </option>
                                <option
                                  defaultValue="America/Argentina/Buenos_Aires"
                                  data-select2-id="46"
                                >
                                  (GMT-03:00) Buenos Aires
                                </option>
                                <option
                                  defaultValue="America/Sao_Paulo"
                                  data-select2-id="47"
                                >
                                  (GMT-03:00) Brasilia
                                </option>
                                <option
                                  defaultValue="America/Noronha"
                                  data-select2-id="48"
                                >
                                  (GMT-02:00) Mid-Atlantic
                                </option>
                                <option
                                  defaultValue="Atlantic/Cape_Verde"
                                  data-select2-id="49"
                                >
                                  (GMT-01:00) Cape Verde Is.
                                </option>
                                <option
                                  defaultValue="Atlantic/Azores"
                                  data-select2-id="50"
                                >
                                  (GMT-01:00) Azores
                                </option>
                                <option
                                  defaultValue="Europe/Belfast"
                                  data-select2-id="51"
                                >
                                  (GMT) Greenwich Mean Time : Belfast
                                </option>
                                <option
                                  defaultValue="Europe/Dublin"
                                  data-select2-id="52"
                                >
                                  (GMT) Greenwich Mean Time : Dublin
                                </option>
                                <option
                                  defaultValue="Europe/Lisbon"
                                  data-select2-id="53"
                                >
                                  (GMT) Greenwich Mean Time : Lisbon
                                </option>
                                <option
                                  defaultValue="Europe/London"
                                  data-select2-id="54"
                                >
                                  (GMT) Greenwich Mean Time : London
                                </option>
                                <option
                                  defaultValue="Africa/Abidjan"
                                  data-select2-id="55"
                                >
                                  (GMT) Monrovia, Reykjavik
                                </option>
                                <option
                                  defaultValue="Europe/Amsterdam"
                                  data-select2-id="56"
                                >
                                  (GMT+01:00) Amsterdam, Berlin, Bern, Rome,
                                  Stockholm, Vienna
                                </option>
                                <option
                                  defaultValue="Europe/Belgrade"
                                  data-select2-id="57"
                                >
                                  (GMT+01:00) Belgrade, Bratislava, Budapest,
                                  Ljubljana, Prague
                                </option>
                                <option
                                  defaultValue="Europe/Brussels"
                                  data-select2-id="58"
                                >
                                  (GMT+01:00) Brussels, Copenhagen, Madrid,
                                  Paris
                                </option>
                                <option
                                  defaultValue="Africa/Algiers"
                                  data-select2-id="59"
                                >
                                  (GMT+01:00) West Central Africa
                                </option>
                                <option
                                  defaultValue="Africa/Windhoek"
                                  data-select2-id="60"
                                >
                                  (GMT+01:00) Windhoek
                                </option>
                                <option
                                  defaultValue="Asia/Beirut"
                                  data-select2-id="61"
                                >
                                  (GMT+02:00) Beirut
                                </option>
                                <option
                                  defaultValue="Africa/Cairo"
                                  data-select2-id="62"
                                >
                                  (GMT+02:00) Cairo
                                </option>
                                <option
                                  defaultValue="Asia/Gaza"
                                  data-select2-id="63"
                                >
                                  (GMT+02:00) Gaza
                                </option>
                                <option
                                  defaultValue="Africa/Blantyre"
                                  data-select2-id="64"
                                >
                                  (GMT+02:00) Harare, Pretoria
                                </option>
                                <option
                                  defaultValue="Asia/Jerusalem"
                                  data-select2-id="65"
                                >
                                  (GMT+02:00) Jerusalem
                                </option>
                                <option
                                  defaultValue="Europe/Minsk"
                                  data-select2-id="66"
                                >
                                  (GMT+02:00) Minsk
                                </option>
                                <option
                                  defaultValue="Asia/Damascus"
                                  data-select2-id="67"
                                >
                                  (GMT+02:00) Syria
                                </option>
                                <option
                                  defaultValue="Europe/Moscow"
                                  data-select2-id="68"
                                >
                                  (GMT+03:00) Moscow, St. Petersburg,
                                  Volgograd
                                </option>
                                <option
                                  defaultValue="Africa/Addis_Ababa"
                                  data-select2-id="69"
                                >
                                  (GMT+03:00) Nairobi
                                </option>
                                <option
                                  defaultValue="Asia/Tehran"
                                  data-select2-id="70"
                                >
                                  (GMT+03:30) Tehran
                                </option>
                                <option
                                  defaultValue="Asia/Dubai"
                                  data-select2-id="71"
                                >
                                  (GMT+04:00) Abu Dhabi, Muscat
                                </option>
                                <option
                                  defaultValue="Asia/Yerevan"
                                  data-select2-id="72"
                                >
                                  (GMT+04:00) Yerevan
                                </option>
                                <option
                                  defaultValue="Asia/Kabul"
                                  data-select2-id="73"
                                >
                                  (GMT+04:30) Kabul
                                </option>
                                <option
                                  defaultValue="Asia/Yekaterinburg"
                                  data-select2-id="74"
                                >
                                  (GMT+05:00) Ekaterinburg
                                </option>
                                <option
                                  defaultValue="Asia/Tashkent"
                                  data-select2-id="75"
                                >
                                  (GMT+05:00) Tashkent
                                </option>
                                <option
                                  defaultValue="Asia/Kolkata"
                                  data-select2-id="76"
                                >
                                  (GMT+05:30) Chennai, Kolkata, Mumbai, New
                                  Delhi
                                </option>
                                <option
                                  defaultValue="Asia/Katmandu"
                                  data-select2-id="77"
                                >
                                  (GMT+05:45) Kathmandu
                                </option>
                                <option
                                  defaultValue="Asia/Dhaka"
                                  data-select2-id="78"
                                >
                                  (GMT+06:00) Astana, Dhaka
                                </option>
                                <option
                                  defaultValue="Asia/Novosibirsk"
                                  data-select2-id="79"
                                >
                                  (GMT+06:00) Novosibirsk
                                </option>
                                <option
                                  defaultValue="Asia/Rangoon"
                                  data-select2-id="80"
                                >
                                  (GMT+06:30) Yangon (Rangoon)
                                </option>
                                <option
                                  defaultValue="Asia/Bangkok"
                                  data-select2-id="81"
                                >
                                  (GMT+07:00) Bangkok, Hanoi, Jakarta
                                </option>
                                <option
                                  defaultValue="Asia/Krasnoyarsk"
                                  data-select2-id="82"
                                >
                                  (GMT+07:00) Krasnoyarsk
                                </option>
                                <option
                                  defaultValue="Asia/Hong_Kong"
                                  data-select2-id="83"
                                >
                                  (GMT+08:00) Beijing, Chongqing, Hong Kong,
                                  Urumqi
                                </option>
                                <option
                                  defaultValue="Asia/Irkutsk"
                                  data-select2-id="84"
                                >
                                  (GMT+08:00) Irkutsk, Ulaan Bataar
                                </option>
                                <option
                                  defaultValue="Australia/Perth"
                                  data-select2-id="85"
                                >
                                  (GMT+08:00) Perth
                                </option>
                                <option
                                  defaultValue="Australia/Eucla"
                                  data-select2-id="86"
                                >
                                  (GMT+08:45) Eucla
                                </option>
                                <option
                                  defaultValue="Asia/Tokyo"
                                  data-select2-id="87"
                                >
                                  (GMT+09:00) Osaka, Sapporo, Tokyo
                                </option>
                                <option
                                  defaultValue="Asia/Seoul"
                                  data-select2-id="88"
                                >
                                  (GMT+09:00) Seoul
                                </option>
                                <option
                                  defaultValue="Asia/Yakutsk"
                                  data-select2-id="89"
                                >
                                  (GMT+09:00) Yakutsk
                                </option>
                                <option
                                  defaultValue="Australia/Adelaide"
                                  data-select2-id="90"
                                >
                                  (GMT+09:30) Adelaide
                                </option>
                                <option
                                  defaultValue="Australia/Darwin"
                                  data-select2-id="91"
                                >
                                  (GMT+09:30) Darwin
                                </option>
                                <option
                                  defaultValue="Australia/Brisbane"
                                  data-select2-id="92"
                                >
                                  (GMT+10:00) Brisbane
                                </option>
                                <option
                                  defaultValue="Australia/Hobart"
                                  data-select2-id="93"
                                >
                                  (GMT+10:00) Hobart
                                </option>
                                <option
                                  defaultValue="Asia/Vladivostok"
                                  data-select2-id="94"
                                >
                                  (GMT+10:00) Vladivostok
                                </option>
                                <option
                                  defaultValue="Australia/Lord_Howe"
                                  data-select2-id="95"
                                >
                                  (GMT+10:30) Lord Howe Island
                                </option>
                                <option
                                  defaultValue="Etc/GMT-11"
                                  data-select2-id="96"
                                >
                                  (GMT+11:00) Solomon Is., New Caledonia
                                </option>
                                <option
                                  defaultValue="Asia/Magadan"
                                  data-select2-id="97"
                                >
                                  (GMT+11:00) Magadan
                                </option>
                                <option
                                  defaultValue="Pacific/Norfolk"
                                  data-select2-id="98"
                                >
                                  (GMT+11:30) Norfolk Island
                                </option>
                                <option
                                  defaultValue="Asia/Anadyr"
                                  data-select2-id="99"
                                >
                                  (GMT+12:00) Anadyr, Kamchatka
                                </option>
                                <option
                                  defaultValue="Pacific/Auckland"
                                  data-select2-id="100"
                                >
                                  (GMT+12:00) Auckland, Wellington
                                </option>
                                <option
                                  defaultValue="Etc/GMT-12"
                                  data-select2-id="101"
                                >
                                  (GMT+12:00) Fiji, Kamchatka, Marshall Is.
                                </option>
                                <option
                                  defaultValue="Pacific/Chatham"
                                  data-select2-id="102"
                                >
                                  (GMT+12:45) Chatham Islands
                                </option>
                                <option
                                  defaultValue="Pacific/Tongatapu"
                                  data-select2-id="103"
                                >
                                  (GMT+13:00) {`Nuku'alofa`}
                                </option>
                                <option
                                  defaultValue="Pacific/Kiritimati"
                                  data-select2-id="104"
                                >
                                  (GMT+14:00) Kiritimati
                                </option>
                              </select>
                            </div>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={3} className="col">
                              <Form.Label >
                                Verification
                              </Form.Label>
                            </Col>
                            <Col md={9} className="col">
                              <Form.Check className=" mg-b-10-f" type="checkbox"
                                label="Email" />
                              <Form.Check className=" mg-b-10-f" defaultChecked type="checkbox"
                                label="SMS" />
                              <Form.Check className=" mg-b-10-f" type="checkbox"
                                label="PHONE" />
                            </Col>
                          </Row>
                        </FormGroup>
                        <div className="mb-4 main-content-label">
                          Secuirity Settings
                        </div>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={2}>
                              <Form.Label >
                                Login Verification
                              </Form.Label>
                            </Col>
                            <Col md={10}>
                              <Link href="#" className="">
                                <a>
                                  Set up Verification
                                </a>
                              </Link>
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={2}>
                              <Form.Label >
                                Password Verification
                              </Form.Label>
                            </Col>
                            <Col md={10}>
                              <Form.Label className="mg-b-10-f">
                                <Form.Check type="checkbox" label="Require Personal Details" />
                              </Form.Label>
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="form-group">
                          <Row className=" row-sm">
                            <Col md={2}> </Col>
                            <Col md={10}>
                              <Link href="#">
                                <a>
                                  Deactivate Account
                                </a>
                              </Link>
                              <Link href="#" >
                                <a className="mx-2">
                                  Change Password
                                </a>
                              </Link>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Form>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}
Colecciones.layout = "Contentlayout"

export default Colecciones