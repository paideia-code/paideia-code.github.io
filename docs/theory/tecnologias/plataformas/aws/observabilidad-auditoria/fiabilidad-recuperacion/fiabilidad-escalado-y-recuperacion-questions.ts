import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsReliabilityBank: QuestionBank = {
  "id": "aws-reliability-recovery",
  "revision": 2,
  "contentId": "aws-reliability-recovery",
  "title": "Fiabilidad, escalado y recuperación",
  "questions": [
    {
      "id": "aws-reliability-recovery-101",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Objetivos y dependencias",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué expresa RTO?",
      "options": [
        {
          "id": "a",
          "text": "Tiempo de interrupción aceptable para recuperar servicio.",
          "explanation": "Debe medirse contra un escenario."
        },
        {
          "id": "b",
          "text": "Antigüedad máxima de datos.",
          "explanation": "Eso corresponde a RPO."
        },
        {
          "id": "c",
          "text": "Cantidad de réplicas.",
          "explanation": "No es una medida de tiempo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Debe medirse contra un escenario.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
    },
    {
      "id": "aws-reliability-recovery-102",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Objetivos y dependencias",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Dos AZ conservan tres unidades cada una y la carga exige seis. ¿Qué ocurre al perder una?",
      "options": [
        {
          "id": "a",
          "text": "Toda capacidad se duplica automáticamente.",
          "explanation": "No es una garantía."
        },
        {
          "id": "b",
          "text": "RPO pasa a ser siempre cero.",
          "explanation": "Capacidad y pérdida de datos son diferentes."
        },
        {
          "id": "c",
          "text": "Puede faltar capacidad útil aunque haya redundancia.",
          "explanation": "Diseña para el escenario de supervivencia."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Diseña para el escenario de supervivencia.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/withstand-component-failures.html"
    },
    {
      "id": "aws-reliability-recovery-103",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Objetivos y dependencias",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Todas las réplicas dependen de la misma clave deshabilitada. ¿Qué revela eso?",
      "options": [
        {
          "id": "a",
          "text": "Que otro SG descifra sin clave.",
          "explanation": "No elimina la dependencia criptográfica."
        },
        {
          "id": "b",
          "text": "Una dependencia común puede anular la separación de cómputo.",
          "explanation": "Hay que seguir la operación completa."
        },
        {
          "id": "c",
          "text": "Que varias AZ no aportan aislamiento físico alguno.",
          "explanation": "Sí aportan, pero no cubren ese fallo."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Hay que seguir la operación completa.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/withstand-component-failures.html"
    },
    {
      "id": "aws-reliability-recovery-104",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Salud y escalado",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué riesgo tiene incluir una dependencia común caída en liveness de toda la flota?",
      "options": [
        {
          "id": "a",
          "text": "Reinicios masivos que agravan el incidente.",
          "explanation": "Liveness debe distinguir fallo propio de indisponibilidad externa."
        },
        {
          "id": "b",
          "text": "Garantiza reparar la dependencia.",
          "explanation": "Reiniciar clientes no la repara necesariamente."
        },
        {
          "id": "c",
          "text": "Permite omitir todos los timeouts.",
          "explanation": "No se deriva de la comprobación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Liveness debe distinguir fallo propio de indisponibilidad externa.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/withstand-component-failures.html"
    },
    {
      "id": "aws-reliability-recovery-105",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Salud y escalado",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué buscan backoff y jitter al reintentar?",
      "options": [
        {
          "id": "a",
          "text": "Hacer permanente el estado local.",
          "explanation": "No es su función."
        },
        {
          "id": "b",
          "text": "Revertir automáticamente un pago.",
          "explanation": "No revierte el efecto."
        },
        {
          "id": "c",
          "text": "Espaciar y distribuir intentos.",
          "explanation": "Reduce amplificación y sincronización de carga."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Reduce amplificación y sincronización de carga.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/withstand-component-failures.html"
    },
    {
      "id": "aws-reliability-recovery-106",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Salud y escalado",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Aumentar workers dispara conexiones al almacén y lo satura. ¿Qué control evalúas?",
      "options": [
        {
          "id": "a",
          "text": "Borrar alarmas para evitar notificaciones.",
          "explanation": "Elimina señales."
        },
        {
          "id": "b",
          "text": "Concurrencia, pools y admisión según capacidad downstream.",
          "explanation": "Más cómputo no elimina el límite de la dependencia."
        },
        {
          "id": "c",
          "text": "Aumentar sin máximo todos los workers.",
          "explanation": "Puede agravar saturación."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Más cómputo no elimina el límite de la dependencia.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/withstand-component-failures.html"
    },
    {
      "id": "aws-reliability-recovery-107",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Recuperación de carga",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué distingue warm standby de conservar solo backups?",
      "options": [
        {
          "id": "a",
          "text": "Existe un entorno reducido funcional preparado para ampliarse.",
          "explanation": "Exige menos reconstrucción inicial."
        },
        {
          "id": "b",
          "text": "Es siempre gratuito por estar reducido.",
          "explanation": "Mantiene capacidad y coste."
        },
        {
          "id": "c",
          "text": "No requiere datos.",
          "explanation": "La recuperación depende de ellos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Exige menos reconstrucción inicial.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
    },
    {
      "id": "aws-reliability-recovery-108",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Recuperación de carga",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué falta después de que una restauración cree una base?",
      "options": [
        {
          "id": "a",
          "text": "Cambiar únicamente el color de la consola.",
          "explanation": "No comprueba operación."
        },
        {
          "id": "b",
          "text": "Eliminar el procedimiento.",
          "explanation": "Debe conservarse y mejorarse."
        },
        {
          "id": "c",
          "text": "Validar datos, permisos, configuración y tráfico de aplicación.",
          "explanation": "El recurso no equivale al servicio completo."
        }
      ],
      "correctIds": ["c"],
      "explanation": "El recurso no equivale al servicio completo.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
    },
    {
      "id": "aws-reliability-recovery-109",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Recuperación de carga",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué demuestra realmente que se cumple un RTO?",
      "options": [
        {
          "id": "a",
          "text": "Tener dos snapshots de cualquier fecha.",
          "explanation": "No mide recuperación de servicio."
        },
        {
          "id": "b",
          "text": "Un ejercicio medido para el escenario y alcance definidos.",
          "explanation": "Configuración y nombre de estrategia no acreditan el tiempo."
        },
        {
          "id": "c",
          "text": "Haber escrito un número en un documento.",
          "explanation": "Es un objetivo sin evidencia."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Configuración y nombre de estrategia no acreditan el tiempo.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/test-reliability.html"
    },
    {
      "id": "aws-reliability-recovery-110",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Cambios y ejercicios",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué condición exige un rolling deployment?",
      "options": [
        {
          "id": "a",
          "text": "Compatibilidad mientras coexisten versiones.",
          "explanation": "Viejo y nuevo reciben trabajo durante la transición."
        },
        {
          "id": "b",
          "text": "Que todos los datos se borren antes.",
          "explanation": "No es condición del patrón."
        },
        {
          "id": "c",
          "text": "Que no exista balanceador ni descubrimiento.",
          "explanation": "No define rolling."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Viejo y nuevo reciben trabajo durante la transición.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/withstand-component-failures.html"
    },
    {
      "id": "aws-reliability-recovery-111",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Cambios y ejercicios",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "La versión nueva eliminó una columna que usa la anterior. ¿Por qué falla el rollback binario?",
      "options": [
        {
          "id": "a",
          "text": "Porque todo rollback es imposible.",
          "explanation": "Puede diseñarse con compatibilidad."
        },
        {
          "id": "b",
          "text": "Porque DNS decide las columnas.",
          "explanation": "No controla esquema."
        },
        {
          "id": "c",
          "text": "El esquema ya no es compatible con la versión recuperada.",
          "explanation": "Datos y código tienen ciclos relacionados."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Datos y código tienen ciclos relacionados.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/test-reliability.html"
    },
    {
      "id": "aws-reliability-recovery-112",
      "revision": 2,
      "contentId": "aws-reliability-recovery",
      "topic": "Cambios y ejercicios",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debe incluir un game day útil?",
      "options": [
        {
          "id": "a",
          "text": "Una promesa de que ningún error ocurrirá.",
          "explanation": "El objetivo es observar comportamiento."
        },
        {
          "id": "b",
          "text": "Escenario, responsables, límites de parada, medición y revisión.",
          "explanation": "La prueba necesita control y evidencia."
        },
        {
          "id": "c",
          "text": "Solo apagar recursos al azar.",
          "explanation": "No define un ejercicio seguro ni evaluable."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La prueba necesita control y evidencia.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/test-reliability.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Objetivos y dependencias",
      "description": "Comprueba mecanismos y decisiones de objetivos y dependencias.",
      "questionIds": ["aws-reliability-recovery-101",
        "aws-reliability-recovery-102",
        "aws-reliability-recovery-103"]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Salud y escalado",
      "description": "Comprueba mecanismos y decisiones de salud y escalado.",
      "questionIds": ["aws-reliability-recovery-104",
        "aws-reliability-recovery-105",
        "aws-reliability-recovery-106"]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Recuperación de carga",
      "description": "Comprueba mecanismos y decisiones de recuperación de carga.",
      "questionIds": ["aws-reliability-recovery-107",
        "aws-reliability-recovery-108",
        "aws-reliability-recovery-109"]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Cambios y ejercicios",
      "description": "Comprueba mecanismos y decisiones de cambios y ejercicios.",
      "questionIds": ["aws-reliability-recovery-110",
        "aws-reliability-recovery-111",
        "aws-reliability-recovery-112"]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-reliability-recovery-102",
        "aws-reliability-recovery-103",
        "aws-reliability-recovery-105",
        "aws-reliability-recovery-106",
        "aws-reliability-recovery-108",
        "aws-reliability-recovery-109",
        "aws-reliability-recovery-111",
        "aws-reliability-recovery-112"
      ]
    }
  ]
};
