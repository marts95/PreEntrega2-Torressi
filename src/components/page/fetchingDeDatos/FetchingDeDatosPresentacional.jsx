export const FetchingDeDatosPresentacional = ({ usuarios, crearUsuarios }) => {
  return (
    <div className="listita">
      {usuarios.map((usuario) => {
        return (
          <div key={usuario.id}>
            <h2>{usuario.name}</h2>
            <h3 style={{paddingLeft: "2rem"}}>{usuario.email}</h3>
          </div>
        );
      })}

      <button onClick={crearUsuarios}>Crear usuarios</button>
    </div>
  );
};
