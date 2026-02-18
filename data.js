window.INATURA_DATA = {
  "app": {
    "name": "InaturaLife",
    "short": "InaturaLife",
    "version": "1.0.0"
  },
  "modules": [
    {
      "key": "chas",
      "title": "Chás",
      "accent": "#14b8a6"
    ,
      "image": "assets/img/hero_chas.webp"
    },
    {
      "key": "suplementos",
      "title": "Suplementos",
      "accent": "#8b5cf6"
    ,
      "image": "assets/img/hero_suplementos.webp"
    },
    {
      "key": "protocolos",
      "title": "Protocolos",
      "accent": "#f97316"
    ,
      "image": "assets/img/hero_protocolos.webp"
    },
    {
      "key": "tabelas",
      "title": "Tabelas rápidas",
      "accent": "#0ea5e9"
    ,
      "image": "assets/img/hero_tabelas.webp"
    },
    {
      "key": "receitas",
      "title": "Receitas",
      "accent": "#22c55e"
    ,
      "image": "assets/img/hero_receitas.webp"
    },
    {
      "key": "seguranca",
      "title": "Segurança",
      "accent": "#ef4444"
    ,
      "image": "assets/img/hero_seguranca.webp"
    }
  ],
  "items": [
    {
      "id": "sobre",
      "module": "seguranca",
      "title": "Aviso importante",
      "category": "Geral",
      "tags": [
        "educativo",
        "segurança"
      ],
      "blocks": [
        {
          "type": "alert",
          "tone": "danger",
          "title": "Conteúdo educativo",
          "text": "Este mini-app tem objetivo educativo e não substitui acompanhamento médico(a) e/ou nutricionista. Gestantes, lactantes, crianças, pessoas com doenças crônicas (rins/fígado/coração, diabetes, pressão, tireoide) ou em uso de medicamentos devem buscar orientação antes de usar chás/suplementos regularmente."
        },
        {
          "type": "steps",
          "title": "Como usar o InaturaLife (o básico bem feito)",
          "steps": [
            "Escolha 1 objetivo principal por vez (ex.: intestino, sono, imunidade).",
            "Comece pelo natural (alimentos/rotina) por 7 dias.",
            "Se ainda precisar: escolha 1 suplemento por vez (2–4 semanas) para entender o que realmente ajudou.",
            "Evite misturar muitos itens no começo — clareza > quantidade."
          ]
        }
      ]
    },
    {
      "id": "tb-preparo",
      "module": "tabelas",
      "title": "Preparo padrão",
      "category": "Como preparar",
      "tags": [
        "infusão",
        "decocção",
        "maceração"
      ],
      "blocks": [
        {
          "type": "table",
          "title": "Preparo padrão (consulta rápida)",
          "columns": [
            "Método",
            "Para usar com",
            "Como fazer",
            "Tempo"
          ],
          "rows": [
            [
              "Infusão",
              "Folhas e flores",
              "Água quente + erva (não ferver junto) e abafar",
              "8–10 min"
            ],
            [
              "Decocção",
              "Cascas, raízes, sementes duras",
              "Ferver 5–10 min e depois abafar",
              "5–10 min + 5 min"
            ],
            [
              "Maceração",
              "Sementes (quando indicado)",
              "Deixar em água fria/ambiente por horas",
              "6–8 h"
            ]
          ]
        }
      ]
    },
    {
      "id": "tb-rotinas",
      "module": "tabelas",
      "title": "Rotinas diárias",
      "category": "Rotina",
      "tags": [
        "manhã",
        "tarde",
        "noite"
      ],
      "blocks": [
        {
          "type": "table",
          "title": "Rotinas diárias de chás (ideias)",
          "columns": [
            "Manhã",
            "Tarde",
            "Noite"
          ],
          "rows": [
            [
              "Gengibre com limão (imunidade)",
              "Camomila com erva-doce (digestão)",
              "Capim-limão (relaxamento)"
            ],
            [
              "Chá verde ou oolong (energia)",
              "Hibisco (retenção)",
              "Melissa com maracujá (sono)"
            ]
          ]
        }
      ]
    },
    {
      "id": "tb-mapa-dor",
      "module": "tabelas",
      "title": "Minha dor → por onde começo?",
      "category": "Mapa rápido",
      "tags": [
        "guia",
        "começar"
      ],
      "blocks": [
        {
          "type": "table",
          "title": "Minha dor → por onde começo?",
          "columns": [
            "Minha dor",
            "Começo natural (alimento/rotina)",
            "Se precisar de suplemento (adultos)",
            "Crianças"
          ],
          "rows": [
            [
              "Intestino preso",
              "Chia/linhaça + água",
              "Psyllium (começar baixo)",
              "Alimento primeiro"
            ],
            [
              "Gases/estufamento",
              "Reduzir açúcar, testar aveia",
              "Inulina (bem pouco)",
              "Avaliar se persistir"
            ],
            [
              "Pouco sol/ossos",
              "Rotina + exposição segura (quando possível)",
              "Vitamina D (dose moderada)",
              "Rótulo infantil/idade"
            ],
            [
              "Dieta corrida",
              "Aveia + cacau + fruta",
              "Multivitamínico (sem megadoses)",
              "Multivit infantil se indicado"
            ],
            [
              "Dormir mal",
              "Camomila + rotina do sono",
              "Magnésio glicinato/bisglicinato; melatonina (ver notas)",
              "Melatonina só com pediatra"
            ],
            [
              "Treino/recuperação",
              "Beterraba (se quiser) + comida",
              "Proteína; creatina",
              "Criança: alimento"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-regras",
      "module": "protocolos",
      "title": "Regras dos protocolos (7 dias)",
      "category": "Regras",
      "tags": [
        "7 dias",
        "pausa",
        "1 protocolo"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Protocolos semanais",
          "subtitle": "Escolha 1 por vez e siga por 7 dias",
          "badge": "Rotina prática",
          "tags": [
            "1–2 chás/dia"
          ]
        },
        {
          "type": "steps",
          "title": "Regras rápidas",
          "steps": [
            "Escolha 1 protocolo por vez por 7 dias.",
            "Use 1–2 chás por dia (não precisa misturar muitos).",
            "Se for sensível, use 1 xícara/dia.",
            "Pausa de 2–3 dias entre protocolos longos.",
            "Se piorar sintomas, suspenda."
          ]
        }
      ]
    },
    {
      "id": "p-digestao",
      "module": "protocolos",
      "title": "Digestão Leve (7 dias)",
      "category": "Chás",
      "tags": [
        "digestão",
        "gases"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Digestão Leve",
          "subtitle": "Gases, digestão lenta e desconforto após refeições",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Gengibre (ou gengibre com limão)"
            ],
            [
              "Após almoço",
              "Hortelã"
            ],
            [
              "Após jantar",
              "Erva-doce (ou funcho)"
            ],
            [
              "Noite (opcional)",
              "Camomila (se ansiedade digestiva)"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-intestino",
      "module": "protocolos",
      "title": "Intestino Preso (7 dias)",
      "category": "Chás",
      "tags": [
        "intestino",
        "constipação",
        "fibra"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Intestino Preso",
          "subtitle": "Melhorar o trânsito intestinal com suavidade",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Linhaça (ou chia)"
            ],
            [
              "Tarde",
              "Aveia"
            ],
            [
              "Noite",
              "Camomila"
            ]
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Importante",
          "text": "Água ao longo do dia é essencial. Sene é apenas uso ocasional, não protocolo."
        }
      ]
    },
    {
      "id": "p-sono",
      "module": "protocolos",
      "title": "Sono Reparador (7 dias)",
      "category": "Chás",
      "tags": [
        "sono",
        "insônia"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Sono Reparador",
          "subtitle": "Reduz agitação e melhora a qualidade do sono",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Final da tarde",
              "Capim-limão (ou erva-cidreira)"
            ],
            [
              "Noite (30–60 min antes)",
              "Melissa ou passiflora"
            ],
            [
              "Ao deitar (se necessário)",
              "Blend: camomila + melissa + lavanda"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-ansiedade",
      "module": "protocolos",
      "title": "Ansiedade (7 dias)",
      "category": "Chás",
      "tags": [
        "ansiedade",
        "tensão"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Ansiedade",
          "subtitle": "Nervosismo, irritabilidade e tensão",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Erva-cidreira"
            ],
            [
              "Tarde",
              "Tília (ou flor de laranjeira)"
            ],
            [
              "Noite",
              "Camomila ou lavanda"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-imunidade",
      "module": "protocolos",
      "title": "Imunidade (7 dias)",
      "category": "Chás",
      "tags": [
        "imunidade",
        "gripe"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Imunidade",
          "subtitle": "Apoio em épocas de gripe/resfriado",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Limão com mel (morno)"
            ],
            [
              "Tarde",
              "Gengibre (ou cúrcuma)"
            ],
            [
              "Noite",
              "Hortelã ou eucalipto (se congestão)"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-tosse",
      "module": "protocolos",
      "title": "Tosse e Garganta (7 dias)",
      "category": "Chás",
      "tags": [
        "tosse",
        "garganta"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Tosse e Garganta",
          "subtitle": "Tosse, irritação e catarro",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Guaco"
            ],
            [
              "Tarde",
              "Poejo"
            ],
            [
              "Noite",
              "Romã (casca) — gargarejo e/ou ingestão leve"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-retencao",
      "module": "protocolos",
      "title": "Circulação e Retenção (7 dias)",
      "category": "Chás",
      "tags": [
        "inchaço",
        "retenção",
        "circulação"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Circulação e Retenção",
          "subtitle": "Inchaço e sensação de peso",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Alecrim"
            ],
            [
              "Tarde",
              "Hibisco"
            ],
            [
              "Noite",
              "Alfazema (se estresse)"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-tpm",
      "module": "protocolos",
      "title": "TPM e Cólica (7 dias)",
      "category": "Chás",
      "tags": [
        "TPM",
        "cólica"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "TPM e Cólica",
          "subtitle": "Cólicas, irritabilidade e inchaço",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Gengibre"
            ],
            [
              "Tarde",
              "Erva-doce"
            ],
            [
              "Noite",
              "Camomila com calêndula"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-menopausa",
      "module": "protocolos",
      "title": "Menopausa (7 dias)",
      "category": "Chás",
      "tags": [
        "menopausa",
        "ondas de calor"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Menopausa",
          "subtitle": "Ondas de calor, irritação e sono leve",
          "badge": "7 dias"
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Amora (folhas)"
            ],
            [
              "Tarde",
              "Sálvia"
            ],
            [
              "Noite",
              "Melissa (ou lavanda)"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-glicose",
      "module": "protocolos",
      "title": "Apoio à Glicose (7 dias)",
      "category": "Chás especiais",
      "tags": [
        "glicose",
        "cautela"
      ],
      "blocks": [
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Se usa remédio para diabetes/insulina: monitorar glicemia e manter 1–2 chás/dia."
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Pata-de-vaca"
            ],
            [
              "Após almoço",
              "Canela (pau)"
            ],
            [
              "Tarde",
              "Folha de jambolão"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-peso",
      "module": "protocolos",
      "title": "Metabolismo e Perda de Peso (7 dias)",
      "category": "Chás especiais",
      "tags": [
        "metabolismo",
        "energia",
        "inchaço"
      ],
      "blocks": [
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Chá verde OU chá oolong"
            ],
            [
              "Tarde",
              "Hibisco"
            ],
            [
              "Final da tarde",
              "Gengibre (ou gengibre com limão)"
            ]
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Se tiver ansiedade/insônia",
          "text": "Troque chá verde/oolong por alecrim pela manhã ou reduza para 1 xícara/dia."
        }
      ]
    },
    {
      "id": "p-inchaço",
      "module": "protocolos",
      "title": "Retenção e Inchaço (7 dias)",
      "category": "Chás especiais",
      "tags": [
        "retenção",
        "inchaço"
      ],
      "blocks": [
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Dente-de-leão"
            ],
            [
              "Tarde",
              "Cavalinha"
            ],
            [
              "Noite",
              "Camomila"
            ]
          ]
        }
      ]
    },
    {
      "id": "p-tireoide",
      "module": "protocolos",
      "title": "Bem-estar da Tireoide (7 dias)",
      "category": "Chás especiais",
      "tags": [
        "tireoide",
        "rotina",
        "apoio"
      ],
      "blocks": [
        {
          "type": "alert",
          "tone": "warn",
          "title": "Importante",
          "text": "Apoio (não tratamento). Se usa medicação da tireoide: manter 1–2 chás/dia e evitar ashwagandha sem orientação."
        },
        {
          "type": "table",
          "title": "Rotina",
          "columns": [
            "Horário",
            "Chá"
          ],
          "rows": [
            [
              "Manhã",
              "Gengibre"
            ],
            [
              "Tarde",
              "Cúrcuma"
            ],
            [
              "Noite",
              "Melissa"
            ]
          ]
        }
      ]
    },
    {
      "id": "cha-camomila",
      "module": "chas",
      "title": "Camomila",
      "category": "Digestivo",
      "tags": [
        "gases",
        "cólicas",
        "sono"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Camomila",
          "subtitle": "Alivia má digestão, gases e cólicas; também ajuda no relaxamento",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão: 1 c. chá das flores em 200 ml de água quente. Abafar 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "2–3× ao dia após refeições (digestão) OU 1 xícara à noite (sono)."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-hortela",
      "module": "chas",
      "title": "Hortelã",
      "category": "Digestivo",
      "tags": [
        "náusea",
        "digestão"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Hortelã",
          "subtitle": "Estimula digestão e reduz náuseas",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão de folhas frescas ou secas, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "Após refeições."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-erva-doce",
      "module": "chas",
      "title": "Erva-doce",
      "category": "Digestivo",
      "tags": [
        "gases",
        "cólica"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Erva-doce",
          "subtitle": "Ajuda gases intestinais",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Sementes amassadas em infusão, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "Até 3× ao dia."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-espinheira",
      "module": "chas",
      "title": "Espinheira-santa",
      "category": "Digestivo",
      "tags": [
        "gastrite",
        "refluxo"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Espinheira-santa",
          "subtitle": "Auxilia gastrite e refluxo",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão das folhas secas, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "Antes das refeições."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-gengibre",
      "module": "chas",
      "title": "Gengibre",
      "category": "Digestivo",
      "tags": [
        "náusea",
        "imunidade",
        "circulação"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Gengibre",
          "subtitle": "Náuseas/enchôo, digestão e apoio em gripes (uso tradicional)",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Decocção: 2–3 fatias em 200 ml por 5 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1–2× ao dia (evite à noite se for sensível)."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-capim-limao",
      "module": "chas",
      "title": "Capim-limão (capim-santo)",
      "category": "Calmantes",
      "tags": [
        "relaxamento",
        "sono"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Capim-limão",
          "subtitle": "Relaxante leve, ajuda no sono",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "À noite ou no final da tarde."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-melissa",
      "module": "chas",
      "title": "Melissa",
      "category": "Calmantes",
      "tags": [
        "ansiedade",
        "sono"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Melissa",
          "subtitle": "Ansiedade leve e insônia",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "Antes de dormir."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-passiflora",
      "module": "chas",
      "title": "Passiflora",
      "category": "Calmantes",
      "tags": [
        "ansiedade",
        "palpitação"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Passiflora",
          "subtitle": "Ansiedade, nervosismo e palpitações",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão das folhas, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "À noite."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-lavanda",
      "module": "chas",
      "title": "Lavanda (alfazema)",
      "category": "Calmantes",
      "tags": [
        "tensão",
        "sono"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Lavanda",
          "subtitle": "Relaxante e antiespasmódica",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão das flores, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "À noite."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-guaco",
      "module": "chas",
      "title": "Guaco",
      "category": "Imunidade",
      "tags": [
        "tosse",
        "catarro"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Guaco",
          "subtitle": "Expectorante para tosse e bronquite (uso tradicional)",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão das folhas, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "2–3× ao dia (por períodos curtos)."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-eucalipto",
      "module": "chas",
      "title": "Eucalipto",
      "category": "Imunidade",
      "tags": [
        "congestão",
        "inalação"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Eucalipto",
          "subtitle": "Descongestionante e antisséptico (uso tradicional)",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão para beber OU inalação do vapor (com cuidado)."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1–2× ao dia."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-hibisco",
      "module": "chas",
      "title": "Hibisco",
      "category": "Circulação",
      "tags": [
        "retenção",
        "inchaço"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Hibisco",
          "subtitle": "Diurético leve; ajuda em inchaço e sensação de peso",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1–2× ao dia (manhã/tarde)."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Pode baixar pressão em pessoas sensíveis."
        }
      ]
    },
    {
      "id": "cha-amora",
      "module": "chas",
      "title": "Amora (folhas)",
      "category": "Femininos",
      "tags": [
        "menopausa",
        "ondas de calor"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Amora (folhas)",
          "subtitle": "Menopausa, ondas de calor e bem-estar hormonal (uso tradicional)",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1–2× ao dia."
            }
          ]
        }
      ]
    },
    {
      "id": "cha-salvia",
      "module": "chas",
      "title": "Sálvia",
      "category": "Femininos",
      "tags": [
        "menopausa",
        "suor"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Sálvia",
          "subtitle": "Reduz suor excessivo e sintomas hormonais (uso tradicional)",
          "badge": "Chá"
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão, 8–10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1× ao dia."
            }
          ]
        }
      ]
    },
    {
      "id": "esp-cardo",
      "module": "chas",
      "title": "Cardo-mariano",
      "category": "Chás especiais",
      "tags": [
        "fígado",
        "antioxidante",
        "cautela"
      ],
      "blocks": [
        {
          "type": "alert",
          "tone": "warn",
          "title": "Importante",
          "text": "Chás especiais não tratam doenças. Servem como apoio de hábitos e bem-estar."
        },
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "1 c. chá de sementes levemente trituradas em 200 ml água quente. Abafar 10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1–2 xícaras/dia, preferencialmente antes das refeições."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Evitar em gestantes sem orientação; pode interagir com medicamentos metabolizados no fígado."
        }
      ]
    },
    {
      "id": "esp-pata",
      "module": "chas",
      "title": "Pata-de-vaca",
      "category": "Chás especiais",
      "tags": [
        "glicose",
        "cautela"
      ],
      "blocks": [
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão: 1 c. chá das folhas secas em 200 ml água quente, 10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1 xícara pela manhã e/ou 1 xícara à tarde."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "danger",
          "title": "Atenção",
          "text": "Quem usa remédio para diabetes deve monitorar glicemia (risco de hipoglicemia em combinação)."
        }
      ]
    },
    {
      "id": "esp-jambolao",
      "module": "chas",
      "title": "Jambolão (folhas)",
      "category": "Chás especiais",
      "tags": [
        "glicose",
        "cautela"
      ],
      "blocks": [
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão: 1 c. chá/200 ml, 10 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1–2× ao dia, longe de refeições muito pesadas."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "danger",
          "title": "Atenção",
          "text": "Mesma cautela para quem usa antidiabéticos."
        }
      ]
    },
    {
      "id": "esp-oolong",
      "module": "chas",
      "title": "Chá oolong",
      "category": "Chás especiais",
      "tags": [
        "metabolismo",
        "cafeína"
      ],
      "blocks": [
        {
          "type": "steps",
          "title": "Como fazer",
          "steps": [
            "Infusão: 1 c. chá das folhas em 200 ml por 3–5 min."
          ]
        },
        {
          "type": "cards",
          "title": "Como tomar",
          "items": [
            {
              "title": "Sugestão",
              "text": "1 xícara pela manhã e, se desejar, 1 xícara no começo da tarde."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Contém cafeína; evitar à noite; cautela em ansiedade/gastrite/pressão sensível."
        }
      ]
    },
    {
      "id": "sup-chia",
      "module": "suplementos",
      "title": "Chia",
      "category": "Sementes",
      "tags": [
        "saciedade",
        "intestino",
        "fibra"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Chia",
          "subtitle": "Saciedade + intestino (fibra) + gordura boa (ALA)",
          "badge": "Semente"
        },
        {
          "type": "table",
          "title": "Como usar (prático)",
          "columns": [
            "Adultos",
            "Crianças",
            "Como usar",
            "Atenção"
          ],
          "rows": [
            [
              "1 c. sopa/d (10–15 g). Se tolerar, até 2.",
              "1 c. chá e observar",
              "Iogurte, frutas, vitamina, mingau",
              "Sempre com líquido; comece baixo."
            ]
          ]
        }
      ]
    },
    {
      "id": "sup-linhaca",
      "module": "suplementos",
      "title": "Linhaça (dourada ou marrom)",
      "category": "Sementes",
      "tags": [
        "intestino",
        "saciedade",
        "fibra"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Linhaça",
          "subtitle": "Intestino e saciedade (fibra + gordura boa)",
          "badge": "Semente"
        },
        {
          "type": "table",
          "title": "Como usar (prático)",
          "columns": [
            "Adultos",
            "Melhor forma",
            "Crianças",
            "Atenção"
          ],
          "rows": [
            [
              "1 c. sopa/d (10–15 g)",
              "Triturada (aproveita mais)",
              "1 c. chá (triturada)",
              "Água + ajuste de dose."
            ]
          ]
        }
      ]
    },
    {
      "id": "sup-aveia",
      "module": "suplementos",
      "title": "Aveia (farelo/farinha)",
      "category": "Farinhas e pós",
      "tags": [
        "rotina",
        "saciedade",
        "fibras"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Aveia",
          "subtitle": "Saciedade e fibras (ótima para rotina)",
          "badge": "Alimento base"
        },
        {
          "type": "cards",
          "title": "Quantidade prática",
          "items": [
            {
              "title": "Adultos",
              "text": "20–30 g/d (2 colheres de sopa)."
            },
            {
              "title": "Crianças",
              "text": "Excelente opção alimentar."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "info",
          "title": "Dica",
          "text": "Se der gases no começo, reduza a dose e aumente aos poucos + mais água."
        }
      ]
    },
    {
      "id": "sup-multivit",
      "module": "suplementos",
      "title": "Multivitamínico",
      "category": "Essenciais",
      "tags": [
        "base",
        "rotina"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Multivitamínico",
          "subtitle": "Rede de segurança quando a alimentação não está perfeita",
          "badge": "Essencial"
        },
        {
          "type": "steps",
          "title": "Como escolher",
          "steps": [
            "Dose clara por porção",
            "Evite 'megadoses'",
            "Cuidado para não duplicar com outros produtos"
          ]
        },
        {
          "type": "cards",
          "title": "Como usar",
          "items": [
            {
              "title": "Adultos",
              "text": "1 porção/dia (conforme rótulo)."
            },
            {
              "title": "Crianças",
              "text": "Somente versão infantil (conforme rótulo/idade)."
            }
          ]
        }
      ]
    },
    {
      "id": "sup-vitd",
      "module": "suplementos",
      "title": "Vitamina D",
      "category": "Essenciais",
      "tags": [
        "ossos",
        "músculos"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Vitamina D",
          "subtitle": "Suporte a ossos e músculos",
          "badge": "Essencial"
        },
        {
          "type": "table",
          "title": "Referências (RDA)",
          "columns": [
            "Faixa",
            "RDA (UI/dia)"
          ],
          "rows": [
            [
              "0–12 meses",
              "400"
            ],
            [
              "1–18 anos",
              "600"
            ],
            [
              "Adultos 19–70",
              "600"
            ],
            [
              "71+",
              "800"
            ]
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Evitar megadose sem orientação."
        }
      ]
    },
    {
      "id": "sup-omega3",
      "module": "suplementos",
      "title": "Ômega-3 (EPA + DHA)",
      "category": "Essenciais",
      "tags": [
        "suporte geral",
        "rótulo"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Ômega-3",
          "subtitle": "Suporte geral (varia por objetivo)",
          "badge": "Essencial"
        },
        {
          "type": "steps",
          "title": "Como escolher",
          "steps": [
            "Compare pelo EPA + DHA (não apenas 'óleo de peixe')",
            "Tomar com refeição"
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Se usa anticoagulante/tem cirurgia próxima, converse com profissional."
        }
      ]
    },
    {
      "id": "sup-psyllium",
      "module": "suplementos",
      "title": "Psyllium",
      "category": "Intestino e fibras",
      "tags": [
        "intestino preso",
        "regularidade",
        "saciedade"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Psyllium",
          "subtitle": "Regularidade intestinal e saciedade",
          "badge": "Fibra"
        },
        {
          "type": "cards",
          "title": "Uso (adultos)",
          "items": [
            {
              "title": "Comece baixo",
              "text": "1 porção/dia; alguns rótulos orientam 2–3/dia."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "danger",
          "title": "Regra de ouro",
          "text": "Água é obrigatória. Se usa remédios, preferir distância de 1–2 horas."
        }
      ]
    },
    {
      "id": "sup-inulina",
      "module": "suplementos",
      "title": "Inulina",
      "category": "Intestino e fibras",
      "tags": [
        "prebiótico",
        "microbiota"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Inulina",
          "subtitle": "Prebiótico (suporte à microbiota)",
          "badge": "Fibra"
        },
        {
          "type": "cards",
          "title": "Uso (adultos)",
          "items": [
            {
              "title": "Comece devagar",
              "text": "2–3 g/dia e suba aos poucos."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "info",
          "title": "Normal no começo",
          "text": "Gases podem acontecer. Ajuste a dose."
        }
      ]
    },
    {
      "id": "sup-glucomanano",
      "module": "suplementos",
      "title": "Glucomanano",
      "category": "Intestino e fibras",
      "tags": [
        "saciedade",
        "água"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Glucomanano",
          "subtitle": "Saciedade (sempre com dieta + água)",
          "badge": "Fibra"
        },
        {
          "type": "cards",
          "title": "Uso (adultos)",
          "items": [
            {
              "title": "Referência comum",
              "text": "3 g/dia (1 g, 3× ao dia)."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "danger",
          "title": "Atenção",
          "text": "Sempre com bastante água. Evitar rotina em crianças."
        }
      ]
    },
    {
      "id": "sup-spirulina",
      "module": "suplementos",
      "title": "Spirulina",
      "category": "Verdes e algas",
      "tags": [
        "superfood",
        "qualidade"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Spirulina",
          "subtitle": "‘Superfood’ — qualidade da marca importa",
          "badge": "Alga"
        },
        {
          "type": "cards",
          "title": "Uso (adultos)",
          "items": [
            {
              "title": "Faixa comum",
              "text": "1–8 g/dia (varia conforme produto)."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Prefira marcas com controle de pureza."
        }
      ]
    },
    {
      "id": "sup-zinco",
      "module": "suplementos",
      "title": "Zinco",
      "category": "Imunidade",
      "tags": [
        "imunidade",
        "uso curto"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Zinco",
          "subtitle": "Imunidade (uso por períodos curtos)",
          "badge": "Mineral"
        },
        {
          "type": "cards",
          "title": "Uso (adultos)",
          "items": [
            {
              "title": "Faixa prática",
              "text": "10–25 mg/dia por semanas (evite uso alto por meses)."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Uso alto por meses pode desequilibrar outros minerais."
        }
      ]
    },
    {
      "id": "sup-melatonina",
      "module": "suplementos",
      "title": "Melatonina",
      "category": "Sono, calma e foco",
      "tags": [
        "sono",
        "cautela",
        "crianças"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Melatonina",
          "subtitle": "Ajuda a ajustar o relógio biológico em alguns casos",
          "badge": "Sono"
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Regra prática",
          "text": "Se for usar, prefira curto prazo e rotina de sono junto. Crianças: apenas com pediatra."
        }
      ]
    },
    {
      "id": "sup-magnesio",
      "module": "suplementos",
      "title": "Magnésio (tipos)",
      "category": "Magnésio",
      "tags": [
        "sono",
        "intestino",
        "músculo"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Magnésio",
          "subtitle": "Como escolher o tipo certo",
          "badge": "Guia"
        },
        {
          "type": "table",
          "title": "Tipos (resumo)",
          "columns": [
            "Tipo",
            "Foco comum",
            "Observação"
          ],
          "rows": [
            [
              "Citrato",
              "Intestino preso",
              "Em alguns, solta demais"
            ],
            [
              "Glicinato/Bisglicinato",
              "Relaxamento/sono",
              "Geralmente bem tolerado"
            ],
            [
              "Malato",
              "Fadiga/músculo",
              "Depende do caso"
            ],
            [
              "Óxido",
              "Preço",
              "Pode ter menor tolerância"
            ]
          ]
        },
        {
          "type": "cards",
          "title": "Quantidade (adultos)",
          "items": [
            {
              "title": "Magnésio elementar",
              "text": "100–350 mg/dia (o número que importa)."
            }
          ]
        }
      ]
    },
    {
      "id": "sup-creatina",
      "module": "suplementos",
      "title": "Creatina",
      "category": "Fitness e recuperação",
      "tags": [
        "força",
        "recuperação"
      ],
      "blocks": [
        {
          "type": "hero",
          "title": "Creatina",
          "subtitle": "Força e recuperação (uso contínuo)",
          "badge": "Fitness"
        },
        {
          "type": "cards",
          "title": "Uso (adultos)",
          "items": [
            {
              "title": "Dose típica",
              "text": "3–5 g/dia."
            }
          ]
        },
        {
          "type": "alert",
          "tone": "warn",
          "title": "Atenção",
          "text": "Hidratação e bom senso; em doença renal, só com orientação."
        }
      ]
    },
    {
      "id": "r-overnight",
      "module": "receitas",
      "title": "Overnight “Intestino Feliz”",
      "category": "Intestino",
      "tags": [
        "fibras",
        "saciedade"
      ],
      "blocks": [
        {
          "type": "cards",
          "title": "Ajuda em",
          "items": [
            {
              "title": "Intestino e saciedade",
              "text": "Boa para rotina e constância."
            }
          ]
        },
        {
          "type": "steps",
          "title": "Ingredientes",
          "steps": [
            "2 c. sopa de aveia",
            "1 c. sopa de chia",
            "1 c. chá de linhaça triturada",
            "200 ml de leite/vegetal",
            "1 fruta picada"
          ]
        },
        {
          "type": "steps",
          "title": "Modo de preparo",
          "steps": [
            "Misture tudo e deixe na geladeira 6–8 h."
          ]
        },
        {
          "type": "alert",
          "tone": "info",
          "title": "Dica",
          "text": "Se der gases, tire a linhaça na primeira semana."
        }
      ]
    },
    {
      "id": "r-vitamina",
      "module": "receitas",
      "title": "Vitamina “Energia Leve”",
      "category": "Energia",
      "tags": [
        "rotina",
        "treino leve"
      ],
      "blocks": [
        {
          "type": "steps",
          "title": "Ingredientes",
          "steps": [
            "1 banana",
            "1 c. sopa de aveia",
            "1 c. sopa de cacau 100%",
            "5–10 g de beterraba em pó (opcional)",
            "200–300 ml de água/leite"
          ]
        },
        {
          "type": "steps",
          "title": "Preparo",
          "steps": [
            "Bater tudo no liquidificador."
          ]
        },
        {
          "type": "alert",
          "tone": "info",
          "title": "Dica",
          "text": "Use de manhã ou antes de um treino leve."
        }
      ]
    },
    {
      "id": "r-panqueca",
      "module": "receitas",
      "title": "Panqueca rápida de aveia e linhaça",
      "category": "Café da manhã",
      "tags": [
        "proteína",
        "rotina"
      ],
      "blocks": [
        {
          "type": "steps",
          "title": "Ingredientes",
          "steps": [
            "1 ovo (ou substituto)",
            "Aveia",
            "Linhaça",
            "Canela"
          ]
        },
        {
          "type": "steps",
          "title": "Preparo",
          "steps": [
            "Misture e doure na frigideira."
          ]
        },
        {
          "type": "alert",
          "tone": "info",
          "title": "Dica",
          "text": "Serve doce (fruta) ou salgado (queijo/atum)."
        }
      ]
    }
    ,
    {
      "id": "importar-conteudo",
      "module": "seguranca",
      "category": "Como usar",
      "title": "Como adicionar mais chás e suplementos",
      "subtitle": "Modelo pronto para colar novos itens no app.",
      "blocks": [
        {"type":"hero","title":"Adicionar conteúdo extra","subtitle":"Este app já está pronto para receber novos cards. Para incluir os seus 300+ chás completos, você pode me enviar o texto completo (ou um arquivo) que eu organizo e devolvo um novo ZIP — ou você mesma pode colar itens no arquivo data.js seguindo o modelo abaixo."},
        {"type":"paragraph","text":"📌 Dica: cada card é um objeto com: módulo (chas/suplementos/...), categoria, título, subtítulo e blocos internos (texto/tabela/lista)."},
        {"type":"code","language":"json","text":"{\n  \"id\": \"cha-novo-001\",\n  \"module\": \"chas\",\n  \"category\": \"Digestivo\",\n  \"title\": \"Nome do chá\",\n  \"subtitle\": \"Para que serve (resumo)\",\n  \"blocks\": [\n    {\"type\":\"bullet\",\"title\":\"Como fazer\",\"items\":[\"Infusão 8–10 min.\"]},\n    {\"type\":\"bullet\",\"title\":\"Como tomar\",\"items\":[\"1–2x ao dia.\"]},\n    {\"type\":\"callout\",\"tone\":\"warning\",\"title\":\"Atenção\",\"text\":\"Contraindicações e cuidados.\"}\n  ]\n}"},
        {"type":"callout","tone":"info","title":"Se você quiser, eu faço a importação por você","text":"É só me enviar o conteúdo completo (pode ser em partes ou em arquivo). Eu organizo, padronizo e devolvo um novo ZIP pronto para subir no GitHub."}
      ]
    }

  ]
};
