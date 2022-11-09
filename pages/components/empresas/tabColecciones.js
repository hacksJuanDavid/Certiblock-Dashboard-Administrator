import { React } from 'react'
import { Tab, Card, Col, Row, Table } from "react-bootstrap";
import dynamic from 'next/dynamic';
import { ColeccionesTables } from '../../../shared/data/table/data-tables';
const Nav = dynamic(import('react-bootstrap').then(mod => mod.Nav), { ssr: false })
const NavItem = dynamic(import('react-bootstrap').then(mod => mod.NavItem), { ssr: false })
const NavLink = dynamic(import('react-bootstrap').then(mod => mod.NavLink), { ssr: false })

const Tabss = () => {

  const Listpages = [

    { ID: "1", Name: "Joan Powell", TITLE: " Developer", GMAIL: "joan@gmail.com", QR: "https:/", STATEQR: "false", VISITORS: "0" },
    { ID: "2", Name: "Juan David", TITLE: " Developer", GMAIL: "juan@gmail.com", QR: "https:/", STATEQR: "true", VISITORS: "5" },
    { ID: "3", Name: "Mariano A", TITLE: "Manager ", GMAIL: "mariano@gmail.com", QR: "https:/", STATEQR: "false", VISITORS: "0" },
    { ID: "4", Name: "Jenifer Ramirez", TITLE: "Associate ", GMAIL: "jenifer@gmail.com", QR: "https:/", STATEQR: "true", VISITORS: "20" },
    { ID: "5", Name: "Romero Lopez", TITLE: "Associate Developer", GMAIL: "romero@gmail.com", QR: "https:/", STATEQR: "false", VISITORS: "0" },
  ];


  return (
    <div>
      <h1>Aprobaciones de Colecciones</h1>
      <Col xl={12} className="col-xl-12">
        <Card className="custom-card mg-b-20" id="tabs-style2">
          <Card.Header className="d-sm-flex  justify-content-between align-items-center">
            <div className="main-content-label mg-b-5">Colecciones de Aprobadas
              <p className="text-muted card-sub-title">
                De la empresa: <b> Universidad Eafit</b>
              </p>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="panel panel-primary tabs-style-2">
                  <div className=" tab-menu-heading">
                    <div className="tabs-menu1">
                      <Tab.Container defaultActiveKey="tab4">
                        <Nav
                          variant="pills"
                          className="nav panel-tabs main-nav-line"
                        >
                          <NavItem >
                            <NavLink eventKey="tab4" className="mt-1">Coleccion 1</NavLink>
                          </NavItem >
                          <NavItem >
                            <NavLink eventKey="tab5" className="mt-1">Coleccion 2</NavLink>
                          </NavItem >
                          <NavItem >
                            <NavLink eventKey="tab6" className="mt-1">Coleccion 3</NavLink>
                          </NavItem >
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="tab4" className="border">

                            {/* <!-- Row --> */}
                            <Row className="row row-sm">
                              <Col lg={12}>
                                <Card className="custom-card">
                                  <Card.Body>
                                    <div>
                                      <h6 className="main-content-label mb-1">Tabla Coleccion Certificados Eafit Ingenierias</h6>
                                      <p className="text-muted card-sub-title">
                                        Tabla de aprobaciones de la coleccion: <b>Coleccion 1 universidad eafit</b>
                                      </p>
                                    </div>
                                    <div className="table-responsive" responsive="true">
                                      <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0">
                                        <thead>
                                          <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Title</th>
                                            <th>Gmail</th>
                                            <th>QR</th>
                                            <th>STATEQR</th>
                                            <th>VISITORS</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {Listpages.map((list, index) => (
                                            <tr key={index} data-index={index}>
                                              <th scope="row">{list.ID}</th>
                                              <td>{list.Name}</td>
                                              <td>{list.TITLE} </td>
                                              <td>{list.GMAIL}</td>
                                              <td>{list.QR}</td>
                                              <td>{list.STATEQR}</td>
                                              <td>{list.VISITORS}</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </Table>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                            {/* <!-- End Row --> */}



                          </Tab.Pane>
                          <Tab.Pane eventKey="tab5" className="border">
                            {/* <!-- Row --> */}
                            <Row className="row row-sm">
                              <Col lg={12}>
                                <Card className="custom-card">
                                  <Card.Body>
                                    <div>
                                      <h6 className="main-content-label mb-1">Tabla Coleccion Certificados Eafit Universitarios</h6>
                                      <p className="text-muted card-sub-title">
                                        Tabla de aprobaciones de la coleccion: <b>Coleccion 2 universidad eafit</b>
                                      </p>
                                    </div>
                                    <div className="table-responsive" responsive="true">
                                      <Row className="row-sm">
                                        <Col lg={12}>
                                          <Card className="custom-card overflow-hidden">
                                            <Card.Body>
                                              <div>
                                                <h6 className="main-content-label mb-1">Coleccion Graduados 2022</h6>
                                                <p className="text-muted card-sub-title">
                                                    Universidad Eafit
                                                </p>
                                              </div>
                                              <div className="responsive">
                                                {/* <!-- Row --> */}
                                                <Row className="row-sm">
                                                <Col md={6} sm={6} xl={3}>
                                                  <Card className="custom-card">
                                                    <Card.Body className="text-center">
                                                      <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                                                        <i className="fe fe-database"></i>
                                                      </div>
                                                      <p className="mb-1 text-muted">Total Items Coleccion</p>
                                                      <h3 className="mb-0">3</h3>
                                                    </Card.Body>
                                                  </Card>
                                                </Col>
                                                <Col md={6} sm={6} xl={3}>
                                                  <Card className="custom-card">
                                                    <Card.Body className="text-center">
                                                      <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                                                        <i className="fe fe-shield"></i>
                                                      </div>
                                                      <p className="mb-1 text-muted">Coleccion Aprobada</p>
                                                      <h3 className="mb-0">True</h3>
                                                    </Card.Body>
                                                  </Card>
                                                </Col>
                                                <Col md={6} sm={6} xl={3}>
                                                  <Card className="custom-card">
                                                    <Card.Body className="text-center">
                                                      <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                                                        <i className="fe fe-clock"></i>
                                                      </div>
                                                      <p className="mb-1 text-muted">Fecha Creacion</p>
                                                      <h3 className="mb-0">01/12/2022</h3>
                                                    </Card.Body>
                                                  </Card>
                                                </Col>
                                                <Col md={6} sm={6} xl={3}>
                                                  <Card className="custom-card">
                                                    <Card.Body className="text-center">
                                                      <div className="icon-service bg-primary-transparent rounded-circle text-primary">
                                                        <i className="fe fe-user"></i>
                                                      </div>
                                                      <p className="mb-1 text-muted">Creador Coleccion</p>
                                                      <h3 className="mb-0">Amd-Certiblock</h3>
                                                    </Card.Body>
                                                  </Card>
                                                </Col>
                                                </Row>
                                                {/* <!-- Row end--> */}

                                                {/* <!-- Colecciones table start--> */}
                                                <ColeccionesTables />
                                                {/* <!-- Colecciones table end--> */}
                                              </div>
                                            </Card.Body>
                                          </Card>
                                        </Col>
                                      </Row>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                            {/* <!-- End Row --> */}
                          </Tab.Pane>

                          <Tab.Pane eventKey="tab6" className="border">
                            {/* <!-- Row --> */}
                            <Row className="row row-sm">
                              <Col lg={12}>
                                <Card className="custom-card">
                                  <Card.Body>
                                    <div>
                                      <h6 className="main-content-label mb-1">Tabla Coleccion Certificados Eafit Medicina</h6>
                                      <p className="text-muted card-sub-title">
                                        Tabla de aprobaciones de la coleccion: <b>Coleccion 3 universidad eafit</b>
                                      </p>
                                    </div>
                                    <div className="table-responsive" responsive="true">
                                      <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0">
                                        <thead>
                                          <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Title</th>
                                            <th>Gmail</th>
                                            <th>QR</th>
                                            <th>STATEQR</th>
                                            <th>VISITORS</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {Listpages.map((list, index) => (
                                            <tr key={index} data-index={index}>
                                              <th scope="row">{list.ID}</th>
                                              <td>{list.Name}</td>
                                              <td>{list.TITLE} </td>
                                              <td>{list.GMAIL}</td>
                                              <td>{list.QR}</td>
                                              <td>{list.STATEQR}</td>
                                              <td>{list.VISITORS}</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </Table>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                            {/* <!-- End Row --> */}


                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}
export default Tabss