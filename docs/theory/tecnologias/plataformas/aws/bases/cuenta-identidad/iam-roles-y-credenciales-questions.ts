import type { Question, QuestionBank } from '@site/src/lib/learning/types';
const source = 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html';
const questions: Question[] = [
  {
    id: 'aws-iam-roles-001',
    revision: 1,
    contentId: 'aws-iam-roles',
    topic: 'Credenciales temporales',
    level: 'básico',
    skill: 'concepto',
    prompt: '¿Qué caracteriza a las credenciales obtenidas al asumir un rol?',
    options: [
      {
        id: 'a',
        text: 'Son temporales e incluyen un token de sesión',
        explanation: 'STS entrega un conjunto temporal con expiración.'
      },
      {
        id: 'b',
        text: 'Nunca expiran',
        explanation: 'La expiración es parte de su modelo.'
      },
      {
        id: 'c',
        text: 'Solo sirven para iniciar sesión en la consola',
        explanation: 'También se usan en llamadas de API.'
      }
    ],
    correctIds: ['a'],
    explanation: 'La temporalidad reduce la ventana de exposición.',
    source
  },
  {
    id: 'aws-iam-roles-002',
    revision: 1,
    contentId: 'aws-iam-roles',
    topic: 'Trust policy',
    level: 'intermedio',
    skill: 'concepto',
    prompt: '¿Qué expresa principalmente la trust policy de un rol?',
    options: [
      {
        id: 'a',
        text: 'Quién puede asumir el rol',
        explanation: 'Define la relación de confianza del rol.'
      },
      {
        id: 'b',
        text: 'Qué objetos S3 puede leer la aplicación',
        explanation: 'Eso pertenece a la policy de permisos.'
      },
      {
        id: 'c',
        text: 'Cuánto cuesta el rol',
        explanation: 'IAM roles no se autorizan mediante precios.'
      }
    ],
    correctIds: ['a'],
    explanation: 'La confianza y los permisos son decisiones distintas.',
    source
  },
  {
    id: 'aws-iam-roles-003',
    revision: 1,
    contentId: 'aws-iam-roles',
    topic: 'Roles de servicio',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: '¿Qué diferencia mejor un ECS task role de un execution role?',
    options: [
      {
        id: 'a',
        text: 'El task role lo usa el código; el execution role ayuda a iniciar la tarea',
        explanation: 'Separan runtime y arranque del workload.'
      },
      {
        id: 'b',
        text: 'Son dos nombres para la misma policy',
        explanation: 'Cumplen responsabilidades distintas.'
      },
      {
        id: 'c',
        text: 'El execution role contiene siempre permisos de negocio',
        explanation: 'No debe recibir permisos del runtime sin motivo.'
      }
    ],
    correctIds: ['a'],
    explanation: 'Separar ambos roles reduce permisos innecesarios.',
    source
  },
  {
    id: 'aws-iam-roles-004',
    revision: 1,
    contentId: 'aws-iam-roles',
    topic: 'Workloads',
    level: 'intermedio',
    skill: 'aplicación',
    prompt: 'Una aplicación en EC2 necesita leer S3. ¿Qué opción es preferible?',
    options: [
      {
        id: 'a',
        text: 'Un rol asociado mediante instance profile',
        explanation: 'La instancia obtiene credenciales temporales.'
      },
      {
        id: 'b',
        text: 'Una access key escrita en el código',
        explanation: 'Expone una credencial de larga duración.'
      },
      {
        id: 'c',
        text: 'La contraseña del usuario raíz',
        explanation: 'Es una práctica insegura y desproporcionada.'
      }
    ],
    correctIds: ['a'],
    explanation: 'El rol permite entregar permisos al workload sin incrustar secretos.',
    source
  },
  {
    id: 'aws-iam-roles-005',
    revision: 1,
    contentId: 'aws-iam-roles',
    topic: 'CI/CD',
    level: 'avanzado',
    skill: 'análisis',
    prompt: '¿Qué reduce la necesidad de access keys permanentes en GitHub Actions?',
    options: [
      {
        id: 'a',
        text: 'Federación OIDC hacia un rol con trust y permisos limitados',
        explanation: 'El workflow obtiene credenciales temporales bajo condiciones.'
      },
      {
        id: 'b',
        text: 'Guardar una access key de administrador como secret',
        explanation: 'Mantiene una credencial larga y demasiado amplia.'
      },
      {
        id: 'c',
        text: 'Compartir el rol entre todos los repositorios sin condiciones',
        explanation: 'Amplía innecesariamente la confianza.'
      }
    ],
    correctIds: ['a'],
    explanation: 'OIDC permite federar el workflow y restringir quién puede asumir el rol.',
    source
  },
  {
    id: 'aws-iam-roles-006',
    revision: 1,
    contentId: 'aws-iam-roles',
    topic: 'Separación de responsabilidades',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Dos microservicios comparten infraestructura, pero solo uno necesita escribir S3. ¿Qué diseño aplica mejor mínimo privilegio?',
    options: [
      {
        id: 'a',
        text: 'Roles separados y permiso de escritura solo en el rol necesario',
        explanation: 'La identidad del workload refleja su necesidad real.'
      },
      {
        id: 'b',
        text: 'Un rol común con permisos de administrador',
        explanation: 'Un fallo afecta a ambos servicios.'
      },
      {
        id: 'c',
        text: 'Una access key compartida',
        explanation: 'Impide atribuir y limitar correctamente el acceso.'
      }
    ],
    correctIds: ['a'],
    explanation: 'Roles independientes reducen el radio de impacto.',
    source
  }
];
export const awsIamRolesBank: QuestionBank = {
  id: 'aws-iam-roles',
  revision: 1,
  contentId: 'aws-iam-roles',
  title: 'IAM: roles y credenciales',
  questions,
  presets: [
    {
      id: 'roles',
      title: '1 · Roles y credenciales temporales',
      description: 'Confianza, STS y workloads.',
      questionIds: questions.slice(0, 4).map(q => q.id)
    },
    {
      id: 'federacion',
      title: '2 · CI/CD y separación',
      description: 'OIDC y roles independientes.',
      questionIds: questions.slice(4).map(q => q.id)
    }
  ]
};
