import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo';
import { Tab, Nav, Form, Button, Col, Breadcrumb, Row, FormGroup, Card, Badge } from "react-bootstrap";
import TabCollection from './tabCollection';


const Collection = () => {
    return (
        <>
            {/*Seo start */}
            <Seo title="Colecciones" />
            {/* Seo end*/}

            {/* Page Header Start*/}
            <PageHeader title="Apartado de Colecciones" item="Pages" active_item="Colecciones Existentes" />
            {/* Page Header end*/}

            {/*Tab containier start */}
            <Tab.Container
                id="center-tabs-example"
                defaultActiveKey="Colecciones"
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
                                        <h3 className="h3">Certiblock Colecciones</h3>
                                    </div>
                                    <div className="profile-cover__action bg-img"></div>
                                    <div className="profile-cover__info">
                                        <ul className="nav">
                                            <li>
                                                <strong>1</strong>Colecciones Creadas
                                            </li>
                                        </ul>
                                    </div>
                                    {/* List nav start */}
                                    <div className="profile-tab tab-menu-heading">
                                        <Nav variant="pills" className="p-3 bg-primary-transparent">
                                            <Nav.Item>
                                                <Nav.Link eventKey="Colecciones">Coleccion <Badge bg="primary">1</Badge></Nav.Link>
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

                {/*Start table collections*/}
                <Tab.Pane eventKey="Colecciones" className="main-content-body tab-pane border-top-0">
                    <div className="card-body border pd-b-10">
                        <Row className=" row-sm">
                            <TabCollection />
                        </Row>
                    </div>
                    {/* </div> */}
                </Tab.Pane>
                {/*End table collections*/}
            </Tab.Container>
        </>
    )
}
Collection.layout = "Contentlayout"
export default Collection