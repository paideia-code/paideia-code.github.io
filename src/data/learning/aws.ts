import type { LearningChapter, LearningContent } from '../../lib/learning/types';
export const awsIntro: LearningContent = {
  "id": "aws-cloud-computing",
  "title": "Cloud computing: qué cambia al usar AWS",
  "description": "Recursos bajo demanda, modelos de servicio y responsabilidades.",
  "href": "/theory/nube/aws/01-fundamentos/01-conceptos-cloud",
  "area": "AWS",
  "kind": "lección",
  "level": "básico",
  "topics": ["Fundamentos"],
  "objective": "Explicar qué cambia al usar cloud, distinguir servicios de recursos e identificar qué responsabilidades conserva el equipo."
};
export const awsInfrastructure: LearningContent = {
  id: 'aws-global-infrastructure',
  title: 'Infraestructura global: regiones y zonas de disponibilidad',
  description: 'Ubicación, aislamiento, alcance de los recursos y dependencias.',
  href: '/theory/aws/fundamentos/infraestructura-global',
  area: 'AWS',
  kind: 'lección',
  level: 'básico',
  topics: ['Fundamentos'],
  objective: 'Explicar cómo la ubicación y el alcance de los recursos condicionan su aislamiento y sus dependencias.'
};
export const awsScaling: LearningContent = {
  id: 'aws-scalability-elasticity',
  title: 'Escalabilidad y elasticidad',
  description: 'Capacidad, demanda, métricas y decisiones de ajuste.',
  href: '/theory/aws/fundamentos/escalabilidad-elasticidad',
  area: 'AWS',
  kind: 'lección',
  level: 'básico',
  topics: ['Fundamentos'],
  objective: 'Elegir y justificar ajustes de capacidad según la demanda, sus métricas y las restricciones del sistema.'
};
export const awsAvailability: LearningContent = {
  "id": "aws-availability-fault-tolerance",
  "title": "Disponibilidad y tolerancia a fallos",
  "description": "Evaluar continuidad y recuperación mediante escenarios de fallo, dependencias y objetivos comprobables.",
  "href": "/theory/aws/fundamentos/disponibilidad-tolerancia-fallos",
  "area": "AWS",
  "kind": "lección",
  "level": "básico",
  "topics": ["Fundamentos"],
  "objective": "Evaluar continuidad y recuperación mediante escenarios de fallo, dependencias y objetivos comprobables."
};
export const awsCosts: LearningContent = {
  "id": "aws-cost-management",
  "title": "Costes y control del consumo",
  "description": "Estimar y revisar consumo distinguiendo precios, presupuestos, cuotas y controles efectivos.",
  "href": "/theory/aws/fundamentos/costes-control-consumo",
  "area": "AWS",
  "kind": "lección",
  "level": "básico",
  "topics": ["Fundamentos"],
  "objective": "Estimar y revisar consumo distinguiendo precios, presupuestos, cuotas y controles efectivos."
};
export const awsAccountAccess: LearningContent = {
  id: 'aws-account-access',
  title: 'Cuenta AWS y acceso inicial',
  description: 'Control de la cuenta, identidades de trabajo y sesiones verificables.',
  href: '/theory/aws/iam/acceso-inicial',
  area: 'AWS',
  kind: 'lección',
  level: 'básico',
  topics: ['Cuenta e IAM'],
  objective: 'Elegir y justificar un acceso de trabajo separado del usuario raíz y comprobar la identidad efectiva antes de operar.'
};
export const awsPath: LearningChapter[] = [
  {
    "id": "fundamentos",
    "title": "Fundamentos de cloud",
    "description": "Comprender cómo funciona la nube antes de elegir servicios.",
    "topics": [
      "Cloud",
      "Regiones y AZ",
      "Capacidad",
      "Disponibilidad",
      "Costes"
    ],
    "href": "/theory/nube/aws/01-fundamentos/01-conceptos-cloud",
    "lessons": [
      {
        "id": "aws-cloud-computing",
        "title": "Cloud computing: qué cambia al usar AWS",
        "href": "/theory/nube/aws/01-fundamentos/01-conceptos-cloud"
      },
      {
        id: awsInfrastructure.id,
        title: awsInfrastructure.title,
        href: awsInfrastructure.href
      },
      {
        id: awsScaling.id,
        title: awsScaling.title,
        href: awsScaling.href
      },
      {
        id: awsAvailability.id,
        title: awsAvailability.title,
        href: awsAvailability.href
      },
      {
        id: awsCosts.id,
        title: awsCosts.title,
        href: awsCosts.href
      }
    ]
  },
  {
    "id": "acceso",
    "title": "Cuenta e IAM",
    "description": "Preparar acceso de trabajo y comprender permisos.",
    href: awsAccountAccess.href,
    lessons: [
      {
        id: awsAccountAccess.id,
        title: awsAccountAccess.title,
        href: awsAccountAccess.href
      },
      {
        id: 'aws-iam-policies',
        title: 'IAM: políticas y permisos',
        href: '/theory/nube/aws/02-seguridad/01-iam/02-politicas-y-permisos'
      },
      {
        id: 'aws-iam-roles',
        title: 'IAM: roles y credenciales',
        href: '/theory/nube/aws/02-seguridad/01-iam/03-roles-y-credenciales'
      },
      {
        id: 'aws-iam-evaluation',
        title: 'Evaluación de permisos y diagnóstico',
        href: '/theory/aws/iam/evaluacion-de-permisos-y-diagnostico'
      }
    ],
    "topics": [
      "Identidades",
      "Políticas",
      "Roles",
      "Evaluación"
    ]
  }
];
export const awsBlocks: LearningChapter[] = [
  {
    id: 'bases-aws',
    title: 'Bases de AWS',
    description: 'Construir el modelo mental de cloud y controlar el acceso a la cuenta.',
    topics: ['Cloud', 'Cuenta', 'IAM'],
    children: [
      {
        ...awsPath[0],
        id: 'fundamentos-cloud',
        title: 'Fundamentos de cloud'
      },
      {
        ...awsPath[1],
        id: 'cuenta-identidad',
        title: 'Cuenta e identidad'
      }
    ],
    lessons: [
      {
        id: 'glosario',
        title: 'Glosario AWS esencial',
        href: '/theory/nube/aws/08-practica/04-glosario'
      }
    ]
  },
  {
    id: 'redes-conectividad',
    title: 'Redes y conectividad',
    description: 'Diseñar aislamiento, comunicación, nombres y distribución del tráfico.',
    topics: [
      'VPC', 'Routing', 'DNS', 'CDN'
    ],
    children: [
      {
        id: 'redes',
        title: 'Redes privadas',
        description: 'Subredes, rutas y controles de seguridad para recursos AWS.',
        topics: ['VPC', 'Subredes', 'Routing'],
        lessons: [
          {
            id: 'vpc-subredes',
            title: 'VPC y subredes',
            href: '/theory/nube/aws/03-redes/01-vpc-y-subredes'
          },
          {
            id: 'routing-seguridad',
            title: 'Routing, conectividad y seguridad de red',
            href: '/theory/nube/aws/03-redes/02-routing-y-seguridad'
          }
        ]
      },
      {
        id: 'dns-distribucion',
        title: 'DNS y distribución',
        description: 'Resolver nombres y acercar o repartir el tráfico.',
        topics: ['Route 53', 'Balanceo', 'CloudFront'],
        lessons: [
          {
            id: 'dns-balanceo-cdn',
            title: 'DNS, balanceo y CDN',
            href: '/theory/nube/aws/03-redes/03-dns-balanceo-y-cdn'
          }
        ]
      }
    ]
  },
  {
    id: 'computo',
    title: 'Cómputo',
    description: 'Comparar máquinas virtuales, funciones y plataformas de contenedores.',
    topics: [
      'EC2', 'Lambda', 'ECS', 'EKS'
    ],
    children: [
      {
        id: 'maquinas-virtuales',
        title: 'Máquinas virtuales',
        description: 'Administrar capacidad de cómputo con control del sistema operativo.',
        topics: ['EC2'],
        lessons: [
          {
            id: 'ec2',
            title: 'Amazon EC2',
            href: '/theory/nube/aws/04-computo/01-ec2'
          }
        ]
      },
      {
        id: 'funciones',
        title: 'Funciones',
        description: 'Ejecutar código bajo demanda sin administrar servidores.',
        topics: ['Lambda'],
        lessons: [
          {
            id: 'lambda',
            title: 'AWS Lambda',
            href: '/theory/nube/aws/06-aplicaciones/01-lambda'
          }
        ]
      },
      {
        id: 'contenedores',
        title: 'Contenedores',
        description: 'Empaquetar y ejecutar aplicaciones con una plataforma gestionada.',
        topics: ['ECR', 'ECS', 'Fargate'],
        lessons: [
          {
            id: 'ecs-fargate',
            title: 'ECS, Fargate y ECR',
            href: '/theory/nube/aws/06-aplicaciones/03-contenedores'
          }
        ]
      },
      {
        id: 'kubernetes',
        title: 'Kubernetes',
        description: 'Operar Kubernetes administrado cuando la complejidad lo justifica.',
        topics: ['EKS'],
        lessons: [
          {
            id: 'eks',
            title: 'Amazon EKS',
            href: '/theory/nube/aws/06-aplicaciones/04-eks'
          }
        ]
      }
    ]
  },
  {
    id: 'apis',
    title: 'APIs',
    description: 'Exponer capacidades de aplicación con contratos, integración y control de acceso.',
    topics: ['API Gateway', 'Integración', 'Autorización'],
    children: [
      {
        id: 'api-gateway',
        title: 'API Gateway',
        description: 'Publicar y gobernar APIs administradas.',
        topics: ['Rutas', 'Integraciones', 'Cuotas'],
        lessons: [
          {
            id: 'api-gateway-fundamentos',
            title: 'API Gateway',
            href: '/theory/nube/aws/06-aplicaciones/01-lambda-y-api-gateway'
          }
        ]
      }
    ]
  },
  {
    id: 'almacenamiento-datos',
    title: 'Almacenamiento y datos',
    description: 'Elegir persistencia según acceso, consistencia, escala y ciclo de vida.',
    topics: ['S3', 'RDS', 'DynamoDB'],
    children: [
      {
        id: 'objetos',
        title: 'Objetos, bloques y archivos',
        description: 'Elegir almacenamiento según el tipo de dato y su forma de acceso.',
        topics: ['S3', 'EBS', 'EFS'],
        lessons: [
          {
            id: 's3',
            title: 'Amazon S3',
            href: '/theory/nube/aws/04-almacenamiento/01-s3'
          },
          {
            id: 'bloques-archivos',
            title: 'EBS, EFS y selección de almacenamiento',
            href: '/theory/nube/aws/04-almacenamiento/02-almacenamiento-de-bloques-y-archivos'
          }
        ]
      },
      {
        id: 'bases-datos',
        title: 'Bases de datos',
        description: 'Comparar persistencia relacional, NoSQL y caché según el patrón de acceso.',
        topics: ['RDS', 'DynamoDB', 'Caché'],
        lessons: [
          {
            id: 'rds',
            title: 'Amazon RDS',
            href: '/theory/nube/aws/05-datos/01-rds'
          },
          {
            id: 'dynamodb',
            title: 'Amazon DynamoDB',
            href: '/theory/nube/aws/05-datos/02-dynamodb'
          },
          {
            id: 'cache-seleccion',
            title: 'Caché y selección de datos',
            href: '/theory/nube/aws/05-datos/03-cache-y-seleccion-de-datos'
          }
        ]
      }
    ]
  },
  {
    id: 'mensajeria-eventos',
    title: 'Mensajería y eventos',
    description: 'Desacoplar componentes y reaccionar a hechos del sistema.',
    topics: ['SQS', 'SNS', 'EventBridge'],
    children: [
      {
        id: 'eventos',
        title: 'Eventos',
        description: 'Comparar colas, publicadores y buses de eventos.',
        topics: ['SQS', 'SNS', 'EventBridge'],
        lessons: [
          {
            id: 'eventos-fundamentos',
            title: 'SQS, SNS y EventBridge',
            href: '/theory/nube/aws/06-aplicaciones/02-mensajeria-y-eventos'
          }
        ]
      }
    ]
  },
  {
    id: 'paquetes-dependencias',
    title: 'Paquetes y dependencias',
    description: 'Gestionar artefactos privados y dependencias reproducibles.',
    topics: ['CodeArtifact'],
    lessons: [
      {
        id: 'codeartifact',
        title: 'AWS CodeArtifact',
        href: '/theory/nube/aws/06-aplicaciones/05-codeartifact'
      }
    ]
  },
  {
    id: 'seguridad',
    title: 'Seguridad aplicada',
    description: 'Extender la identidad y el control de acceso hacia las aplicaciones.',
    topics: ['Cognito', 'Secrets Manager', 'KMS'],
    children: [
      {
        id: 'seguridad-aplicada',
        title: 'Seguridad aplicada en AWS',
        description: 'Reunir identidad de aplicaciones, secretos y cifrado según el caso.',
        topics: ['Cognito', 'Secrets Manager', 'KMS'],
        lessons: [
          {
            id: 'seguridad-aplicada',
            title: 'Seguridad aplicada en AWS',
            href: '/theory/nube/aws/02-seguridad/02-seguridad-aplicada'
          }
        ]
      }
    ]
  },
  {
    id: 'observabilidad',
    title: 'Observabilidad y auditoría',
    description: 'Medir, registrar y reconstruir lo que ocurre en una plataforma.',
    topics: ['CloudWatch', 'CloudTrail'],
    children: [
      {
        id: 'cloudwatch',
        title: 'CloudWatch',
        description: 'Trabajar con métricas, logs, alarmas y tableros.',
        topics: ['Métricas', 'Logs', 'Alarmas'],
        lessons: [
          {
            id: 'cloudwatch-fundamentos',
            title: 'CloudWatch: métricas, logs y alarmas',
            href: '/theory/nube/aws/07-operacion/01-observabilidad'
          }
        ]
      },
      {
        id: 'fiabilidad',
        title: 'Fiabilidad y recuperación',
        description: 'Relacionar escalado, continuidad y recuperación operativa.',
        topics: ['Fiabilidad', 'Backups', 'Recuperación'],
        lessons: [
          {
            id: 'fiabilidad-recuperacion',
            title: 'Fiabilidad, escalado y recuperación',
            href: '/theory/nube/aws/07-operacion/04-fiabilidad-y-recuperacion'
          }
        ]
      }
    ]
  },
  {
    id: 'infraestructura-entrega',
    title: 'Infraestructura y entrega',
    description: 'Automatizar infraestructura y cambios de software de forma repetible.',
    topics: [
      'CloudFormation', 'CDK', 'CodeBuild', 'CodePipeline', 'CodeDeploy'
    ],
    children: [
      {
        id: 'iac',
        title: 'Infraestructura como código',
        description: 'Definir y revisar infraestructura de forma reproducible.',
        topics: ['CloudFormation', 'CDK'],
        lessons: [
          {
            id: 'iac-fundamentos',
            title: 'Infraestructura como código',
            href: '/theory/nube/aws/07-operacion/02-infrastructure-as-code'
          }
        ]
      },
      {
        id: 'entrega-continua',
        title: 'Entrega continua',
        description: 'Automatizar construcción, validación y entrega de cambios.',
        topics: ['CodeBuild', 'CodePipeline', 'CodeDeploy'],
        lessons: [
          {
            id: 'cicd',
            title: 'CI/CD en AWS',
            href: '/theory/nube/aws/07-operacion/03-cicd'
          }
        ]
      }
    ]
  }
];
