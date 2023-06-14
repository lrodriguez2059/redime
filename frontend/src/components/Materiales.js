import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ListadoMateriales from "./ListadoMateriales";
import FormularioMateriales from "./FormularioMateriales";

export default function Materiales() {
  const [materiales, setMateriales] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [material, setMaterial] = useState({
    nombre: "",
    descripcion: "",
    stock_minimo: "",
    categoria_id: "",
    estado: "",
  });
  const [categoria, setCategoria] = useState({
    nombre: "",
    estado: "",
  });

  const [accion, setAccion] = useState("Crear");

  /*Carga de Datos*/
  useEffect(() => {
    getMateriales();
    getCategorias();
  }, []);

  /*Funciones de Categorias*/
  const getMateriales = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/material");
    setMateriales(res.data);
    console.log(res.data);
  };
  /*Actualizacion de formulario de Material */
  const onInputChange = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });

    console.log(material);
  };

  /*Envio y creacion de Material*/
  const sendMaterial = async (e) => {
    try {
      e.preventDefault();
      if (accion === "Crear") {
        await axios.post("http://127.0.0.1:8000/api/material", {
          nombre: material.nombre,
          descripcion: material.descripcion,
          stock_minimo: material.stock_minimo,
          categoria_id: material.categoria_id,
          estado: material.estado,
        });
      } else {
        await axios.put(`http://127.0.0.1:8000/api/material/${material.id}`, {
          nombre: material.nombre,
          descripcion: material.descripcion,
          stock_minimo: material.stock_minimo,
          categoria_id: material.categoria_id,
          estado: material.estado,
        });
        setMaterial({
          nombre: "",
          descripcion: "",
          stock_minimo: "",
          categoria_id: "",
          estado: "",
        });
        setAccion("Crear");
        console.log(material);
      }

      e.target.reset();
      getMateriales();
    } catch (error) {
      console.log(error);
    }
  };
  /*Eliminacion de Material*/
  const deleteMaterial = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/material/${id}`);
    console.log(id);
    getMateriales();
  };
  /*Actualizacion de Material*/
  const updateMaterial = async (id) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/material/${id}`);
    setMaterial({
      id: res.data.id,
      nombre: res.data.nombre,
      descripcion: res.data.descripcion,
      stock_minimo: res.data.stock_minimo,
      categoria_id: res.data.categoria_id,
      estado: res.data.estado,
    });

    setAccion("Actualizar");
    window.scrollTo(0, 0);
  };

  /*Funciones de Categorias*/
  const getCategorias = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/categoria");
    setCategorias(res.data);
  };
  const sendCategoria = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://127.0.0.1:8000/api/categoria", {
        nombre: categoria.nombre,
        estado: categoria.estado,
      });

      e.target.reset();
      getCategorias();
    } catch (error) {
      console.log(error);
    }
  };

  const onCategoriaChange = (e) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  return (
    <div className="row" style={{ margin: "30px" }}>
      {/* FORMULARIO */}
      <FormularioMateriales
        categorias={categorias}
        onInputChange={onInputChange}
        material={material}
        sendMaterial={sendMaterial}
        accion={accion}
      />
      {/* LISTADO */}
      <ListadoMateriales
        materiales={materiales}
        deleteMaterial={deleteMaterial}
        updateMaterial={updateMaterial}
      />
      {/* MODAL CATEGORIA */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form action="" onSubmit={sendCategoria}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Crear nueva Categoria
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
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
                    placeholder="Escriba el nombre de la categoria"
                    onChange={onCategoriaChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="categoria" className="form-label">
                    Estado
                  </label>
                  <select
                    className="form-select"
                    id="estado"
                    name="estado"
                    aria-label="Default select"
                    required
                    onChange={onCategoriaChange}
                  >
                    <option value="">Seleccione un Estado</option>
                    <option value="ACTIVO">ACTIVO</option>
                    <option value="CANCELADO">CANCELADO</option>
                    <option value="ELIMINADO">ELIMINADO</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
