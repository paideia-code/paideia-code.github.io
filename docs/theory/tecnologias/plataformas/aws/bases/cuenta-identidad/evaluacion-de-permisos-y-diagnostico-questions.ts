import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsIamEvaluationBank: QuestionBank = {
  "id": "aws-iam-evaluation",
  "revision": 2,
  "contentId": "aws-iam-evaluation",
  "title": "Evaluación de permisos y diagnóstico",
  "questions": [
    {
      "id": "aws-iam-evaluation-101",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Solicitud efectiva",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué identifica GetCallerIdentity?",
      "options": [
        {
          "id": "a",
          "text": "El principal efectivo que realiza esa llamada.",
          "explanation": "No enumera todos sus permisos."
        },
        {
          "id": "b",
          "text": "Una garantía de acceso a todos los buckets.",
          "explanation": "Identidad no equivale a autorización."
        },
        {
          "id": "c",
          "text": "El usuario final de toda API del producto.",
          "explanation": "El backend puede usar un rol común."
        }
      ],
      "correctIds": ["a"],
      "explanation": "No enumera todos sus permisos.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    },
    {
      "id": "aws-iam-evaluation-102",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Solicitud efectiva",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "El terminal local usa un rol distinto del proceso. ¿Qué evidencia debes obtener?",
      "options": [
        {
          "id": "a",
          "text": "Otra captura del mismo terminal solamente.",
          "explanation": "No acredita el contexto investigado."
        },
        {
          "id": "b",
          "text": "El nombre visible del contenedor.",
          "explanation": "No demuestra quién firma la llamada."
        },
        {
          "id": "c",
          "text": "La identidad efectiva en el contexto del proceso.",
          "explanation": "La fuente de credenciales puede diferir."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La fuente de credenciales puede diferir.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    },
    {
      "id": "aws-iam-evaluation-103",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Solicitud efectiva",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Un token vencido y un Deny explícito se corrigen igual?",
      "options": [
        {
          "id": "a",
          "text": "Sí, haciendo público cualquier recurso.",
          "explanation": "Es una ampliación insegura y no corrige autenticación."
        },
        {
          "id": "b",
          "text": "No; uno exige revisar credenciales y otro autorización aplicable.",
          "explanation": "Son capas diferentes."
        },
        {
          "id": "c",
          "text": "Sí, añadiendo administrador a todo rol.",
          "explanation": "No renueva una credencial vencida."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Son capas diferentes.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    },
    {
      "id": "aws-iam-evaluation-104",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Solicitud efectiva",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "GetObject funciona y ListBucket falla. ¿Qué debes comparar?",
      "options": [
        {
          "id": "a",
          "text": "Acción y ARN de objeto frente a bucket.",
          "explanation": "Son permisos distintos."
        },
        {
          "id": "b",
          "text": "Solo el nombre del fichero.",
          "explanation": "No define ListBucket."
        },
        {
          "id": "c",
          "text": "El tipo de CPU.",
          "explanation": "No determina esa autorización."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Son permisos distintos.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    },
    {
      "id": "aws-iam-evaluation-105",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Capas de evaluación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué efecto tiene un Deny explícito aplicable?",
      "options": [
        {
          "id": "a",
          "text": "Se neutraliza agregando otro Allow idéntico.",
          "explanation": "No elimina la denegación."
        },
        {
          "id": "b",
          "text": "Solo cambia el texto del error.",
          "explanation": "Afecta el resultado."
        },
        {
          "id": "c",
          "text": "Prevalece sobre una concesión Allow.",
          "explanation": "Debe revisarse su alcance."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Debe revisarse su alcance.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html"
    },
    {
      "id": "aws-iam-evaluation-106",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Capas de evaluación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Una SCP concede a un usuario todas las acciones que permite?",
      "options": [
        {
          "id": "a",
          "text": "Sí, si contiene un wildcard.",
          "explanation": "El wildcard no cambia su función."
        },
        {
          "id": "b",
          "text": "No; establece límites de organización aplicables.",
          "explanation": "La concesión efectiva necesita otras políticas."
        },
        {
          "id": "c",
          "text": "Sí, reemplaza cualquier rol.",
          "explanation": "No es un mecanismo de identidad."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La concesión efectiva necesita otras políticas.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html"
    },
    {
      "id": "aws-iam-evaluation-107",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Capas de evaluación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "¿Por qué no basta aplicar una fórmula de intersección universal?",
      "options": [
        {
          "id": "a",
          "text": "Tipo de principal, resource policies y límites implícitos tienen matices.",
          "explanation": "Debe seguirse el modelo aplicable."
        },
        {
          "id": "b",
          "text": "Porque IAM decide aleatoriamente.",
          "explanation": "La evaluación tiene reglas."
        },
        {
          "id": "c",
          "text": "Porque todos los recursos son públicos.",
          "explanation": "No describe autorización AWS."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Debe seguirse el modelo aplicable.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html"
    },
    {
      "id": "aws-iam-evaluation-108",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Capas de evaluación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un objeto cifrado falla pese a permitir GetObject. ¿Qué capa adicional revisas?",
      "options": [
        {
          "id": "a",
          "text": "Solo el nombre de la región del navegador.",
          "explanation": "No resuelve política criptográfica."
        },
        {
          "id": "b",
          "text": "Crear un bucket nuevo público.",
          "explanation": "No es diagnóstico del recurso."
        },
        {
          "id": "c",
          "text": "Key policy y permisos KMS.",
          "explanation": "La operación puede necesitar descifrado."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La operación puede necesitar descifrado.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    },
    {
      "id": "aws-iam-evaluation-109",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Verificación y herramientas",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué valida Access Analyzer en una policy?",
      "options": [
        {
          "id": "a",
          "text": "La frescura del precio en caché.",
          "explanation": "No es su ámbito."
        },
        {
          "id": "b",
          "text": "Gramática y comprobaciones de prácticas según su alcance.",
          "explanation": "Ayuda a mejorar la definición."
        },
        {
          "id": "c",
          "text": "Todas las reglas de negocio de la aplicación.",
          "explanation": "No ejecuta esa verificación."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Ayuda a mejorar la definición.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-validation.html"
    },
    {
      "id": "aws-iam-evaluation-110",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Verificación y herramientas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué revisar una operación que deba seguir denegada?",
      "options": [
        {
          "id": "a",
          "text": "Comprueba que el cambio no amplió más acceso del necesario.",
          "explanation": "Verificar solo el éxito puede ocultar exceso."
        },
        {
          "id": "b",
          "text": "Para obtener una puntuación de CPU.",
          "explanation": "No es una métrica de rendimiento."
        },
        {
          "id": "c",
          "text": "Porque reemplaza la lectura de la policy.",
          "explanation": "Es evidencia complementaria."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Verificar solo el éxito puede ocultar exceso.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    },
    {
      "id": "aws-iam-evaluation-111",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Verificación y herramientas",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "No aparece GetObject en la auditoría consultada. ¿Qué conclusión procede?",
      "options": [
        {
          "id": "a",
          "text": "Que nadie leyó el objeto con certeza.",
          "explanation": "Es una inferencia no justificada."
        },
        {
          "id": "b",
          "text": "Que KMS borró el registro.",
          "explanation": "No se deduce."
        },
        {
          "id": "c",
          "text": "Revisar cobertura y habilitación de data events antes de inferir actividad.",
          "explanation": "Ausencia de registro puede ser ausencia de configuración."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Ausencia de registro puede ser ausencia de configuración.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    },
    {
      "id": "aws-iam-evaluation-112",
      "revision": 2,
      "contentId": "aws-iam-evaluation",
      "topic": "Verificación y herramientas",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un error menciona una policy. ¿Debes revisar solo esa?",
      "options": [
        {
          "id": "a",
          "text": "No hace falta revisar ninguna.",
          "explanation": "El diagnóstico exige evidencia."
        },
        {
          "id": "b",
          "text": "No; varias capas pueden impedir la solicitud.",
          "explanation": "El mensaje puede mostrar solo parte de las causas."
        },
        {
          "id": "c",
          "text": "Sí, garantiza que las otras permiten.",
          "explanation": "No es esa garantía."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El mensaje puede mostrar solo parte de las causas.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Solicitud efectiva",
      "description": "Resuelve casos de solicitud efectiva.",
      "questionIds": [
        "aws-iam-evaluation-101",
        "aws-iam-evaluation-102",
        "aws-iam-evaluation-103",
        "aws-iam-evaluation-104"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Capas de evaluación",
      "description": "Resuelve casos de capas de evaluación.",
      "questionIds": [
        "aws-iam-evaluation-105",
        "aws-iam-evaluation-106",
        "aws-iam-evaluation-107",
        "aws-iam-evaluation-108"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Verificación y herramientas",
      "description": "Resuelve casos de verificación y herramientas.",
      "questionIds": [
        "aws-iam-evaluation-109",
        "aws-iam-evaluation-110",
        "aws-iam-evaluation-111",
        "aws-iam-evaluation-112"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "4 · Repaso integrador",
      "description": "Relaciona las capas de autorización.",
      "questionIds": [
        "aws-iam-evaluation-103",
        "aws-iam-evaluation-104",
        "aws-iam-evaluation-107",
        "aws-iam-evaluation-108",
        "aws-iam-evaluation-111",
        "aws-iam-evaluation-112"
      ]
    }
  ]
};
