import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsCacheBank: QuestionBank = {
  "id": "aws-cache-selection",
  "revision": 2,
  "contentId": "aws-cache-selection",
  "title": "Caché y selección de datos",
  "questions": [
    {
      "id": "aws-cache-selection-101",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Modelo y frescura",
      "level": "básico",
      "skill": "concepto",
      "prompt": "En una caché de resultados reconstruibles, ¿quién define el dato válido?",
      "options": [
        {
          "id": "a",
          "text": "La fuente de verdad elegida.",
          "explanation": "La caché conserva una copia derivada."
        },
        {
          "id": "b",
          "text": "Siempre la entrada con TTL más largo.",
          "explanation": "TTL no define verdad de negocio."
        },
        {
          "id": "c",
          "text": "Cualquier cliente que escriba más tarde.",
          "explanation": "El diseño debe controlar autoridad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La caché conserva una copia derivada.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html"
    },
    {
      "id": "aws-cache-selection-102",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Modelo y frescura",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué ocurre en cache-aside ante un miss?",
      "options": [
        {
          "id": "a",
          "text": "Responder siempre vacío sin consultar.",
          "explanation": "No cumple el patrón."
        },
        {
          "id": "b",
          "text": "Borrar la base de datos.",
          "explanation": "No es parte del flujo."
        },
        {
          "id": "c",
          "text": "Consultar fuente, poblar caché y responder.",
          "explanation": "La aplicación coordina la carga."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La aplicación coordina la carga.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html"
    },
    {
      "id": "aws-cache-selection-103",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Modelo y frescura",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debe incluir la clave de una respuesta personalizada?",
      "options": [
        {
          "id": "a",
          "text": "La contraseña visible del usuario.",
          "explanation": "No debe exponerse en claves."
        },
        {
          "id": "b",
          "text": "Los parámetros e identidad necesarios para distinguirla.",
          "explanation": "Evita mezclar datos de usuarios."
        },
        {
          "id": "c",
          "text": "Solo la ruta sin contexto.",
          "explanation": "Puede compartir indebidamente respuestas."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Evita mezclar datos de usuarios.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html"
    },
    {
      "id": "aws-cache-selection-104",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Modelo y frescura",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Un hit ratio alto prueba que los datos son correctos?",
      "options": [
        {
          "id": "a",
          "text": "No; puede servir muchas respuestas obsoletas.",
          "explanation": "Eficacia y exactitud son propiedades distintas."
        },
        {
          "id": "b",
          "text": "Sí, cualquier hit consulta la fuente.",
          "explanation": "Un hit suele evitarla."
        },
        {
          "id": "c",
          "text": "Sí, si no hay errores de conexión.",
          "explanation": "No valida frescura."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Eficacia y exactitud son propiedades distintas.",
      "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/BestPractices.html"
    },
    {
      "id": "aws-cache-selection-105",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Escritura y concurrencia",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La base cambió y la invalidación falló. ¿Qué puede ocurrir?",
      "options": [
        {
          "id": "a",
          "text": "Que toda caché detecte automáticamente el commit.",
          "explanation": "No puede asumirse."
        },
        {
          "id": "b",
          "text": "Que la base revierta toda escritura.",
          "explanation": "No está coordinada automáticamente."
        },
        {
          "id": "c",
          "text": "Seguir sirviendo la copia antigua hasta corregirla o expirar.",
          "explanation": "Los servicios no comparten transacción por defecto."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Los servicios no comparten transacción por defecto.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html"
    },
    {
      "id": "aws-cache-selection-106",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Escritura y concurrencia",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un lector antiguo repuebla después de invalidar una clave. ¿Qué riesgo hay?",
      "options": [
        {
          "id": "a",
          "text": "Cambiar la región del filesystem.",
          "explanation": "No describe esa carrera."
        },
        {
          "id": "b",
          "text": "Reintroducir un valor obsoleto.",
          "explanation": "El orden y las versiones importan."
        },
        {
          "id": "c",
          "text": "Aumentar únicamente el tamaño del dato.",
          "explanation": "No es la consecuencia principal."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El orden y las versiones importan.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html"
    },
    {
      "id": "aws-cache-selection-107",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Escritura y concurrencia",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué efecto busca añadir jitter al TTL?",
      "options": [
        {
          "id": "a",
          "text": "Distribuir expiraciones en el tiempo.",
          "explanation": "Reduce expiración simultánea de muchas claves."
        },
        {
          "id": "b",
          "text": "Asegurar autorización de usuarios.",
          "explanation": "No es un control de identidad."
        },
        {
          "id": "c",
          "text": "Hacer persistente todo el contenido.",
          "explanation": "No altera durabilidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Reduce expiración simultánea de muchas claves.",
      "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/BestPractices.html"
    },
    {
      "id": "aws-cache-selection-108",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Escritura y concurrencia",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Muchos clientes regeneran la misma clave al expirar. ¿Qué técnica ayuda?",
      "options": [
        {
          "id": "a",
          "text": "Aumentar reintentos sin espera.",
          "explanation": "Puede agravar el stampede."
        },
        {
          "id": "b",
          "text": "Crear un usuario IAM por lectura.",
          "explanation": "No resuelve concurrencia de regeneración."
        },
        {
          "id": "c",
          "text": "Agrupar regeneraciones concurrentes por clave.",
          "explanation": "Reduce carga duplicada del origen."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Reduce carga duplicada del origen.",
      "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/BestPractices.html"
    },
    {
      "id": "aws-cache-selection-109",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Fallos y selección",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "La caché absorbe casi todo el tráfico y cae. ¿Qué riesgo debes ensayar?",
      "options": [
        {
          "id": "a",
          "text": "Que todas las lecturas se vuelvan escrituras automáticamente.",
          "explanation": "No es el mecanismo descrito."
        },
        {
          "id": "b",
          "text": "Que el origen no soporte todas las lecturas y se produzca cascada.",
          "explanation": "El fallback también tiene límites."
        },
        {
          "id": "c",
          "text": "Que el origen tenga capacidad infinita por ser gestionado.",
          "explanation": "No es una garantía."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El fallback también tiene límites.",
      "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/BestPractices.html"
    },
    {
      "id": "aws-cache-selection-110",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Fallos y selección",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué significa observar evictions crecientes?",
      "options": [
        {
          "id": "a",
          "text": "Revisar presión de memoria y política de expulsión.",
          "explanation": "Las entradas pueden retirarse antes de lo esperado."
        },
        {
          "id": "b",
          "text": "Que la autenticación funciona mejor.",
          "explanation": "No es una métrica de identidad."
        },
        {
          "id": "c",
          "text": "Que existe backup de cada entrada.",
          "explanation": "No prueba recuperación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Las entradas pueden retirarse antes de lo esperado.",
      "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/BestPractices.html"
    },
    {
      "id": "aws-cache-selection-111",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Fallos y selección",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué elegirías primero para joins y transacciones relacionales?",
      "options": [
        {
          "id": "a",
          "text": "ElastiCache obligatorio como único registro.",
          "explanation": "No se justifica por ese requisito."
        },
        {
          "id": "b",
          "text": "S3 como motor SQL transaccional.",
          "explanation": "Es almacenamiento de objetos."
        },
        {
          "id": "c",
          "text": "RDS o motor relacional apropiado.",
          "explanation": "La caché puede complementar el modelo."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La caché puede complementar el modelo.",
      "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html"
    },
    {
      "id": "aws-cache-selection-112",
      "revision": 2,
      "contentId": "aws-cache-selection",
      "topic": "Fallos y selección",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una sesión no puede reconstruirse si se pierde. ¿Cómo debes tratar su almacenamiento?",
      "options": [
        {
          "id": "a",
          "text": "Como log de acceso descartable.",
          "explanation": "No conserva la sesión necesaria."
        },
        {
          "id": "b",
          "text": "Con un contrato explícito de durabilidad y recuperación.",
          "explanation": "No basta llamarlo caché derivada."
        },
        {
          "id": "c",
          "text": "Como copia prescindible sin consecuencia.",
          "explanation": "Contradice el requisito."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No basta llamarlo caché derivada.",
      "source": "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Modelo y frescura",
      "description": "Comprueba mecanismos y decisiones de modelo y frescura.",
      "questionIds": [
        "aws-cache-selection-101",
        "aws-cache-selection-102",
        "aws-cache-selection-103",
        "aws-cache-selection-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Escritura y concurrencia",
      "description": "Comprueba mecanismos y decisiones de escritura y concurrencia.",
      "questionIds": [
        "aws-cache-selection-105",
        "aws-cache-selection-106",
        "aws-cache-selection-107",
        "aws-cache-selection-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Fallos y selección",
      "description": "Comprueba mecanismos y decisiones de fallos y selección.",
      "questionIds": [
        "aws-cache-selection-109",
        "aws-cache-selection-110",
        "aws-cache-selection-111",
        "aws-cache-selection-112"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "4 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-cache-selection-103",
        "aws-cache-selection-104",
        "aws-cache-selection-107",
        "aws-cache-selection-108",
        "aws-cache-selection-111",
        "aws-cache-selection-112"
      ]
    }
  ]
};
