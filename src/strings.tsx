import React from "react";
import { CarouselHandledProps } from "./components/carousel/carousel.props";
import {
    DoNotLieLogo, ConstitutionalRightsLogo, StaySilentLogo, SayNoLogo, LeaveCalmlyLogo, LawyerLogo, StayCalmLogo, PoliceLogo, PapersLogo, BePreparedLogo
} from "./components";

export interface Checklist {
    title: string;
    content?: string;
}

export interface KidsLikeYouProps {
    video: Video[];
}

export interface PreparationPlanProps {
    subTitle: string;
    checklist: Checklist[];
    supplementaryChecklistTitle: string;
    supplementaryChecklist: Checklist[];
}

export interface Video {
    embeddedVideo: React.ReactNode;
    title: string;
    content: string;
}

export interface YourResponsibilities {
    [key: string]: CarouselHandledProps;
}

export interface YourRights {
    [key: string]: CarouselHandledProps;
}

export interface KidsLikeYou {
    [key: string]: KidsLikeYouProps;
}

export interface PreparationPlan {
    [key: string]: PreparationPlanProps;
}

export interface Pages {
    pageTitles: { [key: string]: { [key: string]: string } };
    yourResponsibilities: YourResponsibilities;
    yourRights: YourRights;
    kidsLikeYou: KidsLikeYou;
    preparationPlan: PreparationPlan;
}

