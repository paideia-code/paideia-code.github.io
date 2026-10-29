import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsEcsBank: QuestionBank = {
  id: 'aws-ecs-fargate-ecr',
  revision: 1,
  contentId: 'aws-ecs-fargate-ecr',
  title: 'ECS, Fargate y ECR',
  questions: [
    {
      id: 'aws-ecs-001',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'Modelo de contenedores',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué relación describe mejor ECR, ECS y Fargate?',
      options: [
        {
          id: 'a',
          text: 'ECR almacena imágenes, ECS orquesta tareas y Fargate aporta capacidad gestionada.',
          explanation: 'Cada servicio cubre una parte distinta del flujo.'
        },
        {
          id: 'b',
          text: 'Los tres son registros de imágenes.',
          explanation: 'ECS y Fargate ejecutan y gestionan capacidad.'
        },
        {
          id: 'c',
          text: 'Fargate reemplaza la task definition.',
          explanation: 'La definición sigue siendo necesaria.'
        },
        {
          id: 'd',
          text: 'ECS solo administra DNS.',
          explanation: 'ECS administra workloads de contenedores.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El flujo separa artefacto, orquestación y capacidad.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html'
    },
    {
      id: 'aws-ecs-002',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'ECR',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Por qué es preferible identificar una imagen por digest además de usar tags?',
      options: [
        {
          id: 'a',
          text: 'El digest identifica el contenido concreto aunque una etiqueta cambie.',
          explanation: 'Permite auditoría y rollback reproducible.'
        },
        {
          id: 'b',
          text: 'El digest crea más CPU para el contenedor.',
          explanation: 'No cambia la capacidad de ejecución.'
        },
        {
          id: 'c',
          text: 'El digest sustituye la task definition.',
          explanation: 'La task definition referencia la imagen.'
        },
        {
          id: 'd',
          text: 'El digest abre el puerto del ALB.',
          explanation: 'No controla tráfico.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Las etiquetas pueden mutar; el digest conserva la identidad del contenido.',
      source: 'https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-push.html'
    },
    {
      id: 'aws-ecs-003',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'ECS',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué describe una task definition?',
      options: [
        {
          id: 'a',
          text: 'La plantilla versionada de contenedores, recursos, puertos, logs y roles.',
          explanation: 'La task definition define cómo ejecutar la task.'
        },
        {
          id: 'b',
          text: 'Una única ejecución concreta.',
          explanation: 'Eso es una task.'
        },
        {
          id: 'c',
          text: 'Solo el cluster físico.',
          explanation: 'Fargate puede aportar capacidad sin hosts administrados.'
        },
        {
          id: 'd',
          text: 'El registro DNS del servicio.',
          explanation: 'DNS es una capa de entrada.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La revisión de la definición permite rastrear la configuración desplegada.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html'
    },
    {
      id: 'aws-ecs-004',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'ECS',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué responsabilidad tiene un ECS service?',
      options: [
        {
          id: 'a',
          text: 'Mantener el número deseado de tasks y coordinar despliegues.',
          explanation: 'El service expresa el estado deseado del workload.'
        },
        {
          id: 'b',
          text: 'Construir la imagen Docker.',
          explanation: 'Eso ocurre antes, en la cadena de build.'
        },
        {
          id: 'c',
          text: 'Sustituir todos los health checks.',
          explanation: 'El service usa comprobaciones configuradas.'
        },
        {
          id: 'd',
          text: 'Guardar secretos dentro de la imagen.',
          explanation: 'Los secretos deben gestionarse externamente.'
        }
      ],
      correctIds: ['a'],
      explanation: 'ECS puede reemplazar tareas y mover el servicio entre revisiones.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html'
    },
    {
      id: 'aws-ecs-005',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'Roles',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué diferencia hay entre task execution role y task role?',
      options: [
        {
          id: 'a',
          text: 'El execution role ayuda a iniciar la task; el task role entrega permisos al código del contenedor.',
          explanation: 'Separar roles evita dar a la aplicación permisos de plataforma.'
        },
        {
          id: 'b',
          text: 'Ambos son siempre el usuario raíz.',
          explanation: 'No deben confundirse con la cuenta raíz.'
        },
        {
          id: 'c',
          text: 'El task role controla el balanceador y el execution role controla DNS.',
          explanation: 'Ambos son roles IAM con usos concretos.'
        },
        {
          id: 'd',
          text: 'No hay diferencia operativa.',
          explanation: 'La separación es importante para mínimo privilegio.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La plataforma y la aplicación tienen necesidades de permisos distintas.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html'
    },
    {
      id: 'aws-ecs-006',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'Fargate y red',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Una task Fargate está RUNNING pero el ALB no puede usarla. ¿Qué revisarías?',
      options: [
        {
          id: 'a',
          text: 'Puerto del contenedor, SG, rutas, listener y health check.',
          explanation: 'RUNNING no significa que el destino esté listo ni accesible.'
        },
        {
          id: 'b',
          text: 'Solo el tag de la imagen.',
          explanation: 'La imagen puede iniciar y aun así fallar la red.'
        },
        {
          id: 'c',
          text: 'Solo el nombre del cluster.',
          explanation: 'El nombre no define la conectividad.'
        },
        {
          id: 'd',
          text: 'Cambiar a Lambda sin diagnóstico.',
          explanation: 'Primero hay que identificar la capa que falla.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La task en ejecución todavía debe pasar red, puerto y health check.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html'
    },
    {
      id: 'aws-ecs-007',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'Despliegue',
      level: 'intermedio',
      skill: 'análisis',
      prompt: '¿Qué permite revertir un despliegue de forma más fiable?',
      options: [
        {
          id: 'a',
          text: 'Conservar la revisión anterior de la task definition y el digest que funcionaba.',
          explanation: 'La reversión debe identificar exactamente el artefacto.'
        },
        {
          id: 'b',
          text: 'Volver a usar `latest` sin registrar cambios.',
          explanation: 'No garantiza el mismo contenido.'
        },
        {
          id: 'c',
          text: 'Eliminar el service.',
          explanation: 'Eso no es un rollback controlado.'
        },
        {
          id: 'd',
          text: 'Cambiar el nombre del cluster.',
          explanation: 'No restaura la versión.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Una revisión inmutable y un digest conocido permiten reconstruir el estado anterior.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html'
    },
    {
      id: 'aws-ecs-008',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'Escalado y salud',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué demuestra un health check correcto?',
      options: [
        {
          id: 'a',
          text: 'Que el destino cumple la comprobación definida para recibir tráfico.',
          explanation: 'No demuestra que toda la lógica de negocio funcione.'
        },
        {
          id: 'b',
          text: 'Que el contenedor no tiene dependencias.',
          explanation: 'Puede depender de otros servicios.'
        },
        {
          id: 'c',
          text: 'Que no necesita logs.',
          explanation: 'Los logs siguen siendo necesarios.'
        },
        {
          id: 'd',
          text: 'Que siempre se puede escalar sin límite.',
          explanation: 'Escalado y salud tienen límites.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La comprobación debe corresponder al tráfico que se enviará al destino.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/load-balancer-healthcheck.html'
    },
    {
      id: 'aws-ecs-009',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'Operación',
      level: 'intermedio',
      skill: 'análisis',
      prompt: '¿Qué señales relacionarías al investigar tasks que se reinician?',
      options: [
        {
          id: 'a',
          text: 'Código de salida, logs, memoria, health check, imagen, red y eventos del service.',
          explanation: 'El reinicio puede originarse en varias capas.'
        },
        {
          id: 'b',
          text: 'Solo el número de subnets.',
          explanation: 'No basta para saber por qué termina la task.'
        },
        {
          id: 'c',
          text: 'Solo el dominio público.',
          explanation: 'El fallo puede ocurrir antes del dominio.'
        },
        {
          id: 'd',
          text: 'Eliminar el health check.',
          explanation: 'Oculta el síntoma sin encontrar la causa.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La observabilidad debe unir plataforma, contenedor, red y dependencia.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_service_events.html'
    },
    {
      id: 'aws-ecs-010',
      revision: 1,
      contentId: 'aws-ecs-fargate-ecr',
      topic: 'Decisión de plataforma',
      level: 'avanzado',
      skill: 'análisis',
      prompt: '¿Qué razón favorece ECS/Fargate frente a Lambda?',
      options: [
        {
          id: 'a',
          text: 'Necesitar un contenedor persistente para una API o worker con control del proceso y del empaquetado.',
          explanation: 'ECS encaja con tareas y servicios de larga duración.'
        },
        {
          id: 'b',
          text: 'Querer evitar por completo configurar red y permisos.',
          explanation: 'ECS sigue requiriendo decisiones de red y roles.'
        },
        {
          id: 'c',
          text: 'Necesitar funciones activadas por eventos breves sin contenedor persistente.',
          explanation: 'Ese caso puede encajar mejor con Lambda.'
        },
        {
          id: 'd',
          text: 'Querer administrar un sistema operativo host.',
          explanation: 'Fargate evita administrar hosts; EC2 puede ser más adecuado si ese control es esencial.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La elección depende de duración, empaquetado, operación y control requerido.',
      source: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html'
    }
  ],
  presets: [
    {
      id: 'modelo',
      title: '1 · Modelo de ECS y ECR',
      description: 'Distingue imagen, definición, task y service.',
      questionIds: [
        'aws-ecs-001', 'aws-ecs-002', 'aws-ecs-003', 'aws-ecs-004'
      ]
    },
    {
      id: 'operacion',
      title: '2 · Roles, red y despliegue',
      description: 'Aplica permisos, health checks y rollback.',
      questionIds: ['aws-ecs-005', 'aws-ecs-006', 'aws-ecs-007']
    },
    {
      id: 'diagnostico',
      title: '3 · Salud y decisiones',
      description: 'Analiza reinicios y elección de plataforma.',
      questionIds: ['aws-ecs-008', 'aws-ecs-009', 'aws-ecs-010']
    },
    {
      id: 'integrador',
      title: '4 · Repaso integrador',
      description: 'Relaciona artefacto, ejecución y operación.',
      questionIds: [
        'aws-ecs-002', 'aws-ecs-005', 'aws-ecs-006', 'aws-ecs-010'
      ]
    }
  ]
};
