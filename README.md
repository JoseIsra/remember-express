# REST

Responde a Representational State Transfer

- [x] Convención para poder crear servicios webs que utilizan HTTP protocolo
- [x] Usa verbos para leer / alterar información
- [x] GET POST PUT DELETE

# DIFERENCIA DE VERBOS PUT vs PATCH

- [x] El PUT se hace usualmente a un solo producto, especificando el id of course. like this: /api/:my_id. Si se usa sobre toda una ruta...reemplazaría todo daaaman !!
- [x] Tambień se usa para cambios de id específicos
- [x] Principal diferencia, PUT -> se envían todos los campos para hacer la actualización.
      PATCH -> solo se envían los datos que quiero modificar
- [x] DELETE -> se puede usar en masa(peligroso obviamente equis de) o de manera específica claro que sí

# JWT

```sh
Estándar que define una compacata forma de transmitir información segura
entre dos partes en un objeto JSON.
```

- Son stateless, no se guarda en ningun lado. Es escalable. El token permite realizar la autorización.

Beneficios:

- Es stateless, permite realizar sistemas distribuidos
- Es escalable
- Permite soportas diferentes clientes

### tiene 3 partes

1. Header -> tipo de encriptación y algoritmo
2. Payload -> información contenidad en el token, la fecha de creación está ahí also
3. una forma para verificar el token
