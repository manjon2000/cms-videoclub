## Structure Database

> Crearemos la base de datos, con el archivo **database.sql**

> Datos de prueba para insertar en la bbdd:
```sql
    INSERT INTO roles (id, role) VALUES ('82459c1e-6344-4827-a77b-6e4a5aa3946e', 'admin');
    INSERT INTO roles (id, role) VALUES ('c310e702-5061-41dd-97b6-1619ae3918a7', 'emplyee');
    INSERT INTO roles (id, role) VALUES ('ffb782f5-ebc7-4947-994e-44e116985c5e', 'premium');
    INSERT INTO roles (id, role) VALUES ('ffb782f5-ebc7-4947-994e-44e116985c5e', 'client');

    INSERT INTO users (id, role_id, name, last_name, email, phone) VALUES ('85fb7a41-5538-4173-975d-31703ce66fb1', '82459c1e-6344-4827-a77b-6e4a5aa3946e', 'Albert', 'Manjon', 'admin@admin.es', 696644337);

    INSERT INTO multimedia (id, user_id, name, mimetype) VALUES ('425e0d7e-39cf-4857-b521-128c2bdff5d8', '85fb7a41-5538-4173-975d-31703ce66fb1', 'c7eb3a6a-23c0-409d-a7c4-9a6ea0298fe6.png', 'image/png');

    INSERT INTO user_photo (user_id, multimedia_id) VALUES ('85fb7a41-5538-4173-975d-31703ce66fb1','425e0d7e-39cf-4857-b521-128c2bdff5d8');

    INSERT INTO films (
        id,
        name,
        synopsis,
        qualification,
        year,
        trailer
    ) VALUES (
        '90bf660a-061f-4545-9584-27eebc16d42e',
        'The Book of Eli',
        'The Book of Eli (titulada El libro de Eli en España y El libro de los secretos en Hispanoamérica) es una película post-apocalíptica estadounidense de 2010, dirigida por los hermanos Hughes, escrita por Gary Whitta y protagonizada por Denzel Washington, Gary Oldman y Mila Kunis. La cinta se estrenó en Estados Unidos el 15 de enero de 2010.',
        'OK',
        2010,
        'https://www.youtube.com/watch?v=gUICw5XGPCw'
    );

    INSERT INTO films (
        id,
        name,
        synopsis,
        qualification,
        year,
        trailer
    ) VALUES (
        'a1064c84-fa28-4cf6-93e6-b07a7f2249ce',
        'Déjà vu',
        'Déjà vu es una película de 2006, del género thriller de ciencia ficción, dirigida por Tony Scott, producida por Jerry Bruckheimer y escrita por Bill Marsilii y Terry Rossio. La película está interpretada por Denzel Washington, Jim Caviezel, Paula Patton, Val Kilmer, Adam Goldberg y Matt Craven.La trama principal de la película involucra a un agente de la ATF, Douglas Carlin, quien viaja al pasado para impedir un ataque terrorista que tendrá lugar en Nueva Orleans y salvar a Claire Kuchever, una mujer de la cual acaba enamorándose.El rodaje tuvo lugar después del paso del huracán Katrina que asoló Nueva Orleans. ',
        'OFF',
        2006,
        'https://www.youtube.com/watch?v=HvSwWnkHujU'
    );
    
    INSERT INTO multimedia (id, user_id, name, mimetype) VALUES ('425e0d7e-39cf-4857-b521-128c2bdff5d8', '85fb7a41-5538-4173-975d-31703ce66fb1', 'c7eb3a6a-23c0-409d-a7c4-9a6ea0298fe6.png', 'image/png');

    /* QUERY PRUEBAS */
    SELECT
        users.name,
        users.last_name,
        users.email,
        users.phone,
        roles.role,
        multimedia.name as photo
    FROM users 
    JOIN roles 
    ON users.role_id = roles.id
    JOIN user_photo 
    ON users.id = user_photo.user_id
    JOIN multimedia
    ON user_photo.multimedia_id = multimedia.id;
``` 