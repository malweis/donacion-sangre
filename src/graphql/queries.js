import { gql } from '@apollo/client';

export const GET_SOLICITUDES = gql`
  query GetSolicitudes {
    solicitudes {
      id
      creado_por
      nombre_apellido_donatario
      cedula_donatario
      establecimiento
      tipo_sangre
      volumenes_necesarios
      fecha_limite
      solicitud
    }
  }
`;
