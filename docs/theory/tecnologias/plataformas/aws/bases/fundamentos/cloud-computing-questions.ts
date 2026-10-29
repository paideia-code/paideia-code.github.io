import type { Level, Question, QuestionBank } from '@site/src/lib/learning/types';
const source = {
  cloud: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/what-is-cloud-computing.html',
  benefits: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
  resources: 'https://docs.aws.amazon.com/ARG/latest/userguide/resource-groups.html',
  models: 'https://aws.amazon.com/types-of-cloud-computing/',
  responsibility: 'https://aws.amazon.com/compliance/shared-responsibility-model/',
  capacity: 'https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-capacity-limits.html',
  cost: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html'
};
function q(n: number, topic: string, level: Level, prompt: string, correct: string, wrong: [
  string,
  string
][], why: string, reference: string): Question {
  const options = [
    {
      id: 'correct',
      text: correct,
      explanation: why
    },
    ...wrong.map(([text, explanation], i) => ({
      id: `alternative-${i + 1}`,
      text,
      explanation
    }))
  ];
  const offset = n % options.length;
  return {
    id: `aws-cloud-${String(n).padStart(2, '0')}`,
    revision: 1,
    contentId: 'aws-cloud-computing',
    topic,
    level,
    skill: level === 'básico' ? 'concepto' : level === 'intermedio' ? 'aplicación' : 'análisis',
    prompt,
    options: [...options.slice(offset), ...options.slice(0, offset)],
    correctIds: ['correct'],
    explanation: why,
    source: reference
  };
}
const questions: Question[] = [
  q(1, 'Bajo demanda', 'básico', '¿Qué caracteriza obtener recursos bajo demanda?', 'Solicitar capacidad como un servicio cuando se necesita.', [['Comprar equipos para cubrir de antemano toda la demanda futura.', 'Describe una compra anticipada de capacidad propia.'], ['Entregar al proveedor la definición de las funciones del producto.', 'La lógica del producto sigue siendo una decisión del equipo.']], 'La capacidad se consume mediante servicios del proveedor, sin adquirir personalmente cada equipo físico.', source.cloud),
  q(2, 'Bajo demanda', 'básico', '¿Qué parte proporciona físicamente el proveedor cloud?', 'La infraestructura sobre la que funcionan sus servicios.', [['Todas las reglas de negocio de cada cliente.', 'El proveedor de infraestructura no define las reglas de tu aplicación.'], ['Las decisiones de qué datos debe publicar tu aplicación.', 'Es una decisión de uso y diseño que conserva el equipo.']], 'El proveedor opera infraestructura; el reparto adicional de tareas depende del servicio elegido.', source.cloud),
  q(3, 'Bajo demanda', 'intermedio', 'Una campaña dura pocos días. ¿Qué oportunidad aporta consumir capacidad bajo demanda?', 'Ajustar la capacidad solicitada según las necesidades de la campaña.', [['Evitar decidir qué capacidad necesita la aplicación.', 'El equipo sigue teniendo que evaluar la demanda y el diseño.'], ['Garantizar que cualquier aplicación soportará la campaña sin cambios.', 'La disponibilidad de recursos no configura ni optimiza la aplicación por sí sola.']], 'Bajo demanda facilita modificar la capacidad; el equipo debe decidir y configurar cómo aprovecharla.', source.benefits),
  q(4, 'Bajo demanda', 'intermedio', 'Un equipo quiere probar una idea antes de invertir en servidores propios. ¿Qué ventaja busca en cloud?', 'Aprovisionar recursos para experimentar con menor demora de adquisición física.', [['Que AWS valide automáticamente si la idea de negocio es rentable.', 'Esa validación exige experimentos y decisiones del equipo.'], ['Que la primera prueba determine exactamente toda la capacidad futura.', 'La demanda y los requisitos pueden cambiar; una prueba no elimina esa incertidumbre.']], 'Obtener recursos rápidamente permite experimentar sin comenzar por adquirir e instalar equipos propios.', source.benefits),
  q(5, 'Bajo demanda', 'avanzado', 'Una empresa consigue servidores cloud rápidamente, pero tarda semanas en desplegar su API. ¿Qué conclusión es razonable?', 'Obtener infraestructura con rapidez no elimina otros pasos y decisiones del despliegue.', [['El acceso bajo demanda obliga a que el despliegue de la aplicación sea inmediato.', 'La infraestructura disponible no reemplaza los procesos de la aplicación.'], ['El equipo debe comprar hardware para que desaparezcan todos los retrasos.', 'La compra de equipos no resuelve por sí sola los pasos que estén retrasando la entrega.']], 'Es necesario distinguir el aprovisionamiento de recursos de la construcción y operación del software.', source.cloud),
  q(6, 'Servicios y recursos', 'básico', '¿Cuál es un recurso concreto de AWS?', 'Un bucket específico utilizado para fotografías.', [['Amazon S3 como capacidad general de almacenamiento.', 'S3 es el servicio; el bucket es un recurso con el que se trabaja.'], ['El nombre genérico de una categoría como almacenamiento.', 'Una categoría organiza capacidades, pero no identifica un recurso concreto.']], 'AWS denomina recursos a entidades como buckets e instancias.', source.resources),
  q(7, 'Servicios y recursos', 'básico', '¿Qué pareja distingue servicio y recurso?', 'Amazon EC2 y una instancia concreta donde se ejecuta la API.', [['Una instancia concreta y Amazon EC2, respectivamente.', 'Invierte la relación entre el servicio y la entidad utilizada.'], ['Cómputo y almacenamiento, respectivamente.', 'Ambas son categorías de capacidades; no identifican un recurso concreto.']], 'Un servicio ofrece capacidades y una instancia es una entidad concreta utilizada dentro de ese servicio.', source.resources),
  q(8, 'Servicios y recursos', 'intermedio', 'Creas dos buckets para proyectos distintos. ¿Qué describes?', 'Dos recursos del mismo servicio de almacenamiento.', [['Dos proveedores cloud diferentes.', 'Crear recursos diferentes no cambia de proveedor.'], ['Una única entidad sin posibilidad de configuración independiente.', 'Cada bucket es un recurso distinto; no son simplemente dos nombres de la misma entidad.']], 'Una aplicación puede utilizar varios recursos de un mismo servicio.', source.resources),
  q(9, 'Servicios y recursos', 'intermedio', 'Alguien dice «cambié los permisos del bucket de documentos». ¿Qué está identificando?', 'Una decisión de configuración sobre un recurso concreto.', [['Una modificación de la infraestructura física de todo S3.', 'Los permisos del bucket no son una intervención en el hardware del proveedor.'], ['Un cambio del modelo de negocio de todos los servicios AWS.', 'Es una configuración específica del recurso mencionado.']], 'Nombrar el recurso ayuda a precisar el alcance de la configuración.', source.resources),
  q(10, 'Servicios y recursos', 'avanzado', 'Dos aplicaciones utilizan S3 y tienen necesidades de acceso distintas. ¿Qué información falta para analizar su configuración?', 'Qué recursos utiliza cada aplicación y qué acceso necesita sobre ellos.', [['Solo confirmar que ambas usan el mismo nombre de servicio.', 'El nombre del servicio no explica el alcance de cada aplicación.'], ['La ubicación física de cada disco antes de analizar permisos.', 'El cliente no administra esos discos para configurar acceso a sus recursos.']], 'El servicio identifica una capacidad; el análisis debe llegar a los recursos y su uso concreto.', source.responsibility),
  q(11, 'Modelos de servicio', 'básico', '¿Qué modelo se aproxima a administrar una máquina virtual y su software?', 'IaaS: infraestructura como servicio.', [['SaaS: una aplicación lista para utilizar.', 'SaaS no describe administrar tu propia máquina virtual y su software.'], ['PaaS: una plataforma que abstrae la infraestructura subyacente.', 'El caso incluye la administración de la máquina virtual y su sistema operativo.']], 'IaaS ofrece bloques de infraestructura con mayor control para el cliente.', source.models),
  q(12, 'Modelos de servicio', 'básico', 'Contratas una aplicación de correo lista para utilizar. ¿Qué modelo describes?', 'SaaS: software como servicio.', [['IaaS: instalar tú mismo el servidor de correo sobre una máquina virtual.', 'En el caso no estás instalando ni operando la aplicación de correo.'], ['PaaS: desplegar el código de tu propia aplicación.', 'Aquí consumes una aplicación ya construida.']], 'Con SaaS consumes una aplicación operada por el proveedor.', source.models),
  q(13, 'Modelos de servicio', 'intermedio', 'Un equipo quiere desplegar su código sin administrar directamente el sistema operativo subyacente. ¿Qué categoría orienta la búsqueda?', 'PaaS, revisando después las responsabilidades del servicio concreto.', [['SaaS, aunque el objetivo sea ejecutar una aplicación propia.', 'Consumir un producto terminado y desplegar tu aplicación son necesidades distintas.'], ['IaaS, suponiendo que la máquina virtual elimina toda gestión del sistema operativo.', 'En una máquina virtual convencional esa gestión corresponde al cliente.']], 'PaaS permite concentrarse en desplegar y gestionar aplicaciones al abstraer infraestructura.', source.models),
  q(14, 'Modelos de servicio', 'intermedio', '¿Cómo conviene usar las categorías IaaS, PaaS y SaaS?', 'Como orientación para comparar control y responsabilidades, comprobando cada servicio.', [['Como garantía de que todos los servicios de una categoría tienen contratos idénticos.', 'Las responsabilidades concretas deben revisarse en cada servicio.'], ['Como una escala donde un modelo siempre es mejor para cualquier requisito.', 'La elección depende del problema y el control requerido.']], 'Las categorías ayudan a entender niveles de gestión y sus decisiones.', source.models),
  q(15, 'Modelos de servicio', 'avanzado', 'Un equipo necesita controlar el sistema operativo; otro prioriza desplegar código. ¿Qué enfoque respeta ambos requisitos?', 'Comparar cuánto control requiere cada equipo y qué tareas delega cada opción.', [['Elegir para ambos el servicio con mayor abstracción sin revisar restricciones.', 'Puede no ofrecer el control que exige el primer equipo.'], ['Elegir para ambos máquinas virtuales porque cualquier gestión delegada impide crear aplicaciones.', 'Una plataforma gestionada también permite construir y desplegar aplicaciones.']], 'La decisión debe responder a los requisitos y a las responsabilidades operativas.', source.models),
  q(16, 'Responsabilidades', 'básico', 'En una EC2 convencional administrada por tu equipo, ¿quién gestiona los parches del sistema operativo invitado?', 'Tu equipo, con los procesos que configure.', [['Los usuarios finales al visitar la API.', 'Los usuarios finales no administran el servidor por utilizar la aplicación.'], ['AWS automáticamente por el solo hecho de usar EC2.', 'AWS mantiene la infraestructura subyacente; el cliente administra ese sistema operativo.']], 'El cliente conserva la administración del sistema operativo invitado en este caso.', source.responsibility),
  q(17, 'Responsabilidades', 'básico', 'En S3, ¿qué responsabilidad conserva tu equipo?', 'Gestionar los datos y configurar su acceso.', [['Reemplazar físicamente los discos del servicio.', 'AWS administra esa infraestructura física.'], ['Instalar actualizaciones en el sistema operativo interno de S3.', 'El cliente no administra esa capa del servicio.']], 'Delegar la plataforma de almacenamiento no delega las decisiones de acceso a tus datos.', source.responsibility),
  q(18, 'Responsabilidades', 'intermedio', 'Mueves fotografías del disco de una máquina a S3. ¿Qué cambia?', 'Delegas la plataforma de almacenamiento, pero sigues definiendo acceso y uso de los datos.', [['Los permisos dejan de ser relevantes porque los archivos están gestionados.', 'El cliente sigue siendo responsable de configurar permisos apropiados.'], ['Debes administrar ahora el sistema operativo interno de S3.', 'S3 abstrae esa operación para el cliente.']], 'El cambio de servicio modifica el reparto de responsabilidades, sin eliminar las del cliente.', source.responsibility),
  q(19, 'Responsabilidades', 'intermedio', 'Una API en EC2 expone información que el equipo configuró como pública por error. ¿Qué parte debe revisar el equipo?', 'Su configuración y las decisiones de acceso de la aplicación.', [['Solo la seguridad física del centro de datos.', 'El problema descrito está en la configuración y el uso de los datos.'], ['Únicamente el calendario de mantenimiento del hardware.', 'Ese calendario no corrige una decisión de acceso de la aplicación.']], 'La protección de la infraestructura física no sustituye la configuración de seguridad del cliente.', source.responsibility),
  q(20, 'Responsabilidades', 'avanzado', 'Una aplicación combina EC2 convencional y S3. ¿Por qué conviene revisar responsabilidades por servicio?', 'Porque el cliente administra capas distintas en cada uno.', [['Porque cada servicio pertenece necesariamente a un proveedor diferente.', 'Los servicios mencionados son de AWS; la diferencia está en su nivel de gestión.'], ['Porque al combinarlos AWS pasa a administrar todo el código y los datos.', 'La combinación no elimina las responsabilidades del cliente.']], 'El modelo compartido se aplica a los servicios elegidos y al modo en que se utilizan.', source.responsibility),
  q(21, 'Capacidad y decisiones', 'básico', '¿Tener capacidad disponible en AWS significa que tu aplicación ya la utiliza?', 'No: hay que decidir y configurar cómo se obtiene y utiliza.', [['Sí, cualquier aplicación utiliza automáticamente todos los recursos disponibles.', 'Disponer de servicios no configura por sí mismo la aplicación.'], ['Sí, crear una cuenta equivale a configurar todos los mecanismos de capacidad.', 'La cuenta no define la arquitectura de cada aplicación.']], 'La posibilidad de solicitar capacidad y el mecanismo para ajustarla son decisiones distintas.', source.capacity),
  q(22, 'Capacidad y decisiones', 'básico', '¿Qué expresa la capacidad deseada de un Auto Scaling Group?', 'La capacidad que el grupo intenta mantener dentro de los límites configurados.', [['El número de peticiones HTTP que un usuario puede enviar.', 'La capacidad deseada se refiere al grupo, no a un límite de peticiones por usuario.'], ['Una cantidad que siempre debe ser igual al máximo permitido.', 'La capacidad deseada puede estar entre los límites mínimo y máximo.']], 'El grupo mantiene una capacidad deseada; las políticas pueden ajustarla según su configuración.', source.capacity),
  q(23, 'Capacidad y decisiones', 'intermedio', 'La API se vuelve lenta y la base de datos también muestra saturación. ¿Qué conviene hacer antes de aumentar servidores de API?', 'Revisar dónde está el límite y cómo se relaciona con la demanda.', [['Ampliar únicamente la API sin analizar la dependencia saturada.', 'La dependencia puede seguir limitando el resultado de la aplicación.'], ['Cambiar de proveedor porque una aplicación cloud no puede tener límites.', 'Las aplicaciones conservan requisitos, límites y decisiones de diseño.']], 'El caso exige analizar el conjunto de componentes; obtener más capacidad en uno no demuestra que se resuelva la causa.', source.cloud),
  q(24, 'Capacidad y decisiones', 'intermedio', 'Una aplicación sigue con la misma capacidad durante una campaña. ¿Qué debes revisar?', 'Qué mecanismos se configuraron para detectar demanda y ajustar capacidad.', [['Si el nombre comercial del proveedor incluye la palabra cloud.', 'El nombre no describe la configuración de la aplicación.'], ['Si los archivos estáticos tienen nombres más cortos.', 'Eso no determina el mecanismo de ajuste de capacidad descrito.']], 'Los mecanismos de ajuste dependen de una configuración, como políticas o acciones sobre capacidad deseada.', source.capacity),
  q(25, 'Capacidad y decisiones', 'avanzado', 'Un equipo solicita más capacidad, pero el tiempo de respuesta no mejora. ¿Qué conclusión permite la información?', 'Hay que comprobar el efecto del cambio y seguir investigando el límite real.', [['La aplicación ya cumple sus objetivos aunque las métricas no mejoren.', 'El objetivo de rendimiento debe verificarse con resultados.'], ['Aumentar recursos demuestra por sí solo que se corrigió la causa.', 'El caso indica que el resultado esperado no se ha observado.']], 'Una decisión de capacidad debe contrastarse con la necesidad y los resultados de la aplicación.', source.cloud),
  q(26, 'Consumo y costes', 'básico', 'Una instancia EC2 de pago está encendida pero ociosa. ¿Puede generar cargos de cómputo?', 'Sí, el tiempo en ejecución puede facturarse aunque no atienda visitas.', [['No, el tiempo ocioso siempre está excluido de la facturación.', 'La facturación de una instancia en ejecución no depende solo de las peticiones que atiende.'], ['Solo si un usuario abre una sesión dentro de la máquina.', 'No conectarse a la instancia no elimina su consumo en ejecución.']], 'El estado de ejecución es relevante para la facturación de cómputo de la instancia.', source.cost),
  q(27, 'Consumo y costes', 'básico', '¿Qué debes identificar para interpretar «pago por uso»?', 'Qué unidad de consumo factura el servicio que utilizas.', [['Solo cuántas personas conocen la dirección de la aplicación.', 'Ese dato no define la unidad de consumo del servicio.'], ['Solo cuántas líneas de código tiene el repositorio.', 'No describe el consumo facturado por los servicios de infraestructura.']], 'El consumo se interpreta según el servicio, no mediante una regla universal de visitas a la aplicación.', source.cost),
  q(28, 'Consumo y costes', 'intermedio', 'Una API no recibe solicitudes durante horas, pero su EC2 sigue en ejecución. ¿Qué conviene revisar?', 'El tiempo de ejecución y los recursos que siguen aprovisionados.', [['Solo el contador de respuestas HTTP correctas.', 'Ese contador no representa todo el consumo de una instancia en ejecución.'], ['Solo el número de cambios realizados al código durante esas horas.', 'No cambiar código no detiene la capacidad aprovisionada.']], 'Para evaluar consumo hay que mirar el estado de los recursos utilizados.', source.cost),
  q(29, 'Consumo y costes', 'intermedio', 'Un equipo cierra el navegador después de trabajar con EC2. ¿Eso demuestra que dejó de consumir cómputo?', 'No; debe comprobar el estado de la instancia.', [['Sí, cerrar la consola detiene todos los recursos de la cuenta.', 'La sesión del navegador y el estado de ejecución del recurso son cosas distintas.'], ['Sí, si nadie volvió a visitar la API.', 'Una instancia puede permanecer en ejecución sin recibir peticiones.']], 'Hay que verificar el estado de los recursos, no inferirlo a partir de la actividad del navegador.', source.cost),
  q(30, 'Consumo y costes', 'avanzado', 'Dos opciones cumplen una necesidad, pero delegan tareas distintas. ¿Qué evaluación ayuda a decidir?', 'Comparar requisitos, consumo esperado y trabajo operativo que conserva el equipo.', [['Comparar solo el nombre del servicio y elegir el más conocido.', 'El nombre no explica su adecuación a los requisitos del caso.'], ['Suponer que gestionar menos tareas vuelve irrelevantes los límites del servicio.', 'La delegación no elimina la necesidad de comprobar requisitos y condiciones.']], 'La elección combina capacidad, nivel de gestión y condiciones de uso del servicio.', source.models)
];
const groups = [
  ['demanda', '1 · Bajo demanda', 'Cómo cambia obtener capacidad.'],
  ['recursos', '2 · Servicios y recursos', 'Distingue capacidades y entidades concretas.'],
  ['modelos', '3 · Modelos de servicio', 'Compara niveles de control y gestión.'],
  ['responsabilidades', '4 · Responsabilidad compartida', 'Identifica qué mantiene cada parte.'],
  ['capacidad', '5 · Capacidad y decisiones', 'Aplica el modelo a cambios de demanda.'],
  ['costes', '6 · Consumo y costes', 'Interpreta consumo y recursos en ejecución.']
];
export const awsCloudBank: QuestionBank = {
  id: 'aws-cloud-computing',
  revision: 1,
  contentId: 'aws-cloud-computing',
  title: 'Cloud computing: qué cambia al usar AWS',
  questions,
  presets: [
    ...groups.map(([id, title, description], index) => ({
      id,
      title,
      description,
      questionIds: questions.slice(index * 5, index * 5 + 5).map(q => q.id)
    })),
    {
      id: 'integrador',
      title: '7 · Repaso integrador',
      description: 'Combina preguntas anteriores para relacionar las ideas de la lección.',
      questionIds: [
        3, 8, 14, 18, 20, 23, 26, 30
      ].map(n => `aws-cloud-${String(n).padStart(2, '0')}`)
    }
  ]
};
