import React from 'react'
import Button from "react-bootstrap/Button";

function FormularioMateriales(props) {
  return (
    <div>
          <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header">Administrar Materiales</div>

          <div className="card-body">
            <form action="" onSubmit={props.sendMaterial}>
              {/* Nombre */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  placeholder="Escriba el nombre del material"
                  onChange={props.onInputChange}
                  value={props.material.nombre}
                />
              </div>

              {/* Stock */}
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  className="form-control"
                  step=".01"
                  id="stock"
                  name="stock_minimo"
                  value={props.material.stock_minimo}
                  onChange={props.onInputChange}
                  placeholder="Stock del material"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categoria" className="form-label">
                  Categoria
                </label>
                <select
                  className="form-select"
                  id="categoria"
                  name="categoria_id"
                  aria-label="Default select"
                  required
                  onChange={props.onInputChange}
                  value={props.material.categoria_id}
                >
                  <option value="">Seleccione una categoria</option>
                  {props.categorias.map((categoria) => {
                    return (
                      <option value={categoria.id} key={categoria.id}>
                        {categoria.nombre}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="estado" className="form-label">
                  Estado
                </label>
                <select
                  className="form-select"
                  id="estado"
                  name="estado"
                  aria-label="Default select"
                  required
                  onChange={props.onInputChange}
                  value={props.material.estado}
                >
                  <option value="">Seleccione un Estado</option>
                  <option value="ACTIVO">ACTIVO</option>
                  <option value="CANCELADO">CANCELADO</option>
                  <option value="ELIMINADO">ELIMINADO</option>
                </select>
              </div>

              {/* Descripcion */}
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Escriba su descripcion"
                  id="descripcion"
                  name="descripcion"
                  onChange={props.onInputChange}
                  value={props.material.descripcion}
                ></textarea>
                <label htmlFor="floatingTextarea">Descripcion</label>
              </div>
              <button className="btn btn-primary" style={{ marginTop: "10px" }}>
                {props.accion}
              </button>
              <Button
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ marginTop: "10px", marginLeft: "10px" }}
              >
                Crear Nueva Categoria
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormularioMateriales