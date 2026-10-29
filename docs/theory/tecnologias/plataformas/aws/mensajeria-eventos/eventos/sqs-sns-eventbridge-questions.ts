import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsMessagingBank: QuestionBank = {
  "id": "aws-messaging-events",
  "revision": 2,
  "contentId": "aws-messaging-events",
  "title": "SQS, SNS y EventBridge",
  "questions": [
    {
      "id": "aws-messaging-events-101",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Cola y procesamiento",
      "level": "básico",
      "skill": "concepto",
      "prompt": "Recibir un mensaje SQS produce qué efecto?",
      "options": [
        {
          "id": "a",
          "text": "Lo vuelve temporalmente invisible sin borrarlo.",
          "explanation": "Debe confirmarse después del procesamiento."
        },
        {
          "id": "b",
          "text": "Lo elimina de inmediato.",
          "explanation": "Se confunde recepción con borrado."
        },
        {
          "id": "c",
          "text": "Lo transmite obligatoriamente a todos los workers.",
          "explanation": "Los consumidores compiten por trabajo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Debe confirmarse después del procesamiento.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html"
    },
    {
      "id": "aws-messaging-events-102",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Cola y procesamiento",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "El trabajo dura más que visibility timeout y aún no se borró. ¿Qué puede pasar?",
      "options": [
        {
          "id": "a",
          "text": "Que SQS aumente automáticamente el tiempo de cada operación sin límite.",
          "explanation": "No debe asumirse."
        },
        {
          "id": "b",
          "text": "Que se borre el dato de negocio.",
          "explanation": "SQS no administra esa escritura."
        },
        {
          "id": "c",
          "text": "Que el mensaje vuelva a entregarse.",
          "explanation": "Debe ajustarse o extenderse visibilidad y mantener idempotencia."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Debe ajustarse o extenderse visibilidad y mantener idempotencia.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html"
    },
    {
      "id": "aws-messaging-events-103",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Cola y procesamiento",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un worker aplica el efecto y falla antes de DeleteMessage. ¿Qué protege el resultado?",
      "options": [
        {
          "id": "a",
          "text": "Confiar en que no habrá reentrega por tener FIFO.",
          "explanation": "El fallo del consumidor sigue requiriendo control del efecto."
        },
        {
          "id": "b",
          "text": "Idempotencia coordinada con la operación de negocio.",
          "explanation": "La entrega puede repetirse."
        },
        {
          "id": "c",
          "text": "Un identificador nuevo para el mismo trabajo repetido.",
          "explanation": "Oculta que es un duplicado."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La entrega puede repetirse.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html"
    },
    {
      "id": "aws-messaging-events-104",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Cola y procesamiento",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué busca long polling?",
      "options": [
        {
          "id": "a",
          "text": "Reducir recepciones vacías esperando mensajes.",
          "explanation": "Es un ajuste de consumo."
        },
        {
          "id": "b",
          "text": "Conservar mensajes para siempre.",
          "explanation": "No sustituye retención."
        },
        {
          "id": "c",
          "text": "Publicar una copia a cada servicio.",
          "explanation": "Eso describe fan-out."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Es un ajuste de consumo.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html"
    },
    {
      "id": "aws-messaging-events-105",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Distribución y contratos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Dos servicios deben recibir cada publicación y avanzar independientemente. ¿Qué diseño encaja?",
      "options": [
        {
          "id": "a",
          "text": "Dos workers de una sola cola.",
          "explanation": "Compiten por mensajes, no garantizan copia para ambos."
        },
        {
          "id": "b",
          "text": "Una tabla de rutas compartida.",
          "explanation": "No es un mecanismo de mensajería."
        },
        {
          "id": "c",
          "text": "SNS con una cola por consumidor.",
          "explanation": "Cada cola conserva su propio trabajo."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Cada cola conserva su propio trabajo.",
      "source": "https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html"
    },
    {
      "id": "aws-messaging-events-106",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Distribución y contratos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué describe mejor un evento de dominio?",
      "options": [
        {
          "id": "a",
          "text": "Un log sin esquema enviado al azar.",
          "explanation": "No constituye un contrato útil."
        },
        {
          "id": "b",
          "text": "Un hecho ocurrido con identidad, tipo y datos contractuales.",
          "explanation": "Permite consumidores desacoplados."
        },
        {
          "id": "c",
          "text": "Una orden imperativa a un único destinatario.",
          "explanation": "Eso se aproxima a un comando."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Permite consumidores desacoplados.",
      "source": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html"
    },
    {
      "id": "aws-messaging-events-107",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Distribución y contratos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué aporta un patrón de reglas en un bus EventBridge?",
      "options": [
        {
          "id": "a",
          "text": "Seleccionar destinos según campos del evento.",
          "explanation": "Desacopla productor de destinatarios."
        },
        {
          "id": "b",
          "text": "Convertir cualquier petición en una transacción SQL.",
          "explanation": "No brinda esa garantía."
        },
        {
          "id": "c",
          "text": "Eliminar permisos de publicación.",
          "explanation": "La autorización sigue siendo necesaria."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Desacopla productor de destinatarios.",
      "source": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html"
    },
    {
      "id": "aws-messaging-events-108",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Distribución y contratos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Por qué conviene distinguir hora del hecho y hora de recepción?",
      "options": [
        {
          "id": "a",
          "text": "Porque deben ser siempre idénticas.",
          "explanation": "La transmisión puede tardar."
        },
        {
          "id": "b",
          "text": "Para decidir el nombre físico de la AZ.",
          "explanation": "No es su propósito."
        },
        {
          "id": "c",
          "text": "Para interpretar retrasos, orden y reproceso.",
          "explanation": "No siempre coinciden."
        }
      ],
      "correctIds": ["c"],
      "explanation": "No siempre coinciden.",
      "source": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html"
    },
    {
      "id": "aws-messaging-events-109",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Confirmación y recuperación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "La base confirmó y la publicación falló. ¿Qué patrón evalúas?",
      "options": [
        {
          "id": "a",
          "text": "Eliminar todas las escrituras ya confirmadas.",
          "explanation": "No es una recuperación general segura."
        },
        {
          "id": "b",
          "text": "Outbox registrado en la misma transacción local.",
          "explanation": "Permite publicación posterior verificable."
        },
        {
          "id": "c",
          "text": "Publicar primero sin registrar intención.",
          "explanation": "Puede anunciar un hecho no confirmado."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Permite publicación posterior verificable.",
      "source": "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html"
    },
    {
      "id": "aws-messaging-events-110",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Confirmación y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué hace útil una DLQ?",
      "options": [
        {
          "id": "a",
          "text": "Alarma, propietario, diagnóstico y reproceso controlado.",
          "explanation": "Conservar fallos sin atención no los resuelve."
        },
        {
          "id": "b",
          "text": "Ocultar mensajes para no ver errores.",
          "explanation": "Pierde visibilidad del trabajo."
        },
        {
          "id": "c",
          "text": "Borrar mensajes apenas llegan.",
          "explanation": "Elimina evidencia y capacidad de recuperación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Conservar fallos sin atención no los resuelve.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"
    },
    {
      "id": "aws-messaging-events-111",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Confirmación y recuperación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué debe comprobarse antes de redrive?",
      "options": [
        {
          "id": "a",
          "text": "Solo que la cola tenga un nombre nuevo.",
          "explanation": "No cambia el mensaje defectuoso."
        },
        {
          "id": "b",
          "text": "Que todos los mensajes tengan diferente color en consola.",
          "explanation": "No es un criterio técnico."
        },
        {
          "id": "c",
          "text": "Causa corregida y seguridad del reproceso.",
          "explanation": "Puede repetir efectos sobre estado actual."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Puede repetir efectos sobre estado actual.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html"
    },
    {
      "id": "aws-messaging-events-112",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Confirmación y recuperación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Por qué FIFO no elimina la necesidad de idempotencia del efecto externo?",
      "options": [
        {
          "id": "a",
          "text": "Porque todo mensaje FIFO se entrega solo por email.",
          "explanation": "No es su modelo."
        },
        {
          "id": "b",
          "text": "El consumidor puede aplicar un efecto y fallar antes de confirmar.",
          "explanation": "Orden y deduplicación de envío tienen alcance limitado."
        },
        {
          "id": "c",
          "text": "Porque FIFO no admite ningún orden.",
          "explanation": "Sí tiene orden por grupo."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Orden y deduplicación de envío tienen alcance limitado.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html"
    },
    {
      "id": "aws-messaging-events-113",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Operación y elección",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La antigüedad de mensajes sube aunque hay workers activos. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Tasa de entrada, duración, errores y capacidad de dependencias.",
          "explanation": "Estar activo no demuestra mantener el ritmo."
        },
        {
          "id": "b",
          "text": "Solo que la cola exista.",
          "explanation": "No acredita procesamiento."
        },
        {
          "id": "c",
          "text": "Cambiar el nombre del productor.",
          "explanation": "No reduce el trabajo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Estar activo no demuestra mantener el ritmo.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html"
    },
    {
      "id": "aws-messaging-events-114",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Operación y elección",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué métrica orienta sobre trabajo SQS antiguo pendiente?",
      "options": [
        {
          "id": "a",
          "text": "IteratorAge como métrica general de SQS.",
          "explanation": "Corresponde a fuentes de streams compatibles."
        },
        {
          "id": "b",
          "text": "TTL de DNS.",
          "explanation": "No observa mensajes."
        },
        {
          "id": "c",
          "text": "ApproximateAgeOfOldestMessage.",
          "explanation": "Describe antigüedad aproximada en la cola."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Describe antigüedad aproximada en la cola.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html"
    },
    {
      "id": "aws-messaging-events-115",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Operación y elección",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué diferencia Pipes de un bus distribuido a varios interesados?",
      "options": [
        {
          "id": "a",
          "text": "Todo pipe almacena indefinidamente cada mensaje.",
          "explanation": "No debe asumirse archivo ilimitado."
        },
        {
          "id": "b",
          "text": "Pipes integra una fuente con un destino en un flujo punto a punto.",
          "explanation": "Puede transformar o enriquecer según compatibilidad."
        },
        {
          "id": "c",
          "text": "Pipes necesita siempre un consumidor por cada región existente.",
          "explanation": "No es su contrato."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Puede transformar o enriquecer según compatibilidad.",
      "source": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html"
    },
    {
      "id": "aws-messaging-events-116",
      "revision": 2,
      "contentId": "aws-messaging-events",
      "topic": "Operación y elección",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una cola amortigua picos. ¿Por qué aún puede incumplirse el SLO?",
      "options": [
        {
          "id": "a",
          "text": "El trabajo puede esperar más de lo permitido por el usuario.",
          "explanation": "Buffering y tiempo de respuesta son propiedades distintas."
        },
        {
          "id": "b",
          "text": "Porque toda cola ejecuta al consumidor dentro del productor.",
          "explanation": "No es el modelo desacoplado."
        },
        {
          "id": "c",
          "text": "Porque SQS obliga a lectura síncrona del cliente final.",
          "explanation": "No establece ese flujo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Buffering y tiempo de respuesta son propiedades distintas.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Cola y procesamiento",
      "description": "Comprueba mecanismos y decisiones de cola y procesamiento.",
      "questionIds": [
        "aws-messaging-events-101",
        "aws-messaging-events-102",
        "aws-messaging-events-103",
        "aws-messaging-events-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Distribución y contratos",
      "description": "Comprueba mecanismos y decisiones de distribución y contratos.",
      "questionIds": [
        "aws-messaging-events-105",
        "aws-messaging-events-106",
        "aws-messaging-events-107",
        "aws-messaging-events-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Confirmación y recuperación",
      "description": "Comprueba mecanismos y decisiones de confirmación y recuperación.",
      "questionIds": [
        "aws-messaging-events-109",
        "aws-messaging-events-110",
        "aws-messaging-events-111",
        "aws-messaging-events-112"
      ]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Operación y elección",
      "description": "Comprueba mecanismos y decisiones de operación y elección.",
      "questionIds": [
        "aws-messaging-events-113",
        "aws-messaging-events-114",
        "aws-messaging-events-115",
        "aws-messaging-events-116"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-messaging-events-103",
        "aws-messaging-events-104",
        "aws-messaging-events-107",
        "aws-messaging-events-108",
        "aws-messaging-events-111",
        "aws-messaging-events-112",
        "aws-messaging-events-115",
        "aws-messaging-events-116"
      ]
    }
  ]
};
