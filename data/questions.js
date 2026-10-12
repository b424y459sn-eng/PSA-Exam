/* PSA Resit Trainer: question bank.
 * Section keys match the official PSA blueprint:
 *   prescribing (8 x 10 marks), review (8 x 4), planning (8 x 2), info (6 x 2),
 *   calc (8 x 2), adr (8 x 2), monitoring (8 x 2), data (6 x 2).
 * Doses follow BNF / NICE conventions current at time of writing.
 * Always confirm against the live BNF before using anything clinically.
 */
window.PSA_SECTIONS = [
  { key: "prescribing", name: "Prescribing", items: 8, perItem: 10, minutes: 36 },
  { key: "review", name: "Prescription Review", items: 8, perItem: 4, minutes: 20 },
  { key: "planning", name: "Planning Management", items: 8, perItem: 2, minutes: 10 },
  { key: "info", name: "Providing Information", items: 6, perItem: 2, minutes: 8 },
  { key: "calc", name: "Calculation Skills", items: 8, perItem: 2, minutes: 14 },
  { key: "adr", name: "Adverse Drug Reactions", items: 8, perItem: 2, minutes: 10 },
  { key: "monitoring", name: "Drug Monitoring", items: 8, perItem: 2, minutes: 10 },
  { key: "data", name: "Data Interpretation", items: 6, perItem: 2, minutes: 8 }
];

