import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsLambdaBank: QuestionBank = {
  id: 'aws-lambda',
  revision: 2,
  contentId: 'aws-lambda',
  title: 'AWS Lambda',
  questions: [
    {
      id: 'aws-lambda-001',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Modelo de ejecución',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué administra principalmente AWS al usar Lambda?',
      options: [
        {
          id: 'a',
          text: 'La infraestructura de servidores donde se ejecuta la función.',
          explanation: 'El equipo sigue gestionando código, permisos y configuración.'
        },
        {
          id: 'b',
          text: 'La lógica de negocio y sus efectos externos.',
          explanation: 'Eso sigue siendo responsabilidad del equipo.'
        },
        {
          id: 'c',
          text: 'La idempotencia de cada operación.',
          explanation: 'Debe diseñarse explícitamente.'
        },
        {
          id: 'd',
          text: 'La consistencia de la base de datos.',
          explanation: 'Depende del servicio y del diseño elegido.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Lambda abstrae la infraestructura, pero no elimina las decisiones de la aplicación.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html'
    },
    {
      id: 'aws-lambda-002',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Modelo de ejecución',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Por qué una función no debe depender de memoria local como estado persistente?',
      options: [
        {
          id: 'a',
          text: 'El entorno puede desaparecer o reutilizarse de manera no garantizada.',
          explanation: 'El entorno de ejecución no es un contrato de persistencia.'
        },
        {
          id: 'b',
          text: 'Lambda siempre ejecuta una sola invocación.',
          explanation: 'Puede ejecutar invocaciones concurrentes.'
        },
        {
          id: 'c',
          text: 'La memoria solo existe para logs.',
          explanation: 'La memoria también afecta la ejecución.'
        },
        {
          id: 'd',
          text: 'Las funciones no pueden acceder a variables.',
          explanation: 'Sí pueden, pero su ciclo debe entenderse.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El estado que debe sobrevivir debe vivir en un servicio externo.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html'
    },
    {
      id: 'aws-lambda-003',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Invocación y eventos',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué diferencia caracteriza una invocación síncrona?',
      options: [
        {
          id: 'a',
          text: 'El invocador espera una respuesta de la función.',
          explanation: 'El resultado o error vuelve al invocador.'
        },
        {
          id: 'b',
          text: 'Lambda nunca devuelve errores.',
          explanation: 'Los errores pueden propagarse al invocador.'
        },
        {
          id: 'c',
          text: 'El evento siempre viene de una cola.',
          explanation: 'Puede provenir de varios invocadores.'
        },
        {
          id: 'd',
          text: 'No existe un timeout.',
          explanation: 'El timeout sigue aplicando.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El modo síncrono define quién espera el resultado y cómo recibe el fallo.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html'
    },
    {
      id: 'aws-lambda-004',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Reintentos e idempotencia',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Un evento de pago puede llegar dos veces. ¿Qué propiedad necesita la función?',
      options: [
        {
          id: 'a',
          text: 'Idempotencia mediante una clave de operación y un efecto controlado.',
          explanation: 'El segundo procesamiento no debe duplicar el cobro o recibo.'
        },
        {
          id: 'b',
          text: 'Más memoria sin registrar el evento.',
          explanation: 'Memoria no evita duplicados.'
        },
        {
          id: 'c',
          text: 'Un timeout ilimitado.',
          explanation: 'No resuelve reintentos.'
        },
        {
          id: 'd',
          text: 'Una IP pública fija.',
          explanation: 'No controla efectos repetidos.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Los reintentos son una propiedad del sistema; el efecto debe poder repetirse con seguridad.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html'
    },
    {
      id: 'aws-lambda-005',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Reintentos e idempotencia',
      level: 'intermedio',
      skill: 'análisis',
      prompt: '¿Qué riesgo aparece si una función publica un mensaje y falla antes de registrar su resultado?',
      options: [
        {
          id: 'a',
          text: 'Un reintento puede publicar el mismo efecto otra vez.',
          explanation: 'El orden de efectos y registro debe diseñarse para duplicados.'
        },
        {
          id: 'b',
          text: 'La función se vuelve automáticamente síncrona.',
          explanation: 'El modelo de invocación no cambia así.'
        },
        {
          id: 'c',
          text: 'La VPC pierde sus rutas.',
          explanation: 'No es una consecuencia directa.'
        },
        {
          id: 'd',
          text: 'El evento desaparece siempre.',
          explanation: 'Depende del origen y de su política de reintentos.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La idempotencia y la coordinación del efecto evitan duplicaciones.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html'
    },
    {
      id: 'aws-lambda-006',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Concurrencia y límites',
      level: 'intermedio',
      skill: 'concepto',
      prompt: '¿Qué controla la reserved concurrency?',
      options: [
        {
          id: 'a',
          text: 'Reserva y limita la concurrencia de una función.',
          explanation: 'Protege capacidad para la función y puede limitar su expansión.'
        },
        {
          id: 'b',
          text: 'Aumenta automáticamente el timeout.',
          explanation: 'Timeout y concurrencia son controles distintos.'
        },
        {
          id: 'c',
          text: 'Crea una base de datos compartida.',
          explanation: 'No administra estado de negocio.'
        },
        {
          id: 'd',
          text: 'Convierte eventos asíncronos en DNS.',
          explanation: 'No tiene relación con DNS.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La concurrencia debe alinearse con las cuotas y con la capacidad de las dependencias.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html'
    },
    {
      id: 'aws-lambda-007',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Permisos y red',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué identidad usa normalmente el código de una función para llamar a otros servicios AWS?',
      options: [
        {
          id: 'a',
          text: 'La execution role de la función.',
          explanation: 'La función obtiene permisos según ese rol.'
        },
        {
          id: 'b',
          text: 'La cuenta raíz del operador.',
          explanation: 'No debe usarse como identidad de aplicación.'
        },
        {
          id: 'c',
          text: 'El TTL del registro DNS.',
          explanation: 'TTL no es identidad.'
        },
        {
          id: 'd',
          text: 'La AMI de una instancia EC2.',
          explanation: 'Lambda no usa una AMI de EC2 como execution role.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El rol debe aplicar mínimo privilegio a acciones y recursos concretos.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html'
    },
    {
      id: 'aws-lambda-008',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Permisos y red',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Una función en subred privada no puede llamar a un servicio AWS o a una API externa. ¿Qué revisarías?',
      options: [
        {
          id: 'a',
          text: 'Rutas, NAT o endpoint, Security Groups, DNS y permisos.',
          explanation: 'Entrar en una VPC no crea salida a Internet automáticamente.'
        },
        {
          id: 'b',
          text: 'Solo la execution role.',
          explanation: 'Puede haber un problema de red además del permiso.'
        },
        {
          id: 'c',
          text: 'Solo el nombre de la función.',
          explanation: 'El nombre no crea conectividad.'
        },
        {
          id: 'd',
          text: 'Cambiar a invocación síncrona.',
          explanation: 'El modo de invocación no crea una ruta.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La llamada externa depende de la cadena de red y de la autorización.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html'
    },
    {
      id: 'aws-lambda-009',
      revision: 2,
      contentId: 'aws-lambda',
      topic: 'Observabilidad',
      level: 'intermedio',
      skill: 'análisis',
      prompt: 'Una cola SQS acumula retraso mientras Lambda procesa lotes. ¿Qué señales relacionarías?',
      options: [
        {
          id: 'a',
          text: 'Duración, errores, throttles, tamaño de lote, concurrencia y ApproximateAgeOfOldestMessage.',
          explanation: 'El retraso puede venir de ejecución, reintentos, límites o dependencia.'
        },
        {
          id: 'b',
          text: 'Solo memoria configurada.',
          explanation: 'No explica por sí sola el acumulamiento.'
        },
        {
          id: 'c',
          text: 'Solo TTL de DNS.',
          explanation: 'Una cola no se diagnostica con TTL DNS.'
        },
        {
          id: 'd',
          text: 'Solo el número de regiones.',
          explanation: 'No es evidencia suficiente.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Hay que observar la cadena de procesamiento, no una sola métrica.',
      source: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html'
    },
    {
      id: 'aws-lambda-010',
      revision: 1,
      contentId: 'aws-lambda',
      topic: 'Decisión de servicio',
      level: 'avanzado',
      skill: 'análisis',
      prompt: '¿Qué criterio favorece Lambda frente a EC2?',
      options: [
        {
          id: 'a',
          text: 'Eventos irregulares y tareas acotadas donde no se necesita controlar el sistema operativo.',
          explanation: 'Lambda reduce operación y ajusta ejecución a invocaciones.'
        },
        {
          id: 'b',
          text: 'Necesidad de ejecutar un proceso persistente durante horas sin límite de invocación.',
          explanation: 'Ese patrón puede encajar mejor con contenedores o EC2.'
        },
        {
          id: 'c',
          text: 'Necesidad de administrar drivers del host.',
          explanation: 'Lambda abstrae el host.'
        },
        {
          id: 'd',
          text: 'Necesidad de guardar sesiones en memoria local entre reinicios.',
          explanation: 'La memoria local no es estado persistente garantizado.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La elección compara duración, eventos, operación y control del entorno.',
      source: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html'
    }
  ],
  presets: [
    {
      id: 'modelo',
      title: '1 · Modelo de ejecución',
      description: 'Comprende entornos, invocaciones y eventos.',
      questionIds: ['aws-lambda-001', 'aws-lambda-002', 'aws-lambda-003']
    },
    {
      id: 'fiabilidad',
      title: '2 · Reintentos y límites',
      description: 'Aplica idempotencia y concurrencia.',
      questionIds: ['aws-lambda-004', 'aws-lambda-005', 'aws-lambda-006']
    },
    {
      id: 'operacion',
      title: '3 · Permisos y diagnóstico',
      description: 'Relaciona roles, red y observabilidad.',
      questionIds: [
        'aws-lambda-007', 'aws-lambda-008', 'aws-lambda-009', 'aws-lambda-010'
      ]
    },
    {
      id: 'integrador',
      title: '4 · Repaso integrador',
      description: 'Compara Lambda con otras modalidades de cómputo.',
      questionIds: [
        'aws-lambda-003', 'aws-lambda-005', 'aws-lambda-008', 'aws-lambda-010'
      ]
    }
  ]
};
