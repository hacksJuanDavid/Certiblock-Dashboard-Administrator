import React from 'react'

//Page Header Component is used to import,filter,dowload and print the data in the table report
const PageHeader = (props) => {
  return (
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">{props.title}</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a>{props.item}</a></li>
          <li className="breadcrumb-item active" aria-current="page">{props.active_item}</li>
        </ol>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <button type="button" className="btn btn-white btn-icon-text my-2 me-2">
            <i className="fe fe-download me-2"></i> Importar
          </button>
          <button type="button" className="btn btn-white btn-icon-text my-2 me-2">
            <i className="fe fe-filter me-2"></i> Filtrar
          </button>
          <button type="button" className="btn btn-primary my-2 btn-icon-text">
            <i className="fe fe-download-cloud me-2"></i> Descargar Reporte
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageHeader