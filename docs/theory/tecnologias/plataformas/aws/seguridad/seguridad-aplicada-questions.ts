import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsSecurityBank: QuestionBank = {
  "id": "aws-security-applied",
  "revision": 2,
  "contentId": "aws-security-applied",
  "title": "Seguridad aplicada en AWS",
  "questions": [
    {
      "id": "aws-security-applied-101",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Identidad de aplicación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué resuelve un user pool de Cognito?",
      "options": [
        {
          "id": "a",
          "text": "Identidad y autenticación de usuarios de aplicación.",
          "explanation": "Actúa como proveedor OIDC."
        },
        {
          "id": "b",
          "text": "Un usuario IAM por cada comprador.",
          "explanation": "No es el modelo necesario."
        },
        {
          "id": "c",
          "text": "El escalado de tareas ECS.",
          "explanation": "Es otra responsabilidad."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Actúa como proveedor OIDC.",
      "source": "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools.html"
    },
    {
      "id": "aws-security-applied-102",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Identidad de aplicación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Hace falta un identity pool solo para validar un token de user pool en una API?",
      "options": [
        {
          "id": "a",
          "text": "Sí, todo JWT necesita uno para ser legible.",
          "explanation": "No es así."
        },
        {
          "id": "b",
          "text": "Sí, crea automáticamente scopes de todas las APIs.",
          "explanation": "No cumple esa función."
        },
        {
          "id": "c",
          "text": "No; debe justificarse si se necesitan credenciales AWS para identidades admitidas.",
          "explanation": "Son funciones distintas."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Son funciones distintas.",
      "source": "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools.html"
    },
    {
      "id": "aws-security-applied-103",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Identidad de aplicación",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué token está orientado a autorizar operaciones y scopes?",
      "options": [
        {
          "id": "a",
          "text": "El nombre del app client.",
          "explanation": "No es un token de autorización."
        },
        {
          "id": "b",
          "text": "Access token.",
          "explanation": "Su función difiere de la información de identidad del ID token."
        },
        {
          "id": "c",
          "text": "Refresh token enviado a todas las APIs.",
          "explanation": "Se utiliza para renovación según el flujo."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Su función difiere de la información de identidad del ID token.",
      "source": "https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html"
    },
    {
      "id": "aws-security-applied-104",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Identidad de aplicación",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una SPA no puede conservar un secreto privado de cliente. ¿Qué flujo evalúas?",
      "options": [
        {
          "id": "a",
          "text": "Authorization code con PKCE y callbacks exactos.",
          "explanation": "El cliente público necesita un diseño apropiado."
        },
        {
          "id": "b",
          "text": "Guardar client secret en el bundle.",
          "explanation": "Cualquier usuario puede extraerlo."
        },
        {
          "id": "c",
          "text": "Enviar la contraseña en cada URL.",
          "explanation": "Expone credenciales."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El cliente público necesita un diseño apropiado.",
      "source": "https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html"
    },
    {
      "id": "aws-security-applied-105",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Identidad de aplicación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un JWT decodifica bien. ¿Qué falta antes de confiar en sus claims?",
      "options": [
        {
          "id": "a",
          "text": "Comparar solo el texto del nombre.",
          "explanation": "No acredita integridad."
        },
        {
          "id": "b",
          "text": "Comprobar que sea JSON válido y aceptarlo.",
          "explanation": "No basta para seguridad."
        },
        {
          "id": "c",
          "text": "Verificar firma, emisor, destinatario, vigencia y tipo según el contrato.",
          "explanation": "Decodificar no autentica."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Decodificar no autentica.",
      "source": "https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html"
    },
    {
      "id": "aws-security-applied-106",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Identidad de aplicación",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un usuario autenticado accede a documentos ajenos cambiando un ID. ¿Qué falla?",
      "options": [
        {
          "id": "a",
          "text": "El número de AZ de la aplicación.",
          "explanation": "No controla propiedad."
        },
        {
          "id": "b",
          "text": "Autorización del recurso y su propiedad.",
          "explanation": "Login no comprueba cada acceso de negocio."
        },
        {
          "id": "c",
          "text": "La longitud de la contraseña exclusivamente.",
          "explanation": "No explica la autorización faltante."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Login no comprueba cada acceso de negocio.",
      "source": "https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html"
    },
    {
      "id": "aws-security-applied-107",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Secretos y configuración",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué servicio evalúas para un secreto con rotación coordinada?",
      "options": [
        {
          "id": "a",
          "text": "Secrets Manager.",
          "explanation": "Su flujo debe integrar el destino y clientes."
        },
        {
          "id": "b",
          "text": "ECR como variable dentro de una imagen.",
          "explanation": "Distribuye el secreto con el artefacto."
        },
        {
          "id": "c",
          "text": "Una etiqueta pública de recurso.",
          "explanation": "No es almacenamiento de secretos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Su flujo debe integrar el destino y clientes.",
      "source": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"
    },
    {
      "id": "aws-security-applied-108",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Secretos y configuración",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La contraseña cambió en el almacén, pero no en la base. ¿Qué problema hay?",
      "options": [
        {
          "id": "a",
          "text": "El sistema ya está rotado por completo.",
          "explanation": "El cliente usará una credencial inválida."
        },
        {
          "id": "b",
          "text": "Hay que hacer público el valor nuevo.",
          "explanation": "No corrige el proceso."
        },
        {
          "id": "c",
          "text": "Rotación incompleta entre secreto y destino.",
          "explanation": "Las dos credenciales deben ser coherentes."
        }
      ],
      "correctIds": ["c"],
      "explanation": "Las dos credenciales deben ser coherentes.",
      "source": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"
    },
    {
      "id": "aws-security-applied-109",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Secretos y configuración",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "El pool conserva la contraseña antigua tras rotación. ¿Qué debes diseñar?",
      "options": [
        {
          "id": "a",
          "text": "Desactivar autenticación de la base.",
          "explanation": "Amplía riesgo innecesariamente."
        },
        {
          "id": "b",
          "text": "Renovación y reconexión con tratamiento de fallos.",
          "explanation": "Guardar un secreto nuevo no reconfigura todo cliente."
        },
        {
          "id": "c",
          "text": "Volver a empotrar la contraseña en la imagen.",
          "explanation": "Impide renovación segura."
        }
      ],
      "correctIds": ["b"],
      "explanation": "Guardar un secreto nuevo no reconfigura todo cliente.",
      "source": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"
    },
    {
      "id": "aws-security-applied-110",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Secretos y configuración",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Dónde es apropiado guardar un parámetro no sensible por entorno?",
      "options": [
        {
          "id": "a",
          "text": "Parameter Store u otro almacén de configuración diseñado.",
          "explanation": "No todo parámetro necesita el mismo ciclo que una contraseña."
        },
        {
          "id": "b",
          "text": "En el access token de todos los usuarios.",
          "explanation": "No es su función."
        },
        {
          "id": "c",
          "text": "En cada nombre de objeto como secreto disfrazado.",
          "explanation": "Puede exponer información y no centraliza configuración."
        }
      ],
      "correctIds": ["a"],
      "explanation": "No todo parámetro necesita el mismo ciclo que una contraseña.",
      "source": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"
    },
    {
      "id": "aws-security-applied-111",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Cifrado y certificados",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué diferencia TLS de cifrado en reposo?",
      "options": [
        {
          "id": "a",
          "text": "Ambos determinan el dueño del pedido.",
          "explanation": "No verifican propiedad de negocio."
        },
        {
          "id": "b",
          "text": "TLS reemplaza la key policy de KMS.",
          "explanation": "Son capas distintas."
        },
        {
          "id": "c",
          "text": "Protegen tránsito y almacenamiento respectivamente.",
          "explanation": "No sustituyen autorización."
        }
      ],
      "correctIds": ["c"],
      "explanation": "No sustituyen autorización.",
      "source": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html"
    },
    {
      "id": "aws-security-applied-112",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Cifrado y certificados",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La policy S3 permite leer, pero KMS deniega descifrar. ¿Qué revisas?",
      "options": [
        {
          "id": "a",
          "text": "Borrar las versiones antiguas.",
          "explanation": "No corrige el permiso."
        },
        {
          "id": "b",
          "text": "Key policy, IAM y contexto del servicio.",
          "explanation": "El acceso cifrado depende de ambas capas."
        },
        {
          "id": "c",
          "text": "Únicamente Block Public Access.",
          "explanation": "No resuelve la denegación de clave."
        }
      ],
      "correctIds": ["b"],
      "explanation": "El acceso cifrado depende de ambas capas.",
      "source": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html"
    },
    {
      "id": "aws-security-applied-113",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Cifrado y certificados",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un backup existe, pero su clave se eliminó. ¿Qué riesgo aparece?",
      "options": [
        {
          "id": "a",
          "text": "Imposibilidad de descifrar los datos recuperados.",
          "explanation": "El ciclo de claves forma parte de recuperación."
        },
        {
          "id": "b",
          "text": "Que el backup se descifre siempre con otra clave cualquiera.",
          "explanation": "No funciona así."
        },
        {
          "id": "c",
          "text": "Que CloudTrail restaure automáticamente el material.",
          "explanation": "La auditoría no reconstruye la clave."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El ciclo de claves forma parte de recuperación.",
      "source": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html"
    },
    {
      "id": "aws-security-applied-114",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Cifrado y certificados",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Un certificado es válido, pero el cliente usa otro nombre. ¿Qué debes verificar?",
      "options": [
        {
          "id": "a",
          "text": "Solo el tamaño del volumen.",
          "explanation": "No afecta al nombre certificado."
        },
        {
          "id": "b",
          "text": "Usar HTTP sin revisar el diseño.",
          "explanation": "Elude la protección en lugar de corregirla."
        },
        {
          "id": "c",
          "text": "Nombres cubiertos, endpoint TLS y región requerida por la integración.",
          "explanation": "La validez temporal no basta."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La validez temporal no basta.",
      "source": "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html"
    },
    {
      "id": "aws-security-applied-115",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Auditoría y respuesta",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué diferencia un management event de un data event?",
      "options": [
        {
          "id": "a",
          "text": "Los management events contienen cada lectura de objetos.",
          "explanation": "No tienen ese alcance."
        },
        {
          "id": "b",
          "text": "Administración del recurso frente a actividad sobre sus datos.",
          "explanation": "La cobertura depende de configuración."
        },
        {
          "id": "c",
          "text": "Todo data event se ve siempre en Event history.",
          "explanation": "No debe suponerse."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La cobertura depende de configuración.",
      "source": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html"
    },
    {
      "id": "aws-security-applied-116",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Auditoría y respuesta",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "¿Por qué no encuentras cada GetObject solo con auditoría de administración?",
      "options": [
        {
          "id": "a",
          "text": "Debes configurar los data events pertinentes.",
          "explanation": "Son cobertura adicional con coste y selectores."
        },
        {
          "id": "b",
          "text": "Porque GetObject nunca admite auditoría.",
          "explanation": "Sí puede auditarse."
        },
        {
          "id": "c",
          "text": "Porque hace falta desactivar cifrado.",
          "explanation": "No es condición para registrar esos eventos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Son cobertura adicional con coste y selectores.",
      "source": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html"
    },
    {
      "id": "aws-security-applied-117",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Auditoría y respuesta",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un evento CloudTrail muestra el rol del backend. ¿Prueba qué persona final inició la compra?",
      "options": [
        {
          "id": "a",
          "text": "Sí, el nombre del rol es el usuario del producto.",
          "explanation": "Son identidades diferentes."
        },
        {
          "id": "b",
          "text": "Sí, si el rol tiene administrador.",
          "explanation": "Permisos amplios no mejoran atribución."
        },
        {
          "id": "c",
          "text": "No necesariamente; requiere correlación con logs de aplicación.",
          "explanation": "La identidad AWS puede ser compartida por muchas solicitudes."
        }
      ],
      "correctIds": ["c"],
      "explanation": "La identidad AWS puede ser compartida por muchas solicitudes.",
      "source": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html"
    },
    {
      "id": "aws-security-applied-118",
      "revision": 2,
      "contentId": "aws-security-applied",
      "topic": "Auditoría y respuesta",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se filtró una contraseña de aplicación. ¿Qué respuesta abarca el flujo?",
      "options": [
        {
          "id": "a",
          "text": "Cambiar el nombre del secreto sin cambiar valor.",
          "explanation": "No revoca la credencial."
        },
        {
          "id": "b",
          "text": "Rotar en destino y almacén, renovar clientes y revisar copias y uso.",
          "explanation": "La contención debe cubrir todos los puntos de exposición."
        },
        {
          "id": "c",
          "text": "Borrar una línea de Git y dar por finalizado.",
          "explanation": "La credencial puede seguir válida y copiada."
        }
      ],
      "correctIds": ["b"],
      "explanation": "La contención debe cubrir todos los puntos de exposición.",
      "source": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"
    }
  ],
  "presets": [
    {
      "id": "r2-bloque-1",
      "title": "1 · Identidad de aplicación",
      "description": "Comprueba mecanismos y decisiones de identidad de aplicación.",
      "questionIds": [
        "aws-security-applied-101",
        "aws-security-applied-102",
        "aws-security-applied-103",
        "aws-security-applied-104",
        "aws-security-applied-105",
        "aws-security-applied-106"
      ]
    },
    {
      "id": "r2-bloque-2",
      "title": "2 · Secretos y configuración",
      "description": "Comprueba mecanismos y decisiones de secretos y configuración.",
      "questionIds": [
        "aws-security-applied-107",
        "aws-security-applied-108",
        "aws-security-applied-109",
        "aws-security-applied-110"
      ]
    },
    {
      "id": "r2-bloque-3",
      "title": "3 · Cifrado y certificados",
      "description": "Comprueba mecanismos y decisiones de cifrado y certificados.",
      "questionIds": [
        "aws-security-applied-111",
        "aws-security-applied-112",
        "aws-security-applied-113",
        "aws-security-applied-114"
      ]
    },
    {
      "id": "r2-bloque-4",
      "title": "4 · Auditoría y respuesta",
      "description": "Comprueba mecanismos y decisiones de auditoría y respuesta.",
      "questionIds": [
        "aws-security-applied-115",
        "aws-security-applied-116",
        "aws-security-applied-117",
        "aws-security-applied-118"
      ]
    },
    {
      "id": "r2-integrador",
      "title": "5 · Repaso integrador",
      "description": "Relaciona los subtemas con preguntas reutilizadas intencionadamente.",
      "questionIds": [
        "aws-security-applied-105",
        "aws-security-applied-106",
        "aws-security-applied-109",
        "aws-security-applied-110",
        "aws-security-applied-113",
        "aws-security-applied-114",
        "aws-security-applied-117",
        "aws-security-applied-118"
      ]
    }
  ]
};