window.PSA_Q = [
  /* ───────────────────────── PRESCRIBING (10 marks) ───────────────────────── */
  {
    id: "P1", sec: "prescribing", type: "rx",
    stem: "A 24-year-old woman presents with an acute exacerbation of asthma. Peak flow is 55% of her best, respiratory rate 24/min, SpO₂ 95% on air. She can complete sentences. She has already received nebulised salbutamol 5 mg.",
    facts: [["Allergies", "None known"], ["Weight", "62 kg"], ["eGFR", ">90 mL/min/1.73m²"]],
    task: "Write a prescription for ONE drug to treat the airway inflammation.",
    fields: {
      drug: ["Prednisolone", "Hydrocortisone", "Beclometasone (inhaled)", "Montelukast", "Magnesium sulfate"],
      dose: ["5 mg", "10 mg", "40 mg", "100 mg", "200 mg", "2 g"],
      route: ["Oral", "Intravenous", "Inhaled", "Intramuscular"],
      freq: ["Once only (stat)", "Once daily (morning)", "Twice daily", "Four times daily"]
    },
    answers: [
      { drug: "Prednisolone", dose: ["40 mg"], route: ["Oral"], freq: ["Once daily (morning)"], marks: 4 },
      { drug: "Hydrocortisone", dose: ["100 mg"], route: ["Intravenous"], freq: ["Four times daily"], marks: 2 }
    ],
    explain: "BTS/SIGN: oral prednisolone 40–50 mg once daily for at least 5 days in acute asthma. IV hydrocortisone 100 mg six-hourly is reserved for patients who cannot swallow or are vomiting, so it scores less here. Inhaled steroid and montelukast do not treat an acute attack; IV magnesium is for acute severe or life-threatening asthma."
  },
  {
    id: "P2", sec: "prescribing", type: "rx",
    stem: "A 58-year-old man has a 3-day history of productive cough and fever. Chest X-ray shows right lower lobe consolidation. He is alert, RR 20/min, BP 132/80 mmHg, urea 5.1 mmol/L. CURB-65 score is 0 and he is to be treated orally.",
    facts: [["Allergies", "None known"], ["Weight", "84 kg"], ["eGFR", "82 mL/min/1.73m²"]],
    task: "Write a prescription for ONE antibiotic to treat his pneumonia.",
    fields: {
      drug: ["Amoxicillin", "Co-amoxiclav", "Clarithromycin", "Ciprofloxacin", "Benzylpenicillin"],
      dose: ["100 mg", "250 mg", "500 mg", "1 g", "2 g"],
      route: ["Oral", "Intravenous", "Intramuscular"],
      freq: ["Once daily", "Twice daily", "Three times daily", "Four times daily"]
    },
    answers: [
      { drug: "Amoxicillin", dose: ["500 mg"], route: ["Oral"], freq: ["Three times daily"], marks: 4 },
      { drug: "Clarithromycin", dose: ["500 mg"], route: ["Oral"], freq: ["Twice daily"], marks: 2 }
    ],
    explain: "NICE NG138: low-severity community-acquired pneumonia → amoxicillin 500 mg three times daily for 5 days. Clarithromycin 500 mg twice daily (or doxycycline) is the choice in penicillin allergy, so it is a less-good answer for a patient with no allergy. Ciprofloxacin has poor pneumococcal cover."
  },
  {
    id: "P3", sec: "prescribing", type: "rx",
    stem: "A 34-year-old woman has 2 days of dysuria and urinary frequency. She is not pregnant and has no systemic features. Urine dipstick: nitrites positive, leucocytes positive.",
    facts: [["Allergies", "None known"], ["Weight", "70 kg"], ["eGFR", ">90 mL/min/1.73m²"]],
    task: "Write a prescription for ONE antibiotic to treat her lower urinary tract infection.",
    fields: {
      drug: ["Nitrofurantoin (modified-release)", "Trimethoprim", "Ciprofloxacin", "Amoxicillin", "Co-amoxiclav"],
      dose: ["50 mg", "100 mg", "200 mg", "500 mg"],
      route: ["Oral", "Intravenous"],
      freq: ["Once daily at night", "Twice daily", "Three times daily", "Four times daily"]
    },
    answers: [
      { drug: "Nitrofurantoin (modified-release)", dose: ["100 mg"], route: ["Oral"], freq: ["Twice daily"], marks: 4 },
      { drug: "Trimethoprim", dose: ["200 mg"], route: ["Oral"], freq: ["Twice daily"], marks: 2 }
    ],
    explain: "NICE NG109: first line is nitrofurantoin 100 mg modified-release twice daily for 3 days (avoid if eGFR <45). Trimethoprim 200 mg twice daily is an alternative when resistance risk is low. Amoxicillin has high resistance rates; quinolones are not first line."
  },
  {
    id: "P4", sec: "prescribing", type: "rx",
    stem: "A 63-year-old man has 40 minutes of central crushing chest pain. ECG shows ST elevation in V2–V4. Paramedics have given GTN spray and ticagrelor 180 mg orally. He is being transferred for primary PCI.",
    facts: [["Allergies", "None known"], ["Weight", "90 kg"], ["eGFR", "76 mL/min/1.73m²"]],
    task: "Write a prescription for the ONE antiplatelet drug he still needs now.",
    fields: {
      drug: ["Aspirin", "Clopidogrel", "Ticagrelor", "Prasugrel", "Enoxaparin", "Alteplase"],
      dose: ["75 mg", "150 mg", "300 mg", "600 mg"],
      route: ["Oral", "Intravenous", "Subcutaneous"],
      freq: ["Once only (stat)", "Once daily", "Twice daily"]
    },
    answers: [
      { drug: "Aspirin", dose: ["300 mg"], route: ["Oral"], freq: ["Once only (stat)"], marks: 4 }
    ],
    explain: "Dual antiplatelet loading for STEMI = aspirin 300 mg plus a P2Y12 inhibitor. He has had ticagrelor, so the missing drug is aspirin 300 mg orally (chewed or dispersed) as a once-only dose, then 75 mg daily. Write loading doses in the once-only section of the chart."
  },
  {
    id: "P5", sec: "prescribing", type: "rx",
    stem: "A 71-year-old man with CKD has a serum potassium of 7.1 mmol/L. ECG shows tall tented T waves and broadening of the QRS complex. He has IV access.",
    facts: [["Allergies", "None known"], ["Weight", "78 kg"], ["eGFR", "24 mL/min/1.73m²"]],
    task: "Write a prescription for the ONE drug that should be given FIRST.",
    fields: {
      drug: ["Calcium gluconate 10%", "Insulin (soluble) with glucose", "Salbutamol (nebulised)", "Sodium bicarbonate 8.4%", "Calcium polystyrene sulfonate"],
      dose: ["10 mL", "30 mL", "50 mL", "10 units", "5 mg"],
      route: ["Intravenous", "Oral", "Nebulised", "Intramuscular"],
      freq: ["Once only, over 10 minutes", "Once daily", "Every hour"]
    },
    answers: [
      { drug: "Calcium gluconate 10%", dose: ["30 mL", "10 mL"], route: ["Intravenous"], freq: ["Once only, over 10 minutes"], marks: 4 }
    ],
    explain: "ECG changes mean the myocardium needs stabilising first: IV calcium gluconate 10%. UK guidance (Renal Association/RCUK 2020) gives 30 mL of 10%; older sources give 10 mL, and both are accepted here. It does not lower potassium. Next give insulin 10 units with 25 g glucose to shift potassium into cells."
  },
  {
    id: "P6", sec: "prescribing", type: "rx",
    stem: "A 30-year-old man develops widespread urticaria, stridor and a BP of 78/40 mmHg minutes after a dose of IV co-amoxiclav. The infusion has been stopped and he is lying flat with high-flow oxygen.",
    facts: [["Allergies", "Now: co-amoxiclav"], ["Weight", "80 kg"], ["eGFR", ">90 mL/min/1.73m²"]],
    task: "Write a prescription for the ONE most important drug to give now.",
    fields: {
      drug: ["Adrenaline 1 mg/mL (1 in 1,000)", "Adrenaline 100 micrograms/mL (1 in 10,000)", "Chlorphenamine", "Hydrocortisone", "Salbutamol"],
      dose: ["50 micrograms", "500 micrograms", "1 mg", "10 mg", "200 mg"],
      route: ["Intramuscular", "Intravenous", "Subcutaneous", "Inhaled"],
      freq: ["Once only; repeat after 5 minutes if no improvement", "Every 4 hours", "Once daily"]
    },
    answers: [
      { drug: "Adrenaline 1 mg/mL (1 in 1,000)", dose: ["500 micrograms"], route: ["Intramuscular"], freq: ["Once only; repeat after 5 minutes if no improvement"], marks: 4 }
    ],
    explain: "Adult anaphylaxis: adrenaline 500 micrograms IM (0.5 mL of 1 mg/mL), anterolateral thigh, repeated after 5 minutes if needed. IV adrenaline is for experienced specialists only. Antihistamines and steroids are no longer first-line emergency treatment (RCUK 2021)."
  },
  {
    id: "P7", sec: "prescribing", type: "rx",
    stem: "A 72-year-old woman is admitted with pneumonia and will have markedly reduced mobility for several days. VTE risk assessment shows she needs pharmacological prophylaxis and bleeding risk is low.",
    facts: [["Allergies", "None known"], ["Weight", "68 kg"], ["eGFR", "75 mL/min/1.73m²"], ["Platelets", "246 × 10⁹/L"]],
    task: "Write a prescription for ONE drug for VTE prophylaxis.",
    fields: {
      drug: ["Enoxaparin", "Heparin (unfractionated)", "Apixaban", "Warfarin", "Aspirin"],
      dose: ["20 mg", "40 mg", "100 mg", "5,000 units", "5 mg"],
      route: ["Subcutaneous", "Intravenous", "Oral"],
      freq: ["Once daily", "Twice daily", "Three times daily"]
    },
    answers: [
      { drug: "Enoxaparin", dose: ["40 mg"], route: ["Subcutaneous"], freq: ["Once daily"], marks: 4 },
      { drug: "Heparin (unfractionated)", dose: ["5,000 units"], route: ["Subcutaneous"], freq: ["Twice daily", "Three times daily"], marks: 2 }
    ],
    explain: "Standard medical VTE prophylaxis: enoxaparin 40 mg SC once daily (reduce to 20 mg if CrCl <30 mL/min). Unfractionated heparin 5,000 units SC is used mainly in severe renal impairment, so it scores less here. 100 mg (1.5 mg/kg) is a treatment dose."
  },
  {
    id: "P8", sec: "prescribing", type: "rx",
    stem: "A 55-year-old man is on day 1 after a laparotomy. Pain is 7/10 despite regular paracetamol 1 g four times daily. He is opioid-naive. He cannot take NSAIDs because of a duodenal ulcer.",
    facts: [["Allergies", "None known"], ["Weight", "65 kg"], ["eGFR", "88 mL/min/1.73m²"]],
    task: "Write a prescription for ONE drug to be given AS REQUIRED for breakthrough pain.",
    fields: {
      drug: ["Morphine sulfate oral solution (immediate-release)", "Morphine sulfate modified-release", "Codeine phosphate", "Ibuprofen", "Fentanyl patch"],
      dose: ["5 mg", "10 mg", "30 mg", "60 mg", "200 mg"],
      route: ["Oral", "Transdermal", "Intramuscular"],
      freq: ["Every 4 hours when required", "Every 12 hours (regular)", "Once daily (regular)", "Every 30 minutes when required"]
    },
    answers: [
      { drug: "Morphine sulfate oral solution (immediate-release)", dose: ["5 mg", "10 mg"], route: ["Oral"], freq: ["Every 4 hours when required"], marks: 4 },
      { drug: "Codeine phosphate", dose: ["30 mg", "60 mg"], route: ["Oral"], freq: ["Every 4 hours when required"], marks: 2 }
    ],
    explain: "Severe acute pain in an opioid-naive adult: immediate-release oral morphine 5–10 mg up to every 4 hours when required. PRN prescriptions need an indication, minimum interval and maximum daily dose. Codeine is a weaker opioid and scores less. Modified-release morphine and fentanyl patches are never PRN and are unsafe in opioid-naive patients."
  },
  {
    id: "P9", sec: "prescribing", type: "rx",
    stem: "A 70-year-old man with type 2 diabetes takes gliclazide. Capillary glucose is 2.4 mmol/L. He is drowsy and cannot swallow safely. He has a cannula in situ.",
    facts: [["Allergies", "None known"], ["Weight", "76 kg"], ["eGFR", "52 mL/min/1.73m²"]],
    task: "Write a prescription for the ONE most appropriate treatment.",
    fields: {
      drug: ["Glucose 10%", "Glucose 50%", "Glucagon", "Glucose 40% oral gel", "Insulin (soluble)"],
      dose: ["20 mL", "200 mL", "1 mg", "1 litre", "10 units"],
      route: ["Intravenous", "Intramuscular", "Oral", "Subcutaneous"],
      freq: ["Once only, over 15 minutes", "Once only (stat)", "Once only, over 8 hours"]
    },
    answers: [
      { drug: "Glucose 10%", dose: ["200 mL"], route: ["Intravenous"], freq: ["Once only, over 15 minutes"], marks: 4 },
      { drug: "Glucagon", dose: ["1 mg"], route: ["Intramuscular"], freq: ["Once only (stat)"], marks: 2 }
    ],
    explain: "JBDS hypoglycaemia guideline: if unable to swallow and IV access is available, give glucose 10% 150–200 mL IV over 15 minutes (or 20% 75–100 mL). Glucose 50% is no longer recommended (vein irritation). Glucagon 1 mg IM is for when there is no IV access, and it works less well after sulfonylureas. Recheck capillary glucose after 10–15 minutes."
  },
  {
    id: "P10", sec: "prescribing", type: "rx",
    stem: "A 45-year-old man drinks about a bottle of vodka daily. His last drink was 10 hours ago. He is tremulous, sweaty and anxious. Liver function is normal apart from a raised GGT.",
    facts: [["Allergies", "None known"], ["Weight", "82 kg"], ["eGFR", ">90 mL/min/1.73m²"]],
    task: "Write a prescription for ONE drug to manage his alcohol withdrawal symptoms.",
    fields: {
      drug: ["Chlordiazepoxide", "Haloperidol", "Acamprosate", "Disulfiram", "Thiamine"],
      dose: ["5 mg", "20 mg", "100 mg", "333 mg", "1 g"],
      route: ["Oral", "Intravenous", "Intramuscular"],
      freq: ["Four times daily (reducing regimen)", "Once daily", "Once only (stat)"]
    },
    answers: [
      { drug: "Chlordiazepoxide", dose: ["20 mg"], route: ["Oral"], freq: ["Four times daily (reducing regimen)"], marks: 4 }
    ],
    explain: "A long-acting benzodiazepine on a reducing regimen over 5–7 days, e.g. chlordiazepoxide 20–30 mg four times daily, scaled to severity. Use lorazepam or oxazepam in significant liver impairment. Thiamine (Pabrinex) is also needed but does not treat withdrawal symptoms. Acamprosate and disulfiram are for maintaining abstinence."
  },
  {
    id: "P11", sec: "prescribing", type: "rx",
    stem: "A 68-year-old man has new atrial fibrillation with a ventricular rate of 128/min. He is haemodynamically stable with no heart failure. He does not have asthma. Anticoagulation has been started.",
    facts: [["Allergies", "None known"], ["Weight", "88 kg"], ["BP", "146/88 mmHg"], ["eGFR", "70 mL/min/1.73m²"]],
    task: "Write a prescription for ONE drug to control his ventricular rate.",
    fields: {
      drug: ["Bisoprolol", "Digoxin", "Amiodarone", "Flecainide", "Diltiazem"],
      dose: ["1.25 mg", "2.5 mg", "60 mg", "200 mg", "500 micrograms"],
      route: ["Oral", "Intravenous"],
      freq: ["Once daily", "Twice daily", "Three times daily"]
    },
    answers: [
      { drug: "Bisoprolol", dose: ["2.5 mg"], route: ["Oral"], freq: ["Once daily"], marks: 4 },
      { drug: "Diltiazem", dose: ["60 mg"], route: ["Oral"], freq: ["Three times daily"], marks: 2 }
    ],
    explain: "NICE NG196: first-line rate control is a beta-blocker (not sotalol) or a rate-limiting calcium-channel blocker (diltiazem, verapamil). Bisoprolol 2.5–5 mg daily, titrated, is the usual best answer. Digoxin is for sedentary patients or add-on. Amiodarone and flecainide are rhythm-control drugs."
  },
  {
    id: "P12", sec: "prescribing", type: "rx",
    stem: "A 76-year-old man with Parkinson's disease has nausea after starting co-careldopa. ECG shows a normal QTc. He has no cardiac disease.",
    facts: [["Allergies", "None known"], ["Weight", "70 kg"], ["eGFR", "64 mL/min/1.73m²"]],
    task: "Write a prescription for ONE antiemetic.",
    fields: {
      drug: ["Domperidone", "Metoclopramide", "Haloperidol", "Prochlorperazine", "Levomepromazine"],
      dose: ["1 mg", "10 mg", "20 mg", "50 mg"],
      route: ["Oral", "Intramuscular", "Intravenous"],
      freq: ["Up to three times daily when required", "Once daily", "Every hour when required"]
    },
    answers: [
      { drug: "Domperidone", dose: ["10 mg"], route: ["Oral"], freq: ["Up to three times daily when required"], marks: 4 }
    ],
    explain: "Dopamine antagonists that cross the blood–brain barrier (metoclopramide, haloperidol, prochlorperazine, levomepromazine) worsen parkinsonism. Domperidone acts peripherally: 10 mg up to three times daily (max 30 mg/day), for the shortest possible time because of QT risk."
  },
  {
    id: "P13", sec: "prescribing", type: "rx",
    stem: "An 80-year-old woman with known heart failure is breathless at rest with bibasal crackles and pitting oedema to the knees. Chest X-ray shows pulmonary oedema. She takes ramipril and bisoprolol. She does not take a diuretic.",
    facts: [["Allergies", "None known"], ["Weight", "64 kg"], ["BP", "148/86 mmHg"], ["eGFR", "55 mL/min/1.73m²"]],
    task: "Write a prescription for ONE drug to relieve her fluid overload.",
    fields: {
      drug: ["Furosemide", "Bendroflumethiazide", "Spironolactone", "Morphine sulfate", "Glyceryl trinitrate"],
      dose: ["2.5 mg", "25 mg", "40 mg", "250 mg"],
      route: ["Intravenous", "Oral", "Intramuscular"],
      freq: ["Once only (stat)", "Once daily", "Four times daily"]
    },
    answers: [
      { drug: "Furosemide", dose: ["40 mg"], route: ["Intravenous"], freq: ["Once only (stat)"], marks: 4 }
    ],
    explain: "Acute pulmonary oedema: IV loop diuretic. For a diuretic-naive patient, furosemide 40 mg IV is the usual starting dose, then review response (urine output, weight). IV gives reliable absorption when the gut is oedematous. Routine morphine is no longer recommended."
  },
  {
    id: "P14", sec: "prescribing", type: "rx",
    stem: "A 64-year-old man has a hot, swollen first metatarsophalangeal joint, typical of acute gout. He takes warfarin for AF and has a history of peptic ulcer disease.",
    facts: [["Allergies", "None known"], ["Weight", "92 kg"], ["eGFR", "70 mL/min/1.73m²"]],
    task: "Write a prescription for ONE drug to treat the acute attack.",
    fields: {
      drug: ["Colchicine", "Naproxen", "Allopurinol", "Febuxostat", "Prednisolone"],
      dose: ["500 micrograms", "5 mg", "30 mg", "300 mg", "500 mg"],
      route: ["Oral", "Intramuscular"],
      freq: ["Twice daily", "Four times daily", "Once daily", "Once weekly"]
    },
    answers: [
      { drug: "Colchicine", dose: ["500 micrograms"], route: ["Oral"], freq: ["Twice daily", "Four times daily"], marks: 4 },
      { drug: "Prednisolone", dose: ["30 mg"], route: ["Oral"], freq: ["Once daily"], marks: 2 }
    ],
    explain: "NSAIDs are unsafe with warfarin and a peptic ulcer history, so colchicine 500 micrograms 2–4 times daily is the best choice (max 6 mg per course). Prednisolone 30–35 mg daily for 5 days is an alternative. Never start allopurinol or febuxostat during an acute attack."
  },

  /* ───────────────────────── PRESCRIPTION REVIEW (2 × 2 marks) ───────────────────────── */
  {
    id: "R1", sec: "review", type: "review",
    stem: "An 84-year-old woman (weight 44 kg) is admitted with 3 days of increasing confusion. She has an overactive bladder, hypertension, osteoarthritis and reflux. Urine dipstick and bloods are unremarkable (eGFR 58).",
    chart: [
      ["Amlodipine", "5 mg", "Oral", "Once daily"],
      ["Oxybutynin", "5 mg", "Oral", "Three times daily"],
      ["Paracetamol", "1 g", "Oral", "Four times daily"],
      ["Omeprazole", "20 mg", "Oral", "Once daily"],
      ["Senna", "15 mg", "Oral", "At night"],
      ["Atorvastatin", "20 mg", "Oral", "At night"]
    ],
    parts: [
      { q: "Select the ONE prescription most likely to be contributing to her confusion.", ans: 1, explain: "Oxybutynin is strongly antimuscarinic and a classic cause of confusion in older people. Consider mirabegron or a bladder-selective option instead." },
      { q: "Select the ONE prescription whose dose is inappropriate for this patient.", ans: 2, explain: "Adults under 50 kg: paracetamol 15 mg/kg per dose (here ~500–660 mg), max 60 mg/kg/day. 1 g four times daily (4 g/day) is too much for 44 kg." }
    ]
  },
  {
    id: "R2", sec: "review", type: "review",
    stem: "A 74-year-old man with type 2 diabetes, hypertension, heart failure and osteoarthritis has had 3 days of vomiting and diarrhoea. Creatinine is 245 µmol/L (baseline 98), K⁺ 5.6 mmol/L.",
    chart: [
      ["Ramipril", "5 mg", "Oral", "Once daily (long-term)"],
      ["Furosemide", "40 mg", "Oral", "Once daily"],
      ["Ibuprofen", "400 mg", "Oral", "Three times daily (started 1 week ago)"],
      ["Metformin", "1 g", "Oral", "Twice daily"],
      ["Atorvastatin", "40 mg", "Oral", "At night"],
      ["Paracetamol", "1 g", "Oral", "Four times daily"]
    ],
    parts: [
      { q: "Select the ONE recently started prescription most likely to have contributed to his acute kidney injury.", ans: 2, explain: "Ibuprofen completes the 'triple whammy' (ACE inhibitor + diuretic + NSAID), which reduces renal perfusion, especially when dehydrated." },
      { q: "Select the ONE prescription that should be withheld because of the risk of lactic acidosis.", ans: 3, explain: "Metformin accumulates in AKI and can cause lactic acidosis. Withhold it (sick day rules) until renal function recovers." }
    ]
  },
  {
    id: "R3", sec: "review", type: "review",
    stem: "A 69-year-old woman with AF takes warfarin (target INR 2.5). She presents with epistaxis and an INR of 6.9. Five days ago she started an antibiotic for a chest infection; she is allergic to penicillin.",
    chart: [
      ["Warfarin", "4 mg", "Oral", "Once daily at 6 pm"],
      ["Clarithromycin", "500 mg", "Oral", "Twice daily (started 5 days ago)"],
      ["Simvastatin", "40 mg", "Oral", "At night"],
      ["Bisoprolol", "5 mg", "Oral", "Once daily"],
      ["Lansoprazole", "15 mg", "Oral", "Once daily"],
      ["Paracetamol", "1 g", "Oral", "Four times daily when required"]
    ],
    parts: [
      { q: "Select the ONE prescription most likely to have raised her INR.", ans: 1, explain: "Macrolides (clarithromycin, erythromycin) inhibit warfarin metabolism and raise the INR." },
      { q: "Select the ONE prescription that must be withheld while she takes clarithromycin.", ans: 2, explain: "Clarithromycin strongly inhibits CYP3A4. Simvastatin levels rise sharply, risking myopathy and rhabdomyolysis, so the combination is contraindicated. Withhold simvastatin until the course ends." }
    ]
  },
  {
    id: "R4", sec: "review", type: "review",
    stem: "A 66-year-old woman with rheumatoid arthritis presents with mouth ulcers, fever and bruising. Neutrophils 0.4 × 10⁹/L, platelets 45 × 10⁹/L. She started an antibiotic for a UTI 6 days ago.",
    chart: [
      ["Methotrexate", "15 mg", "Oral", "Once weekly (Mondays)"],
      ["Folic acid", "5 mg", "Oral", "Once weekly (Wednesdays)"],
      ["Trimethoprim", "200 mg", "Oral", "Twice daily (started 6 days ago)"],
      ["Prednisolone", "5 mg", "Oral", "Once daily"],
      ["Alendronic acid", "70 mg", "Oral", "Once daily"],
      ["Omeprazole", "20 mg", "Oral", "Once daily"]
    ],
    parts: [
      { q: "Select the ONE prescription most likely to have interacted to cause her bone marrow suppression.", ans: 2, explain: "Trimethoprim is also an antifolate. Combined with methotrexate it can cause severe, even fatal, myelosuppression." },
      { q: "Select the ONE prescription that has been written with the wrong frequency.", ans: 4, explain: "Alendronic acid 70 mg is a ONCE-WEEKLY dose. The daily dose is 10 mg." }
    ]
  },
  {
    id: "R5", sec: "review", type: "review",
    stem: "A 71-year-old man with depression, osteoarthritis and ischaemic heart disease presents with melaena. Hb 82 g/L. He has recently been prescribed tramadol. He is not taking a PPI.",
    chart: [
      ["Sertraline", "100 mg", "Oral", "Once daily"],
      ["Aspirin", "75 mg", "Oral", "Once daily"],
      ["Naproxen", "500 mg", "Oral", "Twice daily"],
      ["Tramadol", "50 mg", "Oral", "Four times daily when required"],
      ["Atorvastatin", "80 mg", "Oral", "At night"],
      ["Ramipril", "2.5 mg", "Oral", "Once daily"]
    ],
    parts: [
      { q: "Select the ONE prescription most likely to have caused his gastrointestinal bleed.", ans: 2, explain: "Full-dose NSAID without gastroprotection carries the highest GI bleeding risk, made worse by aspirin and an SSRI." },
      { q: "Select the ONE prescription that, combined with tramadol, increases the risk of serotonin syndrome.", ans: 0, explain: "Tramadol has serotonergic activity; with SSRIs it can cause serotonin syndrome and lowers the seizure threshold." }
    ]
  },
  {
    id: "R6", sec: "review", type: "review",
    stem: "An 82-year-old woman is admitted after a fall. Lying BP 138/76 mmHg, standing 104/60 mmHg. Serum sodium is 123 mmol/L.",
    chart: [
      ["Doxazosin", "4 mg", "Oral", "Once daily"],
      ["Indapamide", "2.5 mg", "Oral", "Once daily"],
      ["Levothyroxine", "75 micrograms", "Oral", "Once daily"],
      ["Atorvastatin", "20 mg", "Oral", "At night"],
      ["Paracetamol", "1 g", "Oral", "Four times daily"],
      ["Lansoprazole", "15 mg", "Oral", "Once daily"]
    ],
    parts: [
      { q: "Select the ONE prescription most likely to be causing her postural hypotension.", ans: 0, explain: "Alpha-blockers such as doxazosin cause vasodilatation and marked postural hypotension, especially in older people." },
      { q: "Select the ONE prescription most likely to be causing her hyponatraemia.", ans: 1, explain: "Thiazide and thiazide-like diuretics (indapamide, bendroflumethiazide) are among the commonest drug causes of hyponatraemia." }
    ]
  },
  {
    id: "R7", sec: "review", type: "review",
    stem: "A 79-year-old man with AF and heart failure has nausea, blurred yellow-tinged vision and a heart rate of 44/min. K⁺ 2.8 mmol/L, eGFR 38. His diuretic dose was increased last week.",
    chart: [
      ["Digoxin", "250 micrograms", "Oral", "Once daily"],
      ["Furosemide", "80 mg", "Oral", "Twice daily"],
      ["Ramipril", "2.5 mg", "Oral", "Once daily"],
      ["Apixaban", "5 mg", "Oral", "Twice daily"],
      ["Atorvastatin", "20 mg", "Oral", "At night"],
      ["Paracetamol", "1 g", "Oral", "Four times daily"]
    ],
    parts: [
      { q: "Select the ONE prescription most likely to be causing his symptoms.", ans: 0, explain: "Nausea, xanthopsia and bradycardia are classic digoxin toxicity. Reduced renal function lowers digoxin clearance." },
      { q: "Select the ONE prescription that has increased the risk of toxicity by causing an electrolyte disturbance.", ans: 1, explain: "Loop diuretics cause hypokalaemia, which increases digoxin binding and toxicity." }
    ]
  },
  {
    id: "R8", sec: "review", type: "review",
    stem: "A 52-year-old woman with bipolar disorder has a coarse tremor, vomiting and confusion. Serum lithium is 2.1 mmol/L. Her GP started a new antihypertensive 3 weeks ago. She also has hypothyroidism.",
    chart: [
      ["Lithium carbonate (Priadel)", "800 mg", "Oral", "At night"],
      ["Bendroflumethiazide", "2.5 mg", "Oral", "Once daily (started 3 weeks ago)"],
      ["Levothyroxine", "100 micrograms", "Oral", "Once daily"],
      ["Omeprazole", "20 mg", "Oral", "Once daily"],
      ["Paracetamol", "1 g", "Oral", "Four times daily when required"],
      ["Senna", "15 mg", "Oral", "At night"]
    ],
    parts: [
      { q: "Select the ONE prescription most likely to have precipitated her lithium toxicity.", ans: 1, explain: "Thiazides reduce renal lithium clearance and raise levels. ACE inhibitors, ARBs and NSAIDs do the same." },
      { q: "Select the ONE drug most likely to have caused the condition treated by levothyroxine.", ans: 0, explain: "Lithium commonly causes hypothyroidism, which is why TFTs are checked every 6 months." }
    ]
  },
  {
    id: "R9", sec: "review", type: "review",
    stem: "A 58-year-old woman with heart failure and asthma has a K⁺ of 6.3 mmol/L (4.9 two weeks ago). She started an antibiotic 4 days ago. A new drug was recently added for anxiety.",
    chart: [
      ["Ramipril", "10 mg", "Oral", "Once daily"],
      ["Spironolactone", "25 mg", "Oral", "Once daily"],
      ["Trimethoprim", "200 mg", "Oral", "Twice daily (started 4 days ago)"],
      ["Propranolol", "40 mg", "Oral", "Twice daily (new)"],
      ["Salbutamol", "100 micrograms/dose", "Inhaled", "2 puffs when required"],
      ["Beclometasone", "200 micrograms/dose", "Inhaled", "2 puffs twice daily"]
    ],
    parts: [
      { q: "Select the ONE recently started prescription most likely to have caused the rise in potassium.", ans: 2, explain: "Trimethoprim blocks the ENaC channel in the distal tubule (amiloride-like effect), raising potassium, especially with ACE inhibitors and spironolactone." },
      { q: "Select the ONE prescription that is contraindicated by her medical history.", ans: 3, explain: "Non-selective beta-blockers such as propranolol can cause severe bronchospasm in asthma and are contraindicated." }
    ]
  },
  {
    id: "R10", sec: "review", type: "review",
    stem: "A 27-year-old woman with epilepsy has just found out she is 7 weeks pregnant (unplanned).",
    chart: [
      ["Sodium valproate", "500 mg", "Oral", "Twice daily"],
      ["Folic acid", "400 micrograms", "Oral", "Once daily"],
      ["Ferrous fumarate", "210 mg", "Oral", "Once daily"],
      ["Paracetamol", "1 g", "Oral", "Four times daily when required"],
      ["Cetirizine", "10 mg", "Oral", "Once daily"],
      ["Gaviscon Advance", "10 mL", "Oral", "After meals when required"]
    ],
    parts: [
      { q: "Select the ONE prescription that needs urgent specialist review because of teratogenic risk.", ans: 0, explain: "Valproate is highly teratogenic (neural tube defects, neurodevelopmental disorders). Refer urgently to the specialist; do not stop it abruptly." },
      { q: "Select the ONE prescription whose dose is too low for this patient.", ans: 1, explain: "Women on antiepileptic drugs (and other high-risk groups) need folic acid 5 mg daily, not 400 micrograms." }
    ]
  },

  /* ───────────────────────── CALCULATION SKILLS (2 marks) ───────────────────────── */
  { id: "C1", sec: "calc", type: "calc", stem: "A child needs amoxicillin 375 mg. The oral suspension is 250 mg/5 mL.", task: "What volume should be given?", unit: "mL", ans: 7.5, tol: 0.01, explain: "375 ÷ 250 × 5 mL = 7.5 mL. Formula: (dose wanted ÷ dose you have) × volume it comes in." },
  { id: "C2", sec: "calc", type: "calc", stem: "Lidocaine 1% (without adrenaline) is used for local anaesthesia. The maximum dose is 3 mg/kg. The patient weighs 60 kg.", task: "What is the maximum volume of lidocaine 1% that can be given?", unit: "mL", ans: 18, tol: 0.01, explain: "1% = 1 g/100 mL = 10 mg/mL. Max dose = 3 × 60 = 180 mg. 180 ÷ 10 = 18 mL." },
  { id: "C3", sec: "calc", type: "calc", stem: "A patient receives 0.5 mL of adrenaline 1 in 1,000.", task: "How many micrograms of adrenaline have been given?", unit: "micrograms", ans: 500, tol: 0.01, explain: "1 in 1,000 = 1 g in 1,000 mL = 1 mg/mL. 0.5 mL = 0.5 mg = 500 micrograms." },
  { id: "C4", sec: "calc", type: "calc", stem: "1 litre of sodium chloride 0.9% is prescribed over 8 hours using an infusion pump.", task: "At what rate should the pump be set?", unit: "mL/hour", ans: 125, tol: 0.01, explain: "1,000 mL ÷ 8 h = 125 mL/hour." },
  { id: "C5", sec: "calc", type: "calc", stem: "1 litre of sodium chloride 0.9% is to run over 8 hours by gravity. The giving set delivers 20 drops/mL.", task: "How many drops per minute are needed? Give your answer to the nearest whole number.", unit: "drops/minute", ans: 42, tol: 0.5, explain: "Total drops = 1,000 × 20 = 20,000. Minutes = 8 × 60 = 480. 20,000 ÷ 480 = 41.7 → 42 drops/min." },
  { id: "C6", sec: "calc", type: "calc", stem: "Heparin sodium 25,000 units is made up to 50 mL with sodium chloride 0.9%. The patient needs 1,000 units/hour.", task: "At what rate should the infusion run?", unit: "mL/hour", ans: 2, tol: 0.01, explain: "Concentration = 25,000 ÷ 50 = 500 units/mL. 1,000 ÷ 500 = 2 mL/hour." },
  { id: "C7", sec: "calc", type: "calc", stem: "A bag of potassium chloride 0.3% with sodium chloride 0.9% contains 1 litre.", task: "How many grams of potassium chloride does the bag contain?", unit: "g", ans: 3, tol: 0.01, explain: "% w/v = grams per 100 mL. 0.3 g/100 mL × 10 = 3 g per litre (≈ 40 mmol K⁺)." },
  { id: "C8", sec: "calc", type: "calc", stem: "A patient receives 500 mL of glucose 5%.", task: "How many grams of glucose have been given?", unit: "g", ans: 25, tol: 0.01, explain: "5% = 5 g/100 mL. 500 mL × 5/100 = 25 g." },
  { id: "C9", sec: "calc", type: "calc", stem: "A patient's pain is controlled on regular immediate-release oral morphine 20 mg every 4 hours. You convert this to modified-release morphine given twice daily.", task: "What dose of modified-release morphine should be given every 12 hours?", unit: "mg", ans: 60, tol: 0.01, explain: "24-hour total = 20 mg × 6 = 120 mg. Split into two 12-hourly doses = 60 mg twice daily." },
  { id: "C10", sec: "calc", type: "calc", stem: "A patient takes modified-release morphine 30 mg twice daily.", task: "What is the appropriate immediate-release oral morphine dose for breakthrough pain?", unit: "mg", ans: 10, tol: 0.01, explain: "Breakthrough dose ≈ one-sixth of the 24-hour total. 60 mg ÷ 6 = 10 mg." },
  { id: "C11", sec: "calc", type: "calc", stem: "Gentamicin 5 mg/kg is prescribed for a patient weighing 82 kg. Vials contain 40 mg/mL.", task: "What volume of gentamicin is needed? Give your answer to 2 decimal places.", unit: "mL", ans: 10.25, tol: 0.01, explain: "Dose = 5 × 82 = 410 mg. 410 ÷ 40 = 10.25 mL." },
  { id: "C12", sec: "calc", type: "calc", stem: "A child weighing 18 kg is prescribed a drug at 20 mg/kg/day in three divided doses.", task: "What is each individual dose?", unit: "mg", ans: 120, tol: 0.01, explain: "Daily = 20 × 18 = 360 mg. ÷ 3 = 120 mg per dose." },
  { id: "C13", sec: "calc", type: "calc", stem: "Dobutamine is needed at 5 micrograms/kg/minute for a 70 kg patient. The syringe contains 250 mg in 50 mL.", task: "At what rate should the syringe driver run? Give your answer to 1 decimal place.", unit: "mL/hour", ans: 4.2, tol: 0.05, explain: "Dose/min = 5 × 70 = 350 micrograms. Per hour = 21,000 micrograms = 21 mg. Concentration = 5 mg/mL. 21 ÷ 5 = 4.2 mL/hour." },
  { id: "C14", sec: "calc", type: "calc", stem: "A patient needs 14 units of insulin. The insulin is 100 units/mL.", task: "What volume contains this dose? Give your answer to 2 decimal places.", unit: "mL", ans: 0.14, tol: 0.001, explain: "14 ÷ 100 = 0.14 mL. Insulin must always be given with an insulin syringe or pen, never measured in mL by a general syringe. This is a maths drill only." },

  /* ───────────────────────── ADVERSE DRUG REACTIONS (2 marks) ───────────────────────── */
  { id: "A1", sec: "adr", type: "mcq", stem: "A 67-year-old man started a new medicine 3 weeks ago. He now has a persistent dry, tickly cough. Chest X-ray is normal.", task: "Which drug is most likely responsible?", options: ["Amlodipine", "Ramipril", "Bisoprolol", "Atorvastatin", "Bendroflumethiazide"], ans: 1, explain: "ACE inhibitors cause a dry cough in roughly 10% of patients, from bradykinin accumulation." },
  { id: "A2", sec: "adr", type: "mcq", stem: "A 50-year-old woman with hypertension has an intolerable dry cough caused by ramipril. Her BP is well controlled.", task: "Which is the most appropriate management?", options: ["Add codeine linctus", "Switch ramipril to losartan", "Reduce ramipril dose by half", "Add a salbutamol inhaler", "Stop ramipril and start no replacement"], ans: 1, explain: "Angiotensin II receptor blockers do not raise bradykinin and are the NICE alternative when an ACE inhibitor is not tolerated." },
  { id: "A3", sec: "adr", type: "mcq", stem: "A 72-year-old man taking prednisolone develops sudden pain at the back of his heel while walking. He started an antibiotic for prostatitis 10 days ago.", task: "Which drug is most likely responsible for this adverse effect?", options: ["Ciprofloxacin", "Trimethoprim", "Doxycycline", "Nitrofurantoin", "Amoxicillin"], ans: 0, explain: "Fluoroquinolones cause tendinopathy and tendon rupture. Risk is higher in people over 60 and with corticosteroids. Stop the quinolone (MHRA warning)." },
  { id: "A4", sec: "adr", type: "mcq", stem: "A patient on simvastatin 80 mg has generalised muscle aches and weakness. Creatine kinase is 12 times the upper limit of normal.", task: "Which is the most appropriate action?", options: ["Continue and recheck CK in 4 weeks", "Stop the statin", "Reduce to simvastatin 40 mg", "Switch to atorvastatin 80 mg", "Add coenzyme Q10"], ans: 1, explain: "Muscle symptoms with CK >10× upper limit of normal → stop the statin (risk of rhabdomyolysis). Recheck CK and renal function." },
  { id: "A5", sec: "adr", type: "mcq", stem: "A 22-year-old woman received IV metoclopramide in ED. An hour later her eyes are fixed upwards and her neck is twisted to one side.", task: "Which is the most appropriate treatment?", options: ["Lorazepam", "Procyclidine", "Haloperidol", "Dantrolene", "Naloxone"], ans: 1, explain: "Acute dystonic reaction (oculogyric crisis) caused by dopamine blockade, most common in young women. Treat with an antimuscarinic: procyclidine 5–10 mg IV/IM." },
  { id: "A6", sec: "adr", type: "mcq", stem: "A woman taking carbimazole for Graves' disease phones with a sore throat and fever.", task: "Which is the most appropriate action?", options: ["Stop carbimazole and check an urgent full blood count", "Reduce the carbimazole dose", "Start amoxicillin and continue carbimazole", "Continue and review in 2 weeks", "Switch to levothyroxine"], ans: 0, explain: "Carbimazole can cause agranulocytosis. Sore throat, fever or mouth ulcers → urgent FBC, and stop if there is neutropenia." },
  { id: "A7", sec: "adr", type: "mcq", stem: "A patient has taken amiodarone for 2 years.", task: "Which adverse effect is most characteristically associated with amiodarone?", options: ["Pulmonary fibrosis", "Gingival hyperplasia", "Gynaecomastia", "Angioedema", "Ototoxicity"], ans: 0, explain: "Amiodarone: pulmonary fibrosis, thyroid dysfunction (both ways), hepatotoxicity, photosensitivity, slate-grey skin, corneal microdeposits. Gingival hyperplasia → phenytoin; gynaecomastia → spironolactone." },
  { id: "A8", sec: "adr", type: "mcq", stem: "An 81-year-old woman with a new AKI has been receiving regular oral morphine after a hip fracture. She is now drowsy (GCS 9), with pinpoint pupils and a respiratory rate of 7/min.", task: "Which is the most appropriate immediate treatment?", options: ["Naloxone 400 micrograms IV, repeated as needed", "Flumazenil 200 micrograms IV", "Naloxone 10 mg IV", "Acetylcysteine IV", "Atropine 500 micrograms IV"], ans: 0, explain: "Opioid toxicity (morphine metabolites accumulate in AKI). Give naloxone 400 micrograms IV and repeat as needed; it is short-acting, so an infusion may be needed. Use smaller titrated doses where analgesia must be preserved, e.g. palliative care." },
  { id: "A9", sec: "adr", type: "mcq", stem: "A patient is started on IV gentamicin for pyelonephritis.", task: "Which adverse effects is gentamicin most associated with?", options: ["Hepatotoxicity", "Ototoxicity and nephrotoxicity", "QT prolongation", "Peripheral neuropathy", "Stevens–Johnson syndrome"], ans: 1, explain: "Aminoglycosides are ototoxic and nephrotoxic. Risk rises with high trough levels, prolonged courses and loop diuretics." },
  { id: "A10", sec: "adr", type: "mcq", stem: "You are deciding which suspected adverse reaction to report through the Yellow Card scheme. None of the drugs below carries a black triangle.", task: "Which reaction should be reported?", options: ["Nausea with metformin", "Mild headache with GTN spray", "Anaphylaxis with co-amoxiclav", "Constipation with codeine", "Dry mouth with amitriptyline"], ans: 2, explain: "For established drugs, report SERIOUS reactions (even if well known). For black-triangle (▼) drugs, report ALL suspected reactions. Also report all reactions in children." },
  { id: "A11", sec: "adr", type: "mcq", stem: "A 79-year-old woman started a new medicine 3 weeks ago. Her serum sodium is now 121 mmol/L (previously 138).", task: "Which drug is most likely responsible?", options: ["Citalopram", "Paracetamol", "Amlodipine", "Atorvastatin", "Senna"], ans: 0, explain: "SSRIs cause SIADH and hyponatraemia, especially in older people in the first few weeks." },
  { id: "A12", sec: "adr", type: "mcq", stem: "A 60-year-old Black African man develops swelling of the lips and tongue without urticaria or itch. He started a new antihypertensive 2 months ago.", task: "Which drug is most likely responsible?", options: ["Amlodipine", "Ramipril", "Indapamide", "Doxazosin", "Atorvastatin"], ans: 1, explain: "ACE-inhibitor angioedema (bradykinin-mediated, no urticaria) can occur months or years after starting and is more common in people of Black African ancestry. Stop permanently." },

  /* ───────────────────────── DRUG MONITORING (2 marks) ───────────────────────── */
  { id: "M1", sec: "monitoring", type: "mcq", stem: "A 61-year-old man is started on atorvastatin 20 mg for primary prevention.", task: "Which monitoring plan is most appropriate?", options: ["Creatine kinase every month", "Liver transaminases at baseline, within 3 months and at 12 months; lipids at 3 months", "Full blood count weekly for 6 weeks", "Renal function every week", "No monitoring is needed"], ans: 1, explain: "NICE NG238: check ALT/AST before starting, within 3 months and at 12 months. Recheck lipids at about 3 months (aim >40% reduction in non-HDL cholesterol). CK only if there are muscle symptoms." },
  { id: "M2", sec: "monitoring", type: "mcq", stem: "A 55-year-old woman is started on ramipril 2.5 mg daily for hypertension.", task: "When is the most appropriate time to check her renal function and potassium?", options: ["Only if symptoms develop", "Before starting and 1–2 weeks after starting", "After 6 months", "Every day for a week", "Annually only"], ans: 1, explain: "Check U&Es before starting an ACE inhibitor or ARB, 1–2 weeks after starting and after each dose increase." },
  { id: "M3", sec: "monitoring", type: "mcq", stem: "A patient takes lithium carbonate 800 mg at night. You need to check a serum lithium level.", task: "When should the blood sample be taken?", options: ["2 hours after the dose", "6 hours after the dose", "12 hours after the dose", "24 hours after the dose", "At any time"], ans: 2, explain: "Lithium levels are taken 12 hours post-dose (usually a morning sample after a night-time dose). Typical target 0.4–1.0 mmol/L." },
  { id: "M4", sec: "monitoring", type: "mcq", stem: "A patient started once-daily IV gentamicin, dosed using the Hartford nomogram (7 mg/kg).", task: "When should a gentamicin level be taken?", options: ["Immediately before the second dose", "30 minutes after the end of the infusion", "Between 6 and 14 hours after the start of the first infusion", "48 hours after the first dose", "Only if creatinine rises"], ans: 2, explain: "The Hartford nomogram uses a single random level taken 6–14 hours after the start of the infusion, plotted to set the dosing interval (24, 36 or 48 h). Local protocols vary, so check yours." },
  { id: "M5", sec: "monitoring", type: "mcq", stem: "A patient is started on intermittent IV vancomycin for MRSA bacteraemia.", task: "When should a vancomycin level be taken?", options: ["Peak, 1 hour after the first dose", "Trough, immediately before the 3rd or 4th dose", "Random, 6 hours after the first dose", "Only at the end of the course", "Weekly"], ans: 1, explain: "Intermittent vancomycin: pre-dose (trough) level before the 3rd or 4th dose. Typical target 10–20 mg/L, 15–20 mg/L for serious infections. Some trusts now use AUC-based dosing." },
  { id: "M6", sec: "monitoring", type: "mcq", stem: "A patient on digoxin has nausea. You want to check a plasma digoxin concentration.", task: "When should the sample be taken?", options: ["Immediately after the dose", "At least 6 hours after the dose", "Exactly 1 hour after the dose", "24 hours after stopping digoxin", "Timing doesn't matter"], ans: 1, explain: "Digoxin distributes slowly, so sample at least 6 hours post-dose. Levels are mainly for suspected toxicity or adherence. Check K⁺ too: hypokalaemia potentiates toxicity." },
  { id: "M7", sec: "monitoring", type: "mcq", stem: "A 74-year-old woman starts warfarin for non-valvular atrial fibrillation.", task: "What is her target INR?", options: ["1.5", "2.0", "2.5", "3.5", "4.0"], ans: 2, explain: "Target INR 2.5 (range 2–3) for AF and for a first VTE. Target 3.5 for recurrent VTE while already anticoagulated, and for some mechanical valves." },
  { id: "M8", sec: "monitoring", type: "mcq", stem: "A patient has just started amiodarone.", task: "Which ongoing monitoring is most appropriate?", options: ["Thyroid and liver function tests every 6 months", "Serum amiodarone levels weekly", "FBC weekly for 18 weeks", "Lithium-style 12-hour levels", "Audiometry every 3 months"], ans: 0, explain: "Amiodarone: TFTs, LFTs, CXR and K⁺ at baseline, then TFTs and LFTs every 6 months. Ask about breathlessness (pulmonary toxicity) and eye symptoms." },
  { id: "M9", sec: "monitoring", type: "mcq", stem: "A woman with rheumatoid arthritis is started on methotrexate.", task: "Which blood monitoring is most appropriate?", options: ["FBC, U&E and LFTs every 1–2 weeks until stable, then every 2–3 months", "LFTs once a year", "INR monthly", "TFTs every 6 months", "Serum methotrexate level weekly"], ans: 0, explain: "Methotrexate: FBC, renal and liver function at baseline, then every 1–2 weeks until the dose is stable, then every 2–3 months (BNF)." },
  { id: "M10", sec: "monitoring", type: "mcq", stem: "A patient with treatment-resistant schizophrenia is starting clozapine.", task: "How often must the full blood count be checked in the first 18 weeks?", options: ["Daily", "Weekly", "Every 2 weeks", "Monthly", "Every 3 months"], ans: 1, explain: "Agranulocytosis risk: FBC weekly for 18 weeks, then every 2 weeks until 1 year, then monthly (via the clozapine monitoring service)." },
  { id: "M11", sec: "monitoring", type: "mcq", stem: "A patient with a large PE is started on an IV unfractionated heparin infusion.", task: "Which blood test is used to adjust the infusion rate?", options: ["INR", "Anti-Xa level only", "APTT (ratio)", "Platelet count", "D-dimer"], ans: 2, explain: "Unfractionated heparin is titrated to the APTT ratio, typically checked 6 hours after starting or after each change. Also monitor platelets for heparin-induced thrombocytopenia." },
  { id: "M12", sec: "monitoring", type: "mcq", stem: "A patient is admitted with decompensated heart failure and started on IV furosemide.", task: "Which is the most useful measure to monitor the treatment's effectiveness?", options: ["Daily weight", "Serum albumin", "Heart rate", "Capillary glucose", "Peak flow"], ans: 0, explain: "Daily weight (aim ~0.5–1 kg/day loss) and fluid balance show response to diuretics. Also monitor U&Es for K⁺ and creatinine." },

  /* ───────────────────────── PLANNING MANAGEMENT (2 marks) ───────────────────────── */
  { id: "PM1", sec: "planning", type: "mcq", stem: "A 48-year-old White man has confirmed stage 2 hypertension (ABPM 152/96 mmHg). He has no diabetes and is on no other medication.", task: "Which is the most appropriate first-line drug?", options: ["Amlodipine", "Ramipril", "Bendroflumethiazide", "Doxazosin", "Bisoprolol"], ans: 1, explain: "NICE NG136: under 55 and not of Black African/African-Caribbean family origin → ACE inhibitor (or ARB). Aged 55 or over, or of Black African/African-Caribbean origin → calcium-channel blocker." },
  { id: "PM2", sec: "planning", type: "mcq", stem: "A 52-year-old woman has newly diagnosed type 2 diabetes. HbA1c is 58 mmol/mol after 3 months of lifestyle measures. She has no cardiovascular disease or heart failure; eGFR 85.", task: "Which is the most appropriate first drug?", options: ["Gliclazide", "Metformin", "Basal insulin", "Sitagliptin", "Pioglitazone"], ans: 1, explain: "Metformin is first line. Add an SGLT2 inhibitor early if there is heart failure, established CVD or high CV risk (NICE NG28)." },
  { id: "PM3", sec: "planning", type: "mcq", stem: "A 45-year-old man has a confirmed proximal DVT. No cancer, eGFR 90, no contraindications to anticoagulation.", task: "Which is the most appropriate treatment?", options: ["Aspirin 75 mg daily", "Apixaban", "Warfarin alone, starting today", "Enoxaparin 40 mg daily", "Compression stockings only"], ans: 1, explain: "NICE NG158: offer a DOAC (apixaban or rivaroxaban) for at least 3 months. Warfarin needs LMWH bridging until INR ≥2. 40 mg enoxaparin is a prophylactic dose." },
  { id: "PM4", sec: "planning", type: "mcq", stem: "A man on warfarin presents with a large haematemesis. INR 6.2. He is tachycardic and hypotensive.", task: "Which is the most appropriate management of his anticoagulation?", options: ["Omit one dose of warfarin", "Stop warfarin; give IV vitamin K 5 mg and prothrombin complex concentrate", "Stop warfarin; give oral vitamin K 2 mg", "Continue warfarin at a reduced dose", "Give fresh frozen plasma only"], ans: 1, explain: "Major bleeding at any INR: stop warfarin, give phytomenadione (vitamin K) 5 mg slow IV plus prothrombin complex concentrate (BNF)." },
  { id: "PM5", sec: "planning", type: "mcq", stem: "A 76-year-old woman has a first episode of non-severe Clostridioides difficile infection. Her antibiotic has been stopped.", task: "Which is the most appropriate treatment?", options: ["Oral metronidazole", "IV vancomycin", "Oral vancomycin 125 mg four times daily for 10 days", "Loperamide", "Oral co-amoxiclav"], ans: 2, explain: "NICE NG199: first line is oral vancomycin 125 mg QDS for 10 days, second line fidaxomicin. IV vancomycin does not reach the colon. Avoid antimotility agents." },
  { id: "PM6", sec: "planning", type: "mcq", stem: "A 32-year-old woman took 40 paracetamol tablets over the past 12 hours (a staggered overdose). She weighs 60 kg.", task: "Which is the most appropriate management?", options: ["Wait for a 4-hour paracetamol level", "Start IV acetylcysteine immediately", "Give activated charcoal and discharge", "Observe and repeat LFTs in 24 hours", "Give oral methionine"], ans: 1, explain: "Staggered overdoses can't be plotted on the treatment nomogram. Start acetylcysteine immediately and take paracetamol level, LFTs, INR and U&Es." },
  { id: "PM7", sec: "planning", type: "mcq", stem: "A 59-year-old man is being discharged after a NSTEMI. He is on aspirin, ticagrelor, ramipril and bisoprolol.", task: "Which lipid-lowering prescription is most appropriate?", options: ["Simvastatin 20 mg", "Atorvastatin 20 mg", "Atorvastatin 80 mg", "Pravastatin 10 mg", "No statin needed"], ans: 2, explain: "Secondary prevention: high-intensity statin, atorvastatin 80 mg daily (lower if interactions or eGFR <30)." },
  { id: "PM8", sec: "planning", type: "mcq", stem: "A 72-year-old woman will need prednisolone 20 mg daily for at least 6 months for polymyalgia rheumatica.", task: "Which additional management is most appropriate to protect her bones?", options: ["Nothing until a fracture occurs", "Alendronic acid with calcium and vitamin D supplementation", "Hormone replacement therapy", "Calcitonin", "Raloxifene alone"], ans: 1, explain: "Aged 65+ (or prior fragility fracture) taking glucocorticoids for 3+ months → start bone protection (bisphosphonate) without waiting for DEXA, with calcium and vitamin D." },
  { id: "PM9", sec: "planning", type: "mcq", stem: "A 35-year-old man with epilepsy has been seizing continuously for 6 minutes on the ward. He has IV access.", task: "Which is the most appropriate first drug?", options: ["Lorazepam 4 mg IV", "Phenytoin 20 mg/kg IV", "Levetiracetam 60 mg/kg IV", "Buccal midazolam 10 mg", "Diazepam 10 mg rectally"], ans: 0, explain: "Status epilepticus with IV access: lorazepam 4 mg IV (0.1 mg/kg, max 4 mg), repeat once after 5–10 minutes. Buccal midazolam or rectal diazepam if no IV access. Second line: levetiracetam, phenytoin or valproate." },
  { id: "PM10", sec: "planning", type: "mcq", stem: "A 61-year-old woman 10 days after chemotherapy has a temperature of 38.6 °C. Neutrophils 0.3 × 10⁹/L. No penicillin allergy.", task: "Which is the most appropriate initial antibiotic?", options: ["Oral amoxicillin", "IV piperacillin with tazobactam, within 1 hour", "Oral clarithromycin", "Wait for blood cultures before treating", "IV vancomycin alone"], ans: 1, explain: "Suspected neutropenic sepsis: empirical IV piperacillin/tazobactam within 1 hour of presentation (NICE CG151), after cultures but without delay." },
  { id: "PM11", sec: "planning", type: "mcq", stem: "A 66-year-old man with type 2 diabetes, hypertension and heart failure has vomiting and diarrhoea and cannot keep fluids down. He takes ramipril, furosemide, metformin and atorvastatin.", task: "Which is the most appropriate advice?", options: ["Continue all medicines as normal", "Temporarily stop ramipril, furosemide and metformin until eating and drinking normally for 24–48 hours", "Stop atorvastatin only", "Double the furosemide dose", "Stop all medicines permanently"], ans: 1, explain: "Sick day rules: temporarily stop drugs that worsen AKI or are risky in dehydration (SADMANS: Sulfonylureas, ACE inhibitors, Diuretics, Metformin, ARBs, NSAIDs, SGLT2 inhibitors)." },

  /* ───────────────────────── PROVIDING INFORMATION (2 marks) ───────────────────────── */
  { id: "I1", sec: "info", type: "mcq", stem: "A 70-year-old woman is starting alendronic acid 70 mg weekly.", task: "Which is the most appropriate information to give?", options: ["Take with a glass of milk to protect the stomach", "Take at bedtime and lie down afterwards", "Swallow whole with a full glass of plain water on an empty stomach, at least 30 minutes before breakfast, and stay upright for 30 minutes", "Chew the tablet before swallowing", "Take with breakfast and your calcium supplement"], ans: 2, explain: "Prevents oesophagitis and maximises the very poor absorption. Report heartburn or painful swallowing. Rare risks: jaw osteonecrosis (keep up dental care) and atypical femoral fractures." },
  { id: "I2", sec: "info", type: "mcq", stem: "A man is starting warfarin for atrial fibrillation.", task: "Which is the most appropriate statement?", options: ["If you miss a dose, take a double dose the next day", "Ibuprofen is safe to use for pain", "Check with your pharmacist or doctor before starting any new medicine, including over-the-counter and herbal products", "You only need an INR check once a year", "Alcohol has no effect on warfarin"], ans: 2, explain: "Many drugs (antibiotics, NSAIDs, St John's wort) affect warfarin or bleeding risk. Other key points: carry the yellow booklet, keep vitamin K intake consistent, avoid binge drinking and cranberry juice, report bleeding." },
  { id: "I3", sec: "info", type: "mcq", stem: "A woman is starting long-term prednisolone 10 mg daily.", task: "Which is the most appropriate advice?", options: ["Take at night to aid sleep", "Do not stop suddenly, and carry a steroid emergency card", "Stop immediately if you feel well", "Avoid all vaccines for life", "Take on an empty stomach at bedtime"], ans: 1, explain: "Adrenal suppression: never stop abruptly. Carry a steroid card and follow sick day rules for steroids (seek advice; doses may need increasing in illness). Take in the morning with food." },
  { id: "I4", sec: "info", type: "mcq", stem: "A woman is starting levothyroxine. She also takes ferrous sulfate and calcium carbonate.", task: "Which is the most appropriate advice?", options: ["Take levothyroxine with the iron and calcium to save time", "Take levothyroxine on an empty stomach, 30–60 minutes before breakfast, and at least 4 hours apart from the iron and calcium", "Take levothyroxine only when symptoms occur", "Take it at night with a milky drink", "Stop it when the TSH is normal"], ans: 1, explain: "Iron, calcium and antacids reduce levothyroxine absorption. Take it consistently, usually before breakfast. It is lifelong treatment." },
  { id: "I5", sec: "info", type: "mcq", stem: "A woman on the combined oral contraceptive pill realises she missed yesterday's pill (one pill missed; less than 48 hours late). She is in week 2 of the pack.", task: "Which advice is most appropriate?", options: ["Take the missed pill now, even if it means taking two today, then continue as usual; no extra contraception needed", "Stop the pack and start a new one", "Use condoms for 7 days and take emergency contraception", "Skip the missed pill and take a 7-day break now", "Take three pills today"], ans: 0, explain: "FSRH: one missed pill → take it as soon as remembered and continue. No extra precautions or emergency contraception needed." },
  { id: "I6", sec: "info", type: "mcq", stem: "A man is starting a beclometasone inhaler (inhaled corticosteroid) for asthma.", task: "Which advice is most appropriate?", options: ["Use only when you are wheezy", "Rinse your mouth with water after each use to reduce the risk of oral thrush", "Expect it to relieve symptoms within minutes", "Stop if you feel better after one week", "Use it in place of your salbutamol during an attack"], ans: 1, explain: "Inhaled corticosteroids are preventers taken regularly. Rinsing (or using a spacer) cuts oral candidiasis and dysphonia. The reliever stays salbutamol (or a MART regimen)." },
  { id: "I7", sec: "info", type: "mcq", stem: "A woman with rheumatoid arthritis is starting methotrexate 10 mg once weekly with folic acid.", task: "Which is the most important safety advice?", options: ["Take it every day at the same time", "Take it once a week on the same day, and report sore throat, fever, bruising, mouth ulcers or breathlessness immediately", "You can drink alcohol freely", "Trimethoprim is a safe antibiotic for you", "Take folic acid on the same day as the methotrexate"], ans: 1, explain: "Fatal overdoses have followed daily dosing. Report signs of marrow suppression, infection and pneumonitis. Avoid trimethoprim and co-trimoxazole, and limit alcohol. Take folic acid on a different day." },
  { id: "I8", sec: "info", type: "mcq", stem: "A woman using the combined pill is starting rifampicin for tuberculosis.", task: "Which is the most appropriate information?", options: ["Rifampicin will turn your urine, tears and soft contact lenses orange-red, and stops the combined pill from working reliably", "Rifampicin increases the effectiveness of the pill", "Rifampicin should be stopped if urine changes colour", "Rifampicin has no interactions", "Take it only when you have a cough"], ans: 0, explain: "Rifampicin is a potent enzyme inducer, so the COC fails: use an IUD or injectable. Orange discolouration is harmless. LFTs are monitored." },
  { id: "I9", sec: "info", type: "mcq", stem: "A man is starting lithium for bipolar disorder.", task: "Which is the most appropriate advice?", options: ["Drink plenty of fluids, avoid over-the-counter ibuprofen, and seek help with vomiting, diarrhoea, coarse tremor or confusion", "Reduce your fluid intake", "Ibuprofen is safe with lithium", "No blood tests are needed once settled", "Switch brands whenever convenient"], ans: 0, explain: "Dehydration, NSAIDs, ACE inhibitors and diuretics raise lithium levels. Keep to the same brand. Regular levels plus renal and thyroid tests. Carry the lithium alert card." },
  { id: "I10", sec: "info", type: "mcq", stem: "A man with stable angina is prescribed GTN spray.", task: "Which is the most appropriate advice?", options: ["Use it while standing up", "Sit down before using it; repeat after 5 minutes if needed; call 999 if pain persists 5 minutes after the second dose", "Use it once daily as a preventer", "Swallow the spray", "Use up to 10 sprays at a time"], ans: 1, explain: "GTN causes hypotension, dizziness and headache, so sit down first. NICE: if pain is not relieved 5 minutes after the second dose, call an ambulance." },

  /* ───────────────────────── DATA INTERPRETATION (2 marks) ───────────────────────── */
  { id: "D1", sec: "data", type: "mcq", stem: "A woman on warfarin for AF (target INR 2.5) has a routine INR of 5.8. She has no bleeding.", task: "Which is the most appropriate action?", options: ["Continue the same dose", "Withhold 1–2 doses of warfarin and reduce the maintenance dose", "Give IV vitamin K 5 mg", "Give prothrombin complex concentrate", "Stop warfarin permanently"], ans: 1, explain: "BNF: INR 5–8 without bleeding → withhold 1 or 2 doses and reduce the maintenance dose. Find the cause (interactions, alcohol, illness)." },
  { id: "D2", sec: "data", type: "mcq", stem: "A man on warfarin (target INR 2.5) has an INR of 8.6. He has no bleeding.", task: "Which is the most appropriate action?", options: ["Withhold one dose only", "Stop warfarin and give oral vitamin K 1–5 mg; restart when INR <5", "Give IV vitamin K 5 mg and prothrombin complex", "Continue at a reduced dose", "Give fresh frozen plasma"], ans: 1, explain: "BNF: INR >8, no bleeding → stop warfarin, give oral phytomenadione 1–5 mg, repeat if INR still high after 24 h, and restart when INR <5." },
  { id: "D3", sec: "data", type: "mcq", stem: "A patient on once-daily gentamicin (Hartford nomogram, 7 mg/kg) has a level taken 10 hours after the start of the infusion. Plotted, it falls in the Q36h area of the nomogram.", task: "Which is the most appropriate action?", options: ["Give the next dose 24 hours after the last", "Give the next dose 36 hours after the last", "Give the next dose 48 hours after the last", "Double the next dose", "Stop gentamicin permanently"], ans: 1, explain: "The nomogram area sets the dosing interval: Q24h, Q36h or Q48h. Above the Q48h line → stop, repeat levels and seek advice. Reassess renal function." },
  { id: "D4", sec: "data", type: "mcq", stem: "Two weeks after starting ramipril, a patient's creatinine has risen from 92 to 108 µmol/L (17%). Potassium is 5.2 mmol/L.", task: "Which is the most appropriate action?", options: ["Stop ramipril", "Continue ramipril at the current dose and recheck as planned", "Halve the dose", "Switch to losartan", "Admit for IV fluids"], ans: 1, explain: "A rise in creatinine of up to ~30% (or fall in eGFR <25%) and K⁺ <6.0 is acceptable after starting an ACE inhibitor (NICE). Larger rises → stop or reduce and investigate (e.g. renal artery stenosis)." },
  { id: "D5", sec: "data", type: "mcq", stem: "Two weeks after starting ramipril 5 mg, a patient's potassium is 6.3 mmol/L. ECG is normal. Creatinine is stable.", task: "Which is the most appropriate action?", options: ["Continue and recheck in 3 months", "Stop ramipril and recheck potassium", "Increase ramipril to 10 mg", "Add spironolactone", "Add a potassium supplement"], ans: 1, explain: "K⁺ >6.0 mmol/L on an ACE inhibitor → stop it, look for other contributors (K-sparing diuretics, NSAIDs, trimethoprim) and recheck." },
  { id: "D6", sec: "data", type: "mcq", stem: "A patient on IV vancomycin 1 g 12-hourly for MRSA bacteraemia has a pre-dose (trough) level of 26 mg/L (target 15–20 mg/L). Renal function is stable.", task: "Which is the most appropriate action?", options: ["Increase the dose to 1.5 g 12-hourly", "Give the next dose as normal", "Withhold the next dose, recheck the level, and restart at a reduced dose or longer interval", "Stop vancomycin and give nothing", "Switch to oral vancomycin"], ans: 2, explain: "A high trough raises nephrotoxicity risk: withhold, re-level and adjust (reduce dose or extend interval) per local protocol. Don't leave a bacteraemia untreated." },
  { id: "D7", sec: "data", type: "mcq", stem: "A patient on digoxin 250 micrograms daily has a heart rate of 42/min and nausea. Digoxin level (8 h post-dose) is 3.1 micrograms/L. K⁺ 3.2 mmol/L.", task: "Which is the most appropriate action?", options: ["Continue digoxin and recheck next week", "Withhold digoxin and correct the potassium", "Increase digoxin to 375 micrograms", "Give IV calcium gluconate", "Add amiodarone"], ans: 1, explain: "Toxic level with symptoms: withhold digoxin, correct hypokalaemia, ECG monitoring. Consider digoxin-specific antibody fragments for life-threatening toxicity." },
  { id: "D8", sec: "data", type: "mcq", stem: "A 45-year-old woman on levothyroxine 50 micrograms daily (taken correctly) has TSH 11.2 mU/L (0.4–4.0) and free T4 at the lower end of normal.", task: "Which is the most appropriate action?", options: ["Reduce levothyroxine to 25 micrograms", "Increase levothyroxine to 75 micrograms", "Stop levothyroxine", "Add liothyronine", "No change; recheck in 12 months"], ans: 1, explain: "A raised TSH means under-replacement. Increase by 25–50 micrograms and recheck TFTs in about 6–8 weeks (NICE: every 3 months until stable)." },
  { id: "D9", sec: "data", type: "mcq", stem: "A man with type 1 diabetes on a basal-bolus regimen has capillary glucose readings that are on target before breakfast, lunch and bed, but consistently 14–16 mmol/L before his evening meal.", task: "Which insulin dose should be increased?", options: ["Long-acting (basal) insulin", "Breakfast rapid-acting insulin", "Lunchtime rapid-acting insulin", "Evening meal rapid-acting insulin", "None; reduce carbohydrate at breakfast"], ans: 2, explain: "Look at the insulin acting just BEFORE the high reading. Pre-evening-meal glucose reflects the lunchtime bolus. High fasting glucose reflects basal insulin." },
  { id: "D10", sec: "data", type: "mcq", stem: "A woman on lithium has new diarrhoea and a fine tremor. Her 12-hour lithium level is 1.6 mmol/L (target 0.4–1.0). eGFR has fallen from 80 to 55.", task: "Which is the most appropriate action?", options: ["Continue the same dose", "Withhold lithium, assess hydration and renal function, and repeat the level", "Increase the lithium dose", "Add a thiazide diuretic", "Give activated charcoal"], ans: 1, explain: "Toxic level with symptoms and falling eGFR: withhold, rehydrate, check U&Es, and recheck the level before deciding on a lower dose. Severe toxicity may need haemodialysis (charcoal doesn't bind lithium)." }
];