export const pages: Pages = {
    pageTitles: {
        en: {
            yourRights: "Your Rights",
            yourResponsibilities: "Your Responsibilities",
            preparationPlan: "Preparation Plan",
            kidsLikeYou: "Kids Like You"
        },
        es: {
            yourRights: "Tus Derechos",
            yourResponsibilities: "Tus Responsabilidades",
            preparationPlan: "Plan de Preparación",
            kidsLikeYou: "Jovenes como Tú"
        }
    },
    preparationPlan: {
        en: {
            subTitle: "Make sure you have all the documents you need to be prepared.",
            checklist: [
                {
                    title: "Passport",
                },
                {
                    title: "Birth certificate"
                },
                {
                    title: "Caregiver's authorization affidavit",
                    content: "You can download the form here if you need one."
                },
                {
                    title: "Proof that you’re in school",
                    content: "School proof of registration (or transcripts showing attendance) help with demonstrating residence in the US."
                },
                {
                    title: "Immigration documents",
                    content: "A-Number, work permit, green card, visa, etc."
                },
                {
                    title: "Proof of USA residence",
                    content: "Documents that show you have been living in the United States and for how long."
                },
                {
                    title: "Identification cards",
                    content: "This could be your driver’s license or other official identification. "
                },
                {
                    title: "Social security card or ITIN number"
                },
                {
                    title: "Important phone numbers",
                    content: "Phone numbers & other important contact information in case of an emergency."
                },
                {
                    title: "Medical information",
                    content: "This includes health insurance, medication list, and doctor’s contact information."
                }
            ],
            supplementaryChecklistTitle: "Other documents you might need:",
            supplementaryChecklist: [
                {
                    title: "Registry of birth",
                    content: "This is for U.S. born children registered in parent’s home country."
                },
                {
                    title: "Restraining orders",
                    content: "This is if you have a restraining order against someone."
                }
            ]
        },
        es: {
            subTitle: "Asegura que tienes todos los documentos que necesitas.",
            checklist: [
                {
                    title: "Pasaporte"
                },
                {
                    title: "Certificado de nacimiento"
                },
                {
                    title: "Declaración jurada de la autorización del cuidador",
                    content: "Puedes bajar el formulario desde aquí si lo necesita."
                },
                {
                    title: "Prueba que atiendes una escuela",
                    content: "Prueba de registración /inscripción (o transcripciones mostrando asistencia) ayuda demostrando residencia en los EEUU."
                },
                {
                    title: "Documentos de inmigración",
                    content: "“A-Number”, premise de trabajo, tarjeta verde, visa, etc."
                },
                {
                    title: "Prueba de residente de los EEUU",
                    content: "Documentos que demuestren que has vivido en los EEUU y por cuanto tiempo."
                },
                {
                    title: "Cédula de identidad",
                    content: "Puede ser tu licencia de manejar u otra identificación oficial. "
                },
                {
                    title: "Tarjeta de Social Security o número ITIN"
                },
                {
                    title: "Numeros de teléfono importante",
                    content: "Y otra información importante de contactos en caso de una emergencia."
                },
                {
                    title: "Información médica",
                    content: "Esto incluye seguro de salud, lista de medicamentos, e información de contacto de tu médico."
                }
            ],
            supplementaryChecklistTitle: "Otros artículos que puedes necesitar:",
            supplementaryChecklist: [
                {
                    title: "Registro de nacimiento",
                    content: "Para niños nacidos en los EEUU registrados en el país de origen de los padres."
                },
                {
                    title: "Ordenes de restricción",
                    content: "Estos es si tienes ordenes de restricción contra alguien."
                }
            ]
        }
    },
    yourResponsibilities: {
        en: {
            cards: [
                {
                    image: <StayCalmLogo />,
                    title: "Stay Calm",
                    content: "If stopped by law enforcement or immigration officials, remain calm and respectful.​"
                },
                {
                    image: <PoliceLogo />,
                    title: "Police",
                    content: "Do not interfere with or obstruct the officers.​"
                },
                {
                    image: <DoNotLieLogo />,
                    title: "Do Not Lie",
                    content: "Do not lie about your immigration status. Do not give false information or fake documents to officers.​"
                },
                {
                    image: <PapersLogo />,
                    title: "Papers",
                    content: "If you are not a US citizen, and an immigration officer asks for your immigration papers, ​you must show the papers if you have them with you."
                },
                {
                    image: <BePreparedLogo />,
                    title: "Be Prepared",
                    content: "Prepare yourself and your family in case you are arrested."
                }
            ]
        },
        es:{
            cards: [
                {
                    image: <StayCalmLogo />,
                    title: "Permanece en Calma",
                    content: "En caso de ser detenido por la policía u oficiales de inmigración, permanece en calma y se respetuoso​.​"
                },
                {
                    image: <PoliceLogo />,
                    title: "Policia",
                    content: "No interfieras ni obstruyas a los oficiales."
                },
                {
                    image: <DoNotLieLogo />,
                    title: "No Mientas",
                    content: "No mientas sobre tu estatus migratorio. No proporciones información o documentos falsos a los oficiales.​"
                },
                {
                    image: <PapersLogo />,
                    title: "Papeles",
                    content: "Si no eres ciudadano de los EEUU, y un oficial de inmigración te solicita tus papeles migratorios, deberás mostrar tus documentos en caso de contar con ellos."
                },
                {
                    image: <BePreparedLogo />,
                    title: "Prepárate",
                    content: "Prepárate y prepara a tú familia en case de ser arrestado.​"
                }
            ]
        }
    },
    yourRights: {
        en: {
            cards: [
                {
                    image: <ConstitutionalRightsLogo />,
                    title: "Constitutional Rights",
                    content: "You have constitutional rights, regardless of your immigration status."
                }, 
                {
                    image: <StaySilentLogo />,
                    title: "Stay Silent",
                    content: 'You have the right to remain silent. To exercise that right, say “I choose to remain silent".'
                },
                {
                    image: <SayNoLogo />,
                    title: "Say No to a Search",
                    content: "You have the right to refuse a search of yourself, your car or your home."
                },
                {
                    image: <LeaveCalmlyLogo />,
                    title: "Leave Calmly",
                    content: "If you’re not under arrest, you have the right to leave. Ask if you’re under arrest or if you may leave."
                },
                {
                    image: <LawyerLogo />,
                    title: "Lawyer",
                    content: "If you are arrested by police, you have the right to a lawyer. Ask for a lawyer immediately."
                }
            ]
        },
        es: {
            cards: [
                {
                    image: <ConstitutionalRightsLogo />,
                    title: "Derechos Constitucionales",
                    content: "Tú tienes derechos constitucionales sin importar tu estatus migratorio."
                },
                {
                    image: <StaySilentLogo />,
                    title: "Quedarse Callado",
                    content: 'Tú tienes el derecho a permanecer en silencio.Para ejercer ese derecho di: “Elijo permanecer callado”.'
                },
                {
                    image: <SayNoLogo />,
                    title: "Decir No a una Búsqueda",
                    content: "Tienes el derecho de rechazar a que revisen tu casa, tu carro, o tú persona."
                },
                {
                    image: <LeaveCalmlyLogo />,
                    title: "Irte Con Calma",
                    content: "Si no estás bajo arresto, tienes el derecho a retirarte de manera calmada.Pregunta si estás bajo arresto o si puedes irte."
                },
                {
                    image: <LawyerLogo />,
                    title: "Un Abogado",
                    content: "Si la policía te arresta, tienes el derecho de tener un abogado. Solicita un abogado inmediatamente."
                }
            ]
        }
    },
    kidsLikeYou: {
        en: {
            video: [
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/QF8aU6KD5SA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Lilian",
                    content: "17 years old, El Salvador"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/YBcttiFNO3Y"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Fareth",
                    content: "12 years old, Honduras"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/ANhfNvLxoo8"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Brandon",
                    content: "16 years old, Guatemala"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/Y0qOrYzDrSA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Angela",
                    content: "9 years old, El Salvador"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/RnwPw1N_gkM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Claudio",
                    content: "16 years old, América Central"
                }
            ]
        },
        es: {
            video: [
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/QF8aU6KD5SA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Lilian",
                    content: "17 años, El Salvador"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/YBcttiFNO3Y"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Fareth",
                    content: "12 años, Honduras"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/ANhfNvLxoo8"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Brandon",
                    content: "16 años, Guatemala"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/Y0qOrYzDrSA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Angela",
                    content: "9 años, El Salvador"
                },
                {
                    embeddedVideo: (
                        <iframe
                            width="100%"
                            height="300px"
                            src="https://www.youtube.com/embed/RnwPw1N_gkM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ),
                    title: "Claudio",
                    content: "16 años, América Central"
                }
            ]
        }
    }
}