    CREATE TABLE roles (
        id          VARCHAR(36),
        role        VARCHAR(20),
        created_at  TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
        updated_at  TIMESTAMP,

        PRIMARY KEY(id)
    );
    CREATE TABLE users (
        id          VARCHAR(36),
        role_id     VARCHAR(36) REFERENCES roles(id),
        name        VARCHAR(255),
        last_name   VARCHAR(255),
        email       VARCHAR(255),
        phone       INT DEFAULT NULL,
        created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at  TIMESTAMP,

        PRIMARY KEY(id)
    );
    CREATE TABLE multimedia (
        id          VARCHAR(36),
        user_id     VARCHAR(36) REFERENCES users(id),
        name        VARCHAR(255),
        mimetype    enum(
            'image/gif',
            'image/x-icon',
            'image/jpeg',
            'image/webp',
            'image/png',
            'image/svg+xml',
            'video/mpeg',
            'video/ogg',
            'video/mp4',
            'video/mp3',
            'audio/mpeg',
            'audio/aac',
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ),
        created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at  TIMESTAMP,
        deleted_at  TIMESTAMP,

        PRIMARY KEY(id)
    );
    CREATE TABLE user_photo (
       user_id          VARCHAR(36) REFERENCES users(id),
       multimedia_id    VARCHAR(36) REFERENCES multimedia(id),
       created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
       updated_at       TIMESTAMP,
       deleted_at       TIMESTAMP, 

       PRIMARY KEY(user_id)
    );
    CREATE TABLE films (
        id              VARCHAR(36),
        name            VARCHAR(255),
        synopsis        TEXT,
        qualification   VARCHAR(255),
        year            INT,
        trailer         VARCHAR(255),
        created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at      TIMESTAMP,
        deleted_at      TIMESTAMP, 
        
        PRIMARY KEY(id)
    );
    CREATE TABLE categories (
        id              VARCHAR(36),
        name            VARCHAR(255),
        created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at      TIMESTAMP,
        deleted_at      TIMESTAMP,

        PRIMARY KEY(id)
    );
    CREATE TABLE films_categories (
        film_id          VARCHAR(36) REFERENCES films(id),
        categories_id    VARCHAR(36) REFERENCES categories(id),

        PRIMARY KEY(film_id)
    );
    CREATE TABLE films_banner (
        film_id          VARCHAR(36) REFERENCES films(id),
        multimedia_id    VARCHAR(36) REFERENCES multimedia(id),

        PRIMARY KEY(film_id)
    );
    CREATE TABLE actors (
        id              VARCHAR(36),
        name            VARCHAR(255),
        last_name       VARCHAR(255),
        birthdate       TIMESTAMP,
        created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at      TIMESTAMP,
        deleted_at      TIMESTAMP,

        PRIMARY KEY(id)
    );
    CREATE TABLE films_actors (
        film_id         VARCHAR(36) REFERENCES films(id),
        actor_id        VARCHAR(36) REFERENCES actors(id),

        PRIMARY KEY(film_id)
    );
    CREATE TABLE franchises (
       id                VARCHAR(36),
       code_postal       VARCHAR(5) NOT NULL,
       address           VARCHAR(255) NOT NULL,
       franchise_number  INT NOT NULL,
       
       PRIMARY KEY(id)
    );
    CREATE TABLE franchises_employees (
        franchise_id     VARCHAR(36) REFERENCES franchises(id),
        user_id          VARCHAR(36) REFERENCES users(id),
        
        PRIMARY KEY(franchise_id)
    );
    CREATE TABLE films_franchises (
        franchise_id     VARCHAR(36) REFERENCES franchises(id),
        film_id          VARCHAR(36) REFERENCES films(id),
        stock            INT,

        PRIMARY KEY(franchise_id)
    );
    