import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsRdsBank: QuestionBank = {
  "id": "aws-rds",
  "revision": 2,
  "contentId": "aws-rds",
  "title": "Amazon RDS",
  "questions": [
    {
      "id": "aws-rds-101",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Modelo y acceso",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué sigue administrando el equipo al usar RDS?",
      "options": [
        {
          "id": "a",
          "text": "Esquema, consultas, usuarios y políticas de recuperación.",
          "explanation": "La gestión del servicio no diseña la aplicación."
        },
        {
          "id": "b",
          "text": "Reparación física del servidor AWS.",
          "explanation": "Eso pertenece al proveedor."
        },
        {
          "id": "c",
          "text": "Todos los componentes del hipervisor.",
          "explanation": "No es una responsabilidad del cliente."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La gestión del servicio no diseña la aplicación.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-rds-102",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Modelo y acceso",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una credencial correcta no logra conectar a la base privada. ¿Qué revisas?",
      "options": [
        {
          "id": "a",
          "text": "Solo cambiar la contraseña otra vez.",
          "explanation": "No explica un camino de red inexistente."
        },
        {
          "id": "b",
          "text": "Publicar la base para cualquier origen.",
          "explanation": "Amplía acceso sin localizar la causa."
        },
        {
          "id": "c",
          "text": "Endpoint, rutas, SG, TLS y estado del motor.",
          "explanation": "Autenticación y conectividad son capas separadas."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Autenticación y conectividad son capas separadas.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-rds-103",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Modelo y acceso",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué define un parameter group?",
      "options": [
        {
          "id": "a",
          "text": "Las versiones de todos los microservicios.",
          "explanation": "Es configuración del motor."
        },
        {
          "id": "b",
          "text": "Configuración del motor y sus parámetros.",
          "explanation": "Algunos cambios tienen condiciones de aplicación."
        },
        {
          "id": "c",
          "text": "Los registros DNS del cliente.",
          "explanation": "No administra esa zona."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Algunos cambios tienen condiciones de aplicación.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-rds-104",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Modelo y acceso",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "La API pasa de 2 a 20 tareas con el mismo pool por tarea. ¿Qué debe analizarse?",
      "options": [
        {
          "id": "a",
          "text": "Conexiones totales, límites del motor y consultas.",
          "explanation": "Escalar aplicación puede saturar la base."
        },
        {
          "id": "b",
          "text": "Solo la capacidad del ALB.",
          "explanation": "No controla los pools de las tareas."
        },
        {
          "id": "c",
          "text": "Que RDS multiplica automáticamente su máximo de conexiones por diez.",
          "explanation": "No puede asumirse."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Escalar aplicación puede saturar la base.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html"
    },
    {
      "id": "aws-rds-105",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Disponibilidad y lecturas",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Para qué sirve el standby de una DB instance Multi-AZ clásica?",
      "options": [
        {
          "id": "a",
          "text": "Consultas analíticas por cualquier cliente.",
          "explanation": "No es un reader normal."
        },
        {
          "id": "b",
          "text": "Guardar logs de CloudTrail.",
          "explanation": "No cumple esa función."
        },
        {
          "id": "c",
          "text": "Failover, sin atender lecturas normales de la aplicación.",
          "explanation": "Debe distinguirse del modelo de DB cluster."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Debe distinguirse del modelo de DB cluster.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
    },
    {
      "id": "aws-rds-106",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Disponibilidad y lecturas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué diferencia un Multi-AZ DB cluster del standby clásico?",
      "options": [
        {
          "id": "a",
          "text": "Es obligatoriamente un cluster Aurora.",
          "explanation": "Son modelos diferentes."
        },
        {
          "id": "b",
          "text": "Writer y dos readers legibles en tres AZ.",
          "explanation": "Combina disponibilidad y capacidad de lectura."
        },
        {
          "id": "c",
          "text": "No tiene endpoint de escritura.",
          "explanation": "Sí conserva writer."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Combina disponibilidad y capacidad de lectura.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"
    },
    {
      "id": "aws-rds-107",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Disponibilidad y lecturas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un usuario escribe y lee inmediatamente de una read replica asíncrona. ¿Qué puede ocurrir?",
      "options": [
        {
          "id": "a",
          "text": "Que todavía no vea el cambio.",
          "explanation": "Existe retraso posible de replicación."
        },
        {
          "id": "b",
          "text": "Que la réplica modifique la escritura original.",
          "explanation": "Es un destino de lectura en ese flujo."
        },
        {
          "id": "c",
          "text": "Que el rol IAM garantice actualización inmediata.",
          "explanation": "IAM no determina frescura de réplica."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Existe retraso posible de replicación.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html"
    },
    {
      "id": "aws-rds-108",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Disponibilidad y lecturas",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Por qué Multi-AZ no sustituye un backup frente a borrado accidental?",
      "options": [
        {
          "id": "a",
          "text": "Porque el standby siempre contiene una copia de hace un mes.",
          "explanation": "No es un archivo histórico."
        },
        {
          "id": "b",
          "text": "Porque los snapshots cambian el motor a NoSQL.",
          "explanation": "No cambia el modelo de datos."
        },
        {
          "id": "c",
          "text": "El borrado lógico puede replicarse.",
          "explanation": "Disponibilidad no equivale a recuperar un estado anterior."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Disponibilidad no equivale a recuperar un estado anterior.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"
    },
    {
      "id": "aws-rds-109",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Disponibilidad y lecturas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Tras failover se rompen conexiones. ¿Qué comportamiento necesita el cliente?",
      "options": [
        {
          "id": "a",
          "text": "Crear una transacción nueva de pago cada vez sin control.",
          "explanation": "Puede repetir efectos."
        },
        {
          "id": "b",
          "text": "Reconectar, resolver endpoint y reintentar con control de efectos.",
          "explanation": "Debe tratar sesiones perdidas y resultado incierto."
        },
        {
          "id": "c",
          "text": "Fijar para siempre la IP anterior.",
          "explanation": "Impide seguir cambios del endpoint."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Debe tratar sesiones perdidas y resultado incierto.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html"
    },
    {
      "id": "aws-rds-110",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Recuperación y operación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "PITR de una DB instance crea qué?",
      "options": [
        {
          "id": "a",
          "text": "Una nueva instancia restaurada al punto elegido disponible.",
          "explanation": "Requiere validación y cambio del acceso."
        },
        {
          "id": "b",
          "text": "Una reversión instantánea de la instancia original.",
          "explanation": "No describe ese mecanismo."
        },
        {
          "id": "c",
          "text": "Una read replica sin datos.",
          "explanation": "No representa restauración."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Requiere validación y cambio del acceso.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"
    },
    {
      "id": "aws-rds-111",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Recuperación y operación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué falta antes de dirigir tráfico a una base restaurada?",
      "options": [
        {
          "id": "a",
          "text": "Cambiar únicamente el color del dashboard.",
          "explanation": "No comprueba el estado."
        },
        {
          "id": "b",
          "text": "Eliminar todas las copias previas inmediatamente.",
          "explanation": "Reduce opciones de recuperación sin evidencia."
        },
        {
          "id": "c",
          "text": "Verificar datos, configuración, red, permisos y reconciliación.",
          "explanation": "Existir no acredita que la carga esté utilizable."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Existir no acredita que la carga esté utilizable.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"
    },
    {
      "id": "aws-rds-112",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Recuperación y operación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una consulta lenta mantiene CPU baja. ¿Qué investigarías además?",
      "options": [
        {
          "id": "a",
          "text": "Desactivar TLS para cualquier conexión.",
          "explanation": "No está justificado por ese dato."
        },
        {
          "id": "b",
          "text": "Locks, espera de I/O, índices y conexiones.",
          "explanation": "La latencia puede estar en esperas."
        },
        {
          "id": "c",
          "text": "Solo aumentar vCPU sin observar consultas.",
          "explanation": "Puede no mejorar el cuello."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La latencia puede estar en esperas.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-rds-113",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Recuperación y operación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debes acordar antes de una actualización del motor?",
      "options": [
        {
          "id": "a",
          "text": "Compatibilidad, ventana, respaldo y procedimiento de recuperación.",
          "explanation": "La versión afecta clientes y comportamiento."
        },
        {
          "id": "b",
          "text": "Solo el nombre DNS nuevo.",
          "explanation": "Puede mantenerse el endpoint y cambiar comportamiento."
        },
        {
          "id": "c",
          "text": "Que todas las migraciones se revierten automáticamente.",
          "explanation": "No existe tal garantía."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La versión afecta clientes y comportamiento.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
    },
    {
      "id": "aws-rds-114",
      "revision": 2,
      "contentId": "aws-rds",
      "topic": "Recuperación y operación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué hace insuficiente conservar un snapshot sin permisos de clave?",
      "options": [
        {
          "id": "a",
          "text": "Que convierte el snapshot en una cola.",
          "explanation": "No cambia su naturaleza."
        },
        {
          "id": "b",
          "text": "Que deshabilita siempre la cuenta.",
          "explanation": "No es el efecto descrito."
        },
        {
          "id": "c",
          "text": "Que quizá no puedas descifrar y utilizar los datos restaurados.",
          "explanation": "La recuperación incluye cifrado e identidad."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La recuperación incluye cifrado e identidad.",
      "source": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Modelo y acceso",
      "description": "Comprueba mecanismos y decisiones de modelo y acceso.",
      "questionIds": [
        "aws-rds-101",
        "aws-rds-102",
        "aws-rds-103",
        "aws-rds-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Disponibilidad y lecturas",
      "description": "Comprueba mecanismos y decisiones de disponibilidad y lecturas.",
      "questionIds": [
        "aws-rds-105",
        "aws-rds-106",
        "aws-rds-107",
        "aws-rds-108",
        "aws-rds-109"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Recuperación y operación",
      "description": "Comprueba mecanismos y decisiones de recuperación y operación.",
      "questionIds": [
        "aws-rds-110",
        "aws-rds-111",
        "aws-rds-112",
        "aws-rds-113",
        "aws-rds-114"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "4 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-rds-103",
        "aws-rds-104",
        "aws-rds-108",
        "aws-rds-109",
        "aws-rds-113",
        "aws-rds-114"
      ]
    }
  ]
};
