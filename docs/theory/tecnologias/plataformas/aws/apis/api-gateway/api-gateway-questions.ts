import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsApiGatewayBank: QuestionBank = {
  "id": "aws-api-gateway",
  "revision": 2,
  "contentId": "aws-api-gateway",
  "title": "API Gateway",
  "questions": [
    {
      "id": "aws-api-gateway-101",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Producto y contrato",
      "level": "básico",
      "skill": "concepto",
      "prompt": "Una API es RESTful y solo requiere rutas HTTP con JWT. ¿Qué criterio permite elegir HTTP API?",
      "options": [
        {
          "id": "a",
          "text": "Que sus capacidades cubran el contrato sin necesitar funciones exclusivas de REST API.",
          "explanation": "RESTful describe el estilo; HTTP API y REST API son productos."
        },
        {
          "id": "b",
          "text": "Que use GET y POST, lo que obliga a REST API.",
          "explanation": "Ambos productos pueden atender esos métodos."
        },
        {
          "id": "c",
          "text": "Que necesite comunicación bidireccional persistente.",
          "explanation": "Ese requisito orienta a WebSocket."
        }
      ],
      "correctIds": ["a"],
      "explanation": "RESTful describe el estilo; HTTP API y REST API son productos.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html"
    },
    {
      "id": "aws-api-gateway-102",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Producto y contrato",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un cliente necesita API keys y límites de consumo por cliente. ¿Qué producto debes evaluar?",
      "options": [
        {
          "id": "a",
          "text": "HTTP API porque toda API key es un JWT.",
          "explanation": "Son mecanismos diferentes."
        },
        {
          "id": "b",
          "text": "WebSocket porque conserva conexiones.",
          "explanation": "Persistir conexiones no resuelve ese requisito."
        },
        {
          "id": "c",
          "text": "REST API con usage plans.",
          "explanation": "Estas capacidades diferencian REST API."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Estas capacidades diferencian REST API.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html"
    },
    {
      "id": "aws-api-gateway-103",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Producto y contrato",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué representa una integración?",
      "options": [
        {
          "id": "a",
          "text": "La versión del navegador del cliente.",
          "explanation": "No define el destino de la ruta."
        },
        {
          "id": "b",
          "text": "El camino y contrato entre una ruta y su backend.",
          "explanation": "Vincula la entrada con la ejecución."
        },
        {
          "id": "c",
          "text": "La identidad del usuario autenticado.",
          "explanation": "Esa identidad se verifica mediante autenticación."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Vincula la entrada con la ejecución.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-private.html"
    },
    {
      "id": "aws-api-gateway-104",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Producto y contrato",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Editaste una ruta, pero el stage sigue atendiendo la configuración anterior. ¿Qué revisarías?",
      "options": [
        {
          "id": "a",
          "text": "Deployment asociado y publicación del stage.",
          "explanation": "La configuración editada puede no ser la publicada."
        },
        {
          "id": "b",
          "text": "Solo la imagen del contenedor.",
          "explanation": "El síntoma también puede originarse en la publicación."
        },
        {
          "id": "c",
          "text": "El scope del usuario como única causa.",
          "explanation": "Un scope no elige una revisión de rutas."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La configuración editada puede no ser la publicada.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/monitoring-cloudwatch.html"
    },
    {
      "id": "aws-api-gateway-105",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Autorización",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué distingue una API key de un authorizer?",
      "options": [
        {
          "id": "a",
          "text": "La key prueba la identidad personal del usuario.",
          "explanation": "Puede compartirse y no acredita esa identidad."
        },
        {
          "id": "b",
          "text": "El authorizer distribuye tráfico entre subredes.",
          "explanation": "Su responsabilidad es autorización."
        },
        {
          "id": "c",
          "text": "La key puede identificar consumo; el authorizer participa en el control de acceso.",
          "explanation": "AWS desaconseja usar API keys como autenticación."
        }
      ],
      "correctIds": ["c"],
      "explanation": "AWS desaconseja usar API keys como autenticación.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html"
    },
    {
      "id": "aws-api-gateway-106",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Autorización",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un JWT tiene firma válida, pero audience corresponde a otra aplicación. ¿Qué debe ocurrir?",
      "options": [
        {
          "id": "a",
          "text": "Aceptarlo y cambiar el audience en memoria.",
          "explanation": "Modificar claims no crea autorización."
        },
        {
          "id": "b",
          "text": "Rechazarlo conforme a la audiencia configurada.",
          "explanation": "La firma por sí sola no hace válido el token para esta API."
        },
        {
          "id": "c",
          "text": "Aceptarlo por tener firma válida.",
          "explanation": "Falta validar el destinatario."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La firma por sí sola no hace válido el token para esta API.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html"
    },
    {
      "id": "aws-api-gateway-107",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Autorización",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El usuario A presenta un token válido y solicita el pedido de B. ¿Qué control falta si lo obtiene?",
      "options": [
        {
          "id": "a",
          "text": "Autorización del recurso en el backend.",
          "explanation": "Autenticar no comprueba propiedad de cada pedido."
        },
        {
          "id": "b",
          "text": "Aumentar el TTL de DNS.",
          "explanation": "No controla acceso al dato."
        },
        {
          "id": "c",
          "text": "Sustituir el token por una API key.",
          "explanation": "La key tampoco comprueba propiedad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Autenticar no comprueba propiedad de cada pedido.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html"
    },
    {
      "id": "aws-api-gateway-108",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Autorización",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La API rechaza un navegador por CORS. ¿Qué permite concluir eso sobre un cliente de línea de comandos?",
      "options": [
        {
          "id": "a",
          "text": "Queda bloqueado por el mismo mecanismo en todos los clientes.",
          "explanation": "No todos aplican CORS."
        },
        {
          "id": "b",
          "text": "Puede omitir cualquier authorizer.",
          "explanation": "La autorización del servidor sigue vigente."
        },
        {
          "id": "c",
          "text": "Puede seguir llamando; la autorización debe aplicarse igualmente.",
          "explanation": "CORS es un control del navegador."
        }
      ],
      "correctIds": ["c"],
      "explanation": "CORS es un control del navegador.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html"
    },
    {
      "id": "aws-api-gateway-109",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Integración y fallos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "El backend es privado en una VPC. ¿Qué debes concretar al integrar la API?",
      "options": [
        {
          "id": "a",
          "text": "Solo un timeout mayor.",
          "explanation": "No crea conectividad."
        },
        {
          "id": "b",
          "text": "VPC Link y un destino compatible, además de rutas y controles.",
          "explanation": "Integrar un servicio privado requiere un camino real."
        },
        {
          "id": "c",
          "text": "Solo el nombre del cluster ECS.",
          "explanation": "No identifica por sí solo la integración de red."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Integrar un servicio privado requiere un camino real.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-private.html"
    },
    {
      "id": "aws-api-gateway-110",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Integración y fallos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Lambda continúa calculando tras agotarse el tiempo del gateway. ¿Qué cambio resuelve un trabajo largo?",
      "options": [
        {
          "id": "a",
          "text": "Aceptar el trabajo y ofrecer estado o notificación posterior.",
          "explanation": "Desacopla cálculo y conexión HTTP."
        },
        {
          "id": "b",
          "text": "Aumentar solo el timeout de Lambda.",
          "explanation": "No alarga necesariamente la espera del gateway."
        },
        {
          "id": "c",
          "text": "Reintentar sin identificador de operación.",
          "explanation": "Puede duplicar el trabajo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Desacopla cálculo y conexión HTTP.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html"
    },
    {
      "id": "aws-api-gateway-111",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Integración y fallos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué debe hacer un cliente ante throttling 429?",
      "options": [
        {
          "id": "a",
          "text": "Repetir inmediatamente sin límite.",
          "explanation": "Puede agravar la saturación."
        },
        {
          "id": "b",
          "text": "Cambiar la autorización por una API key pública.",
          "explanation": "No resuelve el control de tasa."
        },
        {
          "id": "c",
          "text": "Aplicar reintentos limitados con espera apropiada.",
          "explanation": "Evita ampliar la ráfaga."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Evita ampliar la ráfaga.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html"
    },
    {
      "id": "aws-api-gateway-112",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Integración y fallos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Puede usarse una cuota de usage plan como techo exacto de factura?",
      "options": [
        {
          "id": "a",
          "text": "Sí, si cada usuario tiene una key.",
          "explanation": "No cambia la naturaleza del límite."
        },
        {
          "id": "b",
          "text": "No; las cuotas se aplican con mejor esfuerzo.",
          "explanation": "Pueden superarse y no abarcan todos los cargos."
        },
        {
          "id": "c",
          "text": "Sí, la cuota cancela toda la cuenta.",
          "explanation": "No tiene ese alcance."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Pueden superarse y no abarcan todos los cargos.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html"
    },
    {
      "id": "aws-api-gateway-113",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Diagnóstico",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La API devuelve 5xx al invocar Lambda. ¿Qué evidencia compararías?",
      "options": [
        {
          "id": "a",
          "text": "Access logs, permiso de invocar, error de Lambda y formato del payload.",
          "explanation": "Separa fallo de integración de fallo de función."
        },
        {
          "id": "b",
          "text": "Solo el scope del token.",
          "explanation": "No cubre un fallo posterior de integración."
        },
        {
          "id": "c",
          "text": "Solo que el deployment exista.",
          "explanation": "Existir no demuestra ejecución correcta."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Separa fallo de integración de fallo de función.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/monitoring-cloudwatch.html"
    },
    {
      "id": "aws-api-gateway-114",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Diagnóstico",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué dato ayuda a unir una petición del gateway con su backend?",
      "options": [
        {
          "id": "a",
          "text": "La contraseña del usuario en ambos logs.",
          "explanation": "Expone un secreto sin necesidad."
        },
        {
          "id": "b",
          "text": "El nombre del equipo del desarrollador.",
          "explanation": "No identifica la solicitud distribuida."
        },
        {
          "id": "c",
          "text": "Un identificador de solicitud propagado y registrado.",
          "explanation": "Permite seguir la misma operación."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Permite seguir la misma operación.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/monitoring-cloudwatch.html"
    },
    {
      "id": "aws-api-gateway-115",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Diagnóstico",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una escritura agotó el timeout y el cliente desconoce si terminó. ¿Qué diseño hace seguro un reintento?",
      "options": [
        {
          "id": "a",
          "text": "Desactivar logs para bajar latencia.",
          "explanation": "Elimina evidencia sin resolver la ambigüedad."
        },
        {
          "id": "b",
          "text": "Clave de idempotencia y consulta de resultado.",
          "explanation": "Evita aplicar dos veces la misma intención."
        },
        {
          "id": "c",
          "text": "Siempre crear otra operación con identificador nuevo.",
          "explanation": "Puede duplicar el efecto."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Evita aplicar dos veces la misma intención.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/monitoring-cloudwatch.html"
    },
    {
      "id": "aws-api-gateway-116",
      "revision": 2,
      "contentId": "aws-api-gateway",
      "topic": "Diagnóstico",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "El gateway añade poca latencia y la integración tarda mucho. ¿Dónde investigar primero?",
      "options": [
        {
          "id": "a",
          "text": "Backend, red y dependencias de integración.",
          "explanation": "La separación de tiempos orienta el diagnóstico."
        },
        {
          "id": "b",
          "text": "Solo la resolución DNS del cliente.",
          "explanation": "No explica la duración de integración observada."
        },
        {
          "id": "c",
          "text": "Eliminar el authorizer para todos.",
          "explanation": "Amplía acceso sin evidencia causal."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La separación de tiempos orienta el diagnóstico.",
      "source": "https://docs.aws.amazon.com/apigateway/latest/developerguide/monitoring-cloudwatch.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Producto y contrato",
      "description": "Comprueba los mecanismos y las decisiones de producto y contrato.",
      "questionIds": [
        "aws-api-gateway-101",
        "aws-api-gateway-102",
        "aws-api-gateway-103",
        "aws-api-gateway-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Autorización",
      "description": "Comprueba los mecanismos y las decisiones de autorización.",
      "questionIds": [
        "aws-api-gateway-105",
        "aws-api-gateway-106",
        "aws-api-gateway-107",
        "aws-api-gateway-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Integración y fallos",
      "description": "Comprueba los mecanismos y las decisiones de integración y fallos.",
      "questionIds": [
        "aws-api-gateway-109",
        "aws-api-gateway-110",
        "aws-api-gateway-111",
        "aws-api-gateway-112"
      ]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Diagnóstico",
      "description": "Comprueba los mecanismos y las decisiones de diagnóstico.",
      "questionIds": [
        "aws-api-gateway-113",
        "aws-api-gateway-114",
        "aws-api-gateway-115",
        "aws-api-gateway-116"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas mediante preguntas reutilizadas de los bloques anteriores.",
      "questionIds": [
        "aws-api-gateway-103",
        "aws-api-gateway-104",
        "aws-api-gateway-107",
        "aws-api-gateway-108",
        "aws-api-gateway-111",
        "aws-api-gateway-112",
        "aws-api-gateway-115",
        "aws-api-gateway-116"
      ]
    }
  ]
};
