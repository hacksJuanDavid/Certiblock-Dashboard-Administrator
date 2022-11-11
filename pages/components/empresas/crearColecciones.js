import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo';
import { Tab, Nav, Form, Button, Col, Breadcrumb, Row, FormGroup, Card, Badge } from "react-bootstrap";

import TabCollectionCreate from '../createCollectionsCertiblock/tabCollectionCreate';

const CreateColecciones = () => {

    return (
        <>
            {/*Seo start */}
            <Seo title="Creacion de Colecciones" />
            {/* Seo end*/}

            {/* Page Header Start*/}
            <PageHeader title="Apartado de creacion de Colecciones" item="Pages" active_item="colecciones" />
            {/* Page Header end*/}

            {/*Tab containier start */}
            <Tab.Container
                id="center-tabs-example"
                defaultActiveKey="CrearColeccion"
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
                                                <strong>1</strong>Colecciones por Crear
                                            </li>
                                        </ul>
                                    </div>
                                    {/* List nav start */}
                                    <div className="profile-tab tab-menu-heading">
                                        <Nav variant="pills" className="p-3 bg-primary-transparent">
                                            <Nav.Item>
                                                <Nav.Link eventKey="CrearColeccion"> Crear Coleccion<Badge bg="primary">0</Badge></Nav.Link>
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




                {/*Start aprobaciones*/}
                <Tab.Pane eventKey="CrearColeccion" className="main-content-body tab-pane border-top-0">
                    <div className="card-body border pd-b-10">
                        <Row className=" row-sm">
                            <TabCollectionCreate />
                        </Row>
                    </div>
                    {/* </div> */}
                </Tab.Pane>
                {/*End aprobaciones*/}
            </Tab.Container>
        </>
    )
}
CreateColecciones.layout = "Contentlayout"

export default CreateColecciones