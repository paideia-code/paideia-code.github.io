import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsS3Bank: QuestionBank = {
  "id": "aws-s3",
  "revision": 2,
  "contentId": "aws-s3",
  "title": "Amazon S3",
  "questions": [
    {
      "id": "aws-s3-101",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Objetos y acceso",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué es images/logo.png dentro de un bucket?",
      "options": [
        {
          "id": "a",
          "text": "Una clave de objeto que incluye un prefijo.",
          "explanation": "La barra no crea una jerarquía física de directorios."
        },
        {
          "id": "b",
          "text": "Un volumen POSIX.",
          "explanation": "S3 se usa por API de objetos."
        },
        {
          "id": "c",
          "text": "Un bucket anidado dentro de otro.",
          "explanation": "La clave no crea buckets."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La barra no crea una jerarquía física de directorios.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
    },
    {
      "id": "aws-s3-102",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Objetos y acceso",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un rol permite GetObject, pero no puede listar objetos. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Añadir GetObject sobre cualquier usuario.",
          "explanation": "No concede ListBucket."
        },
        {
          "id": "b",
          "text": "Hacer público el bucket para ver su contenido.",
          "explanation": "Amplía exposición y no es diagnóstico."
        },
        {
          "id": "c",
          "text": "ListBucket sobre el ARN de bucket y las condiciones de prefijo.",
          "explanation": "Listado y lectura usan acciones y recursos distintos."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Listado y lectura usan acciones y recursos distintos.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html"
    },
    {
      "id": "aws-s3-103",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Objetos y acceso",
      "level": "básico",
      "skill": "concepto",
      "prompt": "Una escritura y el listado posterior deben verse con qué modelo en el alcance enseñado?",
      "options": [
        {
          "id": "a",
          "text": "Una transacción automática con la base externa.",
          "explanation": "Son servicios independientes."
        },
        {
          "id": "b",
          "text": "Consistencia fuerte para objetos y listados documentados.",
          "explanation": "No implica transacciones de aplicación entre servicios."
        },
        {
          "id": "c",
          "text": "Consistencia eventual obligatoria para todo GET.",
          "explanation": "No describe el modelo actual de esos objetos."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No implica transacciones de aplicación entre servicios.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
    },
    {
      "id": "aws-s3-104",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Objetos y acceso",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "S3 confirma la carga y falla guardar metadatos en RDS. ¿Qué conclusión es válida?",
      "options": [
        {
          "id": "a",
          "text": "Hace falta coordinación y recuperación de la operación de aplicación.",
          "explanation": "La consistencia de S3 no une ambas operaciones."
        },
        {
          "id": "b",
          "text": "S3 revierte automáticamente el objeto.",
          "explanation": "No existe esa transacción automática."
        },
        {
          "id": "c",
          "text": "RDS confirma aunque devolvió error.",
          "explanation": "No se puede inferir ese resultado."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La consistencia de S3 no une ambas operaciones.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
    },
    {
      "id": "aws-s3-105",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Versiones y recuperación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "En un bucket versionado, DELETE sin version ID normalmente hace qué?",
      "options": [
        {
          "id": "a",
          "text": "Elimina permanentemente todas las versiones.",
          "explanation": "Requiere operaciones sobre versiones concretas."
        },
        {
          "id": "b",
          "text": "Deshabilita versionado.",
          "explanation": "No cambia esa configuración."
        },
        {
          "id": "c",
          "text": "Añade un delete marker.",
          "explanation": "Oculta el objeto actual sin borrar todas las versiones."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Oculta el objeto actual sin borrar todas las versiones.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html"
    },
    {
      "id": "aws-s3-106",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Versiones y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una sobrescritura incorrecta reemplazó el contenido actual. ¿Cómo recuperarías?",
      "options": [
        {
          "id": "a",
          "text": "Suspender versionado y esperar.",
          "explanation": "No convierte una versión antigua en actual."
        },
        {
          "id": "b",
          "text": "Identificar una versión válida y restaurarla como actual.",
          "explanation": "Las versiones permiten elegir un estado previo."
        },
        {
          "id": "c",
          "text": "Cambiar el nombre del bucket.",
          "explanation": "No recupera el contenido."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Las versiones permiten elegir un estado previo.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html"
    },
    {
      "id": "aws-s3-107",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Versiones y recuperación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El coste crece aunque el número de claves actuales casi no cambia. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Versiones no actuales y cargas multipart incompletas.",
          "explanation": "Pueden seguir ocupando almacenamiento."
        },
        {
          "id": "b",
          "text": "Solo el número de funciones Lambda.",
          "explanation": "No explica por sí solo almacenamiento S3."
        },
        {
          "id": "c",
          "text": "El TTL del registro DNS.",
          "explanation": "No controla versiones almacenadas."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Pueden seguir ocupando almacenamiento.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"
    },
    {
      "id": "aws-s3-108",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Versiones y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué efecto tiene suspender versionado sobre versiones antiguas?",
      "options": [
        {
          "id": "a",
          "text": "Se fusionan sin coste en una sola copia.",
          "explanation": "No es el comportamiento del servicio."
        },
        {
          "id": "b",
          "text": "Se descargan automáticamente al cliente.",
          "explanation": "No hay esa recuperación automática."
        },
        {
          "id": "c",
          "text": "Siguen existiendo hasta que se retiren conforme al diseño.",
          "explanation": "Suspender no elimina lo almacenado."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Suspender no elimina lo almacenado.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html"
    },
    {
      "id": "aws-s3-109",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Delegación y cifrado",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué acredita poseer una URL prefirmada?",
      "options": [
        {
          "id": "a",
          "text": "Permiso de administrar el bucket.",
          "explanation": "Se acota a la operación firmada."
        },
        {
          "id": "b",
          "text": "Capacidad delegada de realizar la operación mientras siga válida.",
          "explanation": "Es un enlace portador, no un login de persona."
        },
        {
          "id": "c",
          "text": "Identidad verificada del destinatario.",
          "explanation": "No prueba quién posee el enlace."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Es un enlace portador, no un login de persona.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html"
    },
    {
      "id": "aws-s3-110",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Delegación y cifrado",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una URL se configuró para una hora, pero el rol expira antes. ¿Qué limita su uso?",
      "options": [
        {
          "id": "a",
          "text": "La vigencia de las credenciales del firmante además de la del enlace.",
          "explanation": "La delegación no puede sobrevivir a credenciales ya inválidas."
        },
        {
          "id": "b",
          "text": "Siempre la hora completa.",
          "explanation": "Ignora el vencimiento de las credenciales."
        },
        {
          "id": "c",
          "text": "La retención del objeto solamente.",
          "explanation": "Retención y credenciales son controles distintos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La delegación no puede sobrevivir a credenciales ya inválidas.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html"
    },
    {
      "id": "aws-s3-111",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Delegación y cifrado",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "GetObject está permitido y falla leer un objeto SSE-KMS. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Abrir el objeto anónimamente.",
          "explanation": "No resuelve KMS de forma correcta."
        },
        {
          "id": "b",
          "text": "Eliminar todas las versiones.",
          "explanation": "No explica ni corrige la autorización."
        },
        {
          "id": "c",
          "text": "Permisos y política de la clave además de las políticas S3.",
          "explanation": "El cifrado añade una capa de autorización."
        }
      ],
      "correctIds": ["c"],
      "explanation": "El cifrado añade una capa de autorización.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html"
    },
    {
      "id": "aws-s3-112",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Delegación y cifrado",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Una URL prefirmada es necesariamente de un solo uso?",
      "options": [
        {
          "id": "a",
          "text": "Sí, si se copia a otro navegador.",
          "explanation": "El navegador no determina uso único."
        },
        {
          "id": "b",
          "text": "No; puede reutilizarse durante su validez según operación y controles.",
          "explanation": "No incluye automáticamente consumo único."
        },
        {
          "id": "c",
          "text": "Sí, S3 invalida cualquier enlace tras abrirlo.",
          "explanation": "No es una garantía del mecanismo."
        }
      ],
      "correctIds": ["b"],
      "explanation": "No incluye automáticamente consumo único.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html"
    },
    {
      "id": "aws-s3-113",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Ciclo de vida y eventos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debes comparar antes de archivar en una clase Glacier?",
      "options": [
        {
          "id": "a",
          "text": "Modalidad de recuperación, tiempo, frecuencia y coste.",
          "explanation": "No todas las clases Glacier recuperan igual."
        },
        {
          "id": "b",
          "text": "Solo el nombre del archivo.",
          "explanation": "No expresa requisitos de acceso."
        },
        {
          "id": "c",
          "text": "Solo la CPU del lector.",
          "explanation": "No define la disponibilidad del objeto."
        }
      ],
      "correctIds": ["a"],
      "explanation": "No todas las clases Glacier recuperan igual.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
    },
    {
      "id": "aws-s3-114",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Ciclo de vida y eventos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una función escribe en el mismo prefijo que dispara su ejecución. ¿Qué riesgo aparece?",
      "options": [
        {
          "id": "a",
          "text": "S3 desactiva siempre el evento automáticamente.",
          "explanation": "No debe asumirse esa protección."
        },
        {
          "id": "b",
          "text": "El bucket pasa a otra región.",
          "explanation": "No es efecto de la notificación."
        },
        {
          "id": "c",
          "text": "Un bucle de eventos y procesamiento repetido.",
          "explanation": "El filtro y los destinos deben evitar realimentación."
        }
      ],
      "correctIds": ["c"],
      "explanation": "El filtro y los destinos deben evitar realimentación.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
    },
    {
      "id": "aws-s3-115",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Ciclo de vida y eventos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué debe hacer el consumidor de notificaciones S3 ante duplicados?",
      "options": [
        {
          "id": "a",
          "text": "Desactivar permanentemente las notificaciones.",
          "explanation": "Elimina el flujo en vez de hacerlo robusto."
        },
        {
          "id": "b",
          "text": "Reconocer la operación y aplicar efectos idempotentes.",
          "explanation": "La entrega puede repetirse."
        },
        {
          "id": "c",
          "text": "Crear un recurso nuevo en cada entrega sin verificar.",
          "explanation": "Puede duplicar efectos."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La entrega puede repetirse.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
    },
    {
      "id": "aws-s3-116",
      "revision": 2,
      "contentId": "aws-s3",
      "topic": "Ciclo de vida y eventos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una carga multipart quedó abandonada. ¿Qué control ayuda a retirar sus partes?",
      "options": [
        {
          "id": "a",
          "text": "Una regla que aborte cargas multipart incompletas.",
          "explanation": "Deben gestionarse separadamente del objeto completo."
        },
        {
          "id": "b",
          "text": "La expiración de una URL de descarga.",
          "explanation": "No elimina las partes almacenadas."
        },
        {
          "id": "c",
          "text": "Un health check del ALB.",
          "explanation": "No gestiona almacenamiento S3."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Deben gestionarse separadamente del objeto completo.",
      "source": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Objetos y acceso",
      "description": "Comprueba los mecanismos y las decisiones de objetos y acceso.",
      "questionIds": [
        "aws-s3-101",
        "aws-s3-102",
        "aws-s3-103",
        "aws-s3-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Versiones y recuperación",
      "description": "Comprueba los mecanismos y las decisiones de versiones y recuperación.",
      "questionIds": [
        "aws-s3-105",
        "aws-s3-106",
        "aws-s3-107",
        "aws-s3-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Delegación y cifrado",
      "description": "Comprueba los mecanismos y las decisiones de delegación y cifrado.",
      "questionIds": [
        "aws-s3-109",
        "aws-s3-110",
        "aws-s3-111",
        "aws-s3-112"
      ]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Ciclo de vida y eventos",
      "description": "Comprueba los mecanismos y las decisiones de ciclo de vida y eventos.",
      "questionIds": [
        "aws-s3-113",
        "aws-s3-114",
        "aws-s3-115",
        "aws-s3-116"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas mediante preguntas reutilizadas de los bloques anteriores.",
      "questionIds": [
        "aws-s3-103",
        "aws-s3-104",
        "aws-s3-107",
        "aws-s3-108",
        "aws-s3-111",
        "aws-s3-112",
        "aws-s3-115",
        "aws-s3-116"
      ]
    }
  ]
};
