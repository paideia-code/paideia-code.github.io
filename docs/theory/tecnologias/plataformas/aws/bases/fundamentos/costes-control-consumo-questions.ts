import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsCostsBank: QuestionBank = {
  "id": "aws-cost-management",
  "revision": 1,
  "contentId": "aws-cost-management",
  "title": "Costes y control del consumo",
  "questions": [
    {
      "id": "aws-cost-management-001",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Unidades y estimación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué permite interpretar el consumo facturado?",
      "options": [
        {
          "id": "a",
          "text": "Identificar servicio, unidad, cantidad y condiciones.",
          "explanation": "Cada componente puede tener unidades diferentes."
        },
        {
          "id": "b",
          "text": "Solo contar visitas.",
          "explanation": "No representan todo el consumo."
        },
        {
          "id": "c",
          "text": "Solo contar líneas de código.",
          "explanation": "No es una unidad general de facturación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Cada componente puede tener unidades diferentes.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-002",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Unidades y estimación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una estimación considera cómputo y omite discos y red. ¿Qué debe hacerse?",
      "options": [
        {
          "id": "a",
          "text": "Ampliar el inventario y registrar los componentes excluidos.",
          "explanation": "La suma parcial no es el coste total."
        },
        {
          "id": "b",
          "text": "Presentarla como factura garantizada.",
          "explanation": "Los componentes omitidos pueden generar cargos."
        },
        {
          "id": "c",
          "text": "Suponer que el precio del cómputo incluye todo.",
          "explanation": "Hay que revisar las condiciones de cada servicio."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La suma parcial no es el coste total.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-003",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Unidades y estimación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Tarifa hipotética 0,10 por hora, dos recursos durante 100 horas: ¿qué suma ese componente?",
      "options": [
        {
          "id": "a",
          "text": "20 unidades monetarias, sin representar otros cargos.",
          "explanation": "0,10 por 2 por 100 es 20."
        },
        {
          "id": "b",
          "text": "10 como coste total de cualquier aplicación.",
          "explanation": "Omite un recurso y atribuye un alcance injustificado."
        },
        {
          "id": "c",
          "text": "200 como tarifa real de AWS.",
          "explanation": "La tarifa es hipotética y el cálculo no produce ese valor."
        }
      ],
      "correctIds": ["a"],
      "explanation": "0,10 por 2 por 100 es 20.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-004",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Unidades y estimación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "El tiempo real duplica el supuesto y lo demás permanece igual. ¿Qué pasa con el componente lineal de tiempo del ejercicio?",
      "options": [
        {
          "id": "a",
          "text": "Se duplica bajo esos supuestos.",
          "explanation": "Se modifica la cantidad facturada del componente."
        },
        {
          "id": "b",
          "text": "Se mantiene porque la estimación ya estaba hecha.",
          "explanation": "Estimar no fija la factura."
        },
        {
          "id": "c",
          "text": "Desaparecen los cargos de almacenamiento.",
          "explanation": "Ese componente no se ha modificado."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Se modifica la cantidad facturada del componente.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-005",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Unidades y estimación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Dos regiones ofrecen precios distintos y recorridos de datos distintos. ¿Qué comparar?",
      "options": [
        {
          "id": "a",
          "text": "El coste de la solución completa bajo sus supuestos y requisitos.",
          "explanation": "Comparar una tarifa aislada puede omitir otros componentes."
        },
        {
          "id": "b",
          "text": "Solo la menor tarifa de cómputo.",
          "explanation": "Puede ignorar transferencia y requisitos."
        },
        {
          "id": "c",
          "text": "Solo el nombre de la región.",
          "explanation": "No describe el consumo de la arquitectura."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Comparar una tarifa aislada puede omitir otros componentes.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-006",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Unidades y estimación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué comparar escenarios habitual y alto?",
      "options": [
        {
          "id": "a",
          "text": "Para identificar sensibilidad e incertidumbre del consumo.",
          "explanation": "La demanda y la cantidad utilizada pueden variar."
        },
        {
          "id": "b",
          "text": "Para garantizar un precio fijo.",
          "explanation": "Los escenarios no crean un contrato de precio fijo."
        },
        {
          "id": "c",
          "text": "Para omitir la medición posterior.",
          "explanation": "La estimación debe contrastarse con uso real."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La demanda y la cantidad utilizada pueden variar.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-007",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Seguimiento y presupuestos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué aporta un presupuesto?",
      "options": [
        {
          "id": "a",
          "text": "Un objetivo de coste o uso y mecanismos de seguimiento según su configuración.",
          "explanation": "Debe revisarse su alcance y sus alertas."
        },
        {
          "id": "b",
          "text": "Un corte inmediato garantizado de toda la cuenta.",
          "explanation": "No constituye ese límite universal."
        },
        {
          "id": "c",
          "text": "Una cuota técnica idéntica para todos los servicios.",
          "explanation": "Tiene otra unidad y propósito."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Debe revisarse su alcance y sus alertas.",
      "source": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    },
    {
      "id": "aws-cost-management-008",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Seguimiento y presupuestos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una alerta llega después de superar su umbral. ¿Qué propiedad debe considerarse?",
      "options": [
        {
          "id": "a",
          "text": "El retraso de datos y notificaciones.",
          "explanation": "Puede acumularse consumo antes de recibir el aviso."
        },
        {
          "id": "b",
          "text": "Que el umbral nunca existió.",
          "explanation": "El retraso no demuestra ausencia de configuración."
        },
        {
          "id": "c",
          "text": "Que no pueden existir cargos posteriores.",
          "explanation": "El consumo puede continuar."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Puede acumularse consumo antes de recibir el aviso.",
      "source": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    },
    {
      "id": "aws-cost-management-009",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Seguimiento y presupuestos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una acción bloquea nuevo aprovisionamiento. ¿Qué debe comprobarse sobre lo existente?",
      "options": [
        {
          "id": "a",
          "text": "Si sigue activo y qué cargos puede mantener.",
          "explanation": "Bloquear nuevas creaciones no retira automáticamente todo recurso."
        },
        {
          "id": "b",
          "text": "Que todo recurso existente desapareció.",
          "explanation": "No se deduce del bloqueo."
        },
        {
          "id": "c",
          "text": "Que el presupuesto se convierte en una cuota de almacenamiento.",
          "explanation": "No cambia por ello su naturaleza."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Bloquear nuevas creaciones no retira automáticamente todo recurso.",
      "source": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    },
    {
      "id": "aws-cost-management-010",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Seguimiento y presupuestos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La estimación y el informe de costes difieren. ¿Qué revisión es útil?",
      "options": [
        {
          "id": "a",
          "text": "Período, región, servicio, unidades y recursos omitidos.",
          "explanation": "Hay que alinear el alcance de la comparación."
        },
        {
          "id": "b",
          "text": "Cambiar de soporte sin revisar el consumo.",
          "explanation": "No identifica la diferencia."
        },
        {
          "id": "c",
          "text": "Dar por falsa toda la telemetría.",
          "explanation": "No hay evidencia para esa conclusión."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Hay que alinear el alcance de la comparación.",
      "source": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    },
    {
      "id": "aws-cost-management-011",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Seguimiento y presupuestos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué debe comprobarse para que una alerta llegue a su responsable?",
      "options": [
        {
          "id": "a",
          "text": "Destinatarios, permisos y configuración del mecanismo.",
          "explanation": "Crear el presupuesto no prueba la entrega del aviso."
        },
        {
          "id": "b",
          "text": "Solo el nombre del proyecto.",
          "explanation": "No valida destinatarios ni permisos."
        },
        {
          "id": "c",
          "text": "Solo el máximo de instancias.",
          "explanation": "No configura la entrega de notificaciones."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Crear el presupuesto no prueba la entrega del aviso.",
      "source": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    },
    {
      "id": "aws-cost-management-012",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Seguimiento y presupuestos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué diferencia hay entre métrica operativa y unidad facturada?",
      "options": [
        {
          "id": "a",
          "text": "Pueden medir cosas distintas y deben relacionarse mediante el servicio utilizado.",
          "explanation": "Actividad y facturación no siempre comparten unidad o momento."
        },
        {
          "id": "b",
          "text": "Toda métrica es una tarifa.",
          "explanation": "La observación operativa no es un precio."
        },
        {
          "id": "c",
          "text": "Una CPU baja demuestra factura cero.",
          "explanation": "Puede haber capacidad y otros recursos facturados."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Actividad y facturación no siempre comparten unidad o momento.",
      "source": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    },
    {
      "id": "aws-cost-management-013",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Cuotas y compromisos",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué limita una cuota de servicio?",
      "options": [
        {
          "id": "a",
          "text": "Recursos u operaciones dentro de su ámbito definido.",
          "explanation": "El ámbito y la unidad dependen de la cuota."
        },
        {
          "id": "b",
          "text": "El importe total garantizado de la factura.",
          "explanation": "Una cuota técnica no es un presupuesto."
        },
        {
          "id": "c",
          "text": "El nivel de comprensión del usuario.",
          "explanation": "No es una medida de aprendizaje."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El ámbito y la unidad dependen de la cuota.",
      "source": "https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html"
    },
    {
      "id": "aws-cost-management-014",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Cuotas y compromisos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una cuota permite solicitar un aumento. ¿Qué puede asumirse?",
      "options": [
        {
          "id": "a",
          "text": "Que hay un procedimiento de solicitud, no una aprobación inmediata garantizada.",
          "explanation": "La solicitud necesita revisión según la cuota."
        },
        {
          "id": "b",
          "text": "Que será ilimitada al enviarla.",
          "explanation": "No existe esa garantía."
        },
        {
          "id": "c",
          "text": "Que el consumo autorizado será gratuito.",
          "explanation": "Permiso de capacidad y precio son distintos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La solicitud necesita revisión según la cuota.",
      "source": "https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html"
    },
    {
      "id": "aws-cost-management-015",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Cuotas y compromisos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Máximo de un ASG, cuota y presupuesto: ¿cómo se relacionan?",
      "options": [
        {
          "id": "a",
          "text": "Son controles con unidades y alcances que deben examinarse por separado.",
          "explanation": "No son límites equivalentes."
        },
        {
          "id": "b",
          "text": "El máximo del ASG cubre todo gasto de la cuenta.",
          "explanation": "No abarca todos los recursos y servicios."
        },
        {
          "id": "c",
          "text": "Un presupuesto incrementa automáticamente cualquier cuota.",
          "explanation": "No se deduce de configurar un objetivo económico."
        }
      ],
      "correctIds": ["a"],
      "explanation": "No son límites equivalentes.",
      "source": "https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html"
    },
    {
      "id": "aws-cost-management-016",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Cuotas y compromisos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se propone un descuento con compromiso para carga muy incierta. ¿Qué evaluar?",
      "options": [
        {
          "id": "a",
          "text": "Uso elegible estable y obligación adquirida, además del descuento.",
          "explanation": "Un menor precio unitario no garantiza aprovechar el compromiso."
        },
        {
          "id": "b",
          "text": "Solo el porcentaje de descuento.",
          "explanation": "Puede ignorar consumo no utilizado o no elegible."
        },
        {
          "id": "c",
          "text": "Suponer que todo compromiso puede interrumpirse sin condiciones.",
          "explanation": "Hay que revisar las condiciones aplicables."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Un menor precio unitario no garantiza aprovechar el compromiso.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-017",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Cuotas y compromisos",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué importa al elegir capacidad interrumpible?",
      "options": [
        {
          "id": "a",
          "text": "Que el trabajo y su recuperación toleren interrupciones.",
          "explanation": "El precio no es el único requisito."
        },
        {
          "id": "b",
          "text": "Que nunca pueda interrumpirse.",
          "explanation": "Eso contradice la modalidad."
        },
        {
          "id": "c",
          "text": "Que reemplaza todos los mecanismos de respaldo.",
          "explanation": "La modalidad de cómputo no protege por sí sola los datos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El precio no es el único requisito.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-018",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Cuotas y compromisos",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué debe comprobarse sobre una modalidad de precio?",
      "options": [
        {
          "id": "a",
          "text": "Elegibilidad, unidad, región y condiciones del producto concreto.",
          "explanation": "Las modalidades no son universales ni intercambiables."
        },
        {
          "id": "b",
          "text": "Que aplica igual a cualquier servicio.",
          "explanation": "Debe revisarse la cobertura."
        },
        {
          "id": "c",
          "text": "Que su nombre sustituye la estimación.",
          "explanation": "El nombre no determina cantidades consumidas."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Las modalidades no son universales ni intercambiables.",
      "source": "https://aws.amazon.com/pricing/"
    },
    {
      "id": "aws-cost-management-019",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Retirada y revisión",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "No hay visitas pero quedan cómputo y discos aprovisionados. ¿Qué revisar?",
      "options": [
        {
          "id": "a",
          "text": "Estado y unidad de consumo de cada componente.",
          "explanation": "El tráfico no representa todo el consumo."
        },
        {
          "id": "b",
          "text": "Solo el contador HTTP.",
          "explanation": "Omite recursos permanentes."
        },
        {
          "id": "c",
          "text": "Solo si el navegador sigue abierto.",
          "explanation": "El navegador no define el estado del recurso."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El tráfico no representa todo el consumo.",
      "source": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-get-answers.html"
    },
    {
      "id": "aws-cost-management-020",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Retirada y revisión",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Se detuvo el cómputo. ¿Qué falta para evaluar recursos residuales?",
      "options": [
        {
          "id": "a",
          "text": "Inventariar discos, copias, red y otros componentes asociados.",
          "explanation": "Detener un componente no retira todos los demás."
        },
        {
          "id": "b",
          "text": "Declarar toda la factura finalizada.",
          "explanation": "Pueden persistir otros cargos."
        },
        {
          "id": "c",
          "text": "Eliminar cualquier dato sin revisar dependencias.",
          "explanation": "La retirada debe conservar la información necesaria."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Detener un componente no retira todos los demás.",
      "source": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-get-answers.html"
    },
    {
      "id": "aws-cost-management-021",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Retirada y revisión",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una optimización propone borrar la única copia necesaria para recuperar datos. ¿Qué evaluar?",
      "options": [
        {
          "id": "a",
          "text": "El requisito de conservación y recuperación antes de eliminarla.",
          "explanation": "Reducir cargos no justifica perder datos necesarios."
        },
        {
          "id": "b",
          "text": "Solo la reducción inmediata de almacenamiento.",
          "explanation": "Omite el requisito de recuperación."
        },
        {
          "id": "c",
          "text": "Suponer que una alerta reconstruirá la copia.",
          "explanation": "Un aviso no restaura datos eliminados."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Reducir cargos no justifica perder datos necesarios.",
      "source": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-get-answers.html"
    },
    {
      "id": "aws-cost-management-022",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Retirada y revisión",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Para investigar un cargo inesperado, ¿qué evidencia conviene reunir?",
      "options": [
        {
          "id": "a",
          "text": "Cuenta, servicio, región, período y uso, sin secretos.",
          "explanation": "Permite describir el problema y su alcance."
        },
        {
          "id": "b",
          "text": "Claves privadas en el texto del caso.",
          "explanation": "Los secretos no son evidencia que deba compartirse."
        },
        {
          "id": "c",
          "text": "Solo el total sin período.",
          "explanation": "Dificulta identificar qué uso originó el cargo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Permite describir el problema y su alcance.",
      "source": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-get-answers.html"
    },
    {
      "id": "aws-cost-management-023",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Retirada y revisión",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Qué distingue una consulta de facturación de una técnica?",
      "options": [
        {
          "id": "a",
          "text": "El problema y los canales o condiciones de ayuda aplicables.",
          "explanation": "Hay que clasificar el caso y revisar el soporte vigente."
        },
        {
          "id": "b",
          "text": "Que cualquier plan garantiza los mismos canales técnicos.",
          "explanation": "Las condiciones pueden variar."
        },
        {
          "id": "c",
          "text": "Que soporte reemplaza la gestión de recursos.",
          "explanation": "Pedir ayuda no retira ni configura automáticamente la aplicación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Hay que clasificar el caso y revisar el soporte vigente.",
      "source": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-get-answers.html"
    },
    {
      "id": "aws-cost-management-024",
      "revision": 1,
      "contentId": "aws-cost-management",
      "topic": "Retirada y revisión",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Tras retirar recursos, ¿qué completa la verificación?",
      "options": [
        {
          "id": "a",
          "text": "Revisar residuos y la evolución posterior de cargos considerando retrasos.",
          "explanation": "La retirada y la información de facturación tienen tiempos y alcances distintos."
        },
        {
          "id": "b",
          "text": "Solo cerrar la herramienta.",
          "explanation": "Cerrar la interfaz no verifica el estado."
        },
        {
          "id": "c",
          "text": "Esperar que un presupuesto pruebe que todos los recursos se borraron.",
          "explanation": "El presupuesto no es un inventario de retirada."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La retirada y la información de facturación tienen tiempos y alcances distintos.",
      "source": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-get-answers.html"
    }
  ],
  "presets": [
    {
      "id": "bloque-1",
      "title": "1 · Unidades y estimación",
      "description": "Casos y conceptos de unidades y estimación.",
      "questionIds": [
        "aws-cost-management-001",
        "aws-cost-management-002",
        "aws-cost-management-003",
        "aws-cost-management-004",
        "aws-cost-management-005",
        "aws-cost-management-006"
      ]
    },
    {
      "id": "bloque-2",
      "title": "2 · Seguimiento y presupuestos",
      "description": "Casos y conceptos de seguimiento y presupuestos.",
      "questionIds": [
        "aws-cost-management-007",
        "aws-cost-management-008",
        "aws-cost-management-009",
        "aws-cost-management-010",
        "aws-cost-management-011",
        "aws-cost-management-012"
      ]
    },
    {
      "id": "bloque-3",
      "title": "3 · Cuotas y compromisos",
      "description": "Casos y conceptos de cuotas y compromisos.",
      "questionIds": [
        "aws-cost-management-013",
        "aws-cost-management-014",
        "aws-cost-management-015",
        "aws-cost-management-016",
        "aws-cost-management-017",
        "aws-cost-management-018"
      ]
    },
    {
      "id": "bloque-4",
      "title": "4 · Retirada y revisión",
      "description": "Casos y conceptos de retirada y revisión.",
      "questionIds": [
        "aws-cost-management-019",
        "aws-cost-management-020",
        "aws-cost-management-021",
        "aws-cost-management-022",
        "aws-cost-management-023",
        "aws-cost-management-024"
      ]
    },
    {
      "id": "integrador",
      "title": "5 · Repaso integrador",
      "description": "Reutiliza preguntas de los cuatro bloques para conectar decisiones.",
      "questionIds": [
        "aws-cost-management-001",
        "aws-cost-management-004",
        "aws-cost-management-007",
        "aws-cost-management-010",
        "aws-cost-management-013",
        "aws-cost-management-016",
        "aws-cost-management-019",
        "aws-cost-management-022"
      ]
    }
  ]
};
