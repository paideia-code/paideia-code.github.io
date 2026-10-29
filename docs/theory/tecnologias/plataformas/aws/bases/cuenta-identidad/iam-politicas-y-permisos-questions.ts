import type { Question, QuestionBank } from '@site/src/lib/learning/types';
const source = 'https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html';
const questions: Question[] = [
  {
    id: 'aws-iam-policies-001',
    revision: 1,
    contentId: 'aws-iam-policies',
    topic: 'Estructura',
    level: 'básico',
    skill: 'concepto',
    prompt: '¿Qué elemento indica si una sentencia permite o deniega una acción?',
    options: [
      {
        id: 'a',
        text: 'Effect',
        explanation: 'Effect define Allow o Deny.'
      },
      {
        id: 'b',
        text: 'Resource',
        explanation: 'Resource identifica el recurso afectado.'
      },
      {
        id: 'c',
        text: 'Principal',
        explanation: 'Principal identifica quién participa en una resource policy.'
      }
    ],
    correctIds: ['a'],
    explanation: 'Effect expresa el resultado de la sentencia: Allow o Deny.',
    source
  },
  {
    id: 'aws-iam-policies-002',
    revision: 1,
    contentId: 'aws-iam-policies',
    topic: 'Mínimo privilegio',
    level: 'básico',
    skill: 'aplicación',
    prompt: 'Una aplicación solo necesita leer objetos de un prefijo S3. ¿Qué permiso se ajusta mejor?',
    options: [
      {
        id: 'a',
        text: 's3:GetObject sobre el ARN de ese prefijo',
        explanation: 'Limita acción y recursos al uso real.'
      },
      {
        id: 'b',
        text: 's3:* sobre todos los buckets',
        explanation: 'Concede mucho más de lo necesario.'
      },
      {
        id: 'c',
        text: 'iam:* sobre la cuenta',
        explanation: 'No corresponde a leer objetos.'
      }
    ],
    correctIds: ['a'],
    explanation: 'El mínimo privilegio delimita acción, recurso y contexto al uso requerido.',
    source
  },
  {
    id: 'aws-iam-policies-003',
    revision: 1,
    contentId: 'aws-iam-policies',
    topic: 'Evaluación',
    level: 'intermedio',
    skill: 'análisis',
    prompt: 'Una identidad tiene Allow aplicable y una policy tiene Deny explícito aplicable. ¿Cuál es el resultado?',
    options: [
      {
        id: 'a',
        text: 'La solicitud se deniega',
        explanation: 'Un Deny explícito aplicable prevalece.'
      },
      {
        id: 'b',
        text: 'La solicitud se permite porque existe Allow',
        explanation: 'Allow no neutraliza un Deny explícito.'
      },
      {
        id: 'c',
        text: 'Depende solo de la región de la consola',
        explanation: 'La consola no decide por sí sola la autorización.'
      }
    ],
    correctIds: ['a'],
    explanation: 'La evaluación efectiva conserva la prioridad del Deny explícito.',
    source
  },
  {
    id: 'aws-iam-policies-004',
    revision: 1,
    contentId: 'aws-iam-policies',
    topic: 'Diagnóstico',
    level: 'intermedio',
    skill: 'análisis',
    prompt: 'Una llamada devuelve AccessDenied. ¿Qué conviene identificar primero?',
    options: [
      {
        id: 'a',
        text: 'Principal, acción y recurso exactos',
        explanation: 'Sin esos datos no se puede revisar la policy aplicable.'
      },
      {
        id: 'b',
        text: 'Cambiar todas las policies a AdministratorAccess',
        explanation: 'Oculta el problema y rompe mínimo privilegio.'
      },
      {
        id: 'c',
        text: 'Crear otro usuario IAM',
        explanation: 'No explica qué identidad realizó la llamada.'
      }
    ],
    correctIds: ['a'],
    explanation: 'El diagnóstico parte de la solicitud concreta y del principal efectivo.',
    source
  },
  {
    id: 'aws-iam-policies-005',
    revision: 1,
    contentId: 'aws-iam-policies',
    topic: 'Tipos de policy',
    level: 'intermedio',
    skill: 'concepto',
    prompt: '¿Qué diferencia resume mejor una identity policy y una resource policy?',
    options: [
      {
        id: 'a',
        text: 'Una se adjunta a una identidad y la otra al recurso',
        explanation: 'La ubicación cambia cómo se expresa la autorización.'
      },
      {
        id: 'b',
        text: 'Una siempre permite y la otra siempre deniega',
        explanation: 'Ambas pueden contener Allow o Deny.'
      },
      {
        id: 'c',
        text: 'Una solo funciona en la consola',
        explanation: 'Ambas participan en solicitudes de API.'
      }
    ],
    correctIds: ['a'],
    explanation: 'La policy puede estar asociada a la identidad o al recurso.',
    source
  },
  {
    id: 'aws-iam-policies-006',
    revision: 1,
    contentId: 'aws-iam-policies',
    topic: 'Capas de control',
    level: 'avanzado',
    skill: 'análisis',
    prompt: 'Un Allow no produce acceso. ¿Qué capa adicional merece revisión?',
    options: [
      {
        id: 'a',
        text: 'SCP, permission boundary, session policy o endpoint policy',
        explanation: 'Estas capas pueden limitar el permiso efectivo.'
      },
      {
        id: 'b',
        text: 'El color del botón de la consola',
        explanation: 'La presentación no concede autorización.'
      },
      {
        id: 'c',
        text: 'El nombre descriptivo del usuario',
        explanation: 'El nombre no sustituye una policy aplicable.'
      }
    ],
    correctIds: ['a'],
    explanation: 'La autorización puede quedar limitada por controles superiores o contextuales.',
    source
  }
];
export const awsIamPoliciesBank: QuestionBank = {
  id: 'aws-iam-policies',
  revision: 1,
  contentId: 'aws-iam-policies',
  title: 'IAM: políticas y permisos',
  questions,
  presets: [
    {
      id: 'fundamentos',
      title: '1 · Fundamentos y mínimo privilegio',
      description: 'Sintaxis, alcance y concesión acotada.',
      questionIds: questions.slice(0, 2).map(q => q.id)
    },
    {
      id: 'evaluacion',
      title: '2 · Evaluación y diagnóstico',
      description: 'Deny explícito, capas y AccessDenied.',
      questionIds: questions.slice(2).map(q => q.id)
    }
  ]
};
