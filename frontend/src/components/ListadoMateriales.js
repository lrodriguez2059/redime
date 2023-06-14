import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

function ListadoMateriales(props) {
  return (
    <div>
      {" "}
      <div className="col-md-12" style={{ marginTop: "30px" }}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "center" }}>
            Listado de Materiales
          </div>

          <div className="card-body">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Creado</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {props.materiales.map((material) => {
                  return (
                    <tr key={material.id}>
                      <td>{material.id}</td>
                      <td>{material.nombre}</td>
                      <td>{material.descripcion}</td>
                      <td>{material.stock_minimo}</td>
                      <td>{material.categoria_id}</td>
                      <td>{material.creado_a.substr(0, 10)}</td>
                      <td>{material.estado}</td>
                      <td>
                        {" "}
                        <Button
                          className="btn btn-danger"
                          style={{ marginLeft: "20px" }}
                          onClick={() => props.deleteMaterial(material.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button
                          className="btn btn-dark "
                          style={{ marginLeft: "10px" }}
                          onClick={() => props.updateMaterial(material.id)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListadoMateriales;
