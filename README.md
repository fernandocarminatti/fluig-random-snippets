# fluig-patterns
Caderno de padrões práticos para desenvolvimento no Fluig.

Ele documenta **estruturas, convenções e templates** com objetivo de ajudar a manter consistência,
segurança de deploy e separação de responsabilidades em projetos Fluig.

O objetivo é **reduzir ambiguidade**, não criar framework.

---

## Princípios adotados

- Formulário é **UI**
- Dataset é **backend / service layer**
- Processo (BPMN) é **orquestração**
- Evento valida **apenas o contexto da atividade**
- Integração e efeitos colaterais **não ficam em eventos de tela**

Esses padrões existem para evitar (?):
- quebra de processos antigos
- acoplamento com UI
- deploy inseguro
- lógica duplicada

## O que este repositório resolve (??)

- evita lógica espalhada
- reduz acoplamento com UI
- facilita deploy com processos em andamento
- torna código previsível para quem chega depois

---

## Uso esperado

- copiar templates
- adaptar ao contexto
- manter consistência
- evoluir padrões conforme necessidade
