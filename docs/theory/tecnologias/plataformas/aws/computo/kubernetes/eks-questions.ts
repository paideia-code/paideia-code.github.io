import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsEksBank: QuestionBank = {
  id: 'aws-eks',
  revision: 1,
  contentId: 'aws-eks',
  title: 'Amazon EKS',
  questions: [
    {
      id: 'aws-eks-001',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Responsabilidades',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué administra AWS en un control plane EKS gestionado?',
      options: [
        {
          id: 'a',
          text: 'La infraestructura del control plane según el servicio EKS.',
          explanation: 'El equipo sigue gestionando workloads, configuración, acceso y operación.'
        },
        {
          id: 'b',
          text: 'Todos los manifests y permisos de los pods.',
          explanation: 'Esas decisiones siguen siendo del equipo.'
        },
        {
          id: 'c',
          text: 'La lógica de negocio de cada contenedor.',
          explanation: 'El servicio no administra la aplicación.'
        },
        {
          id: 'd',
          text: 'La disponibilidad de cualquier dependencia externa.',
          explanation: 'Las dependencias requieren diseño propio.'
        }
      ],
      correctIds: ['a'],
      explanation: 'EKS reduce la operación del control plane, no convierte Kubernetes en un servicio sin responsabilidades.',
      source: 'https://docs.aws.amazon.com/eks/latest/userguide/shared-responsibility.html'
    },
    {
      id: 'aws-eks-002',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Modelo Kubernetes',
      level: 'básico',
      skill: 'concepto',
      prompt: '¿Qué representa un Pod en Kubernetes?',
      options: [
        {
          id: 'a',
          text: 'La unidad mínima de scheduling que contiene uno o más containers.',
          explanation: 'Los pods son la unidad que el scheduler coloca en capacidad.'
        },
        {
          id: 'b',
          text: 'El control plane completo.',
          explanation: 'El control plane coordina el cluster.'
        },
        {
          id: 'c',
          text: 'Una imagen almacenada en ECR.',
          explanation: 'La imagen es el artefacto; el pod es una ejecución.'
        },
        {
          id: 'd',
          text: 'Una tabla de rutas de VPC.',
          explanation: 'La red AWS es otra capa.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Deployments, Services y otros recursos trabajan alrededor de pods.',
      source: 'https://kubernetes.io/docs/concepts/workloads/pods/'
    },
    {
      id: 'aws-eks-003',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Modelo Kubernetes',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué diferencia expresa mejor readinessProbe y livenessProbe?',
      options: [
        {
          id: 'a',
          text: 'Readiness decide si recibe tráfico; liveness ayuda a detectar un proceso que necesita reinicio.',
          explanation: 'Son condiciones distintas del ciclo del workload.'
        },
        {
          id: 'b',
          text: 'Ambas solo revisan si la imagen existe.',
          explanation: 'La imagen se verifica antes de ejecutar.'
        },
        {
          id: 'c',
          text: 'Liveness decide permisos IAM y readiness crea un rol.',
          explanation: 'Las probes no administran identidades.'
        },
        {
          id: 'd',
          text: 'Readiness siempre reinicia el pod.',
          explanation: 'La readiness retira tráfico, no es un reinicio por sí misma.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Un pod Running puede no estar listo para tráfico; las probes expresan estados distintos.',
      source: 'https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/'
    },
    {
      id: 'aws-eks-004',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Capacidad',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: '¿Qué riesgo hay si un workload no declara requests de CPU y memoria?',
      options: [
        {
          id: 'a',
          text: 'El scheduler puede colocarlo de forma deficiente y el cluster no representa bien su capacidad.',
          explanation: 'Requests participan en scheduling y planificación.'
        },
        {
          id: 'b',
          text: 'El pod obtiene automáticamente un nodo dedicado.',
          explanation: 'No existe esa garantía.'
        },
        {
          id: 'c',
          text: 'ECR cambia el digest de la imagen.',
          explanation: 'No hay relación.'
        },
        {
          id: 'd',
          text: 'La API de Kubernetes se vuelve pública.',
          explanation: 'La exposición depende del acceso configurado.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Requests y limits son parte del contrato de capacidad del workload.',
      source: 'https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
    },
    {
      id: 'aws-eks-005',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Red',
      level: 'intermedio',
      skill: 'concepto',
      prompt: '¿Qué integra el VPC CNI de EKS?',
      options: [
        {
          id: 'a',
          text: 'La red de pods con interfaces y direcciones de la VPC según la configuración.',
          explanation: 'Eso conecta el networking Kubernetes con la red AWS.'
        },
        {
          id: 'b',
          text: 'La construcción de imágenes Docker.',
          explanation: 'Las imágenes se construyen fuera del CNI.'
        },
        {
          id: 'c',
          text: 'La autorización RBAC de todos los usuarios.',
          explanation: 'RBAC es una capa de autorización Kubernetes.'
        },
        {
          id: 'd',
          text: 'El backup de los volúmenes.',
          explanation: 'El CNI no administra backups.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El modelo de red afecta IPs disponibles, rutas, SG y límites de subnets.',
      source: 'https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html'
    },
    {
      id: 'aws-eks-006',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Identidad',
      level: 'intermedio',
      skill: 'aplicación',
      prompt: 'Un pod necesita leer S3. ¿Qué diseño evita entregar permisos amplios al nodo?',
      options: [
        {
          id: 'a',
          text: 'Una identidad específica del workload, como IRSA o EKS Pod Identity según el diseño.',
          explanation: 'El permiso se limita al pod o service account que lo necesita.'
        },
        {
          id: 'b',
          text: 'El rol administrador del nodo para todos los pods.',
          explanation: 'Amplía innecesariamente la superficie de permisos.'
        },
        {
          id: 'c',
          text: 'Una clave estática dentro de la imagen.',
          explanation: 'No es segura ni rotatable como diseño base.'
        },
        {
          id: 'd',
          text: 'Una NACL con permiso S3.',
          explanation: 'NACL no entrega autorización IAM.'
        }
      ],
      correctIds: ['a'],
      explanation: 'IAM y RBAC son capas distintas; la identidad del pod debe ser específica.',
      source: 'https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html'
    },
    {
      id: 'aws-eks-007',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Despliegue',
      level: 'intermedio',
      skill: 'análisis',
      prompt: '¿Qué evidencia ayuda a saber qué versión está desplegada?',
      options: [
        {
          id: 'a',
          text: 'Manifest versionado, imagen por digest y estado del rollout.',
          explanation: 'Las tres piezas conectan intención, artefacto y estado real.'
        },
        {
          id: 'b',
          text: 'Solo el nombre del cluster.',
          explanation: 'El nombre no identifica el workload.'
        },
        {
          id: 'c',
          text: 'Solo que el pod esté Running.',
          explanation: 'Running no identifica versión ni readiness.'
        },
        {
          id: 'd',
          text: 'El tamaño de la subnet.',
          explanation: 'No representa la revisión desplegada.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La trazabilidad requiere configuración, imagen y estado del rollout.',
      source: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/'
    },
    {
      id: 'aws-eks-008',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Operación',
      level: 'avanzado',
      skill: 'análisis',
      prompt: '¿Por qué actualizar EKS requiere revisar add-ons y workloads?',
      options: [
        {
          id: 'a',
          text: 'Porque versiones de cluster, CNI, controladores y manifests deben ser compatibles.',
          explanation: 'La plataforma completa tiene dependencias versionadas.'
        },
        {
          id: 'b',
          text: 'Porque una actualización siempre elimina todos los pods.',
          explanation: 'El comportamiento depende del procedimiento y workload.'
        },
        {
          id: 'c',
          text: 'Porque ECR cambia todas las imágenes.',
          explanation: 'El registro no cambia los artefactos por actualizar el cluster.'
        },
        {
          id: 'd',
          text: 'Porque RBAC deja de existir.',
          explanation: 'RBAC sigue formando parte del modelo.'
        }
      ],
      correctIds: ['a'],
      explanation: 'Actualizar una pieza sin validar compatibilidad puede interrumpir la plataforma.',
      source: 'https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html'
    },
    {
      id: 'aws-eks-009',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Decisión de plataforma',
      level: 'avanzado',
      skill: 'análisis',
      prompt: '¿Qué condición justifica evaluar EKS en lugar de ECS/Fargate?',
      options: [
        {
          id: 'a',
          text: 'Un requisito real de Kubernetes, su ecosistema o una plataforma compartida que compense la complejidad.',
          explanation: 'EKS debe responder a una necesidad concreta, no solo al uso de contenedores.'
        },
        {
          id: 'b',
          text: 'Que la aplicación use cualquier imagen Docker.',
          explanation: 'ECS/Fargate también ejecuta imágenes.'
        },
        {
          id: 'c',
          text: 'Querer menos componentes que operar.',
          explanation: 'EKS suele añadir componentes y responsabilidades.'
        },
        {
          id: 'd',
          text: 'No necesitar RBAC ni manifiestos.',
          explanation: 'Kubernetes depende de esos conceptos.'
        }
      ],
      correctIds: ['a'],
      explanation: 'La portabilidad y el ecosistema tienen un coste operativo que debe justificarse.',
      source: 'https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html'
    },
    {
      id: 'aws-eks-010',
      revision: 1,
      contentId: 'aws-eks',
      topic: 'Diagnóstico',
      level: 'avanzado',
      skill: 'análisis',
      prompt: 'Un Service no recibe tráfico aunque los pods están Running. ¿Qué revisarías?',
      options: [
        {
          id: 'a',
          text: 'Labels y selectors, readiness, puertos, Service, controlador de entrada y red.',
          explanation: 'El estado Running no garantiza selección ni exposición correcta.'
        },
        {
          id: 'b',
          text: 'Solo el digest de la imagen.',
          explanation: 'La imagen puede estar funcionando y el problema ser de exposición.'
        },
        {
          id: 'c',
          text: 'Solo el nombre del namespace.',
          explanation: 'El namespace no explica todas las capas.'
        },
        {
          id: 'd',
          text: 'Cambiar a un nodo más grande sin evidencia.',
          explanation: 'La capacidad puede no ser la causa.'
        }
      ],
      correctIds: ['a'],
      explanation: 'El diagnóstico sigue selección, readiness, puertos y entrada antes de cambiar capacidad.',
      source: 'https://kubernetes.io/docs/concepts/services-networking/service/'
    }
  ],
  presets: [
    {
      id: 'modelo',
      title: '1 · Modelo de EKS',
      description: 'Distingue control plane, nodos, pods y probes.',
      questionIds: ['aws-eks-001', 'aws-eks-002', 'aws-eks-003']
    },
    {
      id: 'capacidad-red',
      title: '2 · Capacidad, red e identidad',
      description: 'Relaciona recursos, CNI y permisos de workloads.',
      questionIds: ['aws-eks-004', 'aws-eks-005', 'aws-eks-006']
    },
    {
      id: 'operacion',
      title: '3 · Operación y decisiones',
      description: 'Analiza despliegues, upgrades y elección de plataforma.',
      questionIds: [
        'aws-eks-007', 'aws-eks-008', 'aws-eks-009', 'aws-eks-010'
      ]
    },
    {
      id: 'integrador',
      title: '4 · Repaso integrador',
      description: 'Diagnostica un Service y relaciona responsabilidades.',
      questionIds: ['aws-eks-003', 'aws-eks-006', 'aws-eks-010']
    }
  ]
};
