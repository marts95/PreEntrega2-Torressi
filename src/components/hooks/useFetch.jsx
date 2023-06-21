import { useEffect, useState } from "react";

export const useFetch = (inicial, endpoint) => {
  const [info, setInfo] = useState(inicial);

  useEffect(() => {
    const info = fetch(endpoint);

    info
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((respuesta) => setInfo(respuesta))
      .catch((error) => {
        console.log("este es el error:", error);
      });
  }, [endpoint]);

  return [info];
};
