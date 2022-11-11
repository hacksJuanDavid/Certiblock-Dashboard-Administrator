/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo';
import { Tab, Nav, Form, Button, Col, Breadcrumb, Row, FormGroup, Card, Badge, Modal, InputGroup } from "react-bootstrap";

import TabCollectionCreate from './tabCollectionCreate';
import { useState } from 'react';
import { DropzoneAreaBase } from 'material-ui-dropzone';





const createCollection = () => {
    //File manager start
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [files, setFiles] = useState([]);

    const handleAdd = (newFiles) => {
        newFiles = newFiles.filter(
            (file) => !files.find((f) => f.data === file.data)
        );
        setFiles([...files, ...newFiles]);
    };

    const handleDelete = (deleted) => {
        setFiles(files.filter((f) => f !== deleted));
    };
    //File manager end


    //Validate form start
    // Server Side
    const [validated2, setValidated2] = useState(false);

    const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated2(true);
    };
    //Validate form end


    return (
        <>
            {/*Seo start */}
            <Seo title="Creacion de Colecciones" />
            {/* Seo end*/}

            {/* Page Header Start*/}
            <PageHeader title="Apartado de creacion de Colecciones" item="Pages" active_item="Creador Colecciones" />
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
                                        <h3 className="h3">Certiblock Creadror de Colecciones</h3>
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
                                                <Nav.Link eventKey="CrearColeccion"> Crear Coleccion <Badge bg="primary">1</Badge></Nav.Link>
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
                <Row className="square">
                    {/*container component start */}
                    <div lg={12} md={12}>
                        {/* <!-- Row --> */}
                        <Row className="row-sm">
                            <Col lg={12} xl={4} md={12} sm={12} className="col-12">
                                <Card className="custom-card">
                                    <Card.Header className="custom-card-header border-bottom-0">
                                        <h1 className="main-content-label tx-dark mb-0">Formulario creacion colecciones</h1>
                                    </Card.Header>
                                    <Card.Body>

                                        {/* <!-- Row --> */}
                                        <div className="row row-sm">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="card custom-card">
                                                    <div className="card-body">
                                                        <div>
                                                            <h6 className="main-content-label mb-3">Guardar MetaData Coleccion</h6>
                                                        </div>
                                                        <Form
                                                            className="row g-3"
                                                            noValidate
                                                            validated={validated2}
                                                            onSubmit={handleSubmit2}
                                                        >
                                                            <FormGroup className="col-md-4" controlid="validationServer01">
                                                                <Form.Label>Titulo Coleccion</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Coleccion123"
                                                                    defaultValue=""
                                                                    required
                                                                />
                                                                <Form.Control.Feedback className="invalid-feedback">
                                                                    agrega un titulo a tu coleccion
                                                                </Form.Control.Feedback>
                                                            </FormGroup>
                                                            <FormGroup className="col-md-4" controlid="validationServer02">
                                                                <Form.Label>Dueño Coleccion</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Eafit"
                                                                    defaultValue=""
                                                                    required
                                                                />
                                                                <Form.Control.Feedback className="invalid-feedback">
                                                                    agrega un el dueño de la coleccion
                                                                </Form.Control.Feedback>
                                                            </FormGroup>
                                                            <Form.Group
                                                                className="col-md-4 form-group"
                                                                controlid="validationServerUsername"
                                                            >
                                                                <Form.Label className="form-label">Usuario de creador</Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <InputGroup.Text id="inputGroupPrepend3">@</InputGroup.Text>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="AdmEafit"
                                                                        aria-describedby="inputGroupPrepend3"
                                                                        required
                                                                    />
                                                                    <Form.Control.Feedback className="invalid-feedback">
                                                                        ingresa un usuario valido
                                                                    </Form.Control.Feedback>
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group
                                                                className="col-md-3 mt-3 form-group"
                                                                controlid="validationServer04"
                                                            >
                                                                <Form.Label>Aprobado</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="State"
                                                                    required
                                                                ></Form.Control>
                                                                <Form.Control.Feedback
                                                                    // id="validationServer04Feedback"
                                                                    className="invalid-feedback"
                                                                >
                                                                    selecccion un estado para la coleccion true o false
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="col-md-3 mt-3 form-group">
                                                                <Form.Label controlid="validationServer05">Cantidad Items</Form.Label>
                                                                <Form.Control type="text" placeholder="100" required />
                                                                <Form.Control.Feedback className="invalid-feedback">
                                                                    ingrese una cantidad.
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group className="col-12 form-group">
                                                                <Form.Check
                                                                    required
                                                                    label="Aceptar terminos y condiciones de certiblock"
                                                                    feedback="Debes de aceptar los terminos y condiciones."
                                                                    feedbackType="invalido"
                                                                />
                                                            </Form.Group>
                                                            {/*File manager start*/}
                                                            <Modal show={show} onHide={handleClose}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Agregar archivo</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <DropzoneAreaBase fileObjects={files} onAdd={handleAdd} onDelete={handleDelete} />
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Agregar
                                                                    </Button>
                                                                    <Button variant="primary" onClick={handleClose}>
                                                                        Cancelar
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>
                                                            {/*File manager end*/}

                                                            {/*button manager add start*/}
                                                            <Button className="btn ripple btn-primary btn-block" onClick={handleShow}>
                                                                Subir Archivo
                                                            </Button>
                                                            {/*button manager add end*/}

                                                            {/*button manager form start*/}
                                                            <Button className="btn btn-primary" type="submit">
                                                                Subir data de coleccion
                                                            </Button>
                                                            {/*button manager form end*/}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Row--> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row --> */}
                    </div>
                    {/*container component end  */}
                </Row>
                {/* Row end*/}

                {/*Start table collections create*/}
                <Tab.Pane eventKey="CrearColeccion" className="main-content-body tab-pane border-top-0">
                    <div className="card-body border pd-b-10">
                        <Row className=" row-sm">
                            <TabCollectionCreate />
                        </Row>
                    </div>
                    {/* </div> */}
                </Tab.Pane>
                {/*End table collections create*/}
            </Tab.Container>
        </>
    )
}
createCollection.layout = "Contentlayout"
export default createCollection