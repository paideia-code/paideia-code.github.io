import type { QuestionBank } from '@site/src/lib/learning/types';
export const awsAccountAccessBank: QuestionBank = {
  "id": "aws-account-access",
  "revision": 1,
  "contentId": "aws-account-access",
  "title": "Cuenta AWS y acceso inicial",
  "questions": [
    {
      "id": "aws-account-access-001",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Control de la cuenta",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué distingue autenticación de autorización?",
      "options": [
        {
          "id": "a",
          "text": "La primera establece la identidad; la segunda evalúa el acceso a una operación.",
          "explanation": "Una identidad válida puede no estar autorizada para la acción solicitada."
        },
        {
          "id": "b",
          "text": "La primera selecciona región; la segunda selecciona cuenta.",
          "explanation": "Seleccionar destino no define estos dos procesos."
        },
        {
          "id": "c",
          "text": "La primera concede permisos; la segunda comprueba la contraseña.",
          "explanation": "Invierte la función de ambos procesos."
        },
        {
          "id": "d",
          "text": "Ambas significan que cualquier operación está permitida.",
          "explanation": "Iniciar sesión no concede administración general."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Una identidad válida puede no estar autorizada para la acción solicitada.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html"
    },
    {
      "id": "aws-account-access-002",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Control de la cuenta",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una persona inicia sesión y recibe AccessDenied al consultar un recurso. ¿Qué conclusión es razonable?",
      "options": [
        {
          "id": "a",
          "text": "La sesión puede ser válida y faltar autorización para esa operación.",
          "explanation": "Autenticación y autorización son comprobaciones diferentes."
        },
        {
          "id": "b",
          "text": "El inicio de sesión falló necesariamente.",
          "explanation": "Una denegación de operación no demuestra un fallo de inicio de sesión."
        },
        {
          "id": "c",
          "text": "El recurso debe hacerse público para reconocer a la persona.",
          "explanation": "Cambiar exposición no es una solución al diagnóstico de permisos."
        },
        {
          "id": "d",
          "text": "Debe cambiarse la contraseña de raíz en todos los casos.",
          "explanation": "No hay evidencia de un problema con raíz."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Autenticación y autorización son comprobaciones diferentes.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html"
    },
    {
      "id": "aws-account-access-003",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Control de la cuenta",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué uso corresponde al usuario raíz?",
      "options": [
        {
          "id": "a",
          "text": "Reservarlo para tareas que requieren sus credenciales y proteger su recuperación.",
          "explanation": "Su alcance exige custodiarlo y usar otra identidad para el trabajo diario."
        },
        {
          "id": "b",
          "text": "Utilizarlo en cada despliegue para evitar problemas de permisos.",
          "explanation": "El despliegue diario no justifica usar raíz."
        },
        {
          "id": "c",
          "text": "Entregar su contraseña a cada integrante del equipo.",
          "explanation": "Compartirla expone el control de la cuenta."
        },
        {
          "id": "d",
          "text": "Crear sus claves para que todas las aplicaciones las reutilicen.",
          "explanation": "AWS recomienda no crear claves de acceso de raíz."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Su alcance exige custodiarlo y usar otra identidad para el trabajo diario.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html"
    },
    {
      "id": "aws-account-access-004",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Control de la cuenta",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Raíz tiene una contraseña fuerte, pero el correo de recuperación está desprotegido. ¿Qué falta?",
      "options": [
        {
          "id": "a",
          "text": "Proteger el correo y los mecanismos de recuperación además del inicio de sesión.",
          "explanation": "El control del canal de recuperación afecta a la seguridad de la cuenta."
        },
        {
          "id": "b",
          "text": "Crear una clave de raíz que sustituya al correo.",
          "explanation": "Una clave programática no protege la recuperación."
        },
        {
          "id": "c",
          "text": "Conceder administración a más usuarios.",
          "explanation": "Eso no corrige la protección del correo."
        },
        {
          "id": "d",
          "text": "Cambiar el nombre de la cuenta en la consola.",
          "explanation": "Una etiqueta no protege el canal de recuperación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El control del canal de recuperación afecta a la seguridad de la cuenta.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html"
    },
    {
      "id": "aws-account-access-005",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Control de la cuenta",
      "level": "intermedio",
      "skill": "análisis",
      "prompt": "Se abandona raíz para usar una identidad con permisos administrativos. ¿Qué ha mejorado y qué queda por revisar?",
      "options": [
        {
          "id": "a",
          "text": "Se separó el acceso raíz, pero la identidad de trabajo conserva privilegios amplios.",
          "explanation": "La separación de identidades no sustituye el ajuste del alcance de permisos."
        },
        {
          "id": "b",
          "text": "La identidad pasó automáticamente a ser de solo lectura.",
          "explanation": "Dejar de usar raíz no transforma los permisos asignados."
        },
        {
          "id": "c",
          "text": "MFA dejó de ser necesario en el acceso de trabajo.",
          "explanation": "La identidad de trabajo también necesita protección."
        },
        {
          "id": "d",
          "text": "La cuenta ya no puede generar cargos.",
          "explanation": "Los permisos administrativos pueden permitir crear recursos facturables."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La separación de identidades no sustituye el ajuste del alcance de permisos.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
    },
    {
      "id": "aws-account-access-006",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Control de la cuenta",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Una cuenta de empresa usa gestión centralizada de acceso raíz. ¿Cómo iniciarías la preparación del laboratorio?",
      "options": [
        {
          "id": "a",
          "text": "Confirmando el procedimiento de la organización y el acceso de trabajo asignado.",
          "explanation": "No corresponde recrear credenciales de raíz sin conocer cómo se administra la cuenta."
        },
        {
          "id": "b",
          "text": "Restableciendo raíz para seguir exactamente un tutorial de cuenta personal.",
          "explanation": "Puede contrariar el modelo de administración centralizado."
        },
        {
          "id": "c",
          "text": "Solicitando la contraseña raíz a otro alumno.",
          "explanation": "Compartir credenciales no es el procedimiento de acceso individual."
        },
        {
          "id": "d",
          "text": "Creando claves de raíz como mecanismo de recuperación.",
          "explanation": "No deben crearse claves de raíz para preparar un laboratorio."
        }
      ],
      "correctIds": ["a"],
      "explanation": "No corresponde recrear credenciales de raíz sin conocer cómo se administra la cuenta.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html"
    },
    {
      "id": "aws-account-access-007",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Identidades de trabajo",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué describe mejor un rol IAM?",
      "options": [
        {
          "id": "a",
          "text": "Una identidad asumible mediante sesiones con credenciales temporales.",
          "explanation": "El rol puede utilizarse por principales autorizados sin una contraseña compartida fija."
        },
        {
          "id": "b",
          "text": "Un usuario con contraseña que todos deben conocer.",
          "explanation": "Un rol no es una contraseña compartida."
        },
        {
          "id": "c",
          "text": "Un grupo de regiones con los mismos recursos.",
          "explanation": "Los roles pertenecen al modelo de identidad."
        },
        {
          "id": "d",
          "text": "Una copia del usuario raíz para cada aplicación.",
          "explanation": "Un rol no replica la identidad raíz."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El rol puede utilizarse por principales autorizados sin una contraseña compartida fija.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html"
    },
    {
      "id": "aws-account-access-008",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Identidades de trabajo",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué función tiene un grupo IAM?",
      "options": [
        {
          "id": "a",
          "text": "Agrupar usuarios IAM para facilitar la asignación de permisos.",
          "explanation": "El grupo organiza usuarios; no es una identidad que inicie sesión."
        },
        {
          "id": "b",
          "text": "Asumir un rol y guardar su token para todos los miembros.",
          "explanation": "Un grupo IAM no asume roles."
        },
        {
          "id": "c",
          "text": "Autenticar por sí mismo en la consola con MFA.",
          "explanation": "El grupo no inicia sesión."
        },
        {
          "id": "d",
          "text": "Convertir usuarios IAM en usuarios de Identity Center.",
          "explanation": "Son modelos de administración distintos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El grupo organiza usuarios; no es una identidad que inicie sesión.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html"
    },
    {
      "id": "aws-account-access-009",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Identidades de trabajo",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una aplicación en EC2 necesita leer objetos de S3. ¿Qué enfoque de identidad es preferible?",
      "options": [
        {
          "id": "a",
          "text": "Asociar un rol a su ejecución y conceder el acceso de lectura necesario.",
          "explanation": "Separa la aplicación de las credenciales personales y permite obtener credenciales temporales."
        },
        {
          "id": "b",
          "text": "Copiar las claves personales de quien la desplegó.",
          "explanation": "Vincula la ejecución a las credenciales y permisos de una persona."
        },
        {
          "id": "c",
          "text": "Usar raíz porque la aplicación pertenece a la cuenta.",
          "explanation": "Pertenecer a la cuenta no justifica los privilegios de raíz."
        },
        {
          "id": "d",
          "text": "Dar acceso administrativo para evitar cambios futuros.",
          "explanation": "Los permisos hipotéticos futuros no cumplen mínimo privilegio."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Separa la aplicación de las credenciales personales y permite obtener credenciales temporales.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
    },
    {
      "id": "aws-account-access-010",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Identidades de trabajo",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Dos personas necesitan distintos accesos en una cuenta. ¿Qué diseño permite retirarlos individualmente?",
      "options": [
        {
          "id": "a",
          "text": "Identidades individuales con asignaciones según las tareas de cada una.",
          "explanation": "Permite administrar el acceso de cada persona sin compartir su secreto."
        },
        {
          "id": "b",
          "text": "Una contraseña compartida de raíz con dos copias.",
          "explanation": "No separa las identidades ni sus permisos."
        },
        {
          "id": "c",
          "text": "Un usuario compartido cuyo nombre contiene ambos apellidos.",
          "explanation": "El nombre no proporciona accesos individuales."
        },
        {
          "id": "d",
          "text": "Una única clave guardada en el repositorio del equipo.",
          "explanation": "Expone una credencial compartida y dificulta controlar quién la usa."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Permite administrar el acceso de cada persona sin compartir su secreto.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
    },
    {
      "id": "aws-account-access-011",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Identidades de trabajo",
      "level": "intermedio",
      "skill": "concepto",
      "prompt": "¿Por qué un usuario IAM y un usuario de Identity Center no son intercambiables?",
      "options": [
        {
          "id": "a",
          "text": "El primero es una identidad de la cuenta; el segundo se administra mediante el directorio y sus asignaciones.",
          "explanation": "Difieren el modelo de identidad y el modo de proporcionar acceso a cuentas."
        },
        {
          "id": "b",
          "text": "El de Identity Center es siempre el usuario raíz.",
          "explanation": "No se convierte en raíz por usar Identity Center."
        },
        {
          "id": "c",
          "text": "El usuario IAM solo puede utilizar aplicaciones externas.",
          "explanation": "Un usuario IAM puede tener acceso AWS según sus credenciales y permisos."
        },
        {
          "id": "d",
          "text": "Ambos comparten obligatoriamente una contraseña.",
          "explanation": "No deben asumirse credenciales compartidas entre esos modelos."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Difieren el modelo de identidad y el modo de proporcionar acceso a cuentas.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html"
    },
    {
      "id": "aws-account-access-012",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Identidades de trabajo",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un principal puede asumir un rol, pero se deniega una lectura de objetos. ¿Qué distinción ayuda a analizarlo?",
      "options": [
        {
          "id": "a",
          "text": "La confianza para asumir el rol y la autorización de la lectura son decisiones diferentes.",
          "explanation": "Una sesión asumida debe cumplir los permisos y controles aplicables a la operación."
        },
        {
          "id": "b",
          "text": "Asumir un rol garantiza acceso a cualquier objeto.",
          "explanation": "La confianza no concede acceso general a los recursos."
        },
        {
          "id": "c",
          "text": "Todo rol necesita las claves de raíz para leer objetos.",
          "explanation": "Los roles usan credenciales temporales dentro de su alcance."
        },
        {
          "id": "d",
          "text": "Los permisos del recurso ya no importan si el rol se asumió.",
          "explanation": "La operación sigue sujeta a los controles aplicables."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Una sesión asumida debe cumplir los permisos y controles aplicables a la operación.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
    },
    {
      "id": "aws-account-access-013",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Acceso federado y sesiones",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué tipo de instancia de Identity Center permite asignar acceso a cuentas AWS mediante permission sets?",
      "options": [
        {
          "id": "a",
          "text": "La instancia de organización.",
          "explanation": "La instancia de cuenta no ofrece conjuntos de permisos ni acceso a cuentas AWS."
        },
        {
          "id": "b",
          "text": "La instancia de cuenta, por el hecho de pertenecer a una cuenta.",
          "explanation": "Su nombre no significa que pueda asignar ese acceso."
        },
        {
          "id": "c",
          "text": "Ambas tienen siempre las mismas capacidades.",
          "explanation": "Difieren precisamente en capacidades como el acceso a cuentas."
        },
        {
          "id": "d",
          "text": "Ninguna; Identity Center solo configura contraseñas de raíz.",
          "explanation": "La instancia de organización proporciona acceso de personas a cuentas."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La instancia de cuenta no ofrece conjuntos de permisos ni acceso a cuentas AWS.",
      "source": "https://docs.aws.amazon.com/singlesignon/latest/userguide/identity-center-instances.html"
    },
    {
      "id": "aws-account-access-014",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Acceso federado y sesiones",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una persona habilita una instancia de cuenta y no encuentra la asignación de permission sets a cuentas AWS. ¿Qué debe revisar?",
      "options": [
        {
          "id": "a",
          "text": "La capacidad del tipo de instancia y la vía de organización requerida para ese acceso.",
          "explanation": "No es una función ofrecida por la instancia de cuenta."
        },
        {
          "id": "b",
          "text": "La región de todos sus buckets hasta que aparezca la opción.",
          "explanation": "La ubicación de los objetos no añade esa capacidad."
        },
        {
          "id": "c",
          "text": "Crear una clave de raíz para desbloquear permission sets.",
          "explanation": "Las claves de raíz no cambian el tipo de instancia."
        },
        {
          "id": "d",
          "text": "Esperar a crear recursos EC2 para que se habilite.",
          "explanation": "Crear recursos no transforma las capacidades de Identity Center."
        }
      ],
      "correctIds": ["a"],
      "explanation": "No es una función ofrecida por la instancia de cuenta.",
      "source": "https://docs.aws.amazon.com/singlesignon/latest/userguide/identity-center-instances.html"
    },
    {
      "id": "aws-account-access-015",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Acceso federado y sesiones",
      "level": "intermedio",
      "skill": "concepto",
      "prompt": "¿Qué relación describe un permission set asignado a una cuenta?",
      "options": [
        {
          "id": "a",
          "text": "Define el acceso que Identity Center aprovisiona mediante un rol en esa cuenta.",
          "explanation": "La asignación conecta personas o grupos, cuenta y alcance de acceso."
        },
        {
          "id": "b",
          "text": "Crea un usuario raíz nuevo para cada persona.",
          "explanation": "El acceso asignado no crea identidades raíz."
        },
        {
          "id": "c",
          "text": "Concede automáticamente los mismos permisos en todas las cuentas existentes.",
          "explanation": "El destino y las asignaciones importan."
        },
        {
          "id": "d",
          "text": "Es una contraseña de consola que reemplaza a MFA.",
          "explanation": "Define acceso y no sustituye la autenticación multifactor."
        }
      ],
      "correctIds": ["a"],
      "explanation": "La asignación conecta personas o grupos, cuenta y alcance de acceso.",
      "source": "https://docs.aws.amazon.com/singlesignon/latest/userguide/identity-center-instances.html"
    },
    {
      "id": "aws-account-access-016",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Acceso federado y sesiones",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Raíz tiene MFA, pero las personas entran por un proveedor externo. ¿Qué debe comprobarse?",
      "options": [
        {
          "id": "a",
          "text": "La configuración MFA del proveedor que autentica a esas personas.",
          "explanation": "El MFA de raíz no configura el del resto de identidades."
        },
        {
          "id": "b",
          "text": "Que cada persona conozca el código MFA de raíz.",
          "explanation": "Compartir ese factor no protege sus accesos individuales."
        },
        {
          "id": "c",
          "text": "Que no se use MFA para evitar dos sistemas distintos.",
          "explanation": "La diferencia de sistemas no justifica retirar el control."
        },
        {
          "id": "d",
          "text": "Que el nombre del permission set incluya la palabra MFA.",
          "explanation": "El nombre no configura la autenticación."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El MFA de raíz no configura el del resto de identidades.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
    },
    {
      "id": "aws-account-access-017",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Acceso federado y sesiones",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué incluye un conjunto de credenciales temporales para llamadas AWS?",
      "options": [
        {
          "id": "a",
          "text": "Identificador de clave, clave secreta y token de sesión, con vencimiento.",
          "explanation": "El token forma parte del conjunto y su validez es temporal."
        },
        {
          "id": "b",
          "text": "Solo la contraseña del portal, sin vencimiento.",
          "explanation": "La contraseña del portal no es el conjunto de credenciales temporales AWS."
        },
        {
          "id": "c",
          "text": "Solo el número de cuenta, que actúa como secreto.",
          "explanation": "El identificador de cuenta no autentica una llamada."
        },
        {
          "id": "d",
          "text": "Las claves permanentes de raíz y una región.",
          "explanation": "No se requieren claves de raíz para una sesión de rol."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El token forma parte del conjunto y su validez es temporal.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html"
    },
    {
      "id": "aws-account-access-018",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Acceso federado y sesiones",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Se expone una credencial temporal que aún no venció. ¿Qué interpretación es correcta?",
      "options": [
        {
          "id": "a",
          "text": "Debe tratarse como exposición: puede utilizarse dentro de su alcance durante su validez.",
          "explanation": "El vencimiento limita la duración del riesgo, pero no elimina el riesgo actual."
        },
        {
          "id": "b",
          "text": "No tiene riesgo porque temporal significa de solo lectura.",
          "explanation": "Temporal describe la vigencia, no los permisos."
        },
        {
          "id": "c",
          "text": "Es segura para publicar porque siempre dura un único segundo.",
          "explanation": "La duración no es esa y su publicación permite un uso no autorizado."
        },
        {
          "id": "d",
          "text": "Se convierte automáticamente en una clave permanente al filtrarse.",
          "explanation": "La exposición no cambia su tipo ni elimina el vencimiento."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El vencimiento limita la duración del riesgo, pero no elimina el riesgo actual.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html"
    },
    {
      "id": "aws-account-access-019",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Verificación del acceso",
      "level": "básico",
      "skill": "concepto",
      "prompt": "¿Qué representa el nombre de un perfil de AWS CLI?",
      "options": [
        {
          "id": "a",
          "text": "Una etiqueta local para un conjunto de configuración.",
          "explanation": "El nombre no determina por sí mismo permisos, cuenta ni identidad efectiva."
        },
        {
          "id": "b",
          "text": "Un permiso que AWS concede si el nombre contiene admin.",
          "explanation": "Los nombres de perfiles no conceden permisos."
        },
        {
          "id": "c",
          "text": "Un usuario IAM creado automáticamente en cada cuenta.",
          "explanation": "Crear un perfil no equivale a crear una identidad IAM."
        },
        {
          "id": "d",
          "text": "Una región AWS reservada para el equipo.",
          "explanation": "Un perfil no crea regiones."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El nombre no determina por sí mismo permisos, cuenta ni identidad efectiva.",
      "source": "https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html"
    },
    {
      "id": "aws-account-access-020",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Verificación del acceso",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Antes de operar, ¿qué aporta aws sts get-caller-identity con el perfil elegido?",
      "options": [
        {
          "id": "a",
          "text": "Permite comprobar la cuenta y la identidad que realizan la llamada.",
          "explanation": "Account y Arn identifican el contexto de acceso; no acreditan todos sus permisos."
        },
        {
          "id": "b",
          "text": "Demuestra que se pueden crear instancias y borrar buckets.",
          "explanation": "La operación no comprueba permisos para esas acciones."
        },
        {
          "id": "c",
          "text": "Revela la clave secreta del usuario raíz.",
          "explanation": "Su respuesta contiene datos de identidad, no ese secreto."
        },
        {
          "id": "d",
          "text": "Cambia la cuenta de destino para que coincida con el nombre del perfil.",
          "explanation": "La consulta informa la identidad; no cambia la asignación del perfil."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Account y Arn identifican el contexto de acceso; no acreditan todos sus permisos.",
      "source": "https://docs.aws.amazon.com/cli/latest/reference/sts/get-caller-identity.html"
    },
    {
      "id": "aws-account-access-021",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Verificación del acceso",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "Una sesión SSO de la CLI ha vencido. ¿Qué acción corresponde?",
      "options": [
        {
          "id": "a",
          "text": "Renovar el inicio de sesión del perfil autorizado y volver a comprobar la identidad.",
          "explanation": "El vencimiento se resuelve mediante el flujo de autenticación previsto."
        },
        {
          "id": "b",
          "text": "Conceder AdministratorAccess para extender el token vencido.",
          "explanation": "Los permisos no renuevan una sesión vencida."
        },
        {
          "id": "c",
          "text": "Crear claves de raíz para reemplazar todas las sesiones.",
          "explanation": "No es el mecanismo de renovación del acceso federado."
        },
        {
          "id": "d",
          "text": "Cambiar el nombre del perfil para eliminar el vencimiento.",
          "explanation": "La etiqueta local no modifica la validez de credenciales."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El vencimiento se resuelve mediante el flujo de autenticación previsto.",
      "source": "https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html"
    },
    {
      "id": "aws-account-access-022",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Verificación del acceso",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Un perfil se llama estudio, pero GetCallerIdentity devuelve la cuenta de producción. ¿Qué harías antes de continuar?",
      "options": [
        {
          "id": "a",
          "text": "Corregir el contexto de acceso y comprobar de nuevo la cuenta e identidad efectivas.",
          "explanation": "El nombre del perfil no garantiza el destino; operar requiere verificarlo."
        },
        {
          "id": "b",
          "text": "Continuar porque el nombre del perfil tiene prioridad sobre la respuesta.",
          "explanation": "La identidad devuelta refleja las credenciales utilizadas."
        },
        {
          "id": "c",
          "text": "Dar más permisos al rol de producción para completar la práctica.",
          "explanation": "No corrige el destino equivocado y amplía el riesgo."
        },
        {
          "id": "d",
          "text": "Cambiar solo la región de los recursos para convertir la cuenta en laboratorio.",
          "explanation": "La región no cambia la cuenta que realiza la llamada."
        }
      ],
      "correctIds": ["a"],
      "explanation": "El nombre del perfil no garantiza el destino; operar requiere verificarlo.",
      "source": "https://docs.aws.amazon.com/cli/latest/reference/sts/get-caller-identity.html"
    },
    {
      "id": "aws-account-access-023",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Verificación del acceso",
      "level": "intermedio",
      "skill": "aplicación",
      "prompt": "La región de Identity Center y la del laboratorio son distintas. ¿Qué dato se usa al configurar la sesión SSO?",
      "options": [
        {
          "id": "a",
          "text": "La región donde está configurado Identity Center, según los datos del acceso asignado.",
          "explanation": "Es la configuración del proveedor de acceso, que puede diferir de la región de los recursos."
        },
        {
          "id": "b",
          "text": "Siempre la región del primer bucket creado.",
          "explanation": "Ese recurso no define dónde está Identity Center."
        },
        {
          "id": "c",
          "text": "La región se deduce del nombre del perfil.",
          "explanation": "El nombre no establece la región de Identity Center."
        },
        {
          "id": "d",
          "text": "Se necesita crear una identidad raíz en cada región.",
          "explanation": "No es el modelo de acceso regional de la cuenta."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Es la configuración del proveedor de acceso, que puede diferir de la región de los recursos.",
      "source": "https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html"
    },
    {
      "id": "aws-account-access-024",
      "revision": 1,
      "contentId": "aws-account-access",
      "topic": "Verificación del acceso",
      "level": "avanzado",
      "skill": "análisis",
      "prompt": "Tienes MFA y una sesión válida. ¿Qué queda por comprobar antes de un laboratorio que crea recursos?",
      "options": [
        {
          "id": "a",
          "text": "Cuenta e identidad, operaciones autorizadas, consumo previsto y retirada de recursos.",
          "explanation": "Proteger el inicio de sesión no resuelve permisos, destino ni ciclo de vida de los recursos."
        },
        {
          "id": "b",
          "text": "Nada: MFA garantiza permisos y evita cargos.",
          "explanation": "MFA no es una autorización de operaciones ni un límite de consumo."
        },
        {
          "id": "c",
          "text": "Solo cambiar el nombre del perfil a laboratorio.",
          "explanation": "El nombre no demuestra la cuenta efectiva ni el alcance autorizado."
        },
        {
          "id": "d",
          "text": "Activar administración general para que nunca haya denegaciones.",
          "explanation": "Evitar toda denegación no justifica privilegios innecesarios."
        }
      ],
      "correctIds": ["a"],
      "explanation": "Proteger el inicio de sesión no resuelve permisos, destino ni ciclo de vida de los recursos.",
      "source": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
    }
  ],
  "presets": [
    {
      "id": "bloque-1",
      "title": "1 · Control de la cuenta",
      "description": "Distinguir autenticación, autorización y protección del acceso raíz.",
      "questionIds": [
        "aws-account-access-001",
        "aws-account-access-002",
        "aws-account-access-003",
        "aws-account-access-004",
        "aws-account-access-005",
        "aws-account-access-006"
      ]
    },
    {
      "id": "bloque-2",
      "title": "2 · Identidades de trabajo",
      "description": "Elegir identidades y separar confianza de permisos.",
      "questionIds": [
        "aws-account-access-007",
        "aws-account-access-008",
        "aws-account-access-009",
        "aws-account-access-010",
        "aws-account-access-011",
        "aws-account-access-012"
      ]
    },
    {
      "id": "bloque-3",
      "title": "3 · Acceso federado y sesiones",
      "description": "Comprender asignaciones, credenciales y límites de sesión.",
      "questionIds": [
        "aws-account-access-013",
        "aws-account-access-014",
        "aws-account-access-015",
        "aws-account-access-016",
        "aws-account-access-017",
        "aws-account-access-018"
      ]
    },
    {
      "id": "bloque-4",
      "title": "4 · Verificación del acceso",
      "description": "Interpretar perfiles, identidad efectiva y preparación del laboratorio.",
      "questionIds": [
        "aws-account-access-019",
        "aws-account-access-020",
        "aws-account-access-021",
        "aws-account-access-022",
        "aws-account-access-023",
        "aws-account-access-024"
      ]
    },
    {
      "id": "integrador",
      "title": "5 · Repaso integrador",
      "description": "Conectar protección de cuenta, identidades y comprobación de sesiones.",
      "questionIds": [
        "aws-account-access-002",
        "aws-account-access-005",
        "aws-account-access-008",
        "aws-account-access-011",
        "aws-account-access-014",
        "aws-account-access-017",
        "aws-account-access-020",
        "aws-account-access-023"
      ]
    }
  ]
};
