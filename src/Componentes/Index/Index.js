import React,{useState} from 'react';

const Index = () =>{
    const [descripcion, setDescripcion] = useState('');
    const [titulo, setTitulo] = useState('');
    
    return(
       <div className="mt-5">
           <div h3 className="text-center">
               <h3>Tareas del usuario tal</h3>
           </div>
           <hr/>
           <div className="row justify-content-center">
               <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                   <form>
                   <label className="mb-2">Titulo</label>

                        <input
                            type="text"
                            className="form-control mb-2"
                            onChange={e => setTitulo(e.target.value)}
                            value={titulo}
                        />

                        <label className="mb-2">Descripcion</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            onChange={e => setDescripcion(e.target.value)}
                            value={descripcion}
                        />

                      <div className="d-grid gap-2">
                      <button className="btn btn-primary btn-sm btn-block">
                            Guardar
                        </button>
                      </div>
               
                   </form>
               </div>
           </div>
       </div>
    )
}

export default Index;