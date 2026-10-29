import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsCloudwatchBank: QuestionBank = {
  "id": "aws-cloudwatch",
  "revision": 2,
  "contentId": "aws-cloudwatch",
  "title": "CloudWatch: métricas, logs y alarmas",
  "questions": [
    {
      "id": "aws-cloudwatch-101",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Métricas y dimensiones",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué identifica una serie de CloudWatch?",
      "options": [
        {
          "id": "a",
          "text": "Namespace, nombre y dimensiones.",
          "explanation": "Elegir otro valor puede seleccionar otra serie."
        },
        {
          "id": "b",
          "text": "Solo un título del dashboard.",
          "explanation": "El título no identifica los datos."
        },
        {
          "id": "c",
          "text": "Solo la fecha del último despliegue.",
          "explanation": "No define la métrica."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Elegir otro valor puede seleccionar otra serie.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"
    },
    {
      "id": "aws-cloudwatch-102",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Métricas y dimensiones",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué estadística usarías para contar invocaciones de un período?",
      "options": [
        {
          "id": "a",
          "text": "Average de porcentajes de CPU.",
          "explanation": "No cuenta invocaciones."
        },
        {
          "id": "b",
          "text": "p95 del tamaño del log.",
          "explanation": "No mide ese total."
        },
        {
          "id": "c",
          "text": "Sum sobre una métrica de conteo apropiada.",
          "explanation": "Debe respetar semántica y ventana."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Debe respetar semántica y ventana.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"
    },
    {
      "id": "aws-cloudwatch-103",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Métricas y dimensiones",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Un p95 es el máximo observado?",
      "options": [
        {
          "id": "a",
          "text": "Es el promedio de CPU.",
          "explanation": "Es otra estadística y señal."
        },
        {
          "id": "b",
          "text": "No; parte de las observaciones puede ser más lenta.",
          "explanation": "El percentil no equivale al extremo."
        },
        {
          "id": "c",
          "text": "Sí, coincide siempre.",
          "explanation": "Confunde percentil y máximo."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El percentil no equivale al extremo.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"
    },
    {
      "id": "aws-cloudwatch-104",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Métricas y dimensiones",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Por qué requestId como dimensión de cada métrica puede ser costoso?",
      "options": [
        {
          "id": "a",
          "text": "Crea muchas series de alta cardinalidad.",
          "explanation": "Los detalles individuales encajan mejor en logs o trazas."
        },
        {
          "id": "b",
          "text": "Porque elimina timestamps.",
          "explanation": "No es el efecto."
        },
        {
          "id": "c",
          "text": "Porque vuelve eventual toda base de datos.",
          "explanation": "No cambia consistencia de datos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Los detalles individuales encajan mejor en logs o trazas.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"
    },
    {
      "id": "aws-cloudwatch-105",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Logs y consultas",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué facilita logs JSON con requestId?",
      "options": [
        {
          "id": "a",
          "text": "Autenticación automática del usuario.",
          "explanation": "Un log no concede confianza."
        },
        {
          "id": "b",
          "text": "Cifrado de todos los recursos sin configuración.",
          "explanation": "No es su función."
        },
        {
          "id": "c",
          "text": "Correlacionar y consultar eventos de una operación.",
          "explanation": "La estructura ofrece campos consistentes."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La estructura ofrece campos consistentes.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html"
    },
    {
      "id": "aws-cloudwatch-106",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Logs y consultas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una consulta filtra level ERROR y calcula p95. ¿Qué población describe?",
      "options": [
        {
          "id": "a",
          "text": "Todos los servicios de la cuenta aunque no se seleccionen.",
          "explanation": "El alcance depende de grupos y consulta."
        },
        {
          "id": "b",
          "text": "Las entradas de error filtradas.",
          "explanation": "El filtro acota las observaciones."
        },
        {
          "id": "c",
          "text": "Todas las solicitudes de la aplicación.",
          "explanation": "No incluye entradas descartadas."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El filtro acota las observaciones.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html"
    },
    {
      "id": "aws-cloudwatch-107",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Logs y consultas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Cómo reducir volumen de una consulta Logs Insights?",
      "options": [
        {
          "id": "a",
          "text": "Acotar grupos y rango temporal antes de ejecutar.",
          "explanation": "Reduce datos examinados."
        },
        {
          "id": "b",
          "text": "Consultar siempre toda la historia.",
          "explanation": "Amplía trabajo y coste."
        },
        {
          "id": "c",
          "text": "Guardar tokens para filtrar más rápido.",
          "explanation": "Expone secretos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Reduce datos examinados.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html"
    },
    {
      "id": "aws-cloudwatch-108",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Logs y consultas",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "EC2 muestra CPU, pero no ocupación del filesystem. ¿Qué revisas?",
      "options": [
        {
          "id": "a",
          "text": "Que EC2 nunca puede medir disco usado.",
          "explanation": "Puede instrumentarse."
        },
        {
          "id": "b",
          "text": "Solo cambiar el título de la gráfica.",
          "explanation": "No produce la señal faltante."
        },
        {
          "id": "c",
          "text": "Instrumentación del invitado, agente, permisos y configuración.",
          "explanation": "No toda métrica del sistema se publica por defecto."
        }
      ],
      "correctIds": ["c"],
      "explanation": "No toda métrica del sistema se publica por defecto.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html"
    },
    {
      "id": "aws-cloudwatch-109",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Alarmas y acciones",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué debe acompañar un umbral útil?",
      "options": [
        {
          "id": "a",
          "text": "Un nombre de bucket público.",
          "explanation": "No define su comportamiento."
        },
        {
          "id": "b",
          "text": "Período, evaluación, ausencias y acción con responsable.",
          "explanation": "Una cifra aislada no define respuesta."
        },
        {
          "id": "c",
          "text": "Una key administrativa compartida.",
          "explanation": "No es requisito de alarma."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Una cifra aislada no define respuesta.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Alarms.html"
    },
    {
      "id": "aws-cloudwatch-110",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Alarmas y acciones",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una alarma está INSUFFICIENT_DATA. ¿Qué conviene revisar?",
      "options": [
        {
          "id": "a",
          "text": "Emisión, dimensiones y tratamiento de datos ausentes.",
          "explanation": "Falta información para evaluar."
        },
        {
          "id": "b",
          "text": "Eliminar la métrica inmediatamente.",
          "explanation": "Puede ocultar una pérdida de señal."
        },
        {
          "id": "c",
          "text": "Declarar que el servicio está sano.",
          "explanation": "La ausencia no demuestra salud."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Falta información para evaluar.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Alarms.html"
    },
    {
      "id": "aws-cloudwatch-111",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Alarmas y acciones",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué aporta una alarma compuesta?",
      "options": [
        {
          "id": "a",
          "text": "Promediar todas las métricas sin distinguir unidades.",
          "explanation": "No describe una composición de estados."
        },
        {
          "id": "b",
          "text": "Crear automáticamente una solución del incidente.",
          "explanation": "La acción sigue requiriendo diseño."
        },
        {
          "id": "c",
          "text": "Combinar estados de otras alarmas para una condición útil.",
          "explanation": "Puede reducir ruido con una regla explícita."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Puede reducir ruido con una regla explícita.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Alarms.html"
    },
    {
      "id": "aws-cloudwatch-112",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Diagnóstico operativo",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una cola SQS acumula trabajo antiguo. ¿Qué señal miras?",
      "options": [
        {
          "id": "a",
          "text": "TTL del dominio público.",
          "explanation": "No mide cola."
        },
        {
          "id": "b",
          "text": "ApproximateAgeOfOldestMessage y carga del consumidor.",
          "explanation": "La antigüedad refleja espera."
        },
        {
          "id": "c",
          "text": "IteratorAge como señal SQS universal.",
          "explanation": "No pertenece a ese origen."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La antigüedad refleja espera.",
      "source": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html"
    },
    {
      "id": "aws-cloudwatch-113",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Diagnóstico operativo",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "La API está lenta con CPU baja. ¿Qué evidencia falta?",
      "options": [
        {
          "id": "a",
          "text": "Dependencias, conexiones, esperas y trazas correlacionadas.",
          "explanation": "La CPU no abarca toda la latencia."
        },
        {
          "id": "b",
          "text": "Duplicar CPU siempre resolverá.",
          "explanation": "No se ha identificado el cuello."
        },
        {
          "id": "c",
          "text": "Reiniciar toda base sin revisar.",
          "explanation": "Puede ampliar el incidente."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La CPU no abarca toda la latencia.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"
    },
    {
      "id": "aws-cloudwatch-114",
      "revision": 2,
      "contentId": "aws-cloudwatch",
      "topic": "Diagnóstico operativo",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué la retención de logs debe ser explícita?",
      "options": [
        {
          "id": "a",
          "text": "Porque toda retención garantiza anonimización.",
          "explanation": "No elimina secretos ya registrados."
        },
        {
          "id": "b",
          "text": "Porque cambia la estadística p95 automáticamente.",
          "explanation": "Son decisiones distintas."
        },
        {
          "id": "c",
          "text": "Para equilibrar investigación, requisitos y coste.",
          "explanation": "No todo detalle necesita guardarse indefinidamente."
        }
      ],
      "correctIds": ["c"],
      "explanation": "No todo detalle necesita guardarse indefinidamente.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Métricas y dimensiones",
      "description": "Comprueba mecanismos y decisiones de métricas y dimensiones.",
      "questionIds": [
        "aws-cloudwatch-101",
        "aws-cloudwatch-102",
        "aws-cloudwatch-103",
        "aws-cloudwatch-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Logs y consultas",
      "description": "Comprueba mecanismos y decisiones de logs y consultas.",
      "questionIds": [
        "aws-cloudwatch-105",
        "aws-cloudwatch-106",
        "aws-cloudwatch-107",
        "aws-cloudwatch-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Alarmas y acciones",
      "description": "Comprueba mecanismos y decisiones de alarmas y acciones.",
      "questionIds": ["aws-cloudwatch-109",
        "aws-cloudwatch-110",
        "aws-cloudwatch-111"]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Diagnóstico operativo",
      "description": "Comprueba mecanismos y decisiones de diagnóstico operativo.",
      "questionIds": ["aws-cloudwatch-112",
        "aws-cloudwatch-113",
        "aws-cloudwatch-114"]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-cloudwatch-103",
        "aws-cloudwatch-104",
        "aws-cloudwatch-107",
        "aws-cloudwatch-108",
        "aws-cloudwatch-110",
        "aws-cloudwatch-111",
        "aws-cloudwatch-113",
        "aws-cloudwatch-114"
      ]
    }
  ]
};
