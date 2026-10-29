import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsDynamoBank: QuestionBank = {
  "id": "aws-dynamodb",
  "revision": 2,
  "contentId": "aws-dynamodb",
  "title": "Amazon DynamoDB",
  "questions": [
    {
      "id": "aws-dynamodb-101",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Claves y consultas",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué identifica un ítem cuando la tabla tiene clave compuesta?",
      "options": [
        {
          "id": "a",
          "text": "La combinación de partition key y sort key.",
          "explanation": "La combinación debe ser única."
        },
        {
          "id": "b",
          "text": "Solo un atributo de descripción cualquiera.",
          "explanation": "No es la clave primaria."
        },
        {
          "id": "c",
          "text": "Solo la posición física en la tabla.",
          "explanation": "No es el contrato de acceso."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La combinación debe ser única.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html"
    },
    {
      "id": "aws-dynamodb-102",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Claves y consultas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Para consultar pedidos de un cliente por fecha, ¿qué diseño se ajusta al ejemplo?",
      "options": [
        {
          "id": "a",
          "text": "PK constante para todos y Scan en cada lectura.",
          "explanation": "Concentra carga y recorre datos."
        },
        {
          "id": "b",
          "text": "Clave primaria basada solo en estado.",
          "explanation": "No atiende la consulta por cliente."
        },
        {
          "id": "c",
          "text": "PK cliente y SK fecha más identificador.",
          "explanation": "Permite Query por cliente y rango ordenado."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Permite Query por cliente y rango ordenado.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html"
    },
    {
      "id": "aws-dynamodb-103",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Claves y consultas",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué necesita Query para seleccionar una partición lógica?",
      "options": [
        {
          "id": "a",
          "text": "La IP del servidor que guarda el ítem.",
          "explanation": "No se accede al servidor físico."
        },
        {
          "id": "b",
          "text": "Un valor de partition key.",
          "explanation": "Puede añadir condiciones de sort key."
        },
        {
          "id": "c",
          "text": "Solo un filtro sobre cualquier campo.",
          "explanation": "Eso no sustituye la condición de clave."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Puede añadir condiciones de sort key.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html"
    },
    {
      "id": "aws-dynamodb-104",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Claves y consultas",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un Scan descarta casi todos los ítems mediante filtro. ¿Qué conclusión de coste es válida?",
      "options": [
        {
          "id": "a",
          "text": "El filtro no evita leer los ítems examinados.",
          "explanation": "El acceso debe diseñarse con claves o índices cuando sea posible."
        },
        {
          "id": "b",
          "text": "Solo consume por los ítems devueltos.",
          "explanation": "Confunde procesamiento con filtrado posterior."
        },
        {
          "id": "c",
          "text": "Se convierte automáticamente en Query.",
          "explanation": "No cambia la operación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El acceso debe diseñarse con claves o índices cuando sea posible.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html"
    },
    {
      "id": "aws-dynamodb-105",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Índices y consistencia",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una segunda consulta necesita otra partition key. ¿Qué opción evalúas?",
      "options": [
        {
          "id": "a",
          "text": "Cambiar todas las consultas a Scan.",
          "explanation": "Puede evitar diseño a costa de consumo."
        },
        {
          "id": "b",
          "text": "Renombrar la tabla en cada petición.",
          "explanation": "No resuelve patrones de acceso."
        },
        {
          "id": "c",
          "text": "Un GSI con clave y proyección adecuadas.",
          "explanation": "Añade otro acceso con coste propio."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Añade otro acceso con coste propio.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html"
    },
    {
      "id": "aws-dynamodb-106",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Índices y consistencia",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué consistencia admiten los GSIs en el alcance de la lección?",
      "options": [
        {
          "id": "a",
          "text": "La que indique una regla Security Group.",
          "explanation": "El SG no define consistencia."
        },
        {
          "id": "b",
          "text": "Eventual.",
          "explanation": "No ofrecen la opción de lectura fuerte de la tabla."
        },
        {
          "id": "c",
          "text": "Fuerte obligatoria para cada lectura.",
          "explanation": "No es la modalidad del GSI."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No ofrecen la opción de lectura fuerte de la tabla.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"
    },
    {
      "id": "aws-dynamodb-107",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Índices y consistencia",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una lectura fuerte recupera versión 7. Otro proceso escribe antes de tu actualización. ¿Qué protege tu cambio?",
      "options": [
        {
          "id": "a",
          "text": "Una condición sobre la versión o una transacción.",
          "explanation": "La lectura fuerte no conserva un bloqueo hasta la escritura."
        },
        {
          "id": "b",
          "text": "La lectura fuerte por sí sola.",
          "explanation": "No evita un cambio posterior."
        },
        {
          "id": "c",
          "text": "Un TTL mayor.",
          "explanation": "No protege concurrencia."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La lectura fuerte no conserva un bloqueo hasta la escritura.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html"
    },
    {
      "id": "aws-dynamodb-108",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Índices y consistencia",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué crear un GSI requiere evaluar escrituras y almacenamiento?",
      "options": [
        {
          "id": "a",
          "text": "Porque todo GSI duplica exactamente todos los atributos sin elección.",
          "explanation": "La proyección se elige."
        },
        {
          "id": "b",
          "text": "Porque desactiva todos los backups.",
          "explanation": "No se deriva de crear un índice."
        },
        {
          "id": "c",
          "text": "El índice conserva y actualiza otra representación de datos.",
          "explanation": "Tiene un coste y capacidad propios."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Tiene un coste y capacidad propios.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html"
    },
    {
      "id": "aws-dynamodb-109",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Capacidad y distribución",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué distingue provisioned de on-demand?",
      "options": [
        {
          "id": "a",
          "text": "Provisioned impide toda variación de capacidad.",
          "explanation": "Puede ajustarse según configuración."
        },
        {
          "id": "b",
          "text": "Provisioned fija capacidad y puede usar auto scaling; on-demand ajusta a solicitudes dentro de límites.",
          "explanation": "Ambos requieren observación."
        },
        {
          "id": "c",
          "text": "On-demand vuelve gratuitas las peticiones.",
          "explanation": "No elimina facturación."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Ambos requieren observación.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html"
    },
    {
      "id": "aws-dynamodb-110",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Capacidad y distribución",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una clave recibe casi todas las escrituras y hay throttling. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Distribución de claves y carga concentrada.",
          "explanation": "La capacidad total no elimina toda clave caliente."
        },
        {
          "id": "b",
          "text": "Solo la región del dashboard.",
          "explanation": "Debe correlacionarse con la carga real."
        },
        {
          "id": "c",
          "text": "Añadir atributos decorativos al ítem.",
          "explanation": "No distribuye la partition key."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La capacidad total no elimina toda clave caliente.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html"
    },
    {
      "id": "aws-dynamodb-111",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Capacidad y distribución",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué coste de diseño puede introducir el sharding de una clave caliente?",
      "options": [
        {
          "id": "a",
          "text": "Volver las lecturas automáticamente relacionales.",
          "explanation": "No aporta joins por sí solo."
        },
        {
          "id": "b",
          "text": "Eliminar la necesidad de idempotencia.",
          "explanation": "La distribución no controla duplicados."
        },
        {
          "id": "c",
          "text": "Combinar lecturas de varios shards y coordinar acceso.",
          "explanation": "Reparte carga pero complica consultas."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Reparte carga pero complica consultas.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html"
    },
    {
      "id": "aws-dynamodb-112",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Capacidad y distribución",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debe hacer un cliente ante throttling persistente?",
      "options": [
        {
          "id": "a",
          "text": "Cambiar todas las lecturas a consistencia fuerte.",
          "explanation": "Puede aumentar consumo."
        },
        {
          "id": "b",
          "text": "Aplicar backoff y revisar capacidad, patrones e índices.",
          "explanation": "Reintentar sin control agrava la carga."
        },
        {
          "id": "c",
          "text": "Repetir infinitamente sin espera.",
          "explanation": "Amplifica saturación."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Reintentar sin control agrava la carga.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html"
    },
    {
      "id": "aws-dynamodb-113",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Vigencia y recuperación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿TTL elimina exactamente al llegar al instante de expiración?",
      "options": [
        {
          "id": "a",
          "text": "No; la limpieza es asíncrona.",
          "explanation": "La aplicación debe respetar vigencia lógica."
        },
        {
          "id": "b",
          "text": "Sí, es un temporizador exacto de autorización.",
          "explanation": "No es un mecanismo de expiración inmediata."
        },
        {
          "id": "c",
          "text": "Solo si el cliente cierra sesión.",
          "explanation": "El borrado no depende de eso."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La aplicación debe respetar vigencia lógica.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html"
    },
    {
      "id": "aws-dynamodb-114",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Vigencia y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una sesión expirada sigue en la tabla. ¿Qué debe hacer la aplicación?",
      "options": [
        {
          "id": "a",
          "text": "Aceptar hasta que TTL la borre.",
          "explanation": "Extiende indebidamente vigencia."
        },
        {
          "id": "b",
          "text": "Borrar toda la tabla.",
          "explanation": "No es necesario ni proporcionado."
        },
        {
          "id": "c",
          "text": "Comprobar expiración y rechazar su uso aunque aún exista.",
          "explanation": "Presencia física no equivale a validez."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Presencia física no equivale a validez.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html"
    },
    {
      "id": "aws-dynamodb-115",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Vigencia y recuperación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un evento de Stream se procesa de nuevo tras fallo. ¿Qué necesita su consumidor?",
      "options": [
        {
          "id": "a",
          "text": "Un índice por cada evento repetido.",
          "explanation": "No resuelve la causa."
        },
        {
          "id": "b",
          "text": "Idempotencia y manejo del progreso.",
          "explanation": "Streams no sustituye el contrato de efectos."
        },
        {
          "id": "c",
          "text": "Una clave nueva de operación cada vez.",
          "explanation": "Puede duplicar el efecto."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Streams no sustituye el contrato de efectos.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html"
    },
    {
      "id": "aws-dynamodb-116",
      "revision": 2,
      "contentId": "aws-dynamodb",
      "topic": "Vigencia y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué importa paginar una Query?",
      "options": [
        {
          "id": "a",
          "text": "Una primera respuesta puede no incluir todo el resultado.",
          "explanation": "Debe continuar según el token de paginación."
        },
        {
          "id": "b",
          "text": "Porque la tabla solo admite un ítem.",
          "explanation": "No es cierto."
        },
        {
          "id": "c",
          "text": "Porque la paginación cambia la clave primaria.",
          "explanation": "No altera el esquema."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Debe continuar según el token de paginación.",
      "source": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Claves y consultas",
      "description": "Comprueba mecanismos y decisiones de claves y consultas.",
      "questionIds": [
        "aws-dynamodb-101",
        "aws-dynamodb-102",
        "aws-dynamodb-103",
        "aws-dynamodb-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Índices y consistencia",
      "description": "Comprueba mecanismos y decisiones de índices y consistencia.",
      "questionIds": [
        "aws-dynamodb-105",
        "aws-dynamodb-106",
        "aws-dynamodb-107",
        "aws-dynamodb-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Capacidad y distribución",
      "description": "Comprueba mecanismos y decisiones de capacidad y distribución.",
      "questionIds": [
        "aws-dynamodb-109",
        "aws-dynamodb-110",
        "aws-dynamodb-111",
        "aws-dynamodb-112"
      ]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Vigencia y recuperación",
      "description": "Comprueba mecanismos y decisiones de vigencia y recuperación.",
      "questionIds": [
        "aws-dynamodb-113",
        "aws-dynamodb-114",
        "aws-dynamodb-115",
        "aws-dynamodb-116"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-dynamodb-103",
        "aws-dynamodb-104",
        "aws-dynamodb-107",
        "aws-dynamodb-108",
        "aws-dynamodb-111",
        "aws-dynamodb-112",
        "aws-dynamodb-115",
        "aws-dynamodb-116"
      ]
    }
  ]
};
