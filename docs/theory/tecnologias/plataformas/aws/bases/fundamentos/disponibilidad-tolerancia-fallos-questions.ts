import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsAvailabilityBank: QuestionBank = {
  "id": "aws-availability-fault-tolerance",
  "revision": 1,
  "contentId": "aws-availability-fault-tolerance",
  "title": "Disponibilidad y tolerancia a fallos",
  "questions": [
    {
      "id": "aws-availability-fault-tolerance-001",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Objetivos de continuidad",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué debe definirse antes de medir disponibilidad?",
      "options": [
        {
          "id": "a",
          "text": "La operación, el éxito esperado, el observador y el período.",
          "explanation": "Sin alcance explícito no se interpreta la medición."
        },
        {
          "id": "b",
          "text": "Solo el número de procesos encendidos.",
          "explanation": "Ese número no demuestra éxito de la operación."
        },
        {
          "id": "c",
          "text": "Solo el proveedor utilizado.",
          "explanation": "El proveedor no define el criterio de éxito."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Sin alcance explícito no se interpreta la medición.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/high-availability-is-not-disaster-recovery.html"
    },
    {
      "id": "aws-availability-fault-tolerance-002",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Objetivos de continuidad",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un proceso responde, pero la operación necesaria falla por falta de datos. ¿Qué debe evaluarse?",
      "options": [
        {
          "id": "a",
          "text": "La operación completa y su dependencia de datos.",
          "explanation": "Un proceso vivo no basta para completar la operación."
        },
        {
          "id": "b",
          "text": "Dar por disponible toda la aplicación.",
          "explanation": "Una respuesta parcial no demuestra continuidad completa."
        },
        {
          "id": "c",
          "text": "Medir únicamente CPU.",
          "explanation": "La CPU no verifica la dependencia inaccesible."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Un proceso vivo no basta para completar la operación.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/high-availability-is-not-disaster-recovery.html"
    },
    {
      "id": "aws-availability-fault-tolerance-003",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Objetivos de continuidad",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Dos informes usan tiempo disponible y solicitudes satisfactorias. ¿Qué falta para compararlos?",
      "options": [
        {
          "id": "a",
          "text": "Entender los criterios, operaciones y períodos de ambas mediciones.",
          "explanation": "Las dos métricas tienen denominadores y alcances distintos."
        },
        {
          "id": "b",
          "text": "Suponer que los porcentajes son intercambiables.",
          "explanation": "Un mismo porcentaje puede representar mediciones distintas."
        },
        {
          "id": "c",
          "text": "Elegir siempre el porcentaje mayor.",
          "explanation": "El mayor no demuestra mejor servicio sin contexto."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Las dos métricas tienen denominadores y alcances distintos.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/high-availability-is-not-disaster-recovery.html"
    },
    {
      "id": "aws-availability-fault-tolerance-004",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Objetivos de continuidad",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "En 43 200 minutos se registran 43,2 de interrupción. ¿Qué disponibilidad temporal resulta?",
      "options": [
        {
          "id": "a",
          "text": "99,9 %, bajo ese criterio de observación.",
          "explanation": "La interrupción representa 0,1 % del tiempo."
        },
        {
          "id": "b",
          "text": "90 %, porque hubo más de cuarenta minutos.",
          "explanation": "Debe calcularse la proporción sobre todo el período."
        },
        {
          "id": "c",
          "text": "100 %, si el resto de las solicitudes respondió.",
          "explanation": "Existió tiempo de interrupción según el criterio dado."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La interrupción representa 0,1 % del tiempo.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/high-availability-is-not-disaster-recovery.html"
    },
    {
      "id": "aws-availability-fault-tolerance-005",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Objetivos de continuidad",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un diseño tolera la pérdida de un proceso. ¿Qué afirmación necesita evidencia adicional?",
      "options": [
        {
          "id": "a",
          "text": "Que tolerará también la pérdida completa de una región.",
          "explanation": "La tolerancia debe vincularse al escenario comprobado."
        },
        {
          "id": "b",
          "text": "Que se evaluó el fallo de proceso indicado.",
          "explanation": "Ese escenario está dado."
        },
        {
          "id": "c",
          "text": "Que hace falta declarar el escenario de fallo.",
          "explanation": "Es parte del análisis, no una garantía atribuida."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La tolerancia debe vincularse al escenario comprobado.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/high-availability-is-not-disaster-recovery.html"
    },
    {
      "id": "aws-availability-fault-tolerance-006",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Dependencias y alternativas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Dos réplicas usan un almacén único que queda inaccesible. ¿Qué riesgo permanece?",
      "options": [
        {
          "id": "a",
          "text": "Ambas pueden perder las operaciones que necesitan ese almacén.",
          "explanation": "La dependencia común condiciona la operación."
        },
        {
          "id": "b",
          "text": "La réplica en otra AZ garantiza las consultas.",
          "explanation": "Su ubicación no resuelve la dependencia de datos."
        },
        {
          "id": "c",
          "text": "Hay necesariamente una réplica del almacén.",
          "explanation": "Distribuir cómputo no replica automáticamente los datos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La dependencia común condiciona la operación.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regional-services.html"
    },
    {
      "id": "aws-availability-fault-tolerance-007",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Dependencias y alternativas",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué describe un punto único de fallo?",
      "options": [
        {
          "id": "a",
          "text": "Una dependencia cuya pérdida impide la operación sin alternativa utilizable.",
          "explanation": "La definición depende del papel en la operación."
        },
        {
          "id": "b",
          "text": "Cualquier recurso que tenga un solo nombre.",
          "explanation": "Un nombre no demuestra la arquitectura interna."
        },
        {
          "id": "c",
          "text": "Todo componente compartido, aunque tenga alternativas verificadas.",
          "explanation": "Hay que evaluar las alternativas reales."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La definición depende del papel en la operación.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regional-services.html"
    },
    {
      "id": "aws-availability-fault-tolerance-008",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Dependencias y alternativas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Existe una réplica de reserva, pero no tiene permisos para acceder a los datos. ¿Qué falta?",
      "options": [
        {
          "id": "a",
          "text": "Una alternativa realmente utilizable para la operación.",
          "explanation": "Existir no equivale a poder asumir trabajo."
        },
        {
          "id": "b",
          "text": "Solo aumentar el número máximo.",
          "explanation": "El máximo no corrige los permisos de la alternativa."
        },
        {
          "id": "c",
          "text": "Declarar cumplida la continuidad.",
          "explanation": "La alternativa no puede completar la operación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Existir no equivale a poder asumir trabajo.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regional-services.html"
    },
    {
      "id": "aws-availability-fault-tolerance-009",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Dependencias y alternativas",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se retira automáticamente un destino sano por una comprobación equivocada. ¿Qué debe revisarse?",
      "options": [
        {
          "id": "a",
          "text": "La señal de salud y su relación con la función esperada.",
          "explanation": "La detección puede introducir un fallo si interpreta mal la salud."
        },
        {
          "id": "b",
          "text": "Aumentar reintentos sin límites.",
          "explanation": "Puede aumentar la carga sin corregir la detección."
        },
        {
          "id": "c",
          "text": "Eliminar toda observación.",
          "explanation": "La ausencia de observación tampoco valida el servicio."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La detección puede introducir un fallo si interpreta mal la salud.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regional-services.html"
    },
    {
      "id": "aws-availability-fault-tolerance-010",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Dependencias y alternativas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Tras perder una réplica, las restantes no soportan el trabajo. ¿Qué aspecto faltó evaluar?",
      "options": [
        {
          "id": "a",
          "text": "La capacidad útil restante durante el escenario de fallo.",
          "explanation": "Redundancia exige que la alternativa pueda atender la necesidad."
        },
        {
          "id": "b",
          "text": "Solo los nombres de las AZ.",
          "explanation": "La ubicación no mide capacidad suficiente."
        },
        {
          "id": "c",
          "text": "Solo la disponibilidad del panel administrativo.",
          "explanation": "El panel no verifica la operación del usuario."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Redundancia exige que la alternativa pueda atender la necesidad.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/regional-services.html"
    },
    {
      "id": "aws-availability-fault-tolerance-011",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Datos y recuperación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué diferencia una réplica de un respaldo recuperable anterior?",
      "options": [
        {
          "id": "a",
          "text": "La réplica puede acompañar cambios destructivos; el respaldo conserva un estado para restaurar.",
          "explanation": "Ambos mecanismos tienen propósitos y riesgos distintos."
        },
        {
          "id": "b",
          "text": "Toda réplica conserva automáticamente cualquier estado histórico.",
          "explanation": "No se puede atribuir esa propiedad sin un mecanismo documentado."
        },
        {
          "id": "c",
          "text": "Todo respaldo ya atiende solicitudes de producción.",
          "explanation": "Un respaldo normalmente requiere restauración y preparación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Ambos mecanismos tienen propósitos y riesgos distintos.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-012",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Datos y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un borrado se replica a la segunda ubicación. ¿Qué necesidad queda expuesta?",
      "options": [
        {
          "id": "a",
          "text": "Recuperar un estado válido anterior mediante un mecanismo apropiado.",
          "explanation": "Cambiar de copia no deshace un borrado ya replicado."
        },
        {
          "id": "b",
          "text": "Solo dirigir tráfico a la copia con el mismo borrado.",
          "explanation": "No recupera el estado anterior."
        },
        {
          "id": "c",
          "text": "Añadir CPU a los clientes.",
          "explanation": "El cómputo no restaura los datos borrados."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Cambiar de copia no deshace un borrado ya replicado.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-013",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Datos y recuperación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué expresa RTO?",
      "options": [
        {
          "id": "a",
          "text": "El tiempo de interrupción aceptable hasta restablecer el servicio.",
          "explanation": "Es un objetivo de recuperación temporal."
        },
        {
          "id": "b",
          "text": "La antigüedad máxima aceptable de los datos recuperados.",
          "explanation": "Ese aspecto corresponde al RPO."
        },
        {
          "id": "c",
          "text": "La disponibilidad real ya conseguida.",
          "explanation": "Un objetivo no es una medición de cumplimiento."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Es un objetivo de recuperación temporal.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-014",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Datos y recuperación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Se recupera en 20 minutos con una copia de hace una hora; los objetivos son RTO 30 y RPO 5 minutos. ¿Qué ocurre?",
      "options": [
        {
          "id": "a",
          "text": "Cumple RTO y no cumple RPO bajo los supuestos dados.",
          "explanation": "El servicio vuelve a tiempo, pero el punto recuperado es demasiado antiguo."
        },
        {
          "id": "b",
          "text": "Cumple ambos porque volvió antes de 30 minutos.",
          "explanation": "El tiempo de recuperación no corrige la antigüedad de la copia."
        },
        {
          "id": "c",
          "text": "Falla RTO y cumple RPO.",
          "explanation": "Invierte las dos propiedades."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El servicio vuelve a tiempo, pero el punto recuperado es demasiado antiguo.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-015",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Datos y recuperación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Hay archivos de respaldo, pero nunca se probó su restauración. ¿Qué afirmación queda sin demostrar?",
      "options": [
        {
          "id": "a",
          "text": "Que se puede recuperar el servicio y los datos dentro de los objetivos.",
          "explanation": "La recuperación incluye integridad, preparación, acceso y tiempo."
        },
        {
          "id": "b",
          "text": "Que existen archivos según el inventario.",
          "explanation": "La existencia está dada; su utilidad no."
        },
        {
          "id": "c",
          "text": "Que hay que definir objetivos.",
          "explanation": "Es una necesidad de planificación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La recuperación incluye integridad, preparación, acceso y tiempo.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-016",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Escenarios y comprobación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué caracteriza conceptualmente activo/pasivo?",
      "options": [
        {
          "id": "a",
          "text": "Una alternativa espera ser activada cuando corresponde.",
          "explanation": "Se debe evaluar detección, preparación y cambio."
        },
        {
          "id": "b",
          "text": "Todas las unidades sirven siempre tráfico.",
          "explanation": "Eso describe la idea de activo/activo."
        },
        {
          "id": "c",
          "text": "No se requiere comprobar acceso a datos.",
          "explanation": "La alternativa también necesita sus dependencias."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Se debe evaluar detección, preparación y cambio.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-017",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Escenarios y comprobación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debe registrarse en un ejercicio de recuperación?",
      "options": [
        {
          "id": "a",
          "text": "Escenario, operaciones afectadas, tiempos, datos y resultado.",
          "explanation": "La evidencia debe permitir comparar objetivos y comportamiento."
        },
        {
          "id": "b",
          "text": "Solo que terminó el procedimiento.",
          "explanation": "Terminar no demuestra tiempo ni integridad."
        },
        {
          "id": "c",
          "text": "Solo la cantidad de recursos creados.",
          "explanation": "La cantidad no demuestra recuperación del servicio."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La evidencia debe permitir comparar objetivos y comportamiento.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-018",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Escenarios y comprobación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Dos AZ superan un ejercicio de fallo zonal. ¿Qué debe hacerse antes de afirmar resistencia a un desastre regional?",
      "options": [
        {
          "id": "a",
          "text": "Evaluar ese escenario y sus mecanismos específicos.",
          "explanation": "Los escenarios tienen alcance diferente."
        },
        {
          "id": "b",
          "text": "Reutilizar el resultado como garantía regional.",
          "explanation": "No se comprobó ese alcance."
        },
        {
          "id": "c",
          "text": "Suponer que duplicar el porcentaje demuestra recuperación.",
          "explanation": "Un porcentaje no describe el mecanismo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Los escenarios tienen alcance diferente.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-019",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Escenarios y comprobación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Durante un incidente los reintentos ilimitados aumentan la carga. ¿Qué revisión corresponde?",
      "options": [
        {
          "id": "a",
          "text": "Límites, espera y compatibilidad del reintento con la operación.",
          "explanation": "El mecanismo de recuperación no debe agravar la saturación."
        },
        {
          "id": "b",
          "text": "Reintentar más rápido siempre.",
          "explanation": "Puede elevar aún más la presión."
        },
        {
          "id": "c",
          "text": "Medir solo solicitudes enviadas como éxito.",
          "explanation": "Enviar una solicitud no demuestra completarla."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El mecanismo de recuperación no debe agravar la saturación.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    },
    {
      "id": "aws-availability-fault-tolerance-020",
      "revision": 1,
      "contentId": "aws-availability-fault-tolerance",
      "topic": "Escenarios y comprobación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El procedimiento cumple sus objetivos una vez. ¿Qué conclusión es proporcionada?",
      "options": [
        {
          "id": "a",
          "text": "Aporta evidencia para ese escenario y condiciones; cambios posteriores requieren revisión.",
          "explanation": "La evidencia tiene alcance y puede quedar desactualizada."
        },
        {
          "id": "b",
          "text": "Garantiza cualquier fallo futuro.",
          "explanation": "Un caso no demuestra todos los escenarios."
        },
        {
          "id": "c",
          "text": "Permite ignorar cambios de dependencias.",
          "explanation": "Los cambios pueden invalidar supuestos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La evidencia tiene alcance y puede quedar desactualizada.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-of-on-premises-applications-to-aws/recovery-objectives.html"
    }
  ],
  "presets": [
    {
      "id": "bloque-1",
      "title": "1 · Objetivos de continuidad",
      "description": "Casos y conceptos de objetivos de continuidad.",
      "questionIds": [
        "aws-availability-fault-tolerance-001",
        "aws-availability-fault-tolerance-002",
        "aws-availability-fault-tolerance-003",
        "aws-availability-fault-tolerance-004",
        "aws-availability-fault-tolerance-005"
      ]
    },
    {
      "id": "bloque-2",
      "title": "2 · Dependencias y alternativas",
      "description": "Casos y conceptos de dependencias y alternativas.",
      "questionIds": [
        "aws-availability-fault-tolerance-006",
        "aws-availability-fault-tolerance-007",
        "aws-availability-fault-tolerance-008",
        "aws-availability-fault-tolerance-009",
        "aws-availability-fault-tolerance-010"
      ]
    },
    {
      "id": "bloque-3",
      "title": "3 · Datos y recuperación",
      "description": "Casos y conceptos de datos y recuperación.",
      "questionIds": [
        "aws-availability-fault-tolerance-011",
        "aws-availability-fault-tolerance-012",
        "aws-availability-fault-tolerance-013",
        "aws-availability-fault-tolerance-014",
        "aws-availability-fault-tolerance-015"
      ]
    },
    {
      "id": "bloque-4",
      "title": "4 · Escenarios y comprobación",
      "description": "Casos y conceptos de escenarios y comprobación.",
      "questionIds": [
        "aws-availability-fault-tolerance-016",
        "aws-availability-fault-tolerance-017",
        "aws-availability-fault-tolerance-018",
        "aws-availability-fault-tolerance-019",
        "aws-availability-fault-tolerance-020"
      ]
    },
    {
      "id": "integrador",
      "title": "5 · Repaso integrador",
      "description": "Reutiliza preguntas de los cuatro bloques para conectar decisiones.",
      "questionIds": [
        "aws-availability-fault-tolerance-001",
        "aws-availability-fault-tolerance-004",
        "aws-availability-fault-tolerance-007",
        "aws-availability-fault-tolerance-010",
        "aws-availability-fault-tolerance-013",
        "aws-availability-fault-tolerance-016",
        "aws-availability-fault-tolerance-019"
      ]
    }
  ]
};
