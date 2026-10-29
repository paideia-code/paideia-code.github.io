import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsScalingBank: QuestionBank = {
  "id": "aws-scalability-elasticity",
  "revision": 1,
  "contentId": "aws-scalability-elasticity",
  "title": "Escalabilidad y elasticidad",
  "questions": [
    {
      "id": "aws-scaling-001",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Capacidad y elasticidad",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué propiedad se evalúa al comprobar que un sistema afronta más trabajo tras ajustar sus recursos y diseño?",
      "options": [
        {
          "id": "a",
          "text": "Su escalabilidad respecto de ese trabajo y de los objetivos de servicio.",
          "explanation": "La escalabilidad relaciona crecimiento del trabajo, capacidad y objetivos; debe comprobarse para la carga analizada."
        },
        {
          "id": "b",
          "text": "Su disponibilidad ante cualquier fallo regional.",
          "explanation": "El resultado bajo carga no demuestra tolerancia a todos los fallos."
        },
        {
          "id": "c",
          "text": "La eliminación de cualquier límite de capacidad.",
          "explanation": "Un sistema escalable sigue teniendo límites y dependencias."
        },
        {
          "id": "d",
          "text": "La reducción automática después de todo pico.",
          "explanation": "La capacidad de crecer no demuestra por sí sola ese comportamiento de ajuste."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La escalabilidad relaciona crecimiento del trabajo, capacidad y objetivos; debe comprobarse para la carga analizada.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-002",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Capacidad y elasticidad",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué comportamiento caracteriza la elasticidad?",
      "options": [
        {
          "id": "a",
          "text": "Ajustar recursos a necesidades variables, incorporándolos y liberándolos cuando corresponde.",
          "explanation": "La elasticidad incluye ambos sentidos del ajuste; en cloud se busca automatizarlo."
        },
        {
          "id": "b",
          "text": "Mantener siempre el máximo de recursos configurado.",
          "explanation": "Mantener el máximo no sigue necesariamente las necesidades de cada momento."
        },
        {
          "id": "c",
          "text": "Aumentar recursos una vez y conservarlos indefinidamente.",
          "explanation": "Ese cambio aislado no demuestra ajuste cuando baja la demanda."
        },
        {
          "id": "d",
          "text": "Cambiar de región en cada solicitud.",
          "explanation": "La elasticidad no se define por trasladar cada solicitud a otra región."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La elasticidad incluye ambos sentidos del ajuste; en cloud se busca automatizarlo.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/reactive-systems-on-aws/elastic.html"
    },
    {
      "id": "aws-scaling-003",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Capacidad y elasticidad",
      "level": "intermedio",
      "skill": "análisis",
      "prompt": "Una aplicación admite más carga al pasar de dos réplicas a seis. Después del pico mantiene seis. ¿Qué evidencia aporta el caso?",
      "options": [
        {
          "id": "a",
          "text": "Un aumento de capacidad que permitió más trabajo, sin demostrar todavía ajuste bidireccional a la demanda.",
          "explanation": "El caso muestra crecimiento, pero no indica una reducción cuando la necesidad baja."
        },
        {
          "id": "b",
          "text": "Elasticidad completa, porque cualquier incremento prueba también una reducción.",
          "explanation": "Una dirección del cambio no demuestra la otra."
        },
        {
          "id": "c",
          "text": "Ausencia de escalabilidad, porque quedan recursos después del pico.",
          "explanation": "El resultado del aumento aporta evidencia de crecimiento; lo pendiente es el ajuste posterior."
        },
        {
          "id": "d",
          "text": "Escalado vertical, porque seis es mayor que dos.",
          "explanation": "El aumento del número de réplicas corresponde al sentido horizontal."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El caso muestra crecimiento, pero no indica una reducción cuando la necesidad baja.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/reactive-systems-on-aws/elastic.html"
    },
    {
      "id": "aws-scaling-004",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Capacidad y elasticidad",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Aumentan las solicitudes entrantes, pero la latencia y los errores siguen cumpliendo el objetivo con la capacidad actual. ¿Qué conviene hacer?",
      "options": [
        {
          "id": "a",
          "text": "Evaluar utilización, margen y tendencia antes de atribuir una necesidad concreta de capacidad adicional.",
          "explanation": "La demanda es una señal relevante, pero no identifica por sí sola saturación ni el ajuste necesario."
        },
        {
          "id": "b",
          "text": "Duplicar recursos sin revisar métricas porque toda subida exige ese factor.",
          "explanation": "El factor y la necesidad no se deducen únicamente del aumento de solicitudes."
        },
        {
          "id": "c",
          "text": "Dejar de medir porque cumplir el objetivo hoy garantiza cualquier pico posterior.",
          "explanation": "La observación actual no elimina la necesidad de revisar margen y evolución."
        },
        {
          "id": "d",
          "text": "Reducir a una réplica porque todavía no hay errores.",
          "explanation": "La ausencia de errores no determina por sí sola una reducción segura."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La demanda es una señal relevante, pero no identifica por sí sola saturación ni el ajuste necesario.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-005",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Capacidad y elasticidad",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "La capacidad aumenta, pero una dependencia empieza a limitar el trabajo completado. ¿Cómo debe evaluarse la escalabilidad?",
      "options": [
        {
          "id": "a",
          "text": "Sobre el sistema y la operación completa, localizando el límite que sigue impidiendo el resultado.",
          "explanation": "Más recursos en una capa no prueban un aumento útil de capacidad del sistema completo."
        },
        {
          "id": "b",
          "text": "Solo contando los recursos recién creados.",
          "explanation": "La cantidad no describe el trabajo que se consigue completar."
        },
        {
          "id": "c",
          "text": "Ignorando la dependencia porque está fuera de la capa que se modificó.",
          "explanation": "La operación completa sigue dependiendo de ella."
        },
        {
          "id": "d",
          "text": "Suponiendo que toda dependencia crece al mismo ritmo que la aplicación.",
          "explanation": "La distribución y los límites de cada componente deben comprobarse."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Más recursos en una capa no prueban un aumento útil de capacidad del sistema completo.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-006",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Direcciones de escalado",
      "level": "básico",
      "skill": "aplicación",
      "prompt": "Se sustituye una unidad de ejecución por otra con más CPU y memoria, manteniendo una sola unidad. ¿Qué ajuste se describe?",
      "options": [
        {
          "id": "a",
          "text": "Escalado vertical hacia arriba, scale up.",
          "explanation": "El cambio aumenta recursos por unidad, no el número de unidades."
        },
        {
          "id": "b",
          "text": "Escalado horizontal hacia fuera, scale out.",
          "explanation": "Scale out aumenta la cantidad de unidades."
        },
        {
          "id": "c",
          "text": "Escalado horizontal hacia dentro, scale in.",
          "explanation": "Scale in reduce la cantidad de unidades."
        },
        {
          "id": "d",
          "text": "Escalado vertical hacia abajo, scale down.",
          "explanation": "El caso aumenta la capacidad por unidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El cambio aumenta recursos por unidad, no el número de unidades.",
      "source": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/change-instance-type-of-ebs-backed-instance.html"
    },
    {
      "id": "aws-scaling-007",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Direcciones de escalado",
      "level": "básico",
      "skill": "aplicación",
      "prompt": "Una aplicación pasa de tres réplicas equivalentes a siete. ¿Qué dirección tiene el cambio?",
      "options": [
        {
          "id": "a",
          "text": "Horizontal hacia fuera, scale out.",
          "explanation": "Aumentar el número de réplicas es un ajuste horizontal."
        },
        {
          "id": "b",
          "text": "Vertical hacia arriba, porque ahora hay más capacidad total.",
          "explanation": "El criterio es qué se modifica: cantidad de unidades o tamaño por unidad."
        },
        {
          "id": "c",
          "text": "Horizontal hacia dentro, scale in.",
          "explanation": "Scale in describe una reducción de réplicas."
        },
        {
          "id": "d",
          "text": "Vertical hacia abajo, porque las réplicas son equivalentes.",
          "explanation": "La equivalencia no cambia que se está aumentando la cantidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Aumentar el número de réplicas es un ajuste horizontal.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-008",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Direcciones de escalado",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Se conserva el número de unidades y se selecciona para cada una una configuración de menor capacidad. ¿Qué ajuste se describe?",
      "options": [
        {
          "id": "a",
          "text": "Vertical hacia abajo, scale down.",
          "explanation": "Se reduce el tamaño por unidad; la cantidad permanece igual."
        },
        {
          "id": "b",
          "text": "Horizontal hacia dentro, porque se pretende reducir consumo.",
          "explanation": "El propósito no define la dirección; no se retiraron unidades."
        },
        {
          "id": "c",
          "text": "Horizontal hacia fuera, porque se mantiene la cantidad.",
          "explanation": "Mantener cantidad no describe añadir réplicas."
        },
        {
          "id": "d",
          "text": "Vertical hacia arriba, porque cambia la configuración.",
          "explanation": "El cambio es hacia una configuración de menor capacidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Se reduce el tamaño por unidad; la cantidad permanece igual.",
      "source": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/change-instance-type-of-ebs-backed-instance.html"
    },
    {
      "id": "aws-scaling-009",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Direcciones de escalado",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Tras un descenso de demanda se retiran réplicas, conservando la configuración de las restantes. ¿Qué ajuste se describe?",
      "options": [
        {
          "id": "a",
          "text": "Horizontal hacia dentro, scale in.",
          "explanation": "La reducción de cantidad de réplicas es horizontal, aunque no cambie su tamaño."
        },
        {
          "id": "b",
          "text": "Vertical hacia abajo, porque disminuye la capacidad total.",
          "explanation": "El ajuste vertical cambia recursos por unidad."
        },
        {
          "id": "c",
          "text": "Vertical hacia arriba, porque cada réplica restante recibe más trabajo.",
          "explanation": "Recibir otra proporción de trabajo no redimensiona la réplica."
        },
        {
          "id": "d",
          "text": "Horizontal hacia fuera, porque se conserva la configuración.",
          "explanation": "Scale out aumenta la cantidad de unidades."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La reducción de cantidad de réplicas es horizontal, aunque no cambie su tamaño.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html"
    },
    {
      "id": "aws-scaling-010",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Direcciones de escalado",
      "level": "intermedio",
      "skill": "análisis",
      "prompt": "Un operador añade manualmente dos réplicas. ¿Qué clasificación respeta la información disponible?",
      "options": [
        {
          "id": "a",
          "text": "Escalado horizontal manual; no se ha demostrado un mecanismo continuo de ajuste a la demanda.",
          "explanation": "La dirección y la forma de decidir son propiedades distintas."
        },
        {
          "id": "b",
          "text": "Escalado vertical, porque no existe automatización.",
          "explanation": "La automatización no determina si se cambia tamaño o cantidad."
        },
        {
          "id": "c",
          "text": "Ajuste automático, porque el proveedor aprovisiona las réplicas.",
          "explanation": "El enunciado indica que el operador decide manualmente el cambio."
        },
        {
          "id": "d",
          "text": "Elasticidad completa, porque añadir réplicas prueba su retirada futura.",
          "explanation": "No se describe qué sucederá cuando disminuya la necesidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La dirección y la forma de decidir son propiedades distintas.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-011",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Direcciones de escalado",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se propone cambiar el tipo de una instancia EC2 existente respaldada por EBS. ¿Qué revisión es necesaria según el procedimiento documentado?",
      "options": [
        {
          "id": "a",
          "text": "Compatibilidad, detención requerida y efecto de la interrupción durante el cambio y el arranque.",
          "explanation": "Ese procedimiento exige detener la instancia; hay que planificar su efecto y comprobar compatibilidad."
        },
        {
          "id": "b",
          "text": "Dar por hecho que todo cambio vertical se realiza sin interrupción.",
          "explanation": "El comportamiento depende de la tecnología y el procedimiento."
        },
        {
          "id": "c",
          "text": "Suponer que cambiar de tipo crea automáticamente varias réplicas.",
          "explanation": "Cambiar tamaño y aumentar cantidad son decisiones distintas."
        },
        {
          "id": "d",
          "text": "Comprobar solo el número de réplicas, sin revisar la configuración del nuevo tipo.",
          "explanation": "El caso es vertical y la compatibilidad del tipo importa."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Ese procedimiento exige detener la instancia; hay que planificar su efecto y comprobar compatibilidad.",
      "source": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/change-instance-type-of-ebs-backed-instance.html"
    },
    {
      "id": "aws-scaling-012",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Métricas y diagnóstico",
      "level": "intermedio",
      "skill": "análisis",
      "prompt": "Una API presenta CPU baja y espera consultas a un almacén saturado. ¿Qué evaluación debe preceder a añadir réplicas de la API?",
      "options": [
        {
          "id": "a",
          "text": "Comprobar el límite de la dependencia y si más concurrencia ayudará o elevará la presión sobre ella.",
          "explanation": "El componente que espera no tiene por qué ser el componente limitante."
        },
        {
          "id": "b",
          "text": "Suponer que CPU baja demuestra que toda la operación tiene capacidad sobrante.",
          "explanation": "La dependencia puede estar saturada mientras la API espera."
        },
        {
          "id": "c",
          "text": "Usar únicamente el número de réplicas como prueba de rendimiento.",
          "explanation": "La cantidad no describe las esperas ni el resultado."
        },
        {
          "id": "d",
          "text": "Aumentar réplicas indefinidamente hasta que deje de haber una dependencia.",
          "explanation": "Añadir capacidad en una capa no elimina sus dependencias."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El componente que espera no tiene por qué ser el componente limitante.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-013",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Métricas y diagnóstico",
      "level": "básico",
      "skill": "concepto",
      "prompt": "El p95 de latencia de un período es 200 ms. ¿Qué interpretación es adecuada?",
      "options": [
        {
          "id": "a",
          "text": "Aproximadamente el 95 % de las observaciones se sitúa en ese valor o por debajo; algunas pueden superar 200 ms.",
          "explanation": "El percentil describe la distribución de observaciones del período; no es promedio ni máximo."
        },
        {
          "id": "b",
          "text": "Todas las solicitudes tardaron exactamente 200 ms.",
          "explanation": "Un percentil no afirma que todas las observaciones sean iguales."
        },
        {
          "id": "c",
          "text": "El promedio y el máximo son necesariamente 200 ms.",
          "explanation": "Son estadísticas distintas."
        },
        {
          "id": "d",
          "text": "El 95 % de las solicitudes falló.",
          "explanation": "El percentil de latencia no expresa una tasa de errores."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El percentil describe la distribución de observaciones del período; no es promedio ni máximo.",
      "source": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html"
    },
    {
      "id": "aws-scaling-014",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Métricas y diagnóstico",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Para target tracking se propone usar el total de solicitudes que recibe un balanceador. ¿Qué problema debe revisarse?",
      "options": [
        {
          "id": "a",
          "text": "Ese total no disminuye necesariamente al añadir réplicas; hay que elegir una señal adecuada a la utilización por capacidad.",
          "explanation": "La política necesita una relación útil entre métrica y capacidad; el total de entrada no expresa por sí solo carga por réplica."
        },
        {
          "id": "b",
          "text": "La métrica es suficiente porque todo aumento de tráfico exige el mismo número de instancias.",
          "explanation": "La relación depende de la capacidad y del trabajo de cada solicitud."
        },
        {
          "id": "c",
          "text": "Añadir instancias elimina automáticamente solicitudes entrantes.",
          "explanation": "La demanda entrante no se reduce por cambiar el número de réplicas."
        },
        {
          "id": "d",
          "text": "Una métrica regional demuestra que cada recurso ya se distribuye entre AZ.",
          "explanation": "El alcance de una métrica no determina esa distribución."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La política necesita una relación útil entre métrica y capacidad; el total de entrada no expresa por sí solo carga por réplica.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html"
    },
    {
      "id": "aws-scaling-015",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Métricas y diagnóstico",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Se aumentó el objetivo de capacidad para resolver una degradación. ¿Qué observación permite evaluar el resultado?",
      "options": [
        {
          "id": "a",
          "text": "Capacidad útil alcanzada y evolución de latencia, errores y trabajo completado bajo la carga analizada.",
          "explanation": "Solicitar un objetivo y conseguir el resultado esperado son pasos distintos."
        },
        {
          "id": "b",
          "text": "Solo que se guardó el nuevo número deseado.",
          "explanation": "La configuración no demuestra que exista capacidad preparada ni que mejoró el servicio."
        },
        {
          "id": "c",
          "text": "Solo que el máximo configurado es mayor.",
          "explanation": "Un límite no describe la capacidad utilizada ni el resultado."
        },
        {
          "id": "d",
          "text": "Solo que el sistema tiene un nombre de servicio con Auto Scaling.",
          "explanation": "El nombre no verifica la política ni su efecto."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Solicitar un objetivo y conseguir el resultado esperado son pasos distintos.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-016",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Métricas y diagnóstico",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El promedio de CPU parece moderado, pero una réplica recibe casi todo el trabajo y se satura. ¿Qué revisión es pertinente?",
      "options": [
        {
          "id": "a",
          "text": "Examinar utilización por réplica y reparto de carga, además del promedio agregado.",
          "explanation": "El agregado puede ocultar un desequilibrio que limite la operación."
        },
        {
          "id": "b",
          "text": "Concluir que ninguna réplica está saturada porque el promedio es moderado.",
          "explanation": "El enunciado identifica una diferencia entre réplicas."
        },
        {
          "id": "c",
          "text": "Atribuir el reparto a la memoria de la base de datos sin comprobarla.",
          "explanation": "La información disponible no demuestra esa causa."
        },
        {
          "id": "d",
          "text": "Usar el máximo configurado como sustituto de las métricas por réplica.",
          "explanation": "El límite de capacidad no mide la distribución del trabajo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El agregado puede ocultar un desequilibrio que limite la operación.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html"
    },
    {
      "id": "aws-scaling-017",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Objetivos y tiempos de ajuste",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un ASG con instancias equivalentes tiene mínimo 2, deseado 4 y máximo 8. Sin políticas ni acciones que cambien el objetivo, ¿qué intenta mantener?",
      "options": [
        {
          "id": "a",
          "text": "La capacidad deseada de cuatro, sin que el máximo ordene aprovisionar ocho.",
          "explanation": "Deseado es el objetivo; mínimo y máximo delimitan los ajustes descritos."
        },
        {
          "id": "b",
          "text": "Ocho, porque el máximo es la capacidad que siempre debe ejecutarse.",
          "explanation": "El máximo no es el objetivo actual."
        },
        {
          "id": "c",
          "text": "Dos, porque el mínimo reemplaza a cualquier capacidad deseada.",
          "explanation": "El objetivo configurado de cuatro está dentro de los límites."
        },
        {
          "id": "d",
          "text": "Cualquier cantidad garantizada instantáneamente entre dos y ocho.",
          "explanation": "La configuración no garantiza el estado real instantáneo."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Deseado es el objetivo; mínimo y máximo delimitan los ajustes descritos.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html"
    },
    {
      "id": "aws-scaling-018",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Objetivos y tiempos de ajuste",
      "level": "intermedio",
      "skill": "análisis",
      "prompt": "El objetivo pasó de tres a seis réplicas, pero tres nuevas siguen preparándose. ¿Qué conclusión respeta esa diferencia?",
      "options": [
        {
          "id": "a",
          "text": "El objetivo ya cambió; aún debe comprobarse cuánta capacidad útil está atendiendo trabajo.",
          "explanation": "Aprovisionar, preparar y estabilizar lleva tiempo; lo deseado no equivale al estado útil."
        },
        {
          "id": "b",
          "text": "Ya existen seis réplicas útiles porque ese es el valor deseado.",
          "explanation": "El enunciado indica que parte de la capacidad sigue preparándose."
        },
        {
          "id": "c",
          "text": "El ajuste debe ser vertical porque todavía no termina.",
          "explanation": "El tiempo de ejecución no cambia la dirección del ajuste."
        },
        {
          "id": "d",
          "text": "El límite máximo se convierte automáticamente en capacidad preparada.",
          "explanation": "Un límite no demuestra preparación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Aprovisionar, preparar y estabilizar lleva tiempo; lo deseado no equivale al estado útil.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html"
    },
    {
      "id": "aws-scaling-019",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Objetivos y tiempos de ajuste",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Qué distinción evita interpretar el warmup de EC2 Auto Scaling como una comprobación completa de la aplicación?",
      "options": [
        {
          "id": "a",
          "text": "El warmup regula estabilización y contribución a métricas; preparación y comprobaciones de salud cumplen funciones adicionales.",
          "explanation": "Las funciones se relacionan, pero una temporización de métricas no sustituye comprobar la aplicación."
        },
        {
          "id": "b",
          "text": "Cumplir un tiempo demuestra que cualquier dependencia funciona.",
          "explanation": "La temporización no verifica por sí sola todas las dependencias."
        },
        {
          "id": "c",
          "text": "El warmup determina la región de la instancia.",
          "explanation": "No es un mecanismo de ubicación geográfica."
        },
        {
          "id": "d",
          "text": "El warmup incrementa necesariamente la capacidad máxima configurada.",
          "explanation": "No redefine por sí solo los límites de capacidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Las funciones se relacionan, pero una temporización de métricas no sustituye comprobar la aplicación.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html"
    },
    {
      "id": "aws-scaling-020",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Objetivos y tiempos de ajuste",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La demanda aumenta cada mañana a una hora previsible. ¿Qué aporta un ajuste programado bien evaluado?",
      "options": [
        {
          "id": "a",
          "text": "Permite anticipar capacidad, considerando preparación y comprobando si el patrón real coincide con lo previsto.",
          "explanation": "Un horario puede anticipar un patrón conocido, pero no verifica por sí solo la demanda real."
        },
        {
          "id": "b",
          "text": "Elimina la necesidad de observar el resultado durante el día.",
          "explanation": "El patrón puede cambiar y el resultado debe comprobarse."
        },
        {
          "id": "c",
          "text": "Impide utilizar políticas basadas en métricas.",
          "explanation": "Las acciones programadas pueden combinarse con esas políticas."
        },
        {
          "id": "d",
          "text": "Garantiza que la capacidad solicitada esté útil en el mismo instante.",
          "explanation": "Deben considerarse tiempos de aprovisionamiento y preparación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Un horario puede anticipar un patrón conocido, pero no verifica por sí solo la demanda real.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html"
    },
    {
      "id": "aws-scaling-021",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Objetivos y tiempos de ajuste",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una automatización añade y retira réplicas repetidamente ante variaciones muy breves. ¿Qué debe revisarse?",
      "options": [
        {
          "id": "a",
          "text": "Ventanas de observación, tiempos de estabilización y reglas de retirada según el mecanismo elegido.",
          "explanation": "Una reacción que ignora el tiempo de efecto del cambio puede producir oscilaciones."
        },
        {
          "id": "b",
          "text": "Reducir siempre a cero todo tiempo de espera para actuar más veces.",
          "explanation": "Actuar antes de observar el efecto puede aumentar la oscilación."
        },
        {
          "id": "c",
          "text": "Mantener la automatización sin verificar si los cambios llegan a ser útiles.",
          "explanation": "La frecuencia no demuestra mejora del resultado."
        },
        {
          "id": "d",
          "text": "Sustituir las métricas por el número de AZ de la región.",
          "explanation": "Ese dato no describe las variaciones de carga ni los tiempos del ajuste."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Una reacción que ignora el tiempo de efecto del cambio puede producir oscilaciones.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html"
    },
    {
      "id": "aws-scaling-022",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Diseño y retirada segura",
      "level": "intermedio",
      "skill": "análisis",
      "prompt": "Cada réplica conserva una sesión imprescindible solo en memoria local. ¿Qué pregunta importa antes de repartir solicitudes entre más réplicas?",
      "options": [
        {
          "id": "a",
          "text": "Cómo podrá otra réplica continuar sin perder el estado necesario entre solicitudes.",
          "explanation": "El estado ligado a una réplica condiciona reparto, reemplazo y retirada."
        },
        {
          "id": "b",
          "text": "Solo cuánto aumenta el máximo de réplicas.",
          "explanation": "El límite no resuelve la dependencia del estado local."
        },
        {
          "id": "c",
          "text": "Si añadir CPU a cada réplica replica automáticamente las sesiones.",
          "explanation": "Cambiar tamaño no establece un mecanismo para compartir estado."
        },
        {
          "id": "d",
          "text": "Si el número de réplicas vuelve innecesario conservar la sesión.",
          "explanation": "La necesidad funcional de estado no desaparece al aumentar cantidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El estado ligado a una réplica condiciona reparto, reemplazo y retirada.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_mitigate_interaction_failure_stateless.html"
    },
    {
      "id": "aws-scaling-023",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Diseño y retirada segura",
      "level": "intermedio",
      "skill": "concepto",
      "prompt": "¿Qué significa diseñar una capa sin estado local imprescindible entre solicitudes?",
      "options": [
        {
          "id": "a",
          "text": "Que otra réplica puede atender trabajo sin depender de datos de sesión necesarios que solo conserve la anterior.",
          "explanation": "El estado puede mantenerse fuera de la réplica; no significa que la aplicación carezca de datos."
        },
        {
          "id": "b",
          "text": "Que la aplicación no puede utilizar ningún almacén de datos.",
          "explanation": "Separar estado de ejecución no prohíbe datos persistentes."
        },
        {
          "id": "c",
          "text": "Que desaparecen las dependencias compartidas.",
          "explanation": "El almacenamiento externo del estado conserva sus propios límites y dependencias."
        },
        {
          "id": "d",
          "text": "Que la capacidad deja de necesitar medición.",
          "explanation": "La flexibilidad de reparto no elimina los límites de rendimiento."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El estado puede mantenerse fuera de la réplica; no significa que la aplicación carezca de datos.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_mitigate_interaction_failure_stateless.html"
    },
    {
      "id": "aws-scaling-024",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Diseño y retirada segura",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una réplica con CPU baja conserva una tarea larga en curso. Se quiere retirarla. ¿Qué información falta para hacerlo con seguridad?",
      "options": [
        {
          "id": "a",
          "text": "Cómo finalizar, conservar o recuperar ese trabajo y cuándo dejar de asignarle nuevas tareas.",
          "explanation": "La utilización baja no demuestra que no exista trabajo necesario o estado que proteger."
        },
        {
          "id": "b",
          "text": "Ninguna: CPU baja demuestra que la tarea ya no importa.",
          "explanation": "La CPU no determina la importancia ni la finalización del trabajo."
        },
        {
          "id": "c",
          "text": "Solo si el máximo de capacidad permite más instancias.",
          "explanation": "Ese límite no define el comportamiento al retirar esta réplica."
        },
        {
          "id": "d",
          "text": "Solo la ubicación del endpoint de administración.",
          "explanation": "La ubicación de la interfaz no protege el trabajo en curso."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La utilización baja no demuestra que no exista trabajo necesario o estado que proteger.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html"
    },
    {
      "id": "aws-scaling-025",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Diseño y retirada segura",
      "level": "intermedio",
      "skill": "análisis",
      "prompt": "Un grupo con deseado cuatro pierde una instancia y lanza otra para volver a cuatro, sin cambio de demanda ni de objetivo. ¿Qué describe el caso?",
      "options": [
        {
          "id": "a",
          "text": "Reposición para mantener el objetivo, sin demostrar un ajuste de capacidad por demanda.",
          "explanation": "Mantener capacidad deseada y modificarla según demanda son comportamientos distintos."
        },
        {
          "id": "b",
          "text": "Un aumento del objetivo por demanda, porque se creó una instancia.",
          "explanation": "El objetivo se mantiene en cuatro."
        },
        {
          "id": "c",
          "text": "Una reducción horizontal de la capacidad deseada.",
          "explanation": "No se describe reducir ese objetivo."
        },
        {
          "id": "d",
          "text": "Una eliminación de la necesidad de observar fallos.",
          "explanation": "La reposición no equivale a demostrar todas las propiedades del sistema."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Mantener capacidad deseada y modificarla según demanda son comportamientos distintos.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html"
    },
    {
      "id": "aws-scaling-026",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Diseño y retirada segura",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se añaden réplicas para atender un pico, pero todas dependen de una única ubicación. ¿Qué conclusión requiere una evaluación adicional?",
      "options": [
        {
          "id": "a",
          "text": "Que el aumento de capacidad también permite continuar ante el fallo de esa ubicación.",
          "explanation": "Cantidad, ubicación y dependencias deben analizarse por separado."
        },
        {
          "id": "b",
          "text": "Que aumentó la cantidad de réplicas según el enunciado.",
          "explanation": "Ese cambio está dado en el caso."
        },
        {
          "id": "c",
          "text": "Que hay que comprobar el resultado bajo carga.",
          "explanation": "Es una necesidad de validación, no una garantía atribuida al despliegue."
        },
        {
          "id": "d",
          "text": "Que existe una dependencia de ubicación compartida.",
          "explanation": "El enunciado identifica expresamente esa dependencia."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Cantidad, ubicación y dependencias deben analizarse por separado.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-027",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Casos y decisiones",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Modelo del ejercicio: cada réplica preparada procesa 30 solicitudes/s, reparto uniforme y sin otro límite. Llegan 210 solicitudes/s y se permiten como máximo seis réplicas. ¿Qué indica el cálculo?",
      "options": [
        {
          "id": "a",
          "text": "Se estiman siete réplicas; el límite de seis no cubre esa demanda bajo los supuestos dados.",
          "explanation": "210 dividido entre 30 es siete. El ejercicio usa un modelo lineal explícito, no una garantía de AWS."
        },
        {
          "id": "b",
          "text": "Seis bastan porque el máximo configurado redefine el rendimiento de cada réplica.",
          "explanation": "Un límite no aumenta la capacidad de cada unidad."
        },
        {
          "id": "c",
          "text": "Cuatro bastan porque pueden ser la capacidad deseada inicial.",
          "explanation": "Un objetivo inicial no cambia la demanda ni el rendimiento supuesto."
        },
        {
          "id": "d",
          "text": "El modelo garantiza que cualquier sistema real atenderá el pico con siete.",
          "explanation": "Los supuestos deben validarse antes de extrapolarlos a un sistema real."
        }
      ],
      "correctIds": ["a"],
      "explanation": "210 dividido entre 30 es siete. El ejercicio usa un modelo lineal explícito, no una garantía de AWS.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-028",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Casos y decisiones",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Modelo del ejercicio: 30 solicitudes/s por réplica, trabajo repartible y unidades enteras. Para 155 solicitudes/s, ¿qué estimación inicial corresponde?",
      "options": [
        {
          "id": "a",
          "text": "Seis réplicas, redondeando hacia arriba, y después verificar el modelo con el sistema real.",
          "explanation": "Cinco aportarían 150 solicitudes/s bajo los supuestos; no cubren 155. La estimación no sustituye medir."
        },
        {
          "id": "b",
          "text": "Cinco, redondeando hacia abajo aunque queden solicitudes sin cubrir.",
          "explanation": "Ese redondeo no satisface la demanda del modelo."
        },
        {
          "id": "c",
          "text": "5,17 réplicas ejecutables como unidades enteras.",
          "explanation": "El ejercicio especifica unidades enteras."
        },
        {
          "id": "d",
          "text": "Cualquier máximo configurado basta por definición.",
          "explanation": "Configurar un límite no determina el rendimiento requerido."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Cinco aportarían 150 solicitudes/s bajo los supuestos; no cubren 155. La estimación no sustituye medir.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-029",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Casos y decisiones",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Tras un pico baja la demanda y se conserva mucha capacidad ociosa. ¿Qué evaluación completa el análisis de elasticidad?",
      "options": [
        {
          "id": "a",
          "text": "Si puede reducirse capacidad respetando el objetivo de servicio, el margen y la retirada segura.",
          "explanation": "La reducción forma parte del ajuste a la demanda; debe proteger el trabajo y el servicio."
        },
        {
          "id": "b",
          "text": "Solo que el incremento anterior fue rápido.",
          "explanation": "La respuesta al aumento no describe el comportamiento tras el descenso."
        },
        {
          "id": "c",
          "text": "Apagar inmediatamente toda réplica con utilización baja.",
          "explanation": "Antes hay que revisar trabajo en curso y capacidad necesaria."
        },
        {
          "id": "d",
          "text": "Declarar que toda capacidad ociosa demuestra un fallo, sin evaluar margen.",
          "explanation": "Puede existir margen deliberado; hay que compararlo con los objetivos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La reducción forma parte del ajuste a la demanda; debe proteger el trabajo y el servicio.",
      "source": "https://docs.aws.amazon.com/whitepapers/latest/reactive-systems-on-aws/elastic.html"
    },
    {
      "id": "aws-scaling-030",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Casos y decisiones",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se duplican réplicas, la latencia no mejora y crecen las esperas en una dependencia compartida. ¿Qué siguiente paso está mejor fundamentado?",
      "options": [
        {
          "id": "a",
          "text": "Revisar el cuello de botella y el efecto de la concurrencia antes de seguir aumentando esa capa.",
          "explanation": "El cambio observado no resolvió el límite de la operación y puede aumentar su presión sobre otra capa."
        },
        {
          "id": "b",
          "text": "Seguir duplicando hasta que cualquier dependencia deje de influir.",
          "explanation": "Más réplicas no elimina por sí solo una dependencia compartida."
        },
        {
          "id": "c",
          "text": "Dar el problema por resuelto porque subió el número de recursos.",
          "explanation": "El resultado de latencia y esperas no muestra esa mejora."
        },
        {
          "id": "d",
          "text": "Retirar métricas de dependencias para decidir solo con el número deseado.",
          "explanation": "Eso elimina evidencia necesaria para localizar el límite."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El cambio observado no resolvió el límite de la operación y puede aumentar su presión sobre otra capa.",
      "source": "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html"
    },
    {
      "id": "aws-scaling-031",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Casos y decisiones",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un pico es previsible y las nuevas réplicas requieren preparación. ¿Qué plan considera el tiempo de respuesta del ajuste?",
      "options": [
        {
          "id": "a",
          "text": "Anticipar la incorporación y comprobar que la capacidad útil esté preparada al comenzar la carga.",
          "explanation": "La decisión debe considerar todo el intervalo entre solicitar recursos y disponer de capacidad útil."
        },
        {
          "id": "b",
          "text": "Solicitar las réplicas al comenzar el pico y asumir preparación instantánea.",
          "explanation": "Se ignora el tiempo indicado en el caso."
        },
        {
          "id": "c",
          "text": "Aumentar solo el máximo, sin cambiar el objetivo ni observar capacidad.",
          "explanation": "El máximo no ordena aprovisionar la capacidad necesaria."
        },
        {
          "id": "d",
          "text": "Observar únicamente cuándo se guardó la configuración.",
          "explanation": "Guardar una intención no demuestra preparación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La decisión debe considerar todo el intervalo entre solicitar recursos y disponer de capacidad útil.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html"
    },
    {
      "id": "aws-scaling-032",
      "revision": 1,
      "contentId": "aws-scalability-elasticity",
      "topic": "Casos y decisiones",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El objetivo de un grupo alcanzó su máximo y el servicio sigue incumpliendo el resultado esperado. ¿Qué decisión necesita el equipo?",
      "options": [
        {
          "id": "a",
          "text": "Revisar el límite real, las métricas y las restricciones antes de decidir otro ajuste o cambio de diseño.",
          "explanation": "El límite configurado condiciona la política, pero aumentarlo no demuestra capacidad disponible ni resuelve cualquier cuello de botella."
        },
        {
          "id": "b",
          "text": "Suponer que la política ignorará siempre el máximo para satisfacer la demanda.",
          "explanation": "Los ajustes del objetivo están sujetos a los límites configurados."
        },
        {
          "id": "c",
          "text": "Considerar logrado el objetivo de servicio porque se alcanzó el máximo de recursos.",
          "explanation": "El objetivo de capacidad y el resultado del servicio son distintos."
        },
        {
          "id": "d",
          "text": "Aumentar el máximo sin evaluar dependencias ni comprobar el efecto.",
          "explanation": "El caso exige revisar qué limita el resultado, no solo otro número."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El límite configurado condiciona la política, pero aumentarlo no demuestra capacidad disponible ni resuelve cualquier cuello de botella.",
      "source": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html"
    }
  ],
  "presets": [
    {
      "id": "conceptos",
      "title": "1 · Capacidad y elasticidad",
      "description": "Distingue demanda, crecimiento y ajuste a necesidades variables.",
      "questionIds": [
        "aws-scaling-001",
        "aws-scaling-002",
        "aws-scaling-003",
        "aws-scaling-004",
        "aws-scaling-005"
      ]
    },
    {
      "id": "direcciones",
      "title": "2 · Direcciones de escalado",
      "description": "Clasifica cambios de tamaño y cantidad sin confundirlos con automatización.",
      "questionIds": [
        "aws-scaling-006",
        "aws-scaling-007",
        "aws-scaling-008",
        "aws-scaling-009",
        "aws-scaling-010",
        "aws-scaling-011"
      ]
    },
    {
      "id": "metricas",
      "title": "3 · Métricas y diagnóstico",
      "description": "Relaciona utilización, carga, señales de control y resultado.",
      "questionIds": [
        "aws-scaling-012",
        "aws-scaling-013",
        "aws-scaling-014",
        "aws-scaling-015",
        "aws-scaling-016"
      ]
    },
    {
      "id": "control",
      "title": "4 · Objetivos y tiempos de ajuste",
      "description": "Distingue límites, capacidad deseada, preparación y estabilización.",
      "questionIds": [
        "aws-scaling-017",
        "aws-scaling-018",
        "aws-scaling-019",
        "aws-scaling-020",
        "aws-scaling-021"
      ]
    },
    {
      "id": "diseno",
      "title": "5 · Diseño y retirada segura",
      "description": "Examina estado, trabajo en curso y dependencias.",
      "questionIds": [
        "aws-scaling-022",
        "aws-scaling-023",
        "aws-scaling-024",
        "aws-scaling-025",
        "aws-scaling-026"
      ]
    },
    {
      "id": "decisiones",
      "title": "6 · Casos y decisiones",
      "description": "Aplica un modelo acotado y justifica qué debe comprobarse.",
      "questionIds": [
        "aws-scaling-027",
        "aws-scaling-028",
        "aws-scaling-029",
        "aws-scaling-030",
        "aws-scaling-031",
        "aws-scaling-032"
      ]
    },
    {
      "id": "integrador",
      "title": "7 · Repaso integrador",
      "description": "Reutiliza ocho preguntas para relacionar conceptos, control, métricas y decisiones.",
      "questionIds": [
        "aws-scaling-003",
        "aws-scaling-010",
        "aws-scaling-014",
        "aws-scaling-018",
        "aws-scaling-020",
        "aws-scaling-024",
        "aws-scaling-027",
        "aws-scaling-032"
      ]
    }
  ]
};
